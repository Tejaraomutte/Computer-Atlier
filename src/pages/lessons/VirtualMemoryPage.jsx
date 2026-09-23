import LessonPageTemplate from "../../components/lessons/LessonPageTemplate.jsx";
import { memoryLessons } from "../../data/lessons/memoryLessons.js";
import { memoryQuizBank } from "../../data/quizzes/memoryQuizzes.js";

const lesson = memoryLessons.find((item) => item.id === "virtual-memory");

const examples = [
  { title: "Process isolation", text: "Each process sees its own virtual address space, so one program cannot accidentally overwrite another's data." },
  { title: "Demand paging", text: "The OS loads only the pages needed for the current work, keeping the rest on disk until needed." },
  { title: "Large application", text: "A large application can run on a machine with less RAM than the program's full footprint because inactive pages are stored elsewhere." }
];

export default function VirtualMemoryPage() {
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
      previousRoute="/en/lessons/main-memory"
      nextRoute="/en/lessons/secondary-memory"
    />
  );
}
