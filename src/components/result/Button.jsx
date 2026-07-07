import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  padding: 15px 0 14px;
  border-radius: 14px;
  border: none;
  font-size: 16px;
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  word-wrap: break-word;
  cursor: pointer;
  background-color: ${({ $variant }) =>
    $variant === "secondary" ? "#EDE7F6" : "#8666B5"};
  color: ${({ $variant }) =>
    $variant === "secondary" ? "#8666B5" : "#ffffff"};
`;

function Button({ children, $variant = "primary", onClick, className }) {
  return (
    <StyledButton $variant={$variant} onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
}

export default Button;