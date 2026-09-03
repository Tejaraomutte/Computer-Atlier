import { useMemo, useState } from "react";

export default function useQuiz(questions) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const current = questions[index];
  const score = useMemo(
    () => questions.reduce((sum, q) => sum + (answers[q.id] === q.answer ? 1 : 0), 0),
    [questions, answers]
  );

  function answer(value) {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
  }

  function next() {
    setIndex((i) => Math.min(i + 1, questions.length - 1));
  }

  function reset() {
    setIndex(0);
    setAnswers({});
  }

  return { index, current, answers, score, answer, next, reset, finished: index === questions.length - 1 };
}
