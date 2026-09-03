export const architectureComponents = [
  {
    id: "system-architecture",
    name: "System Architecture",
    shortName: "System Architecture",
    category: "System",
    icon: "system",
    tagline: "The complete computer system",
    description: "Explore how the processor, memory, storage, graphics, motherboard, and I/O systems connect as one computer.",
    color: "#c084fc",
    layer: "system",
    model: "/models/computer/computer-system.glb",
    modelScale: 0.85,
    facts: [["Purpose", "Show system relationships"], ["Includes", "CPU, memory and I/O"], ["View", "Complete architecture"], ["Interaction", "Rotate and zoom"]],
    importance: "The complete architecture makes the relationships between individual computer components visible."
  },
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
    model: "/models/cpu/cpu.glb",
    modelScale: 1.25,
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
    model: "/models/cpu/control-unit.glb",
    modelScale: 1.15,
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
    model: "/models/cpu/registers.glb",
    modelScale: 1.1,
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
    model: "/models/cpu/alu.glb",
    modelScale: 1.2,
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
    model: "/models/cpu/cache.glb",
    modelScale: 1.2,
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
    name: "RAM",
    shortName: "RAM",
    category: "Memory System",
    icon: "memory",
    tagline: "Stores active programs and data",
    description: "Main memory stores programs and data currently needed by the processor, usually using RAM.",
    color: "#22c55e",
    layer: "memory",
    model: "/models/memory/ram.glb",
    modelScale: 1.1,
    facts: [
      ["Purpose", "Store programs and data"],
      ["Technology", "RAM"],
      ["Access", "Random access"],
      ["Volatile", "Yes"]
    ],
    importance: "Main memory provides the working space from which the CPU retrieves instructions and data."
  },
  {
    id: "gpu",
    name: "Graphics Processing Unit",
    shortName: "GPU",
    category: "Parallel Processor",
    icon: "gpu",
    tagline: "Accelerates visual and parallel workloads",
    description: "The Graphics Processing Unit executes thousands of parallel operations for graphics rendering, video processing, and accelerated computing.",
    color: "#14b8a6",
    layer: "system",
    facts: [["Purpose", "Parallel computation"], ["Workloads", "Graphics and AI"], ["Memory", "VRAM"], ["Output", "Rendered frames"]],
    importance: "The GPU handles highly parallel workloads that would be inefficient for a general-purpose CPU."
  },
  {
    id: "motherboard",
    name: "Motherboard",
    shortName: "Motherboard",
    category: "System Platform",
    icon: "motherboard",
    tagline: "Connects the complete system",
    description: "The motherboard is the main circuit board that provides sockets, slots, buses, firmware, and connectors for the computer's components.",
    color: "#0ea5e9",
    layer: "system",
    facts: [["Purpose", "Connect components"], ["Includes", "Sockets and slots"], ["Pathways", "Chipset and buses"], ["Firmware", "UEFI"]],
    importance: "The motherboard gives the system its physical and electrical platform for communication and expansion."
  },
  {
    id: "storage",
    name: "SSD",
    shortName: "SSD",
    category: "Non-Volatile Memory",
    icon: "storage",
    tagline: "Keeps data when power is off",
    description: "Persistent storage, such as an SSD or hard disk, stores the operating system, applications, and user data without continuous power.",
    color: "#f97316",
    layer: "memory",
    facts: [["Purpose", "Long-term storage"], ["Examples", "SSD and HDD"], ["Volatile", "No"], ["Interface", "NVMe or SATA"]],
    importance: "Persistent storage preserves programs and data between sessions and supplies them to main memory when needed."
  },
  {
    id: "psu",
    name: "Power Supply Unit",
    shortName: "Power Supply",
    category: "Power System",
    icon: "power",
    tagline: "Converts and distributes power",
    description: "The Power Supply Unit converts wall power into regulated DC voltages and distributes them safely to the computer's components.",
    color: "#eab308",
    layer: "system",
    facts: [["Purpose", "Power conversion"], ["Input", "AC electricity"], ["Output", "Regulated DC"], ["Protection", "Over-current"]],
    importance: "Every component depends on stable, correctly regulated power to operate reliably."
  },
  {
    id: "io-controller",
    name: "I/O Controller",
    shortName: "I/O Controller",
    category: "Input and Output",
    icon: "io",
    tagline: "Manages peripheral communication",
    description: "I/O controllers coordinate data transfers between the processor, memory, and peripherals such as keyboards, disks, and displays.",
    color: "#06b6d4",
    layer: "system",
    facts: [["Purpose", "Manage peripherals"], ["Transfers", "Input and output"], ["Examples", "USB and SATA"], ["Signals", "Interrupts"]],
    importance: "I/O controllers let the CPU communicate with devices that operate at different speeds and protocols."
  },
  {
    id: "network",
    name: "Network Interface Controller",
    shortName: "Network Interface",
    category: "Communication",
    icon: "network",
    tagline: "Connects the computer to networks",
    description: "A Network Interface Controller sends and receives data over wired or wireless networks and converts system data into network frames.",
    color: "#10b981",
    layer: "system",
    facts: [["Purpose", "Network communication"], ["Data unit", "Frames"], ["Media", "Ethernet or Wi-Fi"], ["Identity", "MAC address"]],
    importance: "The network interface provides the hardware boundary between the computer and external networks."
  },
  {
    id: "mmu",
    name: "Memory Management Unit",
    shortName: "MMU",
    category: "Memory Control",
    icon: "mmu",
    tagline: "Translates virtual addresses",
    description: "The Memory Management Unit translates virtual addresses into physical addresses and enforces memory protection for processes.",
    color: "#84cc16",
    layer: "memory",
    facts: [["Purpose", "Address translation"], ["Input", "Virtual address"], ["Output", "Physical address"], ["Protection", "Process isolation"]],
    importance: "The MMU makes virtual memory possible and prevents one program from directly corrupting another's memory."
  },
  {
    id: "dma",
    name: "Direct Memory Access Controller",
    shortName: "DMA Controller",
    category: "Data Movement",
    icon: "dma",
    tagline: "Moves data without constant CPU work",
    description: "A Direct Memory Access controller transfers blocks of data between devices and main memory while reducing processor involvement.",
    color: "#6366f1",
    layer: "system",
    facts: [["Purpose", "Block transfers"], ["Connects", "Devices and RAM"], ["CPU work", "Setup and completion"], ["Signal", "Interrupt"]],
    importance: "DMA improves system throughput by allowing large transfers to proceed without CPU-managed copying."
  },
  {
    id: "clock",
    name: "System Clock",
    shortName: "System Clock",
    category: "Timing",
    icon: "clock",
    tagline: "Coordinates system timing",
    description: "The system clock produces timing signals that synchronize processor operations and coordinate transfers across the computer.",
    color: "#f43f5e",
    layer: "system",
    facts: [["Purpose", "Synchronize operations"], ["Signal", "Periodic pulses"], ["Measure", "Frequency in hertz"], ["Role", "Timing reference"]],
    importance: "Shared timing signals help digital circuits change state in an orderly and predictable sequence."
  },
  {
    id: "firmware",
    name: "Firmware",
    shortName: "Firmware",
    category: "Boot Software",
    icon: "firmware",
    tagline: "Initializes hardware at startup",
    description: "Firmware stored on the motherboard, commonly UEFI, initializes hardware and starts the boot process before the operating system loads.",
    color: "#a78bfa",
    layer: "system",
    facts: [["Purpose", "Hardware initialization"], ["Example", "UEFI"], ["Storage", "Flash memory"], ["Runs", "Before the OS"]],
    importance: "Firmware creates the handoff from powered-on hardware to the operating system."
  },
  {
    id: "cooling",
    name: "Cooling System",
    shortName: "Cooling",
    category: "Thermal Management",
    icon: "cooling",
    tagline: "Keeps components within safe temperatures",
    description: "Heat sinks, fans, heat pipes, and liquid cooling move waste heat away from processors and other high-power components.",
    color: "#38bdf8",
    layer: "system",
    facts: [["Purpose", "Remove heat"], ["Sources", "CPU and GPU"], ["Methods", "Air or liquid"], ["Risk", "Thermal throttling"]],
    importance: "Effective cooling preserves performance, stability, and the operating life of electronic components."
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
  memory: { overview: "/images/memory.png", parts: [["memory-cells", "Memory Cells", "/images/memory.png", 30], ["row-decoder", "Row Decoder", "/images/memory.png", 54], ["column-decoder", "Column Decoder", "/images/memory.png", 78]] },
  gpu: { overview: "/images/architecture.png", parts: [["shader-cores", "Shader Cores", "/images/architecture.png", 30], ["vram", "VRAM", "/images/memory.png", 54], ["display-engine", "Display Engine", "/images/architecture.png", 78]] },
  motherboard: { overview: "/images/architecture.png", parts: [["cpu-socket", "CPU Socket", "/images/architecture.png", 30], ["expansion-slots", "Expansion Slots", "/images/architecture.png", 54], ["chipset", "Chipset", "/images/architecture.png", 78]] },
  storage: { overview: "/images/memory.png", parts: [["nand-flash", "NAND Flash", "/images/memory.png", 30], ["controller", "Storage Controller", "/images/memory.png", 54], ["interface", "NVMe Interface", "/images/memory.png", 78]] },
  psu: { overview: "/images/architecture.png", parts: [["transformer", "Transformer", "/images/architecture.png", 30], ["regulator", "Voltage Regulator", "/images/architecture.png", 54], ["connectors", "Power Connectors", "/images/architecture.png", 78]] },
  "io-controller": { overview: "/images/architecture.png", parts: [["usb-controller", "USB Controller", "/images/architecture.png", 30], ["device-queue", "Device Queue", "/images/architecture.png", 54], ["interrupt-logic", "Interrupt Logic", "/images/architecture.png", 78]] },
  network: { overview: "/images/architecture.png", parts: [["mac-unit", "MAC Unit", "/images/architecture.png", 30], ["packet-buffer", "Packet Buffer", "/images/memory.png", 54], ["physical-layer", "Physical Layer", "/images/architecture.png", 78]] },
  mmu: { overview: "/images/memory.png", parts: [["page-table", "Page Table", "/images/memory.png", 30], ["tlb", "Translation Lookaside Buffer", "/images/memory.png", 54], ["protection-check", "Protection Check", "/images/memory.png", 78]] },
  dma: { overview: "/images/architecture.png", parts: [["dma-channel", "DMA Channel", "/images/architecture.png", 30], ["transfer-engine", "Transfer Engine", "/images/architecture.png", 54], ["status-register", "Status Register", "/images/architecture.png", 78]] },
  clock: { overview: "/images/cpu.png", parts: [["oscillator", "Oscillator", "/images/cpu.png", 30], ["clock-distribution", "Clock Distribution", "/images/cpu.png", 54], ["phase-lock", "Phase-Locked Loop", "/images/cpu.png", 78]] },
  firmware: { overview: "/images/architecture.png", parts: [["uefi-core", "UEFI Core", "/images/architecture.png", 30], ["hardware-check", "Hardware Check", "/images/architecture.png", 54], ["boot-loader", "Boot Loader", "/images/architecture.png", 78]] },
  cooling: { overview: "/images/architecture.png", parts: [["heat-sink", "Heat Sink", "/images/architecture.png", 30], ["fan", "Cooling Fan", "/images/architecture.png", 54], ["thermal-sensor", "Thermal Sensor", "/images/architecture.png", 78]] }
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
