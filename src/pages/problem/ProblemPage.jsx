import QuizHeader from "../../components/problem/QuizHeader";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function ProblemPage() {
  const navigate = useNavigate();

  return <QuizHeader current={2} total={5} onClose={() => navigate("/")} />;
}

export default ProblemPage;
