export function getLayerForComponent(id) {
  const layers = {
    cpu: "cpu",
    control: "cpu",
    registers: "datapath",
    alu: "datapath",
    cache: "memory",
    bus: "system",
    memory: "memory",
    io: "system"
  };
  return layers[id] || "system";
}

export function formatComponentName(id) {
  return String(id)
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function componentIsVisible(id, layers) {
  return layers[getLayerForComponent(id)] !== false;
}

export function getComponentColor(id) {
  const colors = {
    cpu: "#8b5cf6",
    control: "#3b82f6",
    registers: "#a855f7",
    alu: "#ec4899",
    cache: "#f59e0b",
    bus: "#22d3ee",
    memory: "#22c55e",
    io: "#14b8a6"
  };
  return colors[id] || "#8b5cf6";
}

export function getModelPath(id) {
  const paths = {
    cpu: "/models/cpu/cpu.glb",
    alu: "/models/cpu/alu.glb",
    control: "/models/cpu/control-unit.glb",
    registers: "/models/cpu/registers.glb",
    cache: "/models/cpu/cache.glb",
    memory: "/models/memory/ram.glb",
    io: "/models/computer/computer-system.glb"
  };
  return paths[id] || null;
}
