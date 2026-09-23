import LessonPageTemplate from "../../components/lessons/LessonPageTemplate.jsx";
import { memoryLessons } from "../../data/lessons/memoryLessons.js";
import { memoryQuizBank } from "../../data/quizzes/memoryQuizzes.js";

const lesson = memoryLessons.find((item) => item.id === "memory-hierarchy");

const examples = [
  { title: "Laptop workflow", text: "The CPU repeatedly uses recently accessed files and instructions, while the system keeps larger data in RAM and disk." },
  { title: "Game execution", text: "Frames and current scene data remain in cache and RAM while the rest of the asset library stays in secondary storage." },
  { title: "Web browser", text: "Tabs and active pages stay hot in memory, while old data may remain on disk until the user revisits it." }
];

export default function MemoryHierarchyPage() {
  return (
    <LessonPageTemplate
      lesson={lesson}
      overview={lesson.summary}
      objectives={lesson.objectives}
      sections={lesson.sections}
      components={lesson.components}
      advantages={lesson.advantages}
      limitations={lesson.limitations}
      examples={examples}
      relatedConcepts={lesson.related}
      takeaways={lesson.takeaways}
      diagramTitle={lesson.diagramTitle}
      quizQuestions={memoryQuizBank[lesson.id]}
      previousRoute={null}
      nextRoute="/en/lessons/main-memory"
    />
  );
}
