import LessonPageTemplate from "../../components/lessons/LessonPageTemplate.jsx";
import { memoryLessons } from "../../data/lessons/memoryLessons.js";
import { memoryQuizBank } from "../../data/quizzes/memoryQuizzes.js";

const lesson = memoryLessons.find((item) => item.id === "secondary-memory");

const examples = [
  { title: "Operating system files", text: "The OS, user data, and applications live on SSD or HDD storage and persist across restarts." },
  { title: "Virtual memory support", text: "Inactive pages are written to secondary storage during paging so memory can be used more flexibly." },
  { title: "Media and archive", text: "Large media libraries and archival data are stored on secondary drives because they require higher capacity and persistence." }
];

export default function SecondaryMemoryPage() {
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
      previousRoute="/en/lessons/virtual-memory"
      nextRoute={null}
    />
  );
}
