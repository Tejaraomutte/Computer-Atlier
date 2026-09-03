import AnswerOption from "./AnswerOption.jsx";
export default function Question({ question, selected, onAnswer }) {
  return <div className="question-card"><div className="question-number">Question {question.id}</div><h2>{question.question}</h2><div className="answer-list">{question.options.map((option) => <AnswerOption key={option} option={option} selected={selected === option} correct={option === question.answer} onClick={() => onAnswer(option)} disabled={Boolean(selected)} />)}</div>{selected && <p className="explanation">{question.explanation}</p>}</div>;
}
