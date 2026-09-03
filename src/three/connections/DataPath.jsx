import Connection from "./Connection.jsx";
const paths = [
  [[0,2.3,0],[0,1.2,0]],
  [[-3,0.4,0],[0,-0.95,0]],
  [[0,0.4,0],[0,-0.95,0]],
  [[3,0.4,0],[0,-0.95,0]],
  [[0,-1.5,0],[0,-2.55,0]]
];
export default function DataPath({ activeId }) {
  return <>{paths.map(([start,end], i) => <Connection key={i} start={start} end={end} active={Boolean(activeId)} />)}</>;
}
