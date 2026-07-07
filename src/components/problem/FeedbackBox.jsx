import styled from "styled-components";

const RESULT_STYLE = {
  correct: { color: "#6ab566", background: "rgba(106, 181, 102, 0.2)" },
  wrong: { color: "#ef675e", background: "rgba(239, 103, 94, 0.2)" },
};

const Box = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  box-sizing: border-box;
  border-radius: 20px;
  background: ${({ $result }) => RESULT_STYLE[$result].background};
  border: 1px solid ${({ $result }) => RESULT_STYLE[$result].color};
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Title = styled.span`
  color: ${({ $result }) => RESULT_STYLE[$result].color};
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
`;

const Point = styled.span`
  color: ${({ $result }) => RESULT_STYLE[$result].color};
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
`;

const Message = styled.p`
  margin: 0;
  margin-bottom: ${({ $hasHint }) => ($hasHint ? "12px" : "0")};
  text-align: left;
  color: ${({ $result }) => RESULT_STYLE[$result].color};
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
`;

const HintBox = styled.div`
  height: 33px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
  border-radius: 12px;
  background: #ffffff;
`;

const HintText = styled.span`
  color: #000000;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  white-space: pre;
`;

function FeedbackBox({ result, point, message, hintCode }) {
  const hasHint = result === "wrong";
  return (
    <Box $result={result}>
      <TitleRow>
        <Title $result={result}>{result === "correct" ? "정답!" : "오답!"}</Title>
        {result === "correct" && <Point $result={result}>{`+${point}P`}</Point>}
      </TitleRow>
      <Message $result={result} $hasHint={hasHint}>
        {message}
      </Message>
      {hasHint && (
        <HintBox>
          <HintText>{hintCode}</HintText>
        </HintBox>
      )}
    </Box>
  );
}

export default FeedbackBox;
