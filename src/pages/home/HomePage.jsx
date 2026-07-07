import styled from "styled-components";
import Header from "../../components/layout/Header";
import BottomNav from "../../components/layout/BottomNav";
import StatCard from "../../components/home/StatCard";
import WeekCheckList from "../../components/home/WeekCheckList";
import TodayCodeCard from "../../components/home/TodayCodeCard";

function HomePage() {
  const streak = 7;
  const point = 130;
  const weekChecks = [true, true, true, true, true, true, false];
  const weekLabels = ["월", "화", "수", "목", "금", "토", "일"];

  return (
    <Wrapper>
      <Header />
      <Content>
        <StatRow>
        <StatCard
            label="STREAK"
            subLabel="연속 학습"
            value={streak}
            unit="일"
            color="#FF9800"
            shadowColor="rgba(255, 152, 0, 0.2)"
        />
        <StatCard
            label="POINT"
            subLabel="현재 포인트"
            value={point}
            color="#8666B5"
            shadowColor="rgba(134, 102, 181, 0.2)"
        />
        </StatRow>

        <WeekCheckList weekChecks={weekChecks} weekLabels={weekLabels} />

        <TodayCodeCard />
      </Content>
      <BottomNav />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Content = styled.div`
  padding: 30px;
  padding-bottom: 120px;
`;

const StatRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

export default HomePage;