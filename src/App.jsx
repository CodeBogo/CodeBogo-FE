import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ProblemPage from "./pages/problem/ProblemPage";
import ResultPage from "./pages/result/ResultPage";
import styled from "styled-components";

function App() {
  return (
    <PhoneWrapper>
      <PhoneScreen>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/problem" element={<ProblemPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </PhoneScreen>
    </PhoneWrapper>
  );
}

const PhoneWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f0f0f0;
  padding: 20px 0;
`;

const PhoneScreen = styled.div`
  width: 390px;
  height: 844px;
  background-color: #ffffff;
  overflow-y: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
`;

export default App;