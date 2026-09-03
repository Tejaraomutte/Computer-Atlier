import { OrbitControls } from "@react-three/drei";
export default function OrbitController({ controlsRef }) {
  return <OrbitControls ref={controlsRef} makeDefault enableRotate enableZoom enablePan enableDamping dampingFactor={0.08} minDistance={5} maxDistance={16} />;
}
