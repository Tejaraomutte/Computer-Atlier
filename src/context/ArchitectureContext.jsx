import { createContext, useContext, useMemo, useState } from "react";
import { getTranslations } from "../data/i18n.js";

const ArchitectureContext = createContext(null);

export function ArchitectureProvider({ children }) {
  const [selected, setSelected] = useState("cpu");
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState(() => localStorage.getItem("ca-language") || "en");

  function changeLanguage(code) {
    setLanguage(code);
    localStorage.setItem("ca-language", code);
    document.documentElement.lang = code;
    document.documentElement.dir = code === "ar" ? "rtl" : "ltr";
  }

  const t = getTranslations(language);

  const value = useMemo(
    () => ({ selected, setSelected, search, setSearch, language, setLanguage: changeLanguage, t }),
    [selected, search, language, t]
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
