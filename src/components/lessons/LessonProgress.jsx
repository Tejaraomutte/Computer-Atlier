export default function LessonProgress({ value = 0 }) {
  return <div className="progress-wrap"><div className="progress-track"><div className="progress-fill" style={{ width: `${value}%` }} /></div><span>{value}% complete</span></div>;
}
