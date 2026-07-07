import styled from "styled-components";

const STATE_STYLE = {
  default: {
    background: "#ffffff",
    border: "1px solid #0000001A",
  },
  selected: {
    background: "#ffffff",
    border: "2px solid #8666b5",
  },
  correct: {
    background: "rgba(106, 181, 102, 0.2)",
    border: "1px solid #6ab566",
  },
  wrong: {
    background: "rgba(239, 103, 94, 0.2)",
    border: "1px solid #ef675e",
  },
};

const Button = styled.button`
  width: 350px;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  box-sizing: border-box;
  border-radius: 14px;
  background: ${({ $state }) => STATE_STYLE[$state].background};
  border: ${({ $state }) => STATE_STYLE[$state].border};
  cursor: pointer;
`;

const Label = styled.span`
  color: #000000;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
`;

function OptionButton({ label, state = "default", onClick }) {
  return (
    <Button type="button" $state={state} onClick={onClick}>
      <Label>{label}</Label>
    </Button>
  );
}

export default OptionButton;
