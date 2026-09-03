export const INSTRUCTION_STAGES = ["Fetch", "Decode", "Execute", "Memory", "Write Back"];

export function getStageDescription(stage) {
  const descriptions = {
    Fetch: "The CPU reads the next instruction from memory.",
    Decode: "The Control Unit interprets the instruction.",
    Execute: "The ALU or another execution unit performs the operation.",
    Memory: "The processor accesses memory when the instruction requires it.",
    "Write Back": "The result is written to a register or destination."
  };
  return descriptions[stage] || "";
}

export function nextStage(current) {
  const index = INSTRUCTION_STAGES.indexOf(current);
  return INSTRUCTION_STAGES[Math.min(index + 1, INSTRUCTION_STAGES.length - 1)];
}

export function previousStage(current) {
  const index = INSTRUCTION_STAGES.indexOf(current);
  return INSTRUCTION_STAGES[Math.max(index - 1, 0)];
}

export function cacheResult(address, cachedAddresses = []) {
  const normalized = String(address).trim().toLowerCase();
  return cachedAddresses.map(String).map((x) => x.toLowerCase()).includes(normalized)
    ? "HIT"
    : "MISS";
}

export function pipelinePosition(stageIndex, cycle) {
  return cycle - stageIndex;
}
