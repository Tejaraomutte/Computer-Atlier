import ArchitectureBlock from "./ArchitectureBlock.jsx";
export default function Cache(props) {
  return <ArchitectureBlock {...props} id="cache" label="CACHE" position={props.position || [3, 0.8, 0]} color={props.color || "#f59e0b"} />;
}
