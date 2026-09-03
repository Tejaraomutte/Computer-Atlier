import { useEffect, useRef, useState } from "react";
import ArchitectureScene from "../../three/scene/ArchitectureScene.jsx";
import ControlToolbar from "./ControlToolbar.jsx";
import ViewerTip from "./ViewerTip.jsx";
import Hotspot from "./Hotspot.jsx";
import { getComponent } from "../../data/architectureData.js";
import useViewer from "../../hooks/useViewer.js";

export default function ArchitectureViewer({ selected, onSelect }) {
  const controlsRef = useRef();
  const { isolated, setIsolated, dataFlow, setDataFlow, layers, setLayers } = useViewer();
  const [layersOpen, setLayersOpen] = useState(false);
  const [viewMode, setViewMode] = useState("3d");
  const [selectedPart, setSelectedPart] = useState(null);
  const [selectedView, setSelectedView] = useState("overview");
  const item = getComponent(selected);
  const activePart = item.media.parts.find((part) => part.id === selectedPart);
  const activeView = item.media.views.find((view) => view.id === selectedView) || item.media.views[0];

  useEffect(() => {
    setSelectedPart(null);
    setSelectedView("overview");
    setViewMode("3d");
  }, [selected]);

  function reset() {
    controlsRef.current?.reset();
    setIsolated(null);
    setDataFlow(false);
  }

  function isolate() {
    setIsolated((value) => value === selected ? null : selected);
  }

  function zoomIn() {
    const c = controlsRef.current;
    if (c?.object) c.object.position.multiplyScalar(0.88);
  }

  return (
    <main className="viewer-panel">
      <ControlToolbar
        onReset={reset}
        onIsolate={isolate}
        onLayers={() => setLayersOpen((v) => !v)}
        onFlow={() => setDataFlow((v) => !v)}
        onZoom={zoomIn}
      />
      {layersOpen && (
        <div className="layers-popup">
          <h4>ARCHITECTURE LAYERS</h4>
          {Object.entries(layers).map(([key, value]) => (
            <label className="layer-option" key={key}>
              <input type="checkbox" checked={value} onChange={() => setLayers((prev) => ({...prev, [key]: !prev[key]}))}/>
              {key[0].toUpperCase() + key.slice(1)}
            </label>
          ))}
        </div>
      )}
      <ViewerTip />
      <div className="canvas-container">
        {viewMode === "3d" ? <ArchitectureScene selected={selected} onSelect={onSelect} isolated={isolated} layers={layers} dataFlow={dataFlow} controlsRef={controlsRef} /> : (
          <section className="image-viewer" aria-label={`${item.name} image viewer`}>
            <div className="image-viewer-heading"><span>COMPONENT VIEW</span><strong>{activePart?.name || item.name}</strong></div>
            <div className="image-view-selector" role="group" aria-label="Component image view">
              {item.media.views.map((view) => <button key={view.id} type="button" className={selectedView === view.id ? "active" : ""} onClick={() => { setSelectedView(view.id); setSelectedPart(null); }}>{view.label}</button>)}
            </div>
            <div className="component-image-wrap">
              <img src={activePart?.image || activeView.image} alt={activePart?.name || `${item.name} ${activeView.label.toLowerCase()}`} />
              {item.media.parts.map((part) => <Hotspot key={part.id} position={part.position} label={part.name} color={item.color} onClick={() => setSelectedPart(part.id)} />)}
            </div>
            <div className="image-viewer-caption">{activePart ? <button type="button" onClick={() => setSelectedPart(null)}>Back to overview</button> : "Select a dot to inspect a part"}</div>
          </section>
        )}
      </div>
      <div className="viewer-mode-switch" role="group" aria-label="Viewer mode">
        <button type="button" className={viewMode === "3d" ? "active" : ""} onClick={() => setViewMode("3d")}>3D scene</button>
        <button type="button" className={viewMode === "image" ? "active" : ""} onClick={() => setViewMode("image")}>Image view</button>
      </div>
      <div className="viewer-footer">3D ARCHITECTURE · DRAG TO ROTATE · SCROLL TO ZOOM · CLICK TO EXPLORE</div>
    </main>
  );
}
