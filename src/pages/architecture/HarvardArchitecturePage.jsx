import ArchitectureDetailPage from "../../components/architecture/ArchitectureDetailPage.jsx";
import { architectureSystemCards, architecturePageSections } from "../../data/architectureSystems.js";
import { architectureQuizBank } from "../../data/quizzes/memoryQuizzes.js";

const card = architectureSystemCards.find((item) => item.id === "harvard");

const components = [];

export default function HarvardArchitecturePage() {
  return (
    <ArchitectureDetailPage
      title={card.title}
      kicker={card.kicker}
      intro={card.description}
      overview={card.description}
      image={card.image}
      learningGoals={[
        "Explain how the design separates instruction and data memory.",
        "Describe how independent paths improve access patterns in suitable systems.",
        "Compare Harvard-style separation with a shared-memory model.",
        "Understand why this approach is common in embedded and specialized systems."
      ]}
      components={components}
      flow={["FETCH INSTRUCTION", "DECODE", "EXECUTE", "ACCESS DATA MEMORY", "NEXT INSTRUCTION"]}
      comparison={card.comparison}
      quizQuestions={architectureQuizBank.harvard}
      relatedConcepts={["Modified Harvard architecture", "Embedded systems", "DSP", "Memory bandwidth"]}
      summaryNotes={architecturePageSections.harvard.summary}
      applications={[
        { title: "Embedded controllers", text: "Many microcontrollers use a Harvard-style organization so instruction fetch and data access remain independent." },
        { title: "Digital signal processors", text: "DSP designs often benefit from separated instruction and data pathways when running streaming workloads." },
        { title: "Specialized accelerators", text: "A Harvard-like layout can support predictable throughput when the workload has clear instruction and data separation." }
      ]}
      advantages={[
        "Separate instruction and data paths reduce contention",
        "Potentially supports concurrent fetch and data access",
        "Useful for embedded and DSP workloads"
      ]}
      limitations={[
        "More hardware complexity than shared-memory designs",
        "Requires separate storage resources",
        "Memory utilization and flexibility can be more constrained"
      ]}
    />
  );
}
