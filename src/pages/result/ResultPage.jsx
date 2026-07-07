import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/result/Button";
import StatRow from "../../components/result/StatRow";
import WrongNoteCard from "../../components/result/WrongNoteCard";
import resultHeader from "../../assets/image/resultHeader.svg";

function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const DEFAULT_RESULT = {
    streak: 8,
    score: 80,
    point: 50,
    wrongTopics: ["반복문 비교 조건"],
  };

  const result = location.state || DEFAULT_RESULT;
  const { streak, score, point, wrongTopics } = result;

  return (
    <Container>
      <HeaderImg src={resultHeader} alt="ResultBogo 학습 결과" />

      <StatCard>
        <StatRow label="STREAK" subLabel="연속 학습" value={`${streak}일`} />
        <StatRow label="SCORE" subLabel="정답률" value={`${score}%`} />
        <StatRow label="POINT" subLabel="점수" value={`+${point}P`} />
      </StatCard>

      <WrongNoteCard topics={wrongTopics} />

      <RankingButtonWrapper>
        <Button $variant="secondary" onClick={() => navigate("/ranking")}>
          랭킹 보기
        </Button>
      </RankingButtonWrapper>
      <Button $variant="primary" onClick={() => navigate("/")}>
        홈으로 돌아가기
      </Button>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100%;
  box-sizing: border-box;
  padding: 28px 28px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const HeaderImg = styled.img`
  width: 100%;
  margin-bottom: 24px;
`;

const StatCard = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 18px;
  outline: 2px solid #cccccc;
  outline-offset: -2px;
  box-sizing: border-box;
  padding: 4px 16px;
  margin-bottom: 24px;
`;

const RankingButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

export default ResultPage;