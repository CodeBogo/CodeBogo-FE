import styled from "styled-components";
import Button from "./Button";
import character from "../../assets/image/codeBogoCharacter.png";

function TodayCodeCard() {
  return (
    <Card>
      <Title>오늘의 코드</Title>
      <Subtitle>C 언어 - 문법 (5문제)</Subtitle>
      <Point>최대 50 포인트</Point>
      <CharacterImg src={character} alt="캐릭터" />
      <StyledButton $variant="secondary">문제 풀기</StyledButton>
    </Card>
  );
}

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 312px;
  background-color: #8666b5;
  border-radius: 20px;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const Title = styled.div`
  position: absolute;
  left: 28px;
  top: 28px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  word-wrap: break-word;
`;

const Subtitle = styled.div`
  position: absolute;
  left: 28px;
  top: 50px;
  width: 174px;
  color: #ffffff;
  font-size: 20px;
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  word-wrap: break-word;
`;

const Point = styled.div`
  position: absolute;
  left: 28px;
  top: 74px;
  width: 73px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  word-wrap: break-word;
`;

const CharacterImg = styled.img`
  position: absolute;
  left: 168px;
  top: 92px;
  width: 130px;
  height: 130px;
`;

const StyledButton = styled(Button)`
  position: absolute;
  left: 28px;
  top: 244px;
  width: 280px;
  height: 40px;
  border-radius: 14px;
  padding: 0;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff !important;
  color: #8666b5 !important;
`;

export default TodayCodeCard;