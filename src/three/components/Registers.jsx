import ArchitectureBlock from "./ArchitectureBlock.jsx";
export default function Registers(props) {
  return <ArchitectureBlock {...props} id="registers" label="REGISTERS" position={props.position || [-3, 0.8, 0]} color={props.color || "#a855f7"} />;
}
