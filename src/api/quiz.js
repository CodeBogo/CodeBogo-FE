import { request } from "./client";

export const startQuiz = () =>
  request("/api/quiz-sessions/start", { method: "POST" });

export const getCurrentProblem = (sessionId) =>
  request(`/api/quiz-sessions/${sessionId}/current`);

export const submitAnswer = (sessionId, problemId, selectedAnswer) =>
  request(`/api/quiz-sessions/${sessionId}/problems/${problemId}/submit`, {
    method: "POST",
    body: { selectedAnswer },
  });

export const moveToNextQuestion = (sessionId) =>
  request(`/api/quiz-sessions/${sessionId}/next`, { method: "POST" });

export const getQuizResult = (sessionId) =>
  request(`/api/quiz-sessions/${sessionId}/result`);
