export const architectureComponents = [
  {
    id: "cpu",
    name: "CPU",
    shortName: "CPU",
    category: "Processor",
    icon: "cpu",
    tagline: "The brain of the computer",
    description: "The Central Processing Unit executes instructions, performs computations, and coordinates the operation of the computer system.",
    color: "#8b5cf6",
    layer: "cpu",
    facts: [
      ["Purpose", "Execute instructions"],
      ["Components", "ALU, Control Unit, Registers"],
      ["Input", "Instructions and data"],
      ["Output", "Processed results"]
    ],
    importance: "The CPU coordinates computation and controls how instructions and data move through the computer."
  },
  {
    id: "control",
    name: "Control Unit",
    shortName: "Control Unit",
    category: "Instruction Control",
    icon: "control",
    tagline: "Directs the operation",
    description: "The Control Unit fetches and decodes instructions and generates control signals that coordinate other CPU components.",
    color: "#3b82f6",
    layer: "cpu",
    facts: [
      ["Purpose", "Control instruction execution"],
      ["Input", "Instructions"],
      ["Output", "Control signals"],
      ["Cycle", "Fetch and Decode"]
    ],
    importance: "The Control Unit tells the other parts of the processor what should happen and when."
  },
  {
    id: "registers",
    name: "Registers",
    shortName: "Registers",
    category: "Fast Storage",
    icon: "register",
    tagline: "The CPU's fastest storage",
    description: "Registers are small, high-speed storage locations inside the processor that hold instructions, addresses, and data temporarily.",
    color: "#a855f7",
    layer: "datapath",
    facts: [
      ["Purpose", "Temporary data storage"],
      ["Speed", "Extremely fast"],
      ["Location", "Inside CPU"],
      ["Examples", "PC, IR, MAR, MDR"]
    ],
    importance: "Registers provide the processor with extremely fast access to values needed during instruction execution."
  },
  {
    id: "alu",
    name: "Arithmetic Logic Unit",
    shortName: "ALU",
    category: "Computation",
    icon: "alu",
    tagline: "Where computation happens",
    description: "The Arithmetic Logic Unit performs arithmetic operations and logical operations such as AND, OR, NOT, and comparisons.",
    color: "#ec4899",
    layer: "datapath",
    facts: [
      ["Purpose", "Arithmetic and logic"],
      ["Arithmetic", "ADD, SUB, MUL"],
      ["Logic", "AND, OR, NOT"],
      ["Input", "Operands"]
    ],
    importance: "The ALU performs the mathematical and logical processing required by instructions."
  },
  {
    id: "cache",
    name: "Cache Memory",
    shortName: "Cache",
    category: "High-Speed Memory",
    icon: "cache",
    tagline: "Keeps frequently used data close",
    description: "Cache stores frequently accessed instructions and data so the CPU can retrieve them faster than from main memory.",
    color: "#f59e0b",
    layer: "memory",
    facts: [
      ["Purpose", "Reduce memory latency"],
      ["Location", "Close to CPU"],
      ["Types", "L1, L2, L3"],
      ["Speed", "Very high"]
    ],
    importance: "Cache reduces the time the processor waits for information from slower memory."
  },
  {
    id: "bus",
    name: "System Bus",
    shortName: "System Bus",
    category: "Communication",
    icon: "bus",
    tagline: "The communication pathway",
    description: "The system bus provides pathways for transferring data, addresses, and control signals between major components.",
    color: "#22d3ee",
    layer: "system",
    facts: [
      ["Purpose", "Transfer information"],
      ["Types", "Data, Address, Control"],
      ["Connects", "CPU, memory and I/O"],
      ["Role", "Communication"]
    ],
    importance: "The bus provides communication pathways through which computer components exchange information."
  },
  {
    id: "memory",
    name: "Main Memory",
    shortName: "Main Memory",
    category: "Memory System",
    icon: "memory",
    tagline: "Stores active programs and data",
    description: "Main memory stores programs and data currently needed by the processor, usually using RAM.",
    color: "#22c55e",
    layer: "memory",
    facts: [
      ["Purpose", "Store programs and data"],
      ["Technology", "RAM"],
      ["Access", "Random access"],
      ["Volatile", "Yes"]
    ],
    importance: "Main memory provides the working space from which the CPU retrieves instructions and data."
  }
];

const componentMedia = {
  cpu: {
    overview: "/images/cpu.png",
    parts: [
      ["control-unit", "Control Unit", "/images/cpu.png", 27],
      ["registers", "Registers", "/images/cpu.png", 39],
      ["alu", "Arithmetic Logic Unit", "/images/cpu.png", 52],
      ["cache", "Cache", "/images/cache.png", 66],
      ["memory-interface", "Memory Interface", "/images/cpu.png", 78]
    ]
  },
  control: { overview: "/images/cpu.png", parts: [["instruction-decoder", "Instruction Decoder", "/images/cpu.png", 39], ["control-logic", "Control Logic", "/images/cpu.png", 57], ["clock", "Clock Signal", "/images/cpu.png", 75]] },
  registers: { overview: "/images/cpu.png", parts: [["program-counter", "Program Counter", "/images/cpu.png", 30], ["instruction-register", "Instruction Register", "/images/cpu.png", 54], ["data-register", "Data Register", "/images/cpu.png", 78]] },
  alu: { overview: "/images/architecture.png", parts: [["arithmetic-circuit", "Arithmetic Circuit", "/images/architecture.png", 35], ["logic-circuit", "Logic Circuit", "/images/architecture.png", 58], ["status-flags", "Status Flags", "/images/architecture.png", 76]] },
  cache: { overview: "/images/cache.png", parts: [["cache-lines", "Cache Lines", "/images/cache.png", 30], ["tag-store", "Tag Store", "/images/cache.png", 54], ["cache-controller", "Cache Controller", "/images/cache.png", 78]] },
  bus: { overview: "/images/architecture.png", parts: [["data-lines", "Data Lines", "/images/architecture.png", 30], ["address-lines", "Address Lines", "/images/architecture.png", 54], ["control-lines", "Control Lines", "/images/architecture.png", 78]] },
  memory: { overview: "/images/memory.png", parts: [["memory-cells", "Memory Cells", "/images/memory.png", 30], ["row-decoder", "Row Decoder", "/images/memory.png", 54], ["column-decoder", "Column Decoder", "/images/memory.png", 78]] }
};

function getMedia(id) {
  const media = componentMedia[id] || componentMedia.cpu;
  return {
    overview: media.overview,
    views: [
      { id: "overview", label: "Overview", image: media.overview },
      { id: "detail", label: "Detail", image: media.overview }
    ],
    parts: media.parts.map(([partId, name, image, left]) => ({ id: partId, name, image, position: [left, 50] }))
  };
}

export const systemData = [
  {
    id: "von-neumann",
    title: "Von Neumann Architecture",
    description: "A stored-program architecture in which instructions and data share the same memory and communication pathway.",
    tags: ["CPU", "Memory", "Bus"]
  },
  {
    id: "harvard",
    title: "Harvard Architecture",
    description: "Uses separate storage and pathways for instructions and data.",
    tags: ["Instruction Memory", "Data Memory"]
  },
  {
    id: "pipeline",
    title: "Pipelined Processor",
    description: "Overlaps stages of instruction execution to improve instruction throughput.",
    tags: ["IF", "ID", "EX", "MEM", "WB"]
  }
];

export function getComponent(id = "cpu") {
  const item = architectureComponents.find((component) => component.id === id) || architectureComponents[0];
  return { ...item, media: getMedia(item.id) };
}
