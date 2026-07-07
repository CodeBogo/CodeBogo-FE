import styled from "styled-components";

function StatRow({ label, subLabel, value }) {
  return (
    <Row>
      <TextGroup>
        <Label>{label}</Label>
        <SubLabel>{subLabel}</SubLabel>
      </TextGroup>
      <Value>{value}</Value>
    </Row>
  );
}

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  color: black;
  font-size: 18px;
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  word-wrap: break-word;
`;

const SubLabel = styled.div`
  color: black;
  font-size: 12px;
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  word-wrap: break-word;
`;

const Value = styled.div`
  color: #ff7b2e;
  font-size: 18px;
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  word-wrap: break-word;
`;

export default StatRow;