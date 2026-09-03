import ArchitectureBlock from "./ArchitectureBlock.jsx";
export default function Memory(props) {
  return <ArchitectureBlock {...props} id="memory" label="MAIN MEMORY" position={props.position || [0, -3.1, 0]} color={props.color || "#22c55e"} />;
}
