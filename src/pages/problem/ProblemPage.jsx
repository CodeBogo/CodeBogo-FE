import { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import QuizHeader from "../../components/problem/QuizHeader";
import CodeBlock from "../../components/problem/CodeBlock";
import OptionButton from "../../components/problem/OptionButton";
import FeedbackBox from "../../components/problem/FeedbackBox";
import ProblemButton from "../../components/problem/ProblemButton";
import { getCurrentProblem, moveToNextQuestion, submitAnswer } from "../../api/quiz";

const CODE_LINES = [
  "#include <stdio.h>",
  "",
  "int main() {",
  "    int a = 5;",
  "    if (a = 10) {",
  '        printf("YES");',
  "    }",
  "    return 0;",
  "}",
];

// sessionId 없이 진입했을 때 보여주는 기존 목업 문제 (서버 응답과 같은 형태)
const MOCK_PROBLEM = {
  problemId: null,
  current: 5,
  total: 5,
  language: "C",
  title: "올바른 비교 조건은?",
  code: CODE_LINES.join("\n"),
  options: {
    A: "if (a = 10)",
    B: "if (a == 10)",
    C: "if (a != 10)",
    D: "if (a >= 10)",
  },
  point: 10,
  highlightLine: 5,
};
const MOCK_CORRECT_KEY = "B";
const MOCK_CORRECT_MESSAGE = "정확한 비교 연산자를 사용했습니다!";
const WRONG_MESSAGE = "변수 선언 뒤에는 세미콜론(;)이 반드시 필요합니다.";
const HINT_CODE = "int num = 10;";

const FILE_EXTENSION = { c: "c", cpp: "cpp", java: "java", python: "py", javascript: "js" };

const getFileName = (language) => {
  const key = (language ?? "c").toLowerCase();
  return `main.${FILE_EXTENSION[key] ?? key}`;
};

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  padding: 52px 20px 28px;
  display: flex;
  flex-direction: column;
`;

const CodeBlockSection = styled.div`
  margin-top: 31px;
`;

const Question = styled.p`
  margin: 32px 0 0;
  color: rgba(0, 0, 0, 0.8);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
`;

const OptionList = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BottomGroup = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
`;

const FeedbackWrapper = styled.div`
  margin-bottom: 12px;
`;

function ProblemPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const sessionIdParam =
    location.state?.sessionId ?? new URLSearchParams(location.search).get("sessionId");
  const sessionId = sessionIdParam != null ? Number(sessionIdParam) : null;

  const [problem, setProblem] = useState(sessionId == null ? MOCK_PROBLEM : null);
  const [selectedKey, setSelectedKey] = useState(null);
  const [submitResult, setSubmitResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sessionId == null) return undefined;
    let ignore = false;
    getCurrentProblem(sessionId)
      .then((data) => {
        if (!ignore) setProblem(data);
      })
      .catch((error) => {
        console.error("현재 문제 조회 실패:", error);
        if (!ignore) setProblem(MOCK_PROBLEM);
      });
    return () => {
      ignore = true;
    };
  }, [sessionId]);

  if (!problem) {
    return <Container />;
  }

  const isServerMode = sessionId != null && problem.problemId != null;
  const submitted = submitResult != null;
  const isCorrect = submitted && submitResult.correct;

  const handleSelect = (key) => {
    if (submitted) return;
    setSelectedKey(key);
  };

  const getOptionState = (key) => {
    if (!submitted) {
      return key === selectedKey ? "selected" : "default";
    }
    if (key !== selectedKey) return "default";
    return isCorrect ? "correct" : "wrong";
  };

  const resetForNextProblem = (nextProblem) => {
    setProblem(nextProblem);
    setSelectedKey(null);
    setSubmitResult(null);
  };

  const handleSubmit = async () => {
    if (selectedKey == null) return;
    if (!isServerMode) {
      const correct = selectedKey === MOCK_CORRECT_KEY;
      setSubmitResult({
        correct,
        feedback: correct ? MOCK_CORRECT_MESSAGE : WRONG_MESSAGE,
        correctAnswerText: HINT_CODE,
        earnedPoint: problem.point,
        hasNext: problem.current < problem.total,
      });
      return;
    }
    try {
      setLoading(true);
      const result = await submitAnswer(sessionId, problem.problemId, selectedKey);
      setSubmitResult(result);
    } catch (error) {
      console.error("답안 제출 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNext = async () => {
    if (!isServerMode) {
      if (!submitResult.hasNext) {
        navigate("/result");
        return;
      }
      resetForNextProblem({ ...problem, current: problem.current + 1 });
      return;
    }
    try {
      setLoading(true);
      const next = await moveToNextQuestion(sessionId);
      if (next.finished || !next.hasNext) {
        navigate("/result", { state: { sessionId } });
        return;
      }
      const nextProblem = await getCurrentProblem(sessionId);
      resetForNextProblem(nextProblem);
    } catch (error) {
      console.error("다음 문제 이동 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = () => {
    if (loading) return;
    if (!submitted) {
      handleSubmit();
      return;
    }
    handleNext();
  };

  const buttonLabel = !submitted ? "정답 보기" : submitResult.hasNext ? "다음 문제" : "결과 보기";

  return (
    <Container>
      <QuizHeader
        current={problem.current}
        total={problem.total}
        onClose={() => navigate("/")}
      />
      <CodeBlockSection>
        <CodeBlock
          fileName={getFileName(problem.language)}
          lines={(problem.code ?? "").split("\n")}
          highlightLine={problem.highlightLine}
        />
      </CodeBlockSection>
      <Question>{problem.title}</Question>
      <OptionList>
        {Object.entries(problem.options ?? {}).map(([key, label]) => (
          <OptionButton
            key={key}
            label={label}
            state={getOptionState(key)}
            onClick={() => handleSelect(key)}
          />
        ))}
      </OptionList>
      <BottomGroup>
        {submitted && (
          <FeedbackWrapper>
            <FeedbackBox
              result={isCorrect ? "correct" : "wrong"}
              point={submitResult.earnedPoint ?? problem.point}
              message={submitResult.feedback ?? submitResult.message}
              hintCode={submitResult.correctAnswerText}
            />
          </FeedbackWrapper>
        )}
        <ProblemButton
          label={buttonLabel}
          active={selectedKey !== null}
          disabled={(selectedKey === null && !submitted) || loading}
          onClick={handleButtonClick}
        />
      </BottomGroup>
    </Container>
  );
}

export default ProblemPage;
