export default function QuizResult({ score, total, onRetry }) {
  return <div className="result-card"><div className="result-circle">{score}/{total}</div><h2>Quiz complete!</h2><p>You answered {score} out of {total} correctly.</p><button className="lesson-button" onClick={onRetry}>Try again</button></div>;
}
