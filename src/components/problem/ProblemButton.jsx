import styled from "styled-components";

const Button = styled.button`
  width: 350px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 14px;
  background: ${({ $active }) => ($active ? "#8666b5" : "#0000001A")};
  cursor: pointer;
`;

const Label = styled.span`
  color: #ffffff;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
`;

function ProblemButton({ label, active = false, onClick, disabled = false }) {
  return (
    <Button type="button" $active={active} onClick={onClick} disabled={disabled}>
      <Label>{label}</Label>
    </Button>
  );
}

export default ProblemButton;
