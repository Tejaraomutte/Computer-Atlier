import { getLocalizedComponent } from "./i18n.js";

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
  "system-architecture": {
    overview: "/images/motherboard.png",
    parts: [
      { id: "cpu", name: "Central Processing Unit (CPU)", role: "Primary Computation & Execution", functioning: "Fetches, decodes, and executes program instructions, managing arithmetic computations and coordinating data flow across all system buses.", signal: "CLK / INSTR / ADDR / DATA", image: "/images/cpu.png" },
      { id: "memory", name: "Main Memory (RAM)", role: "Primary Working Memory", functioning: "Stores currently running operating system processes, application code, and runtime memory buffers for rapid random access by the processor.", signal: "DDR5 / 64-BIT BUS", image: "/images/ram.png" },
      { id: "bus", name: "System Interconnect Bus", role: "High-Speed Data Highway", functioning: "Transfers bidirectional data, target addresses, and coordination control signals between the CPU, memory subsystem, and high-speed peripherals.", signal: "PCIe / DMI / CONTROL", image: "/images/systembus.png" },
      { id: "gpu", name: "Graphics Processing Unit (GPU)", role: "Parallel Acceleration Engine", functioning: "Accelerates matrix computations, 3D graphics rendering, and machine learning pipelines across thousands of SIMD shader cores.", signal: "PCIe x16 / DISPLAY BUS", image: "/images/gpu.png" },
      { id: "storage", name: "Storage Subsystem (NVMe/SSD)", role: "Persistent Non-Volatile Storage", functioning: "Permanently retains OS files, installed applications, and user data across system shutdowns using high-speed multi-channel NAND flash.", signal: "NVMe 4.0 / PCIe x4", image: "/images/ssd.png" },
      { id: "io-controller", name: "I/O & Peripheral Controller", role: "Device Arbitration & Bridging", functioning: "Manages communication protocols and hardware interrupts for USB devices, network interfaces, audio codecs, and storage controllers.", signal: "IRQ / USB / SATA", image: "/images/inputoutput.png" }
    ]
  },
  cpu: {
    overview: "/images/cpu.png",
    parts: [
      { id: "control-unit", name: "Control Unit (CU)", role: "Instruction Flow & Sequencing", functioning: "Retrieves instructions from cache/memory, decodes their opcode bit patterns, and directs data movement across the execution pipeline.", signal: "MICRO_OP / DECODE", image: "/images/cu.png" },
      { id: "registers", name: "Register File", role: "Single-Cycle Internal Storage", functioning: "Ultra-fast on-die flip-flop memory cells holding instruction pointers (PC), memory addresses (MAR), and active arithmetic operands.", signal: "REG_READ / REG_WRITE", image: "/images/registers.png" },
      { id: "alu", name: "Arithmetic Logic Unit (ALU)", role: "Mathematical & Boolean Computation", functioning: "Executes fundamental binary arithmetic (addition, subtraction, multiplication) and logical operations (AND, OR, XOR, shifts) on operand words.", signal: "ALU_RESULT / FLAGS", image: "/images/alu.png" },
      { id: "cache", name: "L1 / L2 Cache Memory", role: "Low-Latency Data & Instruction Buffer", functioning: "Maintains high-speed local copies of frequently referenced memory blocks to avoid costly off-chip DRAM latency penalties.", signal: "TAG_MATCH / HIT_MISS", image: "/images/cache.png" },
      { id: "bus-interface", name: "Bus Interface Unit (BIU)", role: "External Bus Transaction Controller", functioning: "Drives physical address lines and coordinates memory read/write requests and DMA arbitration with the motherboard chipset.", signal: "MEM_RD / MEM_WR / READY", image: "/images/cpu.png" }
    ]
  },
  control: {
    overview: "/images/cu.png",
    parts: [
      { id: "instruction-decoder", name: "Instruction Decoder", role: "Binary Opcode Translation", functioning: "Splits fetched machine instructions into opcode, addressing modes, and operand registers, activating matching internal control lines.", signal: "OPCODE_BUS / EXEC_LINE", image: "/images/cu.png" },
      { id: "sequencer", name: "State Machine & Timing Sequencer", role: "Clock Cycle Step Generation", functioning: "Steps the CPU through sequential T-states (Fetch, Decode, Execute, Memory, Writeback) synchronously with the processor clock pulse.", signal: "T_STATE_0..4 / CLK_SYNC", image: "/images/cu.png" },
      { id: "microcode-engine", name: "Microcode ROM & Control Matrix", role: "Micro-Operation Generation", functioning: "Emits sequences of hardware micro-instructions that orchestrate multiplexers, ALU functions, and register transfer gates for complex opcodes.", signal: "UOP_DISPATCH / MICRO_PC", image: "/images/cu.png" },
      { id: "branch-logic", name: "Branch & Condition Evaluation Unit", role: "Jump & Branch Target Computation", functioning: "Evaluates condition flags (Zero, Carry, Sign, Overflow) to calculate jump targets and branch decisions for Program Counter updates.", signal: "BRANCH_TAKEN / PC_LOAD", image: "/images/cu.png" }
    ]
  },
  registers: {
    overview: "/images/registers.png",
    parts: [
      { id: "program-counter", name: "Program Counter (PC)", role: "Instruction Pointer", functioning: "Holds the memory address of the next instruction to fetch; automatically increments each cycle unless overridden by jumps or interrupts.", signal: "ADDR_PTR / PC_INC", image: "/images/registers.png" },
      { id: "instruction-register", name: "Instruction Register (IR)", role: "Current Opcode Latch", functioning: "Temporarily latches the raw instruction bytes retrieved from memory while the control unit decodes and coordinates execution.", signal: "DATA_IN / OPCODE_OUT", image: "/images/registers.png" },
      { id: "mar", name: "Memory Address Register (MAR)", role: "Bus Address Buffer", functioning: "Latches and outputs target memory or I/O port addresses directly onto the external address bus for read and write operations.", signal: "ADDR_BUS_DRIVE", image: "/images/registers.png" },
      { id: "mdr", name: "Memory Data Register (MDR)", role: "Bidirectional Data Latch", functioning: "Serves as a temporary holding buffer for data being transferred between the CPU's internal datapath and the external data bus.", signal: "DATA_LATCH / BUS_TRANS", image: "/images/registers.png" },
      { id: "general-registers", name: "General Purpose Registers (GPR / ACC)", role: "Working Computation Scratchpad", functioning: "High-speed multi-port register array (R0-R15 / RAX-RDX) accessible in a single clock cycle for immediate ALU arithmetic and indexing.", signal: "SRC1 / SRC2 / DEST", image: "/images/registers.png" }
    ]
  },
  alu: {
    overview: "/images/alu.png",
    parts: [
      { id: "adder-subtractor", name: "Arithmetic Adder / Subtractor", role: "High-Speed Binary Math", functioning: "Performs binary addition and two's complement subtraction using fast carry-lookahead circuitry to minimize propagation delays.", signal: "ADD / SUB / CARRY_OUT", image: "/images/alu.png" },
      { id: "logic-array", name: "Bitwise Logic Gate Matrix", role: "Boolean Logic Evaluation", functioning: "Applies parallel bitwise Boolean transformations (AND, OR, XOR, NOT, NAND) across multi-bit words for masking and comparisons.", signal: "LOGIC_OUT / BIT_MASK", image: "/images/alu.png" },
      { id: "barrel-shifter", name: "Barrel Shifter & Rotator", role: "Multi-Bit Shift & Rotate", functioning: "Shifts or rotates data words left or right by arbitrary bit counts in a single clock cycle, accelerating multiplication, division, and bit packing.", signal: "LSL / LSR / ASR / ROR", image: "/images/alu.png" },
      { id: "status-flags", name: "Status Flags Register (CCR)", role: "Arithmetic Condition Flags", functioning: "Latches condition flags (Zero Z, Carry C, Negative N, Overflow V) reflecting the outcome of the latest calculation for conditional jumps.", signal: "FLAG_Z / C / N / V", image: "/images/alu.png" }
    ]
  },
  cache: {
    overview: "/images/cache.png",
    parts: [
      { id: "cache-lines", name: "Data SRAM Line Arrays", role: "High-Density Fast Block Store", functioning: "Organized into associative sets of 64-byte cache lines built with multi-transistor SRAM cells to deliver multi-gigabyte/sec throughput.", signal: "LINE_DATA_64B", image: "/images/cache.png" },
      { id: "tag-directory", name: "Tag Directory & Comparators", role: "Address Lookup & Match Logic", functioning: "Extracts upper address bits from incoming memory requests and compares them in parallel against cached tags to flag a hit or miss.", signal: "TAG_MATCH / HIT_MISS", image: "/images/cache.png" },
      { id: "cache-controller", name: "Cache Controller & Replacement Logic", role: "Eviction & Write Policy Manager", functioning: "Enforces LRU (Least Recently Used) replacement algorithms, manages line eviction, and directs write-back and write-through operations.", signal: "EVICT_LINE / WRITE_BACK", image: "/images/cache.png" },
      { id: "snoop-logic", name: "MESI Cache Coherency Unit", role: "Multi-Core Cache Synchronization", functioning: "Monitors interconnect bus transactions to maintain cache consistency across multiple processor cores using the MESI/MOESI protocol.", signal: "MESI_INVALIDATE / SNOOP", image: "/images/cache.png" }
    ]
  },
  bus: {
    overview: "/images/systembus.png",
    parts: [
      { id: "data-bus", name: "Bidirectional Data Bus Lines", role: "Operand & Instruction Carrier", functioning: "Parallel conductive traces that transport raw data bytes and machine instructions bidirectionally between the CPU, memory, and devices.", signal: "DATA[0..63] BIDIR", image: "/images/systembus.png" },
      { id: "address-bus", name: "Unidirectional Address Bus Lines", role: "Target Location Identifier", functioning: "Carries memory and I/O register address bits from the active bus master to select specific hardware bytes or control ports.", signal: "ADDR[0..47] SELECT", image: "/images/systembus.png" },
      { id: "control-bus", name: "Control & Timing Bus Lines", role: "Transaction Synchronization", functioning: "Transmits command and handshake pulses (Memory Read, Memory Write, I/O Read, I/O Write, Interrupts, Ready) across connected chips.", signal: "MEM_RD# / MEM_WR# / IO", image: "/images/systembus.png" },
      { id: "bus-arbiter", name: "Bus Master Arbiter", role: "Access Contention Resolution", functioning: "Prioritizes and grants bus access among competing bus masters (CPU cores, GPU, DMA channels) to prevent bus collisions and starvation.", signal: "BUS_REQ# / BUS_GNT#", image: "/images/systembus.png" }
    ]
  },
  memory: {
    overview: "/images/ram.png",
    parts: [
      { id: "dram-cells", name: "DRAM Capacitor Storage Matrix", role: "High-Density Bit Cells", functioning: "Microscopic capacitors paired with single access transistors (1T-1C) that store individual electrical charges representing digital bits.", signal: "BITLINE / CHARGE_LEVEL", image: "/images/ram.png" },
      { id: "row-decoder", name: "Row Address Decoder (RAS)", role: "Wordline Row Activation", functioning: "Decodes the row address received during RAS activation, turning on the corresponding wordline across memory columns.", signal: "RAS# / ROW_ACTIVATE", image: "/images/ram.png" },
      { id: "column-decoder", name: "Column Address Decoder (CAS)", role: "Bitline Multiplexing", functioning: "Selects specific bitline column pairs from the opened row buffer, routing data words to the memory chip's output pins.", signal: "CAS# / COL_SELECT", image: "/images/ram.png" },
      { id: "sense-amps", name: "Sense Amplifier Array", role: "Signal Detection & Cell Restoration", functioning: "Detects tiny micro-volt charges on bitlines when a cell is read, amplifies them to full CMOS logic levels, and restores cell charge.", signal: "SENSE_EN / RESTORE", image: "/images/ram.png" },
      { id: "refresh-timer", name: "Automatic Refresh Controller", role: "Capacitor Charge Maintenance", functioning: "Periodically activates all DRAM rows every 64 milliseconds to prevent capacitor charge leakage from corrupting stored memory data.", signal: "AUTO_REFRESH_PULSE", image: "/images/ram.png" }
    ]
  },
  gpu: {
    overview: "/images/gpu.png",
    parts: [
      { id: "shader-cores", name: "Streaming Multiprocessors (SM)", role: "Massive SIMD Compute Array", functioning: "Massively parallel processing blocks containing FP32/INT32 execution units that calculate vertex transformations and pixel lighting in parallel.", signal: "WARP_EXEC / SIMD_PIPELINE", image: "/images/gpu.png" },
      { id: "vram", name: "High-Speed Video RAM (GDDR6 / HBM)", role: "Dedicated Frame & Texture Buffer", functioning: "Ultra-wide memory channels delivering up to 1 TB/s bandwidth to feed textures, polygon geometry, and framebuffers to shader cores.", signal: "GDDR6_PHY / WIDE_BUS", image: "/images/gpu.png" },
      { id: "rasterizer", name: "Geometry & Rasterization Engine", role: "Vector-to-Pixel Transformation", functioning: "Converts 3D polygon triangles into 2D screen fragments, performing depth (Z-buffer) testing, face culling, and pixel interpolation.", signal: "Z_TEST / FRAG_GEN", image: "/images/gpu.png" },
      { id: "display-engine", name: "Display Output Controller", role: "Pixel Streaming & Protocol Output", functioning: "Scans active framebuffers out of VRAM, applies color correction, and serializes pixels into high-speed HDMI or DisplayPort streams.", signal: "DP_LANE[0..3] / HDMI_TMDS", image: "/images/gpu.png" }
    ]
  },
  motherboard: {
    overview: "/images/motherboard.png",
    parts: [
      { id: "cpu-socket", name: "CPU Socket & Power Grid", role: "Processor Physical Interconnect", functioning: "Provides thousands of gold-plated pins delivering multi-phase DC power, memory controller traces, and direct PCIe lanes to the CPU.", signal: "LGA_PINS / VCORE_RAILS", image: "/images/motherboard.png" },
      { id: "chipset", name: "Chipset / Platform Controller Hub (PCH)", role: "Secondary Subsystem Router", functioning: "Bridges lower-speed SATA ports, audio codecs, USB controllers, and legacy buses to the processor via high-speed DMI links.", signal: "DMI_BUS / PCH_ROUTER", image: "/images/motherboard.png" },
      { id: "pcie-slots", name: "PCIe Expansion Slots (x16 / x4)", role: "Modular Add-in Card Slots", functioning: "High-speed differential serial lanes accommodating graphics cards, high-performance sound cards, and secondary NVMe expansion cards.", signal: "PCIe_LANE_TX / RX", image: "/images/motherboard.png" },
      { id: "vrm", name: "Voltage Regulator Module (VRM)", role: "Multi-Phase DC-DC Step-Down", functioning: "Uses PWM buck controllers and high-efficiency MOSFETs to step down 12V from the PSU into clean, ripple-free ~1.2V core power.", signal: "PWM_PHASE / BUCK_FILTER", image: "/images/motherboard.png" }
    ]
  },
  storage: {
    overview: "/images/ssd.png",
    parts: [
      { id: "nand-flash", name: "3D NAND Flash Memory Blocks", role: "Non-Volatile Charge Trap Storage", functioning: "Vertically stacked floating-gate or charge-trap flash cells that trap electrons to store digital data permanently without power.", signal: "PAGE_PROG / BLOCK_ERASE", image: "/images/ssd.png" },
      { id: "flash-controller", name: "Flash Memory Controller ASIC", role: "Flash Translation & ECC Engine", functioning: "Executes the Flash Translation Layer (FTL), handles wear leveling across flash blocks, and corrects read bit errors via LDPC ECC.", signal: "FTL_TRANSLATE / LDPC_CORR", image: "/images/ssd.png" },
      { id: "dram-buffer", name: "DRAM Cache Buffer", role: "Lookup Table & Write Cache", functioning: "High-speed volatile RAM buffer that caches the FTL address mapping tables and temporarily absorbs incoming write bursts.", signal: "CACHE_BURST / WRITE_QUEUE", image: "/images/ssd.png" },
      { id: "host-interface", name: "PCIe / NVMe Host Interface", role: "High-Throughput Host Bus Link", functioning: "Implements NVMe submission and completion queues directly over PCIe 4.0/5.0 lanes, achieving multiple gigabytes per second of transfer.", signal: "NVMe_QUEUE / PCIe_DMA", image: "/images/ssd.png" }
    ]
  },
  psu: {
    overview: "/images/psu.png",
    parts: [
      { id: "transformer", name: "AC-to-DC Step-Down Transformer", role: "High-Voltage Isolation & Conversion", functioning: "Steps down 115V/230V alternating current from wall electrical sockets to manageable low-voltage alternating current.", signal: "AC_MAINS / ISOLATED_AC", image: "/images/psu.png" },
      { id: "switching-reg", name: "PWM Switching Regulator & Rectifier", role: "High-Efficiency DC Rectification", functioning: "Converts alternating current to direct current using high-frequency MOSFET switches and inductors operating at over 90% efficiency.", signal: "PWM_FEEDBACK / DC_FILTER", image: "/images/psu.png" },
      { id: "power-rails", name: "Dedicated DC Voltage Rails", role: "Component Power Distribution", functioning: "Supplies dedicated, clean voltage lines: +12V for CPU and GPU, +5V for storage drives and USB ports, and +3.3V for motherboard logic.", signal: "+12V / +5V / +3.3V / GND", image: "/images/psu.png" },
      { id: "protection-ic", name: "Protection Supervisory Circuit (OVP/OCP/SCP)", role: "Hardware Safety Shutdown", functioning: "Continuously checks rail voltages, current draw, and temperature, cutting main power instantly if a short circuit or surge occurs.", signal: "PWR_OK / FAULT_TRIP", image: "/images/psu.png" }
    ]
  },
  "io-controller": {
    overview: "/images/inputoutput.png",
    parts: [
      { id: "transceiver", name: "Protocol Physical Layer Transceivers", role: "Electrical Signal Transmission", functioning: "Transmits and receives differential serial bit signals for USB, SATA, and PCIe peripheral connections.", signal: "DIFF_TX / DIFF_RX", image: "/images/inputoutput.png" },
      { id: "fifo-buffers", name: "Packet FIFO Buffers & Queues", role: "Rate Mismatch Absorption", functioning: "Elastic First-In First-Out hardware buffers that temporarily hold data packets to prevent data overrun during speed discrepancies.", signal: "FIFO_RD / FIFO_WR / FULL", image: "/images/inputoutput.png" },
      { id: "interrupt-logic", name: "Interrupt Request (IRQ) Controller", role: "Asynchronous CPU Event Signaler", functioning: "Monitors peripheral device ready lines and asserts interrupt requests to alert the processor that an I/O event needs immediate servicing.", signal: "IRQ_LINE / INTA_ACK", image: "/images/inputoutput.png" },
      { id: "csr-registers", name: "Command & Status Registers (CSR)", role: "Device Driver Control Interface", functioning: "Memory-mapped register ports through which device drivers write operation commands and read status information and error flags.", signal: "CSR_READ / CSR_WRITE", image: "/images/inputoutput.png" }
    ]
  },
  network: {
    overview: "/images/nic.png",
    parts: [
      { id: "phy-transceiver", name: "Ethernet PHY Transceiver", role: "Analog Signal Encoding & Decoding", functioning: "Converts digital bitstreams into differential analog voltage pulses suitable for transmission over Cat6 copper twisted pairs.", signal: "1000BASE-T / MDIX_PULSE", image: "/images/nic.png" },
      { id: "mac-controller", name: "Media Access Controller (MAC)", role: "Frame Formatting & Checksum Verification", functioning: "Encapsulates outgoing data into Ethernet frames, calculates CRC-32 checksums, and filters incoming frames by MAC hardware address.", signal: "FRAME_TX / CRC32 / RX_EN", image: "/images/nic.png" },
      { id: "packet-fifo", name: "Packet FIFO Buffers (SRAM)", role: "Burst Absorption & Queueing", functioning: "Dual-port SRAM buffers holding incoming network bursts and outgoing packet queues until the host or wire is ready to receive.", signal: "RX_FIFO / TX_FIFO", image: "/images/nic.png" },
      { id: "dma-offload", name: "Network DMA Ring Engine", role: "Direct Zero-Copy Host Memory Transfer", functioning: "Transfers packet payloads directly to OS memory buffers without consuming CPU compute cycles, firing an IRQ when complete.", signal: "RING_DESC / HOST_DMA", image: "/images/nic.png" }
    ]
  },
  mmu: {
    overview: "/images/mmu.png",
    parts: [
      { id: "tlb", name: "Translation Lookaside Buffer (TLB)", role: "Virtual-to-Physical Address Cache", functioning: "Associative content-addressable memory that caches recent virtual-to-physical address mappings, translating addresses in a single cycle.", signal: "TLB_HIT / PHYS_PAGE", image: "/images/mmu.png" },
      { id: "page-walker", name: "Hardware Page Table Walker", role: "Multi-Level Table Traversal", functioning: "Traverses multi-level page tables (PML4/PML5) in physical memory on TLB misses to retrieve page table entries.", signal: "CR3_BASE / PTE_LOAD", image: "/images/mmu.png" },
      { id: "protection-unit", name: "Access Permission & Ring Check", role: "Privilege Level Enforcement", functioning: "Compares requested memory accesses against page table permission flags (Read/Write, User/Supervisor, No-Execute NX) to safeguard memory.", signal: "PROT_FAULT / RING_VERIFY", image: "/images/mmu.png" },
      { id: "fault-generator", name: "Page Fault Interrupt Generator", role: "Kernel Trap Signal", functioning: "Fires Interrupt 14 (#PF) to signal the operating system when a requested page is not present in RAM or an access violation occurs.", signal: "#PF / EXCEPTION_14", image: "/images/mmu.png" }
    ]
  },
  dma: {
    overview: "/images/dma.png",
    parts: [
      { id: "channel-regs", name: "DMA Channel Control Registers", role: "Transfer Parameter Storage", functioning: "Stores the base source address, target destination address, and remaining byte count for independent direct memory copy operations.", signal: "SRC_ADDR / DST_ADDR / LEN", image: "/images/dma.png" },
      { id: "burst-engine", name: "Burst Transfer Engine", role: "Autonomous High-Speed Data Copy", functioning: "Generates sequential memory addresses and burst read/write signals across the system bus without passing data through CPU registers.", signal: "BURST_RD / BURST_WR", image: "/images/dma.png" },
      { id: "arbiter-handshake", name: "Bus Request / Grant Arbiter", role: "CPU Bus Master Handshake", functioning: "Asserts the HOLD signal to request bus ownership from the CPU and waits for the HLDA acknowledge signal before initiating transfers.", signal: "HOLD_REQ / HLDA_ACK", image: "/images/dma.png" },
      { id: "tc-interrupt", name: "Terminal Count Interrupt Logic", role: "Completion & Status Reporting", functioning: "Monitors the transfer byte counter and fires a Terminal Count (TC) interrupt to notify the operating system that the transfer has completed.", signal: "TC_INT / STATUS_DONE", image: "/images/dma.png" }
    ]
  },
  clock: {
    overview: "/images/systemclock.png",
    parts: [
      { id: "crystal-oscillator", name: "Quartz Crystal Resonator", role: "Piezoelectric Base Reference Pulse", functioning: "Vibrates mechanically under an applied electrical voltage to generate a steady, ultra-accurate 100 MHz reference clock pulse.", signal: "OSC_OUT_100MHz", image: "/images/systemclock.png" },
      { id: "pll-multiplier", name: "Phase-Locked Loop (PLL)", role: "Frequency Synthesizer & Multiplier", functioning: "Multiplies the 100 MHz reference clock up to multiple gigahertz operating frequencies needed by modern processor cores.", signal: "PLL_VCO / CORE_CLK", image: "/images/systemclock.png" },
      { id: "clock-tree", name: "Balanced Clock Distribution Tree", role: "Low-Skew Clock Routing", functioning: "Symmetrical branching distribution network that delivers sharp clock edges to billions of transistors simultaneously with near-zero clock skew.", signal: "H_TREE / SKEW_SYNC", image: "/images/systemclock.png" },
      { id: "clock-gating", name: "Dynamic Clock Gating Unit", role: "Power & Heat Conservation Switch", functioning: "Dynamically disables the clock signal to inactive CPU cores and ALU functional units, cutting dynamic power consumption and heat.", signal: "GATE_EN / SLEEP_CLK", image: "/images/systemclock.png" }
    ]
  },
  firmware: {
    overview: "/images/firmware.png",
    parts: [
      { id: "spi-rom", name: "SPI NOR Flash ROM", role: "Non-Volatile System Firmware Storage", functioning: "Contains permanent UEFI / BIOS boot code, power-on diagnostics, ACPI tables, and platform hardware configuration profiles.", signal: "SPI_SCK / MISO / MOSI", image: "/images/firmware.png" },
      { id: "post-engine", name: "Power-On Self-Test (POST) Engine", role: "Hardware Diagnostic Verification", functioning: "Validates CPU internal state, tests memory channel stability, enumerates PCIe buses, and reports errors via POST hex codes or beeps.", signal: "POST_CODE / DIAG_OK", image: "/images/firmware.png" },
      { id: "dxe-dispatcher", name: "Driver Execution Environment (DXE)", role: "Modular Hardware Initialization", functioning: "Loads UEFI firmware drivers into RAM to initialize graphical display consoles, USB keyboards, and storage controllers.", signal: "DXE_LOAD / PROTOCOL_INIT", image: "/images/firmware.png" },
      { id: "boot-manager", name: "UEFI Boot Manager & OS Handoff", role: "Operating System Kernel Loader", functioning: "Scans GUID Partition Table (GPT) disks for EFI boot partitions, loads the OS bootloader into memory, and hands over CPU execution.", signal: "EXIT_BOOT_SERVICES", image: "/images/firmware.png" }
    ]
  },
  cooling: {
    overview: "/images/cooling.png",
    parts: [
      { id: "vapor-heatpipes", name: "Copper Coldplate & Vapor Heatpipes", role: "Phase-Change Heat Extraction", functioning: "Absorbs heat from the CPU integrated heat spreader; liquid inside sealed copper vacuum pipes evaporates and carries heat rapidly away.", signal: "THERMAL_CONDUCTION", image: "/images/cooling.png" },
      { id: "fin-stack", name: "High-Density Aluminum Fin Stack", role: "Ambient Dissipation Surface", functioning: "Multiplies available cooling surface area hundreds of times, transferring heat from heatpipes into ambient passing air.", signal: "HEAT_CONVECTION", image: "/images/cooling.png" },
      { id: "pwm-fan", name: "PWM Static-Pressure Fan / Pump", role: "Forced Convection Airflow", functioning: "Spins high-pressure impeller blades using a 4-pin PWM signal to force cool ambient air across the radiator fins or circulate liquid coolant.", signal: "PWM_DUTY / TACH_RPM", image: "/images/cooling.png" },
      { id: "thermal-sensors", name: "Silicon Thermal Diode Array", role: "Dynamic Temperature Monitoring", functioning: "Monitors junction temperatures across CPU cores in real-time, signaling the motherboard controller to adjust fan speeds or trigger thermal throttling.", signal: "PROCHOT# / DTS_TEMP", image: "/images/cooling.png" }
    ]
  }
};

function getMedia(id) {
  const media = componentMedia[id] || componentMedia["system-architecture"] || componentMedia.cpu;
  const count = media.parts.length;
  return {
    overview: media.overview,
    views: [
      { id: "overview", label: "Overview", image: media.overview },
      { id: "detail", label: "Detail", image: media.overview }
    ],
    parts: media.parts.map((part, index) => {
      const left = count > 1 ? 16 + (index * 68) / (count - 1) : 50;
      const isTop = index % 2 === 0;
      return {
        ...part,
        position: [left, isTop ? 22 : 78]
      };
    })
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

export function getComponent(id = "cpu", language = "en") {
  const item = architectureComponents.find((component) => component.id === id) || architectureComponents[0];
  const full = { ...item, media: getMedia(item.id) };
  return getLocalizedComponent(full, language);
}
