"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/translations";

export function useTranslations() {
  const { language } = useLanguage();
  return translations[language];
}