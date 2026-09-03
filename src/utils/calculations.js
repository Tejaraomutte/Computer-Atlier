export function percentage(part, total) {
  if (!total) return 0;
  return Math.round((part / total) * 100);
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function binaryToDecimal(binary) {
  return parseInt(String(binary).replace(/\s/g, ""), 2);
}

export function decimalToBinary(decimal, bits = 8) {
  return Number(decimal).toString(2).padStart(bits, "0");
}

export function hexToDecimal(hex) {
  return parseInt(String(hex).replace(/^0x/i, ""), 16);
}

export function decimalToHex(decimal) {
  return `0x${Number(decimal).toString(16).toUpperCase()}`;
}

export function aluCalculate(a, b, operation) {
  switch (operation) {
    case "ADD": return a + b;
    case "SUB": return a - b;
    case "AND": return a & b;
    case "OR": return a | b;
    case "XOR": return a ^ b;
    default: return 0;
  }
}
