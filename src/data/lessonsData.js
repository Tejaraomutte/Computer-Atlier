import { architectureComponents } from "./architectureData.js";

const foundationalLessons = [
  {
    id: "cpu-basics",
    title: "CPU Organization",
    category: "Processor",
    duration: "15 min",
    level: "Beginner",
    summary: "Understand the CPU, ALU, Control Unit, registers and their relationships.",
    sections: [
      { title: "Introduction", text: "The CPU is responsible for executing program instructions and coordinating computer operations." },
      { title: "ALU", text: "The ALU performs arithmetic, logic and comparison operations." },
      { title: "Control Unit", text: "The Control Unit interprets instructions and generates control signals." },
      { title: "Registers", text: "Registers hold small amounts of data and control information at very high speed." }
    ]
  },
  {
    id: "instruction-cycle",
    title: "Instruction Cycle",
    category: "Processor",
    duration: "20 min",
    level: "Beginner",
    summary: "Follow an instruction through Fetch, Decode, Execute, Memory and Write Back.",
    sections: [
      { title: "Fetch", text: "The processor obtains the next instruction from memory." },
      { title: "Decode", text: "The Control Unit interprets the instruction." },
      { title: "Execute", text: "The required operation is performed, often by the ALU." },
      { title: "Memory", text: "Some instructions read or write memory." },
      { title: "Write Back", text: "The result is written to the appropriate destination." }
    ]
  },
  {
    id: "memory-hierarchy",
    title: "Memory Hierarchy",
    category: "Memory",
    duration: "18 min",
    level: "Intermediate",
    summary: "Learn why registers, cache, RAM and storage have different speed and capacity.",
    sections: [
      { title: "Registers", text: "Fastest and smallest storage close to the execution units." },
      { title: "Cache", text: "Small, fast memory that stores frequently used information." },
      { title: "Main Memory", text: "Larger working memory used by active programs." },
      { title: "Storage", text: "Persistent storage provides high capacity but slower access." }
    ]
  }
];

const componentLessons = architectureComponents.map((component) => ({
  id: `component-${component.id}`,
  title: `${component.name} Essentials`,
  category: component.category,
  duration: "12 min",
  level: "Beginner",
  summary: component.description,
  sections: [
    { title: "What it does", text: component.description },
    { title: "Key facts", text: component.facts.map(([label, value]) => `${label}: ${value}`).join(" · ") },
    { title: "Why it matters", text: component.importance }
  ]
}));

export const lessons = [...foundationalLessons, ...componentLessons];
