import useQuiz from "../../hooks/useQuiz.js";
import Question from "./Question.jsx";
import QuizResult from "./QuizResult.jsx";
import ProgressBar from "./ProgressBar.jsx";

export default function Quiz({ questions, componentName }) {
  const quiz = useQuiz(questions);
  const selected = quiz.answers[quiz.current.id];

  if (quiz.finished && selected) {
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
