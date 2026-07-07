import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../home/Button";
import character from "../../assets/image/comingSoonCharacter.png";

function ComingSoonPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <CharacterImg src={character} alt="준비중입니다" />
      <Spacer />
      <ButtonWrapper>
        <Button $variant="primary" onClick={() => navigate("/")}>
          홈으로 돌아가기
        </Button>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100%;
  box-sizing: border-box;
  padding: 0 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CharacterImg = styled.img`
  width: 220px;
  margin-top: 219px;
`;

const Spacer = styled.div`
  flex: 1;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 84px;
`;

export default ComingSoonPage;