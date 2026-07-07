import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/layout/Header";
import BottomNav from "../../components/layout/BottomNav";
import StatCard from "../../components/home/StatCard";
import WeekCheckList from "../../components/home/WeekCheckList";
import TodayCodeCard from "../../components/home/TodayCodeCard";
import { getUserStatus } from "../../api/user";

const WEEK_LABELS = ["월", "화", "수", "목", "금", "토", "일"];

// API 실패 시 보여줄 기본값 (기존 목업 그대로)
const DEFAULT_STATUS = {
  streak: 7,
  point: 130,
  weekChecks: [true, true, true, true, true, true, false],
};

// 이번 주(월~일) 중 lastSolvedDate에서 끝나는 streak 구간에 포함되는 날을 체크로 표시
const getWeekChecks = (lastSolvedDate, streak) => {
  if (!lastSolvedDate || !streak) return Array(7).fill(false);
  const last = new Date(`${lastSolvedDate}T00:00:00`);
  const start = new Date(last);
  start.setDate(last.getDate() - (streak - 1));
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((today.getDay() + 6) % 7));
  return Array.from({ length: 7 }, (_, i) => {
    const day = new Date(monday);
    day.setDate(monday.getDate() + i);
    return day >= start && day <= last;
  });
};

function HomePage() {
  const [status, setStatus] = useState(DEFAULT_STATUS);
  const { streak, point, weekChecks } = status;

  useEffect(() => {
    let ignore = false;
    getUserStatus()
      .then((data) => {
        if (ignore) return;
        setStatus({
          streak: data.streak,
          point: data.point,
          weekChecks: getWeekChecks(data.lastSolvedDate, data.streak),
        });
      })
      .catch((error) => {
        console.error("유저 정보 조회 실패:", error);
      });
    return () => {
      ignore = true;
    };
  }, []);

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

        <WeekCheckList weekChecks={weekChecks} weekLabels={WEEK_LABELS} />

        <TodayCodeCard />
      </Content>
      <BottomNav />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 35px;
`;

const Content = styled.div`
  padding: 30px;
  padding-bottom: 85px;
`;

const StatRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

export default HomePage;