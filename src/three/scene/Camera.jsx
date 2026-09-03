import { PerspectiveCamera } from "@react-three/drei";
export default function Camera() { return <PerspectiveCamera makeDefault position={[9, 6.5, 11]} fov={45} near={0.1} far={100} />; }
