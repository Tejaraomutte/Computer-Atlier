import ArchitectureDetailPage from "../../components/architecture/ArchitectureDetailPage.jsx";
import { architectureSystemCards, architecturePageSections } from "../../data/architectureSystems.js";
import { architectureQuizBank } from "../../data/quizzes/memoryQuizzes.js";

const card = architectureSystemCards.find((item) => item.id === "pipelined");

const components = [];

export default function ProcessingSystemsPage() {
  return (
    <ArchitectureDetailPage
      title={card.title}
      kicker={card.kicker}
      intro={card.description}
      overview={card.description}
      image={card.image}
      learningGoals={[
        "Describe the major parts of a full processing system.",
        "Relate memory, storage, interfaces, and communication paths to the overall machine.",
        "Understand the role of system coordination in execution.",
        "Explain how a complete architecture works as one connected machine."
      ]}
      components={components}
      flow={["INPUT", "INPUT INTERFACE", "MEMORY", "FETCH", "DECODE", "EXECUTE", "MEMORY / STORAGE", "OUTPUT"]}
      comparison={card.comparison}
      quizQuestions={architectureQuizBank.pipelined}
      relatedConcepts={["Instruction cycle", "Hazards", "Throughput", "Pipeline stages"]}
      summaryNotes={architecturePageSections.pipelined.summary}
      applications={[
        { title: "Personal computing", text: "Modern laptops and desktops integrate the CPU, RAM, storage, and I/O into one programmable system." },
        { title: "Embedded devices", text: "Microcontrollers combine a CPU, memory, and I/O in a compact system design for dedicated tasks." },
        { title: "Servers and data centers", text: "Large systems use multi-layered memory and storage architectures to handle heavy workloads and data movement." }
      ]}
      advantages={[
        "Coordinated system design supports general-purpose operation",
        "Memory hierarchy reduces bottlenecks for common workloads",
        "I/O and interconnect support practical interaction with users and devices"
      ]}
      limitations={[
        "System complexity increases with more subsystems",
        "Bandwidth and latency are shaped by the entire design, not only the CPU",
        "Performance depends on balancing memory, buses, and storage"
      ]}
    />
  );
}
