import { useState } from "react";
import Quiz from "../components/quiz/Quiz.jsx";
import { architectureComponents } from "../data/architectureData.js";
import { getQuizForComponent } from "../data/quizData.js";
import { getLocalizedComponents } from "../data/i18n.js";
import useArchitecture from "../hooks/useArchitecture.js";

export default function QuizPage() {
  const { language, t } = useArchitecture();
  const localizedComponents = getLocalizedComponents(architectureComponents, language);
  const [selectedComponent, setSelectedComponent] = useState(architectureComponents[0].id);

  const component = localizedComponents.find((item) => item.id === selectedComponent) || localizedComponents[0];

  return (
    <main className="page narrow-page">
      <div className="page-heading">
        <span>{t.quiz?.toUpperCase() || "QUIZ"}</span>
        <h1>{t.quizHeading || "Test your understanding"}</h1>
        <p>{t.quizDesc || "Choose a component to take its dedicated quiz."}</p>
        <label htmlFor="quiz-component">{t.chooseComponent || "Component quiz"}</label>
        <select
          id="quiz-component"
          value={component.id}
          onChange={(event) => setSelectedComponent(event.target.value)}
        >
          {localizedComponents.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <Quiz
        key={component.id}
        questions={getQuizForComponent(component.id)}
        componentName={component.name}
      />
    </main>
  );
}
