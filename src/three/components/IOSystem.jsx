import ArchitectureBlock from "./ArchitectureBlock.jsx";
export default function IOSystem(props) {
  return <ArchitectureBlock {...props} id="io" label="I/O" position={props.position || [5.2,-1.3,0]} color={props.color || "#14b8a6"} />;
}
