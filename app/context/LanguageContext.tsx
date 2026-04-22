// app/context/LanguageContext.tsx
"use client";

import { createContext, useContext, useMemo, useSyncExternalStore, type ReactNode } from "react";
import type { Language } from "@/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function subscribeLanguageStore(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleChange = () => onStoreChange();

  window.addEventListener("storage", handleChange);
  window.addEventListener("portfolio-language-change", handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener("portfolio-language-change", handleChange);
  };
}

function getLanguageSnapshot(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  return localStorage.getItem("language") === "de" ? "de" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore<Language>(subscribeLanguageStore, getLanguageSnapshot, () => "en");

  function setLanguage(nextLanguage: Language) {
    localStorage.setItem("language", nextLanguage);
    window.dispatchEvent(new Event("portfolio-language-change"));
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
