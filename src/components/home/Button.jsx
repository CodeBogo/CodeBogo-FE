import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${({ $variant }) =>
    $variant === "secondary" ? "#EDE7F6" : "#8666B5"};
  color: ${({ $variant }) =>
    $variant === "secondary" ? "#6C4BA6" : "#ffffff"};
`;

function Button({ children, $variant = "primary", onClick, className }) {
  return (
    <StyledButton $variant={$variant} onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
}

export default Button;