import { createContext, useContext, useMemo, useState } from "react";

const ArchitectureContext = createContext(null);

export function ArchitectureProvider({ children }) {
  const [selected, setSelected] = useState("cpu");
  const [search, setSearch] = useState("");

  const value = useMemo(
    () => ({ selected, setSelected, search, setSearch }),
    [selected, search]
  );

  return (
    <ArchitectureContext.Provider value={value}>
      {children}
    </ArchitectureContext.Provider>
  );
}

export function useArchitectureContext() {
  return useContext(ArchitectureContext);
}
