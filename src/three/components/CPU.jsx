import ArchitectureBlock from "./ArchitectureBlock.jsx";
export default function CPU(props) {
  return <ArchitectureBlock {...props} id="cpu" label="CPU" position={props.position || [0, 3.8, 0]} color={props.color || "#8b5cf6"} />;
}
