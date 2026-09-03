export default function Lighting() {
  return <>
    <ambientLight intensity={0.55} />
    <directionalLight position={[6,10,7]} intensity={2.2} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
    <pointLight position={[-5,3,4]} intensity={1.2} />
  </>;
}
