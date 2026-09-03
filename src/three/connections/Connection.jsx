import { Line } from "@react-three/drei";
export default function Connection({ start, end, active = false, color = "#64748b" }) {
  return <Line points={[start,end]} color={active ? "#22d3ee" : color} lineWidth={active ? 3 : 1.5} transparent opacity={active ? 1 : 0.45} />;
}
