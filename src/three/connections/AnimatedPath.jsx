import { Line } from "@react-three/drei";
export default function AnimatedPath({ points, color = "#22d3ee" }) {
  return <Line points={points} color={color} lineWidth={3} transparent opacity={0.8} />;
}
