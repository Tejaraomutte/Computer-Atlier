import useQuiz from "../../hooks/useQuiz.js";
import { quizQuestions } from "../../data/quizData.js";
import Question from "./Question.jsx";
import QuizResult from "./QuizResult.jsx";
import ProgressBar from "./ProgressBar.jsx";

export default function Quiz() {
  const quiz = useQuiz(quizQuestions);
  const selected = quiz.answers[quiz.current.id];

  if (quiz.finished && selected) {
    return <QuizResult score={quiz.score} total={quizQuestions.length} onRetry={quiz.reset} />;
  }

  return (
    <div className="quiz-shell">
      <ProgressBar current={quiz.index} total={quizQuestions.length} />
      <Question question={quiz.current} selected={selected} onAnswer={quiz.answer} />
      <button className="lesson-button next-button" disabled={!selected} onClick={quiz.next}>
        {quiz.index === quizQuestions.length - 1 ? "Finish quiz" : "Next question →"}
      </button>
    </div>
  );
}
