import styled from "styled-components";
import MacDots from "../../assets/icon/macdots.svg";

const Wrapper = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
`;

const TitleBar = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding-left: 16px;
  background: rgba(134, 102, 181, 0.8);
  border-radius: 14px 14px 0 0;
  box-sizing: border-box;
`;

const FileName = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
`;

const CodeArea = styled.div`
  width: 100%;
  height: 218px;
  background: #ffffff;
  border: 1px solid #0000001A;
  border-radius: 0 0 14px 14px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  overflow: hidden;
`;

const Line = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
  background: ${({ $highlighted }) => ($highlighted ? "rgba(134, 102, 181, 0.2)" : "transparent")};
`;

const LineNumber = styled.span`
  width: 40px;
  flex-shrink: 0;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
`;

const CodeText = styled.span`
  flex: 1;
  text-align: left;
  white-space: pre;
  color: rgba(0, 0, 0, 0.5);
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
`;

function CodeBlock({ fileName, lines = [], highlightLine }) {
  return (
    <Wrapper>
      <TitleBar>
        <img src={MacDots} alt="" />
        <FileName>{fileName}</FileName>
      </TitleBar>
      <CodeArea>
        {lines.map((line, index) => {
          const lineNumber = index + 1;
          return (
            <Line key={lineNumber} $highlighted={lineNumber === highlightLine}>
              <LineNumber>{lineNumber}</LineNumber>
              <CodeText>{line}</CodeText>
            </Line>
          );
        })}
      </CodeArea>
    </Wrapper>
  );
}

export default CodeBlock;
