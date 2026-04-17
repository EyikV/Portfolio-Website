import { en } from "./en";
import { de } from "./de";

export const translations = {
  en,
  de,
};

export type Language = keyof typeof translations;
export type Translations = typeof en;