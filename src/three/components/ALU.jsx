import ArchitectureBlock from "./ArchitectureBlock.jsx";
export default function ALU(props) {
  return <ArchitectureBlock {...props} id="alu" label="ALU" position={props.position || [0, 0.8, 0]} color={props.color || "#ec4899"} />;
}
