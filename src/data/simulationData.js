export const instructionStages = [
  ["Fetch", "Get the next instruction from memory."],
  ["Decode", "Interpret the instruction and determine required operands."],
  ["Execute", "Perform the requested arithmetic, logic or control operation."],
  ["Memory", "Read from or write to memory when required."],
  ["Write Back", "Store the final result in the destination."]
];

export const cacheExamples = [
  { address: "0x100", result: "HIT", note: "Requested data is already in cache." },
  { address: "0x2F0", result: "MISS", note: "Data must be fetched from main memory." },
  { address: "0x100", result: "HIT", note: "The recently used block is cached." }
];
