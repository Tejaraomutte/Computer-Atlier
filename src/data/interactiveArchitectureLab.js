export const architectureLabCategories = [
  "All",
  "Processing",
  "Memory",
  "Motherboard / Communication",
  "Storage",
  "Power / Hardware Support",
  "Architecture"
];

export const architectureLabComponents = {
  cpu: {
    id: "cpu",
    name: "CPU",
    category: "Processing",
    image: "/images/cpu.png",
    description: "The central processing unit executes instructions and coordinates the system.",
    facts: [
      ["Purpose", "Execute instructions"],
      ["Main parts", "Control Unit, ALU, Registers"],
      ["Role", "Coordinate computation"]
    ],
    hotspots: [
      {
        id: "control-unit",
        name: "Control Unit",
        x: 35,
        y: 38,
        width: 22,
        height: 20,
        description: "Controls and coordinates all CPU activities by fetching, decoding, and timing instructions."
      },
      {
        id: "registers",
        name: "Registers",
        x: 24,
        y: 62,
        width: 28,
        height: 22,
        description: "Stores temporary values such as addresses, operands, and results used during execution."
      },
      {
        id: "alu",
        name: "ALU",
        x: 52,
        y: 62,
        width: 24,
        height: 22,
        description: "Performs arithmetic and logic operations such as addition, subtraction, comparison, and logic checks."
      },
      {
        id: "cache",
        name: "Cache",
        x: 68,
        y: 52,
        width: 22,
        height: 20,
        description: "Keeps frequently used data close to the CPU to reduce memory latency."
      },
      {
        id: "buses",
        name: "Buses",
        x: 46,
        y: 14,
        width: 28,
        height: 18,
        description: "Carries address, data, and control information between major components."
      }
    ]
  },
  "control-unit": {
    id: "control-unit",
    name: "Control Unit",
    category: "Processing",
    image: "/images/cpu.png",
    description: "The control unit fetches instructions and generates the signals needed to execute them in the correct order.",
    facts: [
      ["Purpose", "Coordinate execution"],
      ["Inputs", "Instructions and timing"],
      ["Outputs", "Control signals"]
    ],
    hotspots: [
      {
        id: "instruction-register",
        name: "Instruction Register",
        x: 24,
        y: 42,
        width: 20,
        height: 20,
        description: "Temporarily holds the currently fetched instruction before decoding."
      },
      {
        id: "instruction-decoder",
        name: "Instruction Decoder",
        x: 47,
        y: 42,
        width: 22,
        height: 22,
        description: "Decodes the instruction and identifies what operation is required."
      },
      {
        id: "sequencer",
        name: "Sequencer",
        x: 46,
        y: 66,
        width: 22,
        height: 18,
        description: "Determines the order of micro-operations for the current instruction."
      },
      {
        id: "timing-unit",
        name: "Timing Unit",
        x: 70,
        y: 62,
        width: 20,
        height: 18,
        description: "Maintains the timing and synchronization needed for correct execution."
      },
      {
        id: "program-counter",
        name: "Program Counter",
        x: 54,
        y: 18,
        width: 20,
        height: 20,
        description: "Holds the address of the next instruction to execute."
      }
    ]
  },
  registers: {
    id: "registers",
    name: "Registers",
    category: "Processing",
    image: "/images/cpu.png",
    description: "Registers provide the CPU with ultra-fast temporary storage for operands, addresses, and instructions.",
    facts: [
      ["Purpose", "Temporary storage"],
      ["Speed", "Very fast"],
      ["Examples", "PC, IR, MAR, MDR"]
    ],
    hotspots: [
      {
        id: "program-counter",
        name: "Program Counter",
        x: 20,
        y: 30,
        width: 18,
        height: 18,
        description: "Tracks the address of the next instruction to fetch."
      },
      {
        id: "instruction-register",
        name: "Instruction Register",
        x: 38,
        y: 30,
        width: 18,
        height: 18,
        description: "Holds the instruction currently being decoded."
      },
      {
        id: "mar",
        name: "Memory Address Register",
        x: 56,
        y: 30,
        width: 18,
        height: 18,
        description: "Contains the memory location the CPU wants to access."
      },
      {
        id: "mdr",
        name: "Memory Data Register",
        x: 70,
        y: 30,
        width: 18,
        height: 18,
        description: "Holds data read from or written to memory."
      },
      {
        id: "accumulator",
        name: "Accumulator",
        x: 46,
        y: 62,
        width: 22,
        height: 18,
        description: "Stores intermediate results for arithmetic or logic operations."
      }
    ]
  },
  cache: {
    id: "cache",
    name: "Cache Memory",
    category: "Memory",
    image: "/images/cache.png",
    description: "Cache memory stores frequently used data closer to the CPU so it can be accessed with lower latency.",
    facts: [
      ["Purpose", "Reduce latency"],
      ["Levels", "L1, L2, L3"],
      ["Speed", "Fast but small"]
    ],
    hotspots: [
      {
        id: "l1",
        name: "L1 Cache",
        x: 25,
        y: 36,
        width: 20,
        height: 22,
        description: "The smallest and fastest cache, placed nearest the execution core."
      },
      {
        id: "l2",
        name: "L2 Cache",
        x: 48,
        y: 38,
        width: 20,
        height: 22,
        description: "Larger than L1 and still much closer than main memory."
      },
      {
        id: "l3",
        name: "L3 Cache",
        x: 68,
        y: 38,
        width: 20,
        height: 22,
        description: "Shared cache used to improve access to hot data across cores."
      },
      {
        id: "cache-controller",
        name: "Cache Controller",
        x: 48,
        y: 66,
        width: 24,
        height: 18,
        description: "Checks whether data is present and decides whether to fetch from lower memory."
      }
    ]
  },
  "system-bus": {
    id: "system-bus",
    name: "System Bus",
    category: "Motherboard / Communication",
    image: "/images/architecture.png",
    description: "The system bus carries addresses, data, and control signals between the CPU, memory, and peripherals.",
    facts: [
      ["Purpose", "Transfer information"],
      ["Types", "Address, Data, Control"],
      ["Use", "Communicate between modules"]
    ],
    hotspots: [
      {
        id: "address-bus",
        name: "Address Bus",
        x: 18,
        y: 42,
        width: 22,
        height: 18,
        description: "Carries memory addresses so the CPU can identify where data is stored or read."
      },
      {
        id: "data-bus",
        name: "Data Bus",
        x: 50,
        y: 42,
        width: 22,
        height: 18,
        description: "Carries the actual data transferred between components."
      },
      {
        id: "control-bus",
        name: "Control Bus",
        x: 78,
        y: 42,
        width: 22,
        height: 18,
        description: "Carries control and timing signals such as read, write, and interrupt requests."
      }
    ]
  },
  alu: {
    id: "alu",
    name: "ALU",
    category: "Processing",
    image: "/images/architecture.png",
    description: "The arithmetic logic unit processes arithmetic and logical operations on data.",
    facts: [
      ["Purpose", "Perform arithmetic and logic"],
      ["Examples", "ADD, SUB, AND, OR"],
      ["Output", "Result and flags"]
    ],
    hotspots: [
      {
        id: "operand-a",
        name: "Operand A",
        x: 20,
        y: 28,
        width: 18,
        height: 20,
        description: "One input value used in arithmetic or logic operations."
      },
      {
        id: "operand-b",
        name: "Operand B",
        x: 48,
        y: 28,
        width: 18,
        height: 20,
        description: "The second operand paired with the first during execution."
      },
      {
        id: "operation-selector",
        name: "Operation Selector",
        x: 40,
        y: 58,
        width: 24,
        height: 18,
        description: "Chooses which operation the ALU should perform according to control signals."
      },
      {
        id: "status-flags",
        name: "Status Flags",
        x: 75,
        y: 58,
        width: 18,
        height: 18,
        description: "Reports condition results such as zero, carry, overflow, or negative."
      }
    ]
  },
  ram: {
    id: "ram",
    name: "RAM",
    category: "Memory",
    image: "/images/memory.png",
    description: "Random access memory stores data and instructions temporarily while programs are running.",
    facts: [
      ["Purpose", "Temporary program storage"],
      ["Volatile", "Yes"],
      ["Access", "Fast random access"]
    ],
    hotspots: [
      {
        id: "memory-chips",
        name: "Memory Chips",
        x: 28,
        y: 35,
        width: 24,
        height: 26,
        description: "Store the actual data and instructions in electronic cells."
      },
      {
        id: "pcb",
        name: "PCB",
        x: 53,
        y: 36,
        width: 18,
        height: 18,
        description: "The printed circuit board connects the memory chips and support electronics."
      },
      {
        id: "gold-contacts",
        name: "Gold Contacts",
        x: 77,
        y: 34,
        width: 16,
        height: 18,
        description: "Provide the electrical contact between the memory module and the motherboard."
      }
    ]
  },
  gpu: {
    id: "gpu",
    name: "GPU",
    category: "Processing",
    image: "/images/architecture.png",
    description: "A graphics processing unit accelerates parallel workloads and renders visual output efficiently.",
    facts: [
      ["Purpose", "Parallel computation"],
      ["Strong at", "Graphics and AI"],
      ["Memory", "VRAM"]
    ],
    hotspots: [
      {
        id: "gpu-core",
        name: "GPU Core",
        x: 38,
        y: 48,
        width: 24,
        height: 22,
        description: "Contains many small cores that perform parallel computations simultaneously."
      },
      {
        id: "vram",
        name: "VRAM",
        x: 20,
        y: 25,
        width: 18,
        height: 18,
        description: "Stores image data and temporary frame buffers close to the GPU."
      },
      {
        id: "memory-controller",
        name: "Memory Controller",
        x: 62,
        y: 52,
        width: 22,
        height: 20,
        description: "Coordinates data transfer between the GPU core and memory."
      },
      {
        id: "cooling-system",
        name: "Cooling System",
        x: 72,
        y: 24,
        width: 18,
        height: 18,
        description: "Maintains safe thermal conditions during heavy rendering and compute loads."
      }
    ]
  },
  motherboard: {
    id: "motherboard",
    name: "Motherboard",
    category: "Motherboard / Communication",
    image: "/images/architecture.png",
    description: "The motherboard is the main circuit board that connects major components and provides shared communication pathways.",
    facts: [
      ["Purpose", "Connect system parts"],
      ["Includes", "CPU socket, RAM slots, chipset"],
      ["Role", "System platform"]
    ],
    hotspots: [
      {
        id: "cpu-socket",
        name: "CPU Socket",
        x: 38,
        y: 36,
        width: 22,
        height: 18,
        description: "Holds the processor and connects it to the board."
      },
      {
        id: "ram-slots",
        name: "RAM Slots",
        x: 46,
        y: 62,
        width: 20,
        height: 18,
        description: "Accept memory modules that provide working storage for the processor."
      },
      {
        id: "chipset",
        name: "Chipset",
        x: 64,
        y: 44,
        width: 20,
        height: 18,
        description: "Manages communication between the CPU, memory, and connected devices."
      },
      {
        id: "pcie-slots",
        name: "PCIe Slots",
        x: 24,
        y: 62,
        width: 18,
        height: 18,
        description: "Allow GPUs, SSDs, and other expansion cards to connect to the system."
      }
    ]
  },
  psu: {
    id: "psu",
    name: "Power Supply Unit",
    category: "Power / Hardware Support",
    image: "/images/architecture.png",
    description: "The power supply converts AC to regulated DC and delivers stable power to the system.",
    facts: [
      ["Purpose", "Power conversion"],
      ["Inputs", "AC wall power"],
      ["Outputs", "Stable DC rails"]
    ],
    hotspots: [
      {
        id: "rectifier",
        name: "Rectifier",
        x: 28,
        y: 42,
        width: 18,
        height: 18,
        description: "Converts alternating current into a useable direct current form."
      },
      {
        id: "capacitor-bank",
        name: "Capacitor Bank",
        x: 48,
        y: 42,
        width: 18,
        height: 18,
        description: "Smooths and stabilizes the voltage supplied to internal circuits."
      },
      {
        id: "cooling-fan",
        name: "Cooling Fan",
        x: 70,
        y: 44,
        width: 18,
        height: 18,
        description: "Keeps the PSU cool during sustained electrical conversion."
      }
    ]
  },
  ssd: {
    id: "ssd",
    name: "SSD",
    category: "Storage",
    image: "/images/memory.png",
    description: "Solid-state drives store data electronically and provide fast, durable storage without moving parts.",
    facts: [
      ["Purpose", "Persistent storage"],
      ["Speed", "Much faster than HDD"],
      ["Type", "Flash memory"]
    ],
    hotspots: [
      {
        id: "nand-flash",
        name: "NAND Flash",
        x: 30,
        y: 36,
        width: 24,
        height: 24,
        description: "Stores data persistently without requiring constant power."
      },
      {
        id: "controller-chip",
        name: "Controller Chip",
        x: 50,
        y: 38,
        width: 22,
        height: 22,
        description: "Manages read, write, wear leveling, and error correction."
      },
      {
        id: "nvme-connector",
        name: "NVMe Connector",
        x: 76,
        y: 42,
        width: 18,
        height: 18,
        description: "Connects the SSD to the motherboard through a high-speed interface."
      }
    ]
  },
  "io-controller": {
    id: "io-controller",
    name: "I/O Controller",
    category: "Motherboard / Communication",
    image: "/images/architecture.png",
    description: "The I/O controller manages communication between the CPU and connected external devices.",
    facts: [
      ["Purpose", "Manage devices"],
      ["Examples", "USB, SATA, audio, display"],
      ["Signals", "Interrupts and buffers"]
    ],
    hotspots: [
      {
        id: "usb-controller",
        name: "USB Controller",
        x: 24,
        y: 34,
        width: 18,
        height: 18,
        description: "Handles USB traffic between the CPU and connected devices."
      },
      {
        id: "network-controller",
        name: "Network Controller",
        x: 48,
        y: 34,
        width: 18,
        height: 18,
        description: "Manages ethernet or wireless device communication."
      },
      {
        id: "dma-controller",
        name: "DMA Controller",
        x: 72,
        y: 34,
        width: 18,
        height: 18,
        description: "Moves high-speed data between devices and memory without constant CPU involvement."
      }
    ]
  },
  nic: {
    id: "nic",
    name: "NIC",
    category: "Motherboard / Communication",
    image: "/images/architecture.png",
    description: "A network interface card allows a computer to connect to a network and transmit data over wired or wireless links.",
    facts: [
      ["Purpose", "Network connectivity"],
      ["Media", "Ethernet or Wi-Fi"],
      ["Identity", "MAC address"]
    ],
    hotspots: [
      {
        id: "network-controller-chip",
        name: "Network Controller Chip",
        x: 38,
        y: 42,
        width: 22,
        height: 22,
        description: "Handles data transmission, network framing, and protocol processing."
      },
      {
        id: "rj45-port",
        name: "RJ45 Port",
        x: 20,
        y: 70,
        width: 18,
        height: 18,
        description: "Connects the NIC to a wired network cable."
      },
      {
        id: "crystal-oscillator",
        name: "Crystal Oscillator",
        x: 72,
        y: 24,
        width: 18,
        height: 18,
        description: "Provides the clock reference used for timing and synchronization."
      }
    ]
  },
  mmu: {
    id: "mmu",
    name: "MMU",
    category: "Memory",
    image: "/images/memory.png",
    description: "The memory management unit translates virtual addresses into physical addresses and enforces memory protection.",
    facts: [
      ["Purpose", "Translate addresses"],
      ["Key tool", "TLB"],
      ["Benefit", "Memory isolation"]
    ],
    hotspots: [
      {
        id: "page-table-walker",
        name: "Page Table Walker",
        x: 28,
        y: 38,
        width: 20,
        height: 20,
        description: "Finds the right translation from virtual to physical memory addresses."
      },
      {
        id: "tlb",
        name: "TLB",
        x: 46,
        y: 38,
        width: 18,
        height: 18,
        description: "Caches recently used virtual-to-physical mappings for faster access."
      },
      {
        id: "protection-unit",
        name: "Access Protection",
        x: 68,
        y: 38,
        width: 22,
        height: 18,
        description: "Keeps processes isolated and prevents memory violations."
      }
    ]
  },
  dma: {
    id: "dma",
    name: "DMA Controller",
    category: "Motherboard / Communication",
    image: "/images/architecture.png",
    description: "DMA controllers transfer data directly between devices and memory without CPU copying overhead.",
    facts: [
      ["Purpose", "Faster transfers"],
      ["Benefit", "CPU free for other tasks"],
      ["Use", "Storage, networking, audio"]
    ],
    hotspots: [
      {
        id: "dma-registers",
        name: "DMA Registers",
        x: 26,
        y: 38,
        width: 22,
        height: 18,
        description: "Store source, destination, length, and transfer control data."
      },
      {
        id: "address-generator",
        name: "Address Generator",
        x: 50,
        y: 38,
        width: 22,
        height: 18,
        description: "Generates the memory addresses used during a data transfer."
      },
      {
        id: "bus-interface",
        name: "Bus Interface",
        x: 76,
        y: 38,
        width: 18,
        height: 18,
        description: "Communicates with the system bus and connected devices."
      }
    ]
  },
  clock: {
    id: "clock",
    name: "System Clock",
    category: "Power / Hardware Support",
    image: "/images/cpu.png",
    description: "The system clock creates regular timing pulses that keep all components synchronized.",
    facts: [
      ["Purpose", "Synchronize operations"],
      ["Unit", "Hertz"],
      ["Role", "Timing reference"]
    ],
    hotspots: [
      {
        id: "quartz-crystal",
        name: "Quartz Crystal",
        x: 28,
        y: 38,
        width: 22,
        height: 20,
        description: "Vibrates at a precise frequency and provides the base timing signal."
      },
      {
        id: "oscillator-ic",
        name: "Oscillator IC",
        x: 50,
        y: 38,
        width: 22,
        height: 20,
        description: "Amplifies and shapes the pulse signal for the whole system."
      },
      {
        id: "clock-output",
        name: "Clock Output",
        x: 74,
        y: 38,
        width: 18,
        height: 18,
        description: "Sends timing pulses to the motherboard and connected devices." 
      }
    ]
  },
  firmware: {
    id: "firmware",
    name: "Firmware",
    category: "Power / Hardware Support",
    image: "/images/architecture.png",
    description: "Firmware is low-level software stored in non-volatile memory that initializes and controls hardware.",
    facts: [
      ["Purpose", "Boot and initialize"],
      ["Examples", "BIOS, UEFI"],
      ["Storage", "Flash memory"]
    ],
    hotspots: [
      {
        id: "flash-memory",
        name: "Flash Memory",
        x: 36,
        y: 44,
        width: 24,
        height: 22,
        description: "Stores the firmware in non-volatile memory."
      },
      {
        id: "bios-uefi",
        name: "BIOS / UEFI",
        x: 52,
        y: 44,
        width: 22,
        height: 22,
        description: "Contains the startup routines and low-level hardware control code."
      },
      {
        id: "spi-interface",
        name: "SPI Interface",
        x: 73,
        y: 44,
        width: 18,
        height: 18,
        description: "Connects firmware storage to the CPU or chipset for execution."
      }
    ]
  },
  cooling: {
    id: "cooling",
    name: "Cooling System",
    category: "Power / Hardware Support",
    image: "/images/architecture.png",
    description: "Cooling systems remove waste heat so processors and other components remain stable and efficient.",
    facts: [
      ["Purpose", "Prevent overheating"],
      ["Methods", "Fans, heat sinks, liquid cooling"],
      ["Need", "Maintain performance"]
    ],
    hotspots: [
      {
        id: "heat-sink",
        name: "Heat Sink",
        x: 26,
        y: 38,
        width: 22,
        height: 20,
        description: "Spreads heat away from the chip and into the surrounding airflow."
      },
      {
        id: "fan",
        name: "Fan",
        x: 50,
        y: 38,
        width: 20,
        height: 20,
        description: "Moves air across the heat sink to increase cooling effectiveness."
      },
      {
        id: "thermal-paste",
        name: "Thermal Paste",
        x: 72,
        y: 38,
        width: 18,
        height: 18,
        description: "Improves heat transfer between the chip and the heat sink."
      }
    ]
  },
  "von-neumann": {
    id: "von-neumann",
    name: "Von Neumann Architecture",
    category: "Architecture",
    image: "/images/architecture.png",
    description: "Instructions and data share one memory space, and the CPU fetches them sequentially through the same path.",
    facts: [
      ["Memory", "Single shared memory"],
      ["Execution", "Sequential fetch and decode"],
      ["Use", "General-purpose computers"]
    ],
    hotspots: [
      {
        id: "main-memory",
        name: "Main Memory",
        x: 50,
        y: 18,
        width: 22,
        height: 18,
        description: "Stores both program instructions and runtime data in the same memory space."
      },
      {
        id: "cpu",
        name: "CPU",
        x: 50,
        y: 50,
        width: 22,
        height: 18,
        description: "Fetches, decodes, and executes instructions from the shared memory."
      },
      {
        id: "system-bus",
        name: "System Bus",
        x: 50,
        y: 76,
        width: 22,
        height: 18,
        description: "Carries addresses, data, and control signals between memory and the processor."
      }
    ]
  },
  harvard: {
    id: "harvard",
    name: "Harvard Architecture",
    category: "Architecture",
    image: "/images/architecture.png",
    description: "Harvard design separates instruction and data memory so the two traffic streams can be handled independently.",
    facts: [
      ["Memory", "Separate instruction and data memory"],
      ["Paths", "Independent buses"],
      ["Use", "Embedded and DSP systems"]
    ],
    hotspots: [
      {
        id: "instruction-memory",
        name: "Instruction Memory",
        x: 30,
        y: 28,
        width: 20,
        height: 18,
        description: "Stores the program instructions to be fetched by the processor."
      },
      {
        id: "data-memory",
        name: "Data Memory",
        x: 68,
        y: 28,
        width: 20,
        height: 18,
        description: "Stores variables and runtime data separately from the program instructions."
      },
      {
        id: "instruction-bus",
        name: "Instruction Bus",
        x: 38,
        y: 66,
        width: 18,
        height: 18,
        description: "Carries instructions to the processor without mixing them with data traffic."
      },
      {
        id: "data-bus",
        name: "Data Bus",
        x: 62,
        y: 66,
        width: 18,
        height: 18,
        description: "Carries data values to and from data memory."
      }
    ]
  },
  pipeline: {
    id: "pipeline",
    name: "Pipelined Processor",
    category: "Architecture",
    image: "/images/pipeline.png",
    description: "A pipelined processor overlaps instruction stages so different instructions can proceed at the same time.",
    facts: [
      ["Goal", "Increase throughput"],
      ["Stages", "IF, ID, EX, MEM, WB"],
      ["Benefit", "Higher instruction rate"]
    ],
    hotspots: [
      {
        id: "if-stage",
        name: "Instruction Fetch",
        x: 18,
        y: 40,
        width: 18,
        height: 20,
        description: "Fetches the next instruction from memory."
      },
      {
        id: "id-stage",
        name: "Instruction Decode",
        x: 36,
        y: 40,
        width: 18,
        height: 20,
        description: "Decodes the instruction and reads operands."
      },
      {
        id: "ex-stage",
        name: "Execute",
        x: 54,
        y: 40,
        width: 18,
        height: 20,
        description: "Performs the required arithmetic or logical work."
      },
      {
        id: "mem-stage",
        name: "Memory Access",
        x: 72,
        y: 40,
        width: 18,
        height: 20,
        description: "Reads or writes data in memory if needed."
      }
    ]
  }
};

export const architectureLabOrder = [
  "cpu",
  "control-unit",
  "registers",
  "cache",
  "system-bus",
  "alu",
  "ram",
  "gpu",
  "motherboard",
  "psu",
  "ssd",
  "io-controller",
  "nic",
  "mmu",
  "dma",
  "clock",
  "firmware",
  "cooling",
  "von-neumann",
  "harvard",
  "pipeline"
];
