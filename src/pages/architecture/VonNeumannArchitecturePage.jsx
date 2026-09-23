import ArchitectureDetailPage from "../../components/architecture/ArchitectureDetailPage.jsx";
import { architectureSystemCards, architecturePageSections } from "../../data/architectureSystems.js";
import { architectureQuizBank } from "../../data/quizzes/memoryQuizzes.js";

const card = architectureSystemCards.find((item) => item.id === "von-neumann");

const components = [];

export default function VonNeumannArchitecturePage() {
  return (
    <ArchitectureDetailPage
      title={card.title}
      kicker={card.kicker}
      intro={card.description}
      overview={card.description}
      image={card.image}
      learningGoals={[
        "Explain the structure of a stored-program architecture.",
        "Describe how a shared memory model supports instruction and data access.",
        "Identify the main trade-offs of a single-memory design.",
        "Understand the fetch-decode-execute cycle in this model."
      ]}
      components={components}
      flow={["FETCH", "DECODE", "EXECUTE", "MEMORY / WRITE BACK", "NEXT INSTRUCTION"]}
      comparison={card.comparison}
      quizQuestions={architectureQuizBank["von-neumann"]}
      relatedConcepts={["Main memory", "Instruction cycle", "Memory hierarchy", "Bus contention"]}
      summaryNotes={architecturePageSections["von-neumann"].summary}
      applications={[
        { title: "General-purpose computers", text: "The Von Neumann model is the foundation of desktop and laptop computers, servers, and most general-purpose systems." },
        { title: "Programmable controllers", text: "Simple embedded systems often use the same shared-memory approach because it is easy to program and implement." },
        { title: "Educational architecture model", text: "This model is widely used in teaching because it makes fetch and execute flow easy to understand." }
      ]}
      advantages={[
        "Simple and flexible design",
        "Easy to program with a stored program",
        "Good for general-purpose computing"
      ]}
      limitations={[
        "Shared memory and bus create bottlenecks",
        "Instruction fetch and data access can contend for the same path",
        "Performance is limited by memory bandwidth"
      ]}
    />
  );
}
