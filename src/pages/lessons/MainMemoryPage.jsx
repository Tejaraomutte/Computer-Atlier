import LessonPageTemplate from "../../components/lessons/LessonPageTemplate.jsx";
import { memoryLessons } from "../../data/lessons/memoryLessons.js";
import { memoryQuizBank } from "../../data/quizzes/memoryQuizzes.js";

const lesson = memoryLessons.find((item) => item.id === "main-memory");

const examples = [
  { title: "Byte addressing", text: "A memory location may be addressed as 0x1000, with a byte value read or written at that address." },
  { title: "Word transfer", text: "A 32-bit word may be fetched as four aligned bytes and delivered to the CPU on the data bus." },
  { title: "Load-store execution", text: "A load instruction reads a word from RAM into a register, while a store writes a computed value back to a memory address." }
];

export default function MainMemoryPage() {
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
      previousRoute="/en/lessons/memory-hierarchy"
      nextRoute="/en/lessons/virtual-memory"
    />
  );
}
