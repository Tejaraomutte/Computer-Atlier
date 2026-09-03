export default function ProgressBar({ current, total }) {
  return <div className="quiz-progress"><div style={{ width: `${((current + 1) / total) * 100}%` }} /></div>;
}
