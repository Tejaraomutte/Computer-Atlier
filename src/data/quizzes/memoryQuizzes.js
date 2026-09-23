export const memoryQuizBank = {
  "memory-hierarchy": [
    {
      id: 1,
      question: "Why is memory hierarchy used in modern processors?",
      options: [
        "To store data only in the processor",
        "To reduce the CPU's latency by keeping frequently used data near the execution units",
        "To eliminate the need for caches",
        "To keep all memory the same speed"
      ],
      answer: "To reduce the CPU's latency by keeping frequently used data near the execution units",
      explanation: "The hierarchy places small, fast memory close to the CPU while keeping large, slower memory for bulk storage. This reduces the time the processor waits for important data."
    },
    {
      id: 2,
      question: "Which memory level is typically the fastest?",
      options: ["Main memory", "Registers", "Cache", "Secondary storage"],
      answer: "Registers",
      explanation: "Registers sit inside the CPU and are the fastest storage level, but they hold only a small amount of data."
    },
    {
      id: 3,
      question: "What does temporal locality mean?",
      options: [
        "Data used recently is likely to be used again soon",
        "Nearby memory blocks are likely to be used together",
        "Memory access is always sequential",
        "Only code memory is reused"
      ],
      answer: "Data used recently is likely to be used again soon",
      explanation: "Temporal locality is the reuse of recently accessed data, a common pattern in loops and repeated operations."
    },
    {
      id: 4,
      question: "Which statement is correct about secondary memory?",
      options: [
        "It is usually the fastest memory level",
        "It is non-volatile and has much larger capacity than RAM",
        "It is located inside the CPU",
        "It has zero latency"
      ],
      answer: "It is non-volatile and has much larger capacity than RAM",
      explanation: "Secondary memory is slower than RAM but serves as the persistent store for large amounts of data and programs."
    },
    {
      id: 5,
      question: "Which combination best matches the memory hierarchy?",
      options: [
        "Registers → cache → main memory → secondary memory",
        "Secondary memory → cache → registers → main memory",
        "Cache → registers → secondary memory → main memory",
        "Main memory → registers → cache → secondary memory"
      ],
      answer: "Registers → cache → main memory → secondary memory",
      explanation: "Typically, the CPU accesses the fastest storage first, then the next level, and so on."
    }
  ],
  "main-memory": [
    {
      id: 1,
      question: "What is the main purpose of main memory?",
      options: [
        "To hold files permanently",
        "To provide the working storage for active programs and data",
        "To replace the CPU",
        "To decode instructions"
      ],
      answer: "To provide the working storage for active programs and data",
      explanation: "RAM provides the active working storage from which the processor reads instructions and data while a program executes."
    },
    {
      id: 2,
      question: "What does the address bus carry?",
      options: ["The data to be written", "The signal that says read or write", "The location to be accessed", "The clock signal"],
      answer: "The location to be accessed",
      explanation: "The address bus identifies the memory location the CPU wants to access."
    },
    {
      id: 3,
      question: "During a write operation, what is sent to memory?",
      options: ["Only the address", "The data and the address", "Only the control signal", "The program counter"],
      answer: "The data and the address",
      explanation: "A write operation sends the destination address and the data value to be stored."
    },
    {
      id: 4,
      question: "Which statement about SRAM is true?",
      options: [
        "It is slower and cheaper than DRAM",
        "It is faster but more expensive per bit than DRAM",
        "It is always used for main memory",
        "It is non-volatile"
      ],
      answer: "It is faster but more expensive per bit than DRAM",
      explanation: "SRAM is faster and more expensive per bit, so it is typically used for cache rather than the full main memory array."
    },
    {
      id: 5,
      question: "Why is DRAM common in main memory?",
      options: [
        "It is faster than SRAM",
        "It is denser and cheaper per bit",
        "It never needs refresh",
        "It stores instructions only"
      ],
      answer: "It is denser and cheaper per bit",
      explanation: "DRAM is denser and less expensive than SRAM, which makes it practical for large main memory systems."
    }
  ],
  "virtual-memory": [
    {
      id: 1,
      question: "Why do modern systems use virtual memory?",
      options: [
        "To avoid using RAM altogether",
        "To give each process a logical address space larger than physical memory and isolate memory usage",
        "To replace the CPU",
        "To make programs always run in cache"
      ],
      answer: "To give each process a logical address space larger than physical memory and isolate memory usage",
      explanation: "Virtual memory creates an abstraction that makes memory appear larger and more isolated than the physical RAM available."
    },
    {
      id: 2,
      question: "What is a page fault?",
      options: [
        "An arithmetic bug in the CPU",
        "An event when a referenced page is not present in RAM and must be loaded from secondary storage",
        "A failure of the cache",
        "A control signal in the ALU"
      ],
      answer: "An event when a referenced page is not present in RAM and must be loaded from secondary storage",
      explanation: "Page faults occur when requested pages are not resident in RAM and must be fetched from disk or SSD-backed storage."
    },
    {
      id: 3,
      question: "What does the TLB do?",
      options: [
        "Stores operating system code",
        "Speed up address translation by caching recent page mappings",
        "Controls the ALU",
        "Replaces main memory"
      ],
      answer: "Speed up address translation by caching recent page mappings",
      explanation: "The TLB caches recently used virtual-to-physical mappings to reduce repeated page-table lookups."
    },
    {
      id: 4,
      question: "What is the purpose of the MMU?",
      options: [
        "To execute arithmetic instructions",
        "To translate virtual addresses into physical addresses and enforce memory protection",
        "To store user files",
        "To connect the keyboard"
      ],
      answer: "To translate virtual addresses into physical addresses and enforce memory protection",
      explanation: "The MMU performs address translation and prevents one process from accessing another process's memory without permission."
    },
    {
      id: 5,
      question: "Which part of the virtual address identifies the page number?",
      options: ["The lower bits of the offset", "The page number field", "Only the control register", "The instruction register"],
      answer: "The page number field",
      explanation: "The page number selects the page in the page table, while the offset identifies the byte within the page."
    }
  ],
  "secondary-memory": [
    {
      id: 1,
      question: "Which of the following is true about secondary memory?",
      options: [
        "It is usually volatile",
        "It is non-volatile and intended for persistent storage",
        "It is always faster than RAM",
        "It has no cost-per-bit trade-off"
      ],
      answer: "It is non-volatile and intended for persistent storage",
      explanation: "Secondary memory keeps data even when power is off and is characterized by high capacity and persistence."
    },
    {
      id: 2,
      question: "Which storage technology uses spinning platters?",
      options: ["DRAM", "SRAM", "HDD", "NAND flash"],
      answer: "HDD",
      explanation: "Hard disk drives store data magnetically on spinning platters and move read/write heads across tracks."
    },
    {
      id: 3,
      question: "What is the role of wear leveling in SSDs?",
      options: [
        "To reduce the speed of the CPU",
        "To distribute writes across flash cells so no block wears out too quickly",
        "To store page tables",
        "To run instructions"
      ],
      answer: "To distribute writes across flash cells so no block wears out too quickly",
      explanation: "Wear leveling helps extend SSD lifetime by spreading writes across many cells instead of wearing a few cells heavily."
    },
    {
      id: 4,
      question: "How does secondary storage support virtual memory?",
      options: [
        "It holds pages that may not be in RAM and loads them on page faults",
        "It replaces the CPU during execution",
        "It speeds up arithmetic operations",
        "It eliminates the need for caches"
      ],
      answer: "It holds pages that may not be in RAM and loads them on page faults",
      explanation: "When a page is not resident in RAM, the operating system can retrieve it from secondary storage and swap it into memory."
    },
    {
      id: 5,
      question: "Which characteristic is usually better for SSDs than HDDs?",
      options: ["Capacity per dollar", "Mechanical latency", "Random access latency", "Non-volatility"],
      answer: "Random access latency",
      explanation: "SSDs generally have lower latency and higher throughput than HDDs because they do not rely on moving mechanical parts."
    }
  ]
};

export const architectureQuizBank = {
  "von-neumann": [
    {
      id: 1,
      question: "In the Von Neumann model, where are instructions and data stored?",
      options: ["Separate memories", "The same main memory", "Only in cache", "Only in registers"],
      answer: "The same main memory",
      explanation: "The defining property of the Von Neumann architecture is a shared memory for both instructions and data."
    },
    {
      id: 2,
      question: "What is the main bottleneck associated with this architecture?",
      options: ["Short bus width", "Single shared memory path for instruction and data traffic", "Too many registers", "No ALU"],
      answer: "Single shared memory path for instruction and data traffic",
      explanation: "The shared bus and single memory space can create contention between instruction fetches and data transfers."
    },
    {
      id: 3,
      question: "Which stage comes immediately after decode in the basic instruction cycle?",
      options: ["Fetch", "Execute", "Output", "Reset"],
      answer: "Execute",
      explanation: "The standard instruction cycle is fetch, decode, execute, memory access/write back, then the next instruction."
    }
  ],
  harvard: [
    {
      id: 1,
      question: "Which statement best describes Harvard architecture?",
      options: [
        "Instructions and data use the same memory path",
        "Instruction memory and data memory are separate",
        "It has no CPU",
        "It uses only secondary memory"
      ],
      answer: "Instruction memory and data memory are separate",
      explanation: "Harvard architecture separates instruction and data storage, often with separate buses as well."
    },
    {
      id: 2,
      question: "Why can Harvard designs allow better throughput in some systems?",
      options: [
        "Because the CPU never fetches instructions",
        "Because instruction fetch and data access can occur independently",
        "Because all data is stored in registers",
        "Because there are no buses"
      ],
      answer: "Because instruction fetch and data access can occur independently",
      explanation: "Independent instruction and data paths can allow parallel access when the system is designed for it."
    }
  ],
  pipelined: [
    {
      id: 1,
      question: "Which subsystem is responsible for execution?",
      options: ["Secondary storage", "CPU", "Input only", "Cache only"],
      answer: "CPU",
      explanation: "The CPU runs instructions and coordinates the execution of the system."
    },
    {
      id: 2,
      question: "Why is cache placed close to the processor?",
      options: [
        "To reduce the cost of memory",
        "To provide high-speed access to frequently used instructions and data",
        "To replace main memory",
        "To hide input devices"
      ],
      answer: "To provide high-speed access to frequently used instructions and data",
      explanation: "Cache is placed near the CPU to reduce access latency for current working data."
    }
  ]
};
