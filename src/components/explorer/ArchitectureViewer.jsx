import { useEffect, useRef, useState } from "react";
import ArchitectureScene from "../../three/scene/ArchitectureScene.jsx";
import ControlToolbar from "./ControlToolbar.jsx";
import ViewerTip from "./ViewerTip.jsx";
import Hotspot from "./Hotspot.jsx";
import StructuralDiagram from "./StructuralDiagram.jsx";
import { getComponent } from "../../data/architectureData.js";
import useViewer from "../../hooks/useViewer.js";
import useArchitecture from "../../hooks/useArchitecture.js";

export default function ArchitectureViewer({ selected, onSelect }) {
  const controlsRef = useRef();
  const viewerRef = useRef(null);
  const { t } = useArchitecture();
  const { isolated, setIsolated, dataFlow, setDataFlow, layers, setLayers } = useViewer();
  const [layersOpen, setLayersOpen] = useState(false);
  const [viewMode, setViewMode] = useState("description");
  const [systemViewMode, setSystemViewMode] = useState("description");
  const [selectedPart, setSelectedPart] = useState(null);
  const item = getComponent(selected);
  const activePart = item.media.parts.find((part) => part.id === selectedPart);

  useEffect(() => {
    setSelectedPart(null);
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

  const componentImageOptions = {
    "system-architecture": ["/images/motherboard.png"],
    cpu: ["/images/cpu.png"],
    control: ["/images/cu.png"],
    registers: ["/images/registers.png"],
    alu: ["/images/alu.png"],
    cache: ["/images/cache.png"],
    bus: ["/images/systembus.png"],
    memory: ["/images/ram.png"],
    gpu: ["/images/gpu.png"],
    motherboard: ["/images/motherboard.png"],
    storage: ["/images/ssd.png"],
    psu: ["/images/psu.png"],
    "io-controller": ["/images/inputoutput.png"],
    network: ["/images/nic.png"],
    mmu: ["/images/mmu.png"],
    dma: ["/images/dma.png"],
    clock: ["/images/systemclock.png"],
    firmware: ["/images/firmware.png"],
    cooling: ["/images/cooling.png"]
  };

  const selectedImage = componentImageOptions[selected]?.[0] || "/images/cpu.png";
  const isSystemArchitecture = selected === "system-architecture";
  const isCpuImageScene = !isSystemArchitecture && Boolean(componentImageOptions[selected]);
  const stageTitle = item?.name || "CPU";
  const stageSubtitle = item?.tagline || item?.description || "Complete architecture information";
  const showSystemDescription = isSystemArchitecture && systemViewMode === "description";
  const showSystemImageView = isSystemArchitecture && systemViewMode === "image";

  return (
    <main className="viewer-panel">
      {isCpuImageScene && (
        <div className="viewer-asset-header">
          <span className="viewer-asset-kicker">COMPLETE INFORMATION</span>
          <h2>{stageTitle}</h2>
          <p>{stageSubtitle}</p>
        </div>
      )}
      <div className="canvas-container">
        {isSystemArchitecture ? (
          showSystemDescription ? (
            <ArchitectureScene selected={selected} onSelect={onSelect} isolated={isolated} layers={layers} dataFlow={dataFlow} controlsRef={controlsRef} />
          ) : (
            <section className="image-viewer" aria-label={`${item.name} architecture image viewer`}>
              <div className="image-viewer-heading"><span>{t.componentView}</span><strong>{activePart?.name || item.name}</strong></div>
              <div className="component-image-wrap">
                <StructuralDiagram component={item} parts={item.media.parts} />
                {item.media.parts.map((part) => <Hotspot key={part.id} position={part.position} label={part.name} color={item.color} onClick={() => setSelectedPart(part.id)} />)}
              </div>
              <div className="image-viewer-caption">{activePart ? <button type="button" onClick={() => setSelectedPart(null)}>{t.backOverview}</button> : t.pointMarker}</div>
            </section>
          )
        ) : viewMode === "description" ? (
          isCpuImageScene ? (
            <div ref={viewerRef} className="cpu-static-scene">
              <img
                src={selectedImage}
                alt={`${selected} architecture illustration`}
                draggable="false"
                onError={(event) => {
                  if (!event.target.dataset.fallbackApplied) {
                    event.target.dataset.fallbackApplied = "true";
                    event.target.src = "/images/cpu.png";
                  }
                }}
              />
            </div>
          ) : (
            <ArchitectureScene selected={selected} onSelect={onSelect} isolated={isolated} layers={layers} dataFlow={dataFlow} controlsRef={controlsRef} />
          )
        ) : (
          <section className="image-viewer" aria-label={`${item.name} architecture image viewer`}>
            <div className="image-viewer-heading"><span>{t.componentView}</span><strong>{activePart?.name || item.name}</strong></div>
            <div className="component-image-wrap">
              <StructuralDiagram component={item} parts={item.media.parts} />
              {item.media.parts.map((part) => <Hotspot key={part.id} position={part.position} label={part.name} color={item.color} onClick={() => setSelectedPart(part.id)} />)}
            </div>
            <div className="image-viewer-caption">{activePart ? <button type="button" onClick={() => setSelectedPart(null)}>{t.backOverview}</button> : t.pointMarker}</div>
          </section>
        )}
      </div>
      {isSystemArchitecture ? (
        <div className="viewer-mode-switch" role="group" aria-label="System architecture view mode">
          <button type="button" className={showSystemDescription ? "active" : ""} onClick={() => setSystemViewMode("description")}>Description</button>
          <button type="button" className={showSystemImageView ? "active" : ""} onClick={() => setSystemViewMode("image")}>Image view</button>
        </div>
      ) : !isCpuImageScene && (
        <div className="viewer-mode-switch" role="group" aria-label="Viewer mode">
          <button type="button" className={viewMode === "description" ? "active" : ""} onClick={() => setViewMode("description")}>Description</button>
          <button type="button" className={viewMode === "image" ? "active" : ""} onClick={() => setViewMode("image")}>Image view</button>
        </div>
      )}
      {!isCpuImageScene && <div className="viewer-footer">{t.threeFooter}</div>}
    </main>
  );
}
