import styled from "styled-components";

function WeekCheckList({ weekChecks, weekLabels }) {
  return (
    <Card>
      <Title>최근 7일</Title>
      <Row>
        {weekChecks.map((checked, i) => (
          <DayCheck key={i}>
            <CheckCircle $checked={checked}>
              {checked && (
                <svg width="14" height="12" viewBox="0 0 12 10" fill="none">
                  <path
                    d="M1 5L4.5 8.5L11 1"
                    stroke="#6AB566"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </CheckCircle>
            <DayLabel>{weekLabels[i]}</DayLabel>
          </DayCheck>
        ))}
      </Row>
    </Card>
  );
}

const Card = styled.div`
  background: #ffffff;
  border-radius: 18px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 16px 18px;
  margin-bottom: 16px;
`;

const Title = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: 13px;
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  word-wrap: break-word;
  margin-bottom: 8px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DayCheck = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $checked }) =>
    $checked ? "rgba(106, 181, 102, 0.4)" : "#ffffff"};
  border: ${({ $checked }) =>
    $checked ? "none" : "1px solid rgba(0, 0, 0, 0.2)"};
`;

const DayLabel = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  word-wrap: break-word;
`;

export default WeekCheckList;