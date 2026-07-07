import styled from "styled-components";
import CloseIcon from "../../assets/icon/close.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Progress = styled.div`
  color: #8666b5;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 700;
`;
const Track = styled.div`
  width: 100%;
  height: 8px;
  position: relative;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 14px;
`;

const Fill = styled.div`
  width: ${({ $percent }) => $percent}%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: #8666b5;
  border-radius: 14px;
  transition: width 0.2s ease;
`;

function QuizHeader({ current, total, onClose }) {
  const percent = (current / total) * 100;
  return (
    <Container>
      <TopBar>
        <img src={CloseIcon} alt="닫기" onClick={onClose} />
        <Progress>
          {current} / {total}
        </Progress>
      </TopBar>
      <Track>
        <Fill $percent={percent} />
      </Track>
    </Container>
  );
}

export default QuizHeader;
