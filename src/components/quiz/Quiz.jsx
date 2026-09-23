import { useEffect } from "react";
import useQuiz from "../../hooks/useQuiz.js";
import Question from "./Question.jsx";
import QuizResult from "./QuizResult.jsx";
import ProgressBar from "./ProgressBar.jsx";

export default function Quiz({ questions, componentName, onComplete }) {
  const quiz = useQuiz(questions);
  const selected = quiz.answers[quiz.current.id];
  const completed = quiz.finished && selected;

  useEffect(() => {
    if (completed && onComplete) {
      onComplete(quiz.score, questions.length);
    }
  }, [completed, onComplete, quiz.score, questions.length]);

  if (completed) {
    return <QuizResult score={quiz.score} total={questions.length} onRetry={quiz.reset} />;
  }

  return (
    <div className="quiz-shell">
      <ProgressBar current={quiz.index} total={questions.length} />
      <div className="question-number">{componentName} quiz</div>
      <Question question={quiz.current} selected={selected} onAnswer={quiz.answer} />
      <button className="lesson-button next-button" disabled={!selected} onClick={quiz.next}>
        {quiz.index === questions.length - 1 ? "Finish quiz" : "Next question →"}
      </button>
    </div>
  );
}
