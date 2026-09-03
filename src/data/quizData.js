function makeQuestions(component, questions) {
  return questions.map(([question, options, answer, explanation], index) => ({ id: index + 1, component, question, options, answer, explanation }));
}

export const quizQuestions = makeQuestions("Computer Architecture", [
  ["Which component performs arithmetic and logical operations?", ["Control Unit", "ALU", "Cache", "RAM"], "ALU", "The ALU performs arithmetic and logical operations."],
  ["Which storage is normally closest to the CPU?", ["Hard disk", "RAM", "Registers", "Optical disk"], "Registers", "Registers are extremely fast storage locations inside the processor."],
  ["What does the Control Unit mainly generate?", ["Control signals", "Images", "Files", "Power"], "Control signals", "The Control Unit coordinates execution using control signals."]
]);

const quizTopics = {
  cpu: ["What is the CPU's primary role?", ["Store files permanently", "Execute instructions", "Display images", "Supply power"], "Execute instructions", "The CPU executes instructions and coordinates system operation."],
  control: ["What does the Control Unit decode?", ["Instructions", "Pixels", "Power levels", "Disk sectors"], "Instructions", "The Control Unit interprets instructions before execution."],
  registers: ["Where are registers located?", ["Inside the processor", "Only on a hard disk", "Inside the monitor", "In the power cable"], "Inside the processor", "Registers are small storage locations within the CPU."],
  alu: ["Which operation is performed by the ALU?", ["Addition", "Boot firmware", "Network routing", "Voltage conversion"], "Addition", "Arithmetic operations such as addition are ALU work."],
  cache: ["Why does a CPU use cache?", ["To reduce memory latency", "To provide wall power", "To display video", "To cool the motherboard"], "To reduce memory latency", "Cache keeps frequently used data close to the CPU."],
  bus: ["Which bus carries memory locations?", ["Address bus", "Data bus", "Control bus", "Power bus"], "Address bus", "The address bus carries locations that identify data or instructions."],
  memory: ["What normally occupies main memory while running?", ["Active programs and data", "Only firmware", "Power conversion circuits", "Printed documents"], "Active programs and data", "RAM is the active workspace for the operating system and applications."],
  gpu: ["What type of work is a GPU especially good at?", ["Highly parallel computation", "Power conversion", "Boot configuration", "Mechanical storage"], "Highly parallel computation", "GPUs contain many execution units suited to parallel workloads."],
  motherboard: ["What is the motherboard's main purpose?", ["Connect system components", "Execute every instruction", "Store browser history only", "Convert AC to DC"], "Connect system components", "The motherboard provides sockets, slots, connectors, and pathways."],
  storage: ["What distinguishes persistent storage from RAM?", ["It retains data without power", "It is always inside the CPU", "It only stores control signals", "It cannot store programs"], "It retains data without power", "SSDs and hard disks are non-volatile storage."],
  psu: ["What does a PSU convert?", ["AC to regulated DC", "Instructions to data", "Pixels to frames", "Virtual to physical addresses"], "AC to regulated DC", "The PSU converts wall power into voltages the computer can use."],
  "io-controller": ["What does an I/O controller manage?", ["Peripheral communication", "CPU arithmetic", "Virtual memory pages only", "Cooling temperature only"], "Peripheral communication", "I/O controllers coordinate transfers with devices."],
  network: ["What does a network interface send and receive?", ["Network frames", "CPU micro-operations", "Power rails", "Cache tags only"], "Network frames", "Network interfaces package data into frames for transmission."],
  mmu: ["What does the MMU translate?", ["Virtual addresses to physical addresses", "AC to DC", "Frames to pixels", "Instructions to source code"], "Virtual addresses to physical addresses", "The MMU performs address translation for memory accesses."],
  dma: ["What does DMA reduce?", ["CPU involvement in block transfers", "Storage capacity", "Screen brightness", "Instruction size"], "CPU involvement in block transfers", "DMA moves data between devices and memory after CPU setup."],
  clock: ["What does the system clock provide?", ["Timing signals", "Persistent storage", "Network frames", "Graphics textures"], "Timing signals", "Clock pulses synchronize changes in digital circuits."],
  firmware: ["When does motherboard firmware run?", ["Before the operating system loads", "Only after an application closes", "Only during printing", "After power is removed"], "Before the operating system loads", "Firmware initializes hardware during startup."],
  cooling: ["What does a cooling system remove?", ["Waste heat", "Instructions", "Network frames", "Address bits"], "Waste heat", "Cooling transfers heat away from components."]
};

const quizFollowups = {
  cpu: ["Which part of the CPU performs calculations?", ["ALU", "PSU", "NIC", "SSD"], "ALU", "The ALU performs arithmetic and logic."],
  control: ["What does the Control Unit send to coordinate execution?", ["Control signals", "Pixels", "Power cables", "Network frames"], "Control signals", "Control signals tell CPU components when and how to act."],
  registers: ["Which register points to the next instruction?", ["Program Counter", "Data Register", "Status Register", "Memory Buffer"], "Program Counter", "The Program Counter stores the next instruction address."],
  alu: ["Which is a logical ALU operation?", ["AND", "USB", "UEFI", "DMA"], "AND", "AND combines values using Boolean logic."],
  cache: ["Which cache level is generally closest to the execution units?", ["L1", "L2", "L3", "Disk cache"], "L1", "L1 cache typically has the lowest latency."],
  bus: ["Which bus carries values between components?", ["Data bus", "Address bus", "Control bus", "Power bus"], "Data bus", "The data bus transfers data values."],
  memory: ["What is the usual technology used for main memory?", ["RAM", "VRAM only", "Flash only", "Optical media"], "RAM", "Main memory is usually volatile RAM."],
  gpu: ["What memory is commonly dedicated to a GPU?", ["VRAM", "Firmware ROM", "Tape memory", "Registers only"], "VRAM", "VRAM stores graphics data close to the GPU."],
  motherboard: ["Which component is installed into a motherboard socket?", ["CPU", "Network frame", "Instruction signal", "File system"], "CPU", "The processor is seated in a motherboard socket."],
  storage: ["Which device is persistent storage?", ["SSD", "CPU register", "L1 cache", "Control unit"], "SSD", "An SSD retains data without continuous power."],
  psu: ["Which output does a PSU provide to computer components?", ["Regulated DC voltage", "Decoded instructions", "Rendered frames", "Virtual addresses"], "Regulated DC voltage", "The PSU supplies stable DC rails."],
  "io-controller": ["Which device commonly communicates through an I/O controller?", ["Keyboard", "ALU", "Register", "Clock crystal"], "Keyboard", "A keyboard is a peripheral managed through an I/O path."],
  network: ["What identifies a network interface on its local link?", ["MAC address", "Program Counter", "Page table", "Cache tag"], "MAC address", "The MAC address identifies the network interface at the link layer."],
  mmu: ["What does the MMU help enforce?", ["Memory protection", "Screen brightness", "Audio volume", "Fan rotation"], "Memory protection", "The MMU helps isolate processes and protect memory regions."],
  dma: ["How can DMA notify the CPU that a transfer is complete?", ["Interrupt", "Cache miss", "MAC address", "Clock multiplier"], "Interrupt", "A DMA controller can raise an interrupt after a transfer."],
  clock: ["What unit measures clock frequency?", ["Hertz", "Bytes", "Volts", "Pixels"], "Hertz", "Hertz measures cycles per second."],
  firmware: ["Where is modern motherboard firmware commonly stored?", ["Flash memory", "VRAM", "CPU cache", "Network storage only"], "Flash memory", "UEFI firmware is commonly stored in flash memory."],
  cooling: ["What may happen when a processor overheats?", ["Thermal throttling", "Permanent RAM", "Wireless buses", "More storage capacity"], "Thermal throttling", "Processors can reduce speed to remain within safe temperatures."]
};

export const componentQuizzes = Object.fromEntries(Object.entries(quizTopics).map(([id, topic]) => [id, makeQuestions(id, [topic, quizFollowups[id]])]));

export function getQuizForComponent(id) {
  return componentQuizzes[id] || quizQuestions;
}
