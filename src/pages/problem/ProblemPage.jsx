import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import QuizHeader from "../../components/problem/QuizHeader";
import CodeBlock from "../../components/problem/CodeBlock";
import OptionButton from "../../components/problem/OptionButton";
import FeedbackBox from "../../components/problem/FeedbackBox";
import ProblemButton from "../../components/problem/ProblemButton";

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

const OPTIONS = ["if (a = 10)", "if (a == 10)", "if (a != 10)", "if (a >= 10)"];
const CORRECT_INDEX = 1;
const WRONG_MESSAGE = "변수 선언 뒤에는 세미콜론(;)이 반드시 필요합니다.";
const HINT_CODE = "int num = 10;";

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

const TOTAL_QUESTIONS = 5;

function ProblemPage() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(TOTAL_QUESTIONS);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = selectedIndex === CORRECT_INDEX;
  const isLastQuestion = current === TOTAL_QUESTIONS;

  const handleSelect = (index) => {
    if (submitted) return;
    setSelectedIndex(index);
  };

  const getOptionState = (index) => {
    if (!submitted) {
      return index === selectedIndex ? "selected" : "default";
    }
    if (index !== selectedIndex) return "default";
    return isCorrect ? "correct" : "wrong";
  };

  const handleButtonClick = () => {
    if (!submitted) {
      setSubmitted(true);
      return;
    }
    if (isLastQuestion) {
      navigate("/result");
      return;
    }
    setCurrent((prev) => prev + 1);
    setSelectedIndex(null);
    setSubmitted(false);
  };

  const buttonLabel = !submitted ? "정답 보기" : isLastQuestion ? "결과 보기" : "다음 문제";

  return (
    <Container>
      <QuizHeader current={current} total={TOTAL_QUESTIONS} onClose={() => navigate("/")} />
      <CodeBlockSection>
        <CodeBlock fileName="main.c" lines={CODE_LINES} highlightLine={5} />
      </CodeBlockSection>
      <Question>올바른 비교 조건은?</Question>
      <OptionList>
        {OPTIONS.map((option, index) => (
          <OptionButton
            key={option}
            label={option}
            state={getOptionState(index)}
            onClick={() => handleSelect(index)}
          />
        ))}
      </OptionList>
      <BottomGroup>
        {submitted && (
          <FeedbackWrapper>
            <FeedbackBox
              result={isCorrect ? "correct" : "wrong"}
              point={10}
              message={isCorrect ? "정확한 비교 연산자를 사용했습니다!" : WRONG_MESSAGE}
              hintCode={HINT_CODE}
            />
          </FeedbackWrapper>
        )}
        <ProblemButton
          label={buttonLabel}
          active={selectedIndex !== null}
          disabled={selectedIndex === null && !submitted}
          onClick={handleButtonClick}
        />
      </BottomGroup>
    </Container>
  );
}

export default ProblemPage;
