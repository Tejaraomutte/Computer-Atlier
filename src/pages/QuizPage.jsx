import { useState } from "react";
import Quiz from "../components/quiz/Quiz.jsx";
import { architectureComponents } from "../data/architectureData.js";
import { getQuizForComponent } from "../data/quizData.js";

export default function QuizPage() {
  const [selectedComponent, setSelectedComponent] = useState(architectureComponents[0].id);
  const component = architectureComponents.find((item) => item.id === selectedComponent) || architectureComponents[0];
  return <main className="page narrow-page"><div className="page-heading"><span>QUIZ</span><h1>Test your understanding</h1><p>Choose a component to take its dedicated quiz.</p><label htmlFor="quiz-component">Component quiz</label><select id="quiz-component" value={component.id} onChange={(event) => setSelectedComponent(event.target.value)}>{architectureComponents.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></div><Quiz key={component.id} questions={getQuizForComponent(component.id)} componentName={component.name}/></main>;
}
