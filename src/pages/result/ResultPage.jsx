import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../components/result/Button";
import StatRow from "../../components/result/StatRow";
import WrongNoteCard from "../../components/result/WrongNoteCard";
import character from "../../assets/image/codeBogoCharacter.png";
import resultLogo from "../../assets/image/ResultBogo.png";

function ResultPage() {
  const navigate = useNavigate();

  const streak = 8;
  const score = 80;
  const point = 50;
  const wrongTopics = ["반복문 비교 조건"]; // 임시 데이터, 나중에 API 연동 시 교체

  return (
    <Container>
      <TitleImg src={resultLogo} alt="ResultBogo" />
      <Subtitle>학습 결과</Subtitle>

      <CharacterImg src={character} alt="캐릭터" />

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

const TitleImg = styled.img`
  height: 32px;
  margin-top: 72px;
`;

const Subtitle = styled.div`
  color: #8666b5;
  font-size: 18px;
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  word-wrap: break-word;
  margin-bottom: 20px;
`;

const CharacterImg = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 40px;
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