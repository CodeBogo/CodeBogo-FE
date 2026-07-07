import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ProblemPage from "./pages/problem/ProblemPage";
import ResultPage from "./pages/result/ResultPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/problem" element={<ProblemPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}
