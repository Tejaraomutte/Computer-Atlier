import ArchitectureLibrary from "../components/explorer/ArchitectureLibrary.jsx";
import ArchitectureViewer from "../components/explorer/ArchitectureViewer.jsx";
import InfoPanel from "../components/information/InfoPanel.jsx";
import { useArchitectureContext } from "../context/ArchitectureContext.jsx";

export default function Explorer() {
  const { selected, setSelected } = useArchitectureContext();

  return (
    <main className="explorer-layout">
      <ArchitectureLibrary selected={selected} onSelect={setSelected} />
      <ArchitectureViewer selected={selected} onSelect={setSelected} />
      <InfoPanel selected={selected} />
    </main>
  );
}
