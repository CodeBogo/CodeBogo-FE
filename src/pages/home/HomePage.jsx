import styled from "styled-components";
import Button from "../../components/common/button/Button";
import character from "../../assets/image/codeBogoCharacter.png";

function HomePage() {
  const streak = 7;
  const point = 130;
  const weekChecks = [true, true, true, true, true, true, false]; // 최근 7일 (마지막은 오늘, 아직 미완료 예시)
  const weekLabels = ["월", "화", "수", "목", "금", "토", "일"];

  return (
    <Container>
      <Header>
        <Logo>CodeBogo</Logo>
        <Avatar>U</Avatar>
      </Header>

      <StatRow>
        <StatCard>
          <StatLabel $color="#FF9800">STREAK</StatLabel>
          <StatSubLabel>연속 학습</StatSubLabel>
          <StatValue $color="#FF9800">{streak}일</StatValue>
        </StatCard>
        <StatCard>
          <StatLabel $color="#6C4BA6">POINT</StatLabel>
          <StatSubLabel>현재 포인트</StatSubLabel>
          <StatValue $color="#6C4BA6">{point}</StatValue>
        </StatCard>
      </StatRow>

      <WeekCard>
        {weekChecks.map((checked, i) => (
          <DayCheck key={i}>
            <CheckCircle $checked={checked}>{checked ? "✓" : ""}</CheckCircle>
            <DayLabel>{weekLabels[i]}</DayLabel>
          </DayCheck>
        ))}
      </WeekCard>

      <TodayCard>
        <TodayTitle>오늘의 코드</TodayTitle>
        <TodaySubtitle>C 언어 - 문법 (5문제)</TodaySubtitle>
        <TodayPoint>최대 50 포인트</TodayPoint>
        <CharacterImg src={character} alt="캐릭터" />
        <Button $variant="secondary">문제 풀기</Button>
      </TodayCard>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  padding-bottom: 100px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Logo = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #6c4ba6;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #ede7f6;
  color: #6c4ba6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const StatRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

const StatCard = styled.div`
  flex: 1;
  background: #ffffff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 14px;
`;

const StatLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${({ $color }) => $color};
`;

const StatSubLabel = styled.div`
  font-size: 11px;
  color: #999;
  margin-bottom: 6px;
`;

const StatValue = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({ $color }) => $color};
`;

const WeekCard = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 14px;
  margin-bottom: 16px;
`;

const DayCheck = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const CheckCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #fff;
  background-color: ${({ $checked }) => ($checked ? "#4CAF50" : "#E0E0E0")};
`;

const DayLabel = styled.div`
  font-size: 11px;
  color: #999;
`;

const TodayCard = styled.div`
  background-color: #6c4ba6;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const TodayTitle = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 13px;
  opacity: 0.8;
`;

const TodaySubtitle = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
`;

const TodayPoint = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 12px;
  opacity: 0.8;
  margin-bottom: 8px;
`;

const CharacterImg = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 8px;
`;

export default HomePage;