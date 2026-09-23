export const architectureSystemCards = [
  {
    id: "von-neumann",
    title: "Von Neumann Architecture",
    shortDescription: "Instructions and data share the same memory and pathway, enabling a stored-program model.",
    description: "The CPU fetches instructions and data from a shared memory space, making the design simple and flexible for general-purpose computing.",
    route: "/en/architecture/von-neumann",
    image: "/images/vonneuman.png",
    kicker: "Stored-program model",
    components: [
      { id: "memory", label: "Main Memory", position: [0, 0, 0], color: "#22c55e", detail: "Shared memory for instructions and data." }
    ],
    flow: ["FETCH", "DECODE", "EXECUTE", "MEMORY / WRITE BACK", "NEXT INSTRUCTION"],
    concept: "Instructions + data share one memory model and one communication path.",
    comparison: [
      ["Memory organization", "Single shared memory"],
      ["Instruction/data storage", "Same memory"],
      ["Paths", "Single bus"],
      ["Flexibility", "High and easy to program"],
      ["Typical use", "General-purpose CPUs"]
    ]
  },
  {
    id: "harvard",
    title: "Harvard Architecture",
    shortDescription: "Separate instruction memory and data memory allow independent pathways for program and data traffic.",
    description: "The processor maintains distinct instruction and data storage, which helps simplify memory access patterns and can improve throughput in specialized systems.",
    route: "/en/architecture/harvard",
    image: "/images/harward.png",
    kicker: "Separate memory paths",
    components: [
      { id: "memory", label: "Instruction + Data Memory", position: [0, 0, 0], color: "#22c55e", detail: "Separate instruction and data memory spaces." }
    ],
    flow: ["FETCH INSTRUCTION", "DECODE", "EXECUTE", "ACCESS DATA MEMORY", "NEXT INSTRUCTION"],
    concept: "Instruction and data memory are physically separated, creating independent fetch and data paths.",
    comparison: [
      ["Memory organization", "Separate instruction and data memory"],
      ["Instruction/data storage", "Separate"],
      ["Paths", "Independent buses"],
      ["Flexibility", "Moderate, with more hardware"],
      ["Typical use", "Embedded and DSP systems"]
    ]
  },
  {
    id: "pipelined",
    title: "Pipelined Processor",
    shortDescription: "A processor overlaps instruction stages so multiple steps execute in parallel across the pipeline.",
    description: "The processor overlaps instruction stages so multiple instructions advance through the pipeline at the same time, increasing throughput for suitable workloads.",
    route: "/en/architecture/pipelined",
    image: "/images/pipeline.png",
    kicker: "Pipeline execution",
    components: [
      { id: "system", label: "Processing System", position: [0, 0, 0], color: "#8b5cf6", detail: "The complete machine architecture." }
    ],
    flow: ["INPUT", "MEMORY", "FETCH", "DECODE", "EXECUTE", "OUTPUT"],
    concept: "A processing system integrates compute, memory, storage, I/O, and communication into one working machine.",
    comparison: [
      ["Memory organization", "Hierarchy and interconnect"],
      ["Instruction/data storage", "Multi-level"],
      ["Paths", "Shared buses and interfaces"],
      ["Flexibility", "High"],
      ["Typical use", "Modern computers and embedded systems"]
    ]
  }
];

export const architecturePageSections = {
  "von-neumann": {
    summary: "The stored-program model keeps instructions and data together, which makes software easier to manage and reuse.",
    points: [
      "Single memory space for instructions and data.",
      "A shared system bus coordinates transfers.",
      "The CPU repeatedly fetches, decodes, and executes instructions."
    ]
  },
  harvard: {
    summary: "Separate memories allow the processor to fetch instructions and read/write data in parallel where the hardware supports it.",
    points: [
      "Instruction memory and data memory are independent.",
      "Instruction and data buses are physically distinct.",
      "This design is common in embedded controllers and DSPs."
    ]
  },
  pipelined: {
    summary: "A pipelined processor overlaps stages so each stage handles a different instruction at the same time, improving throughput.",
    points: [
      "The pipeline divides execution into stages such as fetch, decode, execute, and memory access.",
      "Different instructions can progress simultaneously when hazards are managed correctly.",
      "Performance improves, but hazards and stalls can reduce ideal speedup."
    ]
  }
};
