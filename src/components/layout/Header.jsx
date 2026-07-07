import styled from "styled-components";
import logo from "../../assets/image/codeBogoLogo.png";

function Header() {
  return (
    <Wrapper>
      <LogoBox>
        <LogoImg src={logo} alt="CodeBogo" />
      </LogoBox>
      <Avatar>U</Avatar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  padding: 25px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-bottom: 2px solid rgba(134, 102, 181, 0.2);
  box-sizing: border-box;
`;

const LogoBox = styled.div`
  width: 133px;
  height: 36px;
  display: flex;
  align-items: flex-end;
`;

const LogoImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(134, 102, 181, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8666b5;
  font-size: 18px;
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  word-wrap: break-word;
`;

export default Header;