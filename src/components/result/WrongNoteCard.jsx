import styled from "styled-components";

function WrongNoteCard({ topics }) {
  return (
    <Card>
      <Title>오답 노트</Title>
      <Content>{topics.join(", ")}</Content>
    </Card>
  );
}

const Card = styled.div`
  width: 100%;
  background: linear-gradient(
      0deg,
      rgba(239, 103, 94, 0.2) 0%,
      rgba(239, 103, 94, 0.2) 100%
    ),
    white;
  border-radius: 20px;
  outline: 2px solid rgba(239, 103, 94, 0.8);
  outline-offset: -2px;
  padding: 16px 20px;
  box-sizing: border-box;
  margin-bottom: 46px;
`;

const Title = styled.div`
  color: #ef675e;
  font-size: 14px;
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  word-wrap: break-word;
  margin-bottom: 8px;
`;

const Content = styled.div`
  color: black;
  font-size: 12px;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  word-wrap: break-word;
`;

export default WrongNoteCard;