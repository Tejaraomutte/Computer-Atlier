export default function AnswerOption({ option, selected, correct, onClick, disabled }) {
  let className = "answer-option";
  if (selected) className += correct ? " correct" : " wrong";
  return <button disabled={disabled} className={className} onClick={onClick}>{option}</button>;
}
