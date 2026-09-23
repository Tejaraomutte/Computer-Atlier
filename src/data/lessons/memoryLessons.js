export const memoryLessons = [
  {
    id: "memory-hierarchy",
    title: "Memory Hierarchy",
    category: "Memory",
    summary: "Understand how registers, cache, main memory, and secondary storage work together to balance speed, cost, and capacity.",
    objectives: [
      "Explain the purpose of memory hierarchy.",
      "Compare speed, capacity, cost, and volatility across levels.",
      "Describe temporal and spatial locality and why they matter.",
      "Recognize how memory hierarchy reduces latency."
    ],
    diagramTitle: "CPU → Registers → Cache → Main Memory → Secondary Memory",
    sections: [
      {
        title: "Definition and purpose",
        text: "Memory hierarchy arranges storage devices in order of speed, cost per bit, and capacity. The CPU accesses the fastest memory first, while larger and slower memory stores larger volumes of data. This keeps active information close to the execution unit while allowing the system to hold vast amounts of information overall."
      },
      {
        title: "Hierarchy levels",
        text: "Registers are the fastest and smallest storage. Cache is a small and fast buffer that stores recently used data and instructions. Main memory holds active programs and data in RAM. Secondary memory, such as SSDs or HDDs, provides permanent storage at much lower cost per bit and much higher capacity."
      },
      {
        title: "Locality of reference",
        text: "Programs often show temporal locality, meaning the same data is reused soon after it is accessed, and spatial locality, meaning nearby memory addresses are accessed together. These patterns make caches effective because they keep likely future data near the processor."
      },
      {
        title: "Why the hierarchy matters",
        text: "The CPU-memory speed gap is large. If every instruction and operand had to come from slower memory, the processor would wait too often. The hierarchy reduces that wait by placing the most frequently used items in faster but more costly memory."
      }
    ],
    components: [
      { name: "Registers", explanation: "The fastest storage in the processor, used for immediate operands, addresses, and control information." },
      { name: "Cache", explanation: "A small, high-speed buffer that captures frequently used data and instructions." },
      { name: "Main memory", explanation: "The working memory for active programs; larger but slower than cache." },
      { name: "Secondary memory", explanation: "Long-term storage with high capacity and persistence but far slower access." }
    ],
    advantages: ["Improves performance by reducing memory latency.", "Balances cost and capacity across the system.", "Supports the CPU's speed and modern application demands."],
    limitations: ["Adds complexity to hardware and software design.", "Data must be moved between levels.", "Cache misses still occur and may reduce performance."],
    related: ["Main Memory", "Virtual Memory", "Secondary Memory", "CPU pipeline"],
    takeaways: ["The memory hierarchy exists because speed, cost, and capacity are in tension.", "The system keeps active data near the CPU and places bulk storage further away.", "Good locality is a major reason caches work so effectively."]
  },
  {
    id: "main-memory",
    title: "Main Memory",
    category: "Memory",
    summary: "Explore RAM, memory addresses, read and write operations, and the difference between SRAM and DRAM.",
    objectives: [
      "Define main memory and its role in a computer system.",
      "Explain memory addressing, bytes, words, and bus operation.",
      "Describe read and write cycles.",
      "Compare SRAM and DRAM."
    ],
    diagramTitle: "CPU → Address Bus → Memory Cells → Data Bus → CPU",
    sections: [
      {
        title: "Role of main memory",
        text: "Main memory stores the programs currently running and the data they are actively using. It is usually implemented with RAM, which provides fast random access. The CPU requests data by specifying an address, and the memory returns the contents of that location or stores new contents when a write takes place."
      },
      {
        title: "Addressing and organization",
        text: "Each memory location has a unique address. Memory is organized in cells, each storing a bit or a collection of bits. A byte is the usual unit of memory, and larger units such as words may be transferred as a group. The address bus carries the location to access, and the data bus carries the transferred value."
      },
      {
        title: "Read and write operations",
        text: "During a read, the CPU places an address on the address bus and asserts a read control signal. The memory decodes the address, selects the correct cells, and places the value on the data bus. During a write, the CPU sends both the address and new data, and the memory stores the value in the selected location."
      },
      {
        title: "SRAM vs DRAM",
        text: "SRAM uses bistable latches and is faster, but it is more expensive and consumes more power per bit. DRAM stores charge in capacitors and is denser and cheaper, which is why it is common as system RAM. Modern systems often use SRAM in cache and DRAM in main memory."
      }
    ],
    components: [
      { name: "Address bus", explanation: "Carries the memory location the CPU wants to access." },
      { name: "Data bus", explanation: "Transfers the value read from or written to memory." },
      { name: "Memory cells", explanation: "The basic storage units that retain a bit or set of bits." },
      { name: "Control signals", explanation: "Indicate whether the current operation is a read, write, or refresh cycle." }
    ],
    advantages: ["Fast random access", "Directly supports active program execution", "Flexible read-write operation"],
    limitations: ["Volatile", "Limited capacity relative to secondary storage", "More expensive per bit than persistent storage"],
    related: ["Memory hierarchy", "SRAM", "DRAM", "Addressing"],
    takeaways: ["Main memory is the working memory of a running system.", "The CPU accesses it by address, not by name.", "Memory technology choices balance speed, cost, and density."]
  },
  {
    id: "virtual-memory",
    title: "Virtual Memory",
    category: "Memory",
    summary: "Learn how the system maps a process's virtual address space onto physical RAM and secondary storage.",
    objectives: [
      "Explain why virtual memory is needed.",
      "Describe virtual addresses and physical addresses.",
      "Understand paging, page tables, and translation lookaside buffers.",
      "Explain page faults and demand paging."
    ],
    diagramTitle: "CPU → Virtual Address → MMU → TLB / Page Table → Physical Address → RAM",
    sections: [
      {
        title: "Why virtual memory exists",
        text: "A process needs a memory space that appears contiguous and larger than the physical memory available. Virtual memory creates that illusion by translating process addresses into real physical locations. This allows multiple programs to run concurrently and gives each process its own logical address space."
      },
      {
        title: "Paging and address translation",
        text: "Virtual memory is typically divided into pages, while physical memory is divided into frames. A virtual address contains a page number and a page offset. The Memory Management Unit (MMU) uses a page table to map each virtual page to a physical frame. A Translation Lookaside Buffer (TLB) speeds up this translation for recently used pages."
      },
      {
        title: "TLB hit and page fault",
        text: "If the virtual page is already cached in the TLB, the MMU can translate quickly. If it is missing, the MMU checks the page table. If the page is not currently in RAM, a page fault occurs and the operating system loads the page from secondary storage into RAM before execution resumes."
      },
      {
        title: "Relationship with storage",
        text: "Virtual memory extends the available working set beyond the physical RAM limit by storing inactive pages on SSD or HDD storage. The system swaps pages in and out as needed, which supports large programs and multitasking even when RAM is limited."
      }
    ],
    components: [
      { name: "Virtual address", explanation: "The address used by the process when it runs in its own logical address space." },
      { name: "MMU", explanation: "Performs address translation and enforces memory protection rules." },
      { name: "TLB", explanation: "A small cache of recent virtual-to-physical mappings to speed access." },
      { name: "Page table", explanation: "Maps virtual pages to physical frames and indicates whether a page is present in RAM." }
    ],
    advantages: ["Allows programs to use more memory than physical RAM.", "Isolates processes from one another.", "Supports multitasking and flexible memory allocation."],
    limitations: ["Adds translation overhead.", "Page faults can slow execution.", "Insufficient memory may cause thrashing if too much paging occurs."],
    related: ["Working set", "Paging", "MMU", "Secondary memory"],
    takeaways: ["Virtual memory hides physical memory limits from the running program.", "Address translation is a key service of the operating system and hardware.", "Paging bridges RAM and persistent storage when active program state exceeds physical memory."]
  },
  {
    id: "secondary-memory",
    title: "Secondary Memory",
    category: "Storage",
    summary: "Study persistent storage technologies, including SSD and HDD organization, access characteristics, and their role in virtual memory.",
    objectives: [
      "Explain the purpose of secondary memory.",
      "Differentiate HDD and SSD organization and behavior.",
      "Describe performance characteristics such as seek time and latency.",
      "Connect secondary storage to virtual memory and file storage."
    ],
    diagramTitle: "Virtual Memory → Page Fault → Secondary Storage → RAM → CPU",
    sections: [
      {
        title: "Purpose and non-volatility",
        text: "Secondary memory stores data and programs when the machine is powered off. Unlike RAM, it is non-volatile. It provides large capacity at relatively low cost per bit and serves as the long-term repository for the operating system, applications, and user files."
      },
      {
        title: "HDD organization",
        text: "A hard disk drive stores data on spinning platters. The read/write head moves across tracks while the spindle rotates the platters. Access time depends on seek time, rotational latency, and the physical distance to the requested sector. HDDs are value-oriented for large capacity and are slower than SSDs." 
      },
      {
        title: "SSD organization",
        text: "A solid-state drive stores data in NAND flash cells arranged in pages and blocks. An SSD controller manages read, write, wear leveling, and garbage collection. SSDs provide much lower latency and higher throughput than HDDs, while their internals remain more complex than a simple sequential device."
      },
      {
        title: "Storage and virtual memory",
        text: "Secondary memory is essential for virtual memory because it holds pages that are not currently resident in RAM. When a page fault occurs, the operating system loads that page from secondary storage into RAM. This lets the system continue running even when real RAM is insufficient for the full working set."
      }
    ],
    components: [
      { name: "HDD platters", explanation: "Magnetic disks where data is stored on circular surfaces." },
      { name: "SSD NAND flash", explanation: "Non-volatile memory cells that store bits electronically without moving parts." },
      { name: "Controller", explanation: "Coordinates read and write operations, wear leveling, and error handling." },
      { name: "Page fault path", explanation: "The operating system retrieves a missing page from secondary storage into RAM." }
    ],
    advantages: ["Very high capacity", "Persistent storage", "Supports virtual memory and file retention"],
    limitations: ["Much slower than RAM", "SSD wear is finite", "HDD latency is higher due to mechanical motion"],
    related: ["Virtual memory", "Paging", "NAND flash", "HDD vs SSD"],
    takeaways: ["Secondary storage is where large, persistent data lives.", "The system uses it as a backing store for memory management.", "The trade-off is capacity and persistence against lower speed and different reliability characteristics."]
  }
];
