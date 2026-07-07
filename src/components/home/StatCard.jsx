import styled from "styled-components";

function StatCard({ label, subLabel, value, unit, color, shadowColor }) {
  return (
    <Card $shadowColor={shadowColor}>
      <TextGroup>
        <Label $color={color}>{label}</Label>
        <SubLabel $color={color}>{subLabel}</SubLabel>
      </TextGroup>
      <Value $color={color}>
        {value}
        {unit && <Unit>{unit}</Unit>}
      </Value>
    </Card>
  );
}

const Card = styled.div`
  width: 159px;
  height: 80px;
  background: #ffffff;
  border-radius: 18px;
  outline: 2px solid ${({ $shadowColor }) => $shadowColor};
  outline-offset: -2px;
  box-shadow: 0px 2px 0px ${({ $shadowColor }) => $shadowColor};
  box-sizing: border-box;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  font-size: 16px;
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  color: ${({ $color }) => $color};
  word-wrap: break-word;
`;

const SubLabel = styled.div`
  font-size: 12px;
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  color: ${({ $color }) => $color};
  word-wrap: break-word;
`;

const Value = styled.div`
  font-size: 30px;
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  color: ${({ $color }) => $color};
  display: flex;
  align-items: baseline;
`;

const Unit = styled.span`
  font-size: 14px;
  margin-left: 2px;
`;

export default StatCard;