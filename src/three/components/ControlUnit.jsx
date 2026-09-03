import ArchitectureBlock from "./ArchitectureBlock.jsx";
export default function ControlUnit(props) {
  return <ArchitectureBlock {...props} id="control" label="CONTROL UNIT" position={props.position || [0, 2.7, 0]} color={props.color || "#3b82f6"} />;
}
