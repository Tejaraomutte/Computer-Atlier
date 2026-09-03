export const comparisons = [
  {
    title: "RISC vs CISC",
    rows: [
      ["Instruction set", "Smaller and simpler", "Larger and more complex"],
      ["Instruction length", "Often fixed", "Often variable"],
      ["Control", "Often hardwired", "Often more complex"],
      ["Examples", "ARM, RISC-V", "x86 family"]
    ]
  },
  {
    title: "Harvard vs Von Neumann",
    rows: [
      ["Instruction/data memory", "Separate", "Shared"],
      ["Paths", "Separate", "Shared"],
      ["Flexibility", "Specialized", "General-purpose"],
      ["Common use", "Embedded/DSP", "General-purpose systems"]
    ]
  },
  {
    title: "Cache vs Main Memory",
    rows: [
      ["Speed", "Faster", "Slower"],
      ["Capacity", "Smaller", "Larger"],
      ["Cost per bit", "Higher", "Lower"],
      ["Purpose", "Reduce latency", "Working storage"]
    ]
  }
];
