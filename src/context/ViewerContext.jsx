import { createContext, useContext, useMemo, useState } from "react";

const ViewerContext = createContext(null);

export function ViewerProvider({ children }) {
  const [isolated, setIsolated] = useState(null);
  const [dataFlow, setDataFlow] = useState(false);
  const [layers, setLayers] = useState({
    system: true,
    cpu: true,
    datapath: true,
    memory: true
  });

  const value = useMemo(
    () => ({ isolated, setIsolated, dataFlow, setDataFlow, layers, setLayers }),
    [isolated, dataFlow, layers]
  );

  return <ViewerContext.Provider value={value}>{children}</ViewerContext.Provider>;
}

export function useViewerContext() {
  return useContext(ViewerContext);
}
