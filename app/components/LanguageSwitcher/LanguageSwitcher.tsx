"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className={styles.languageSwitcher} aria-label="Language switcher">
            <button
                type="button"
                className={`${styles.languageOption} ${language === "en" ? styles.active : ""}`}
                onClick={() => setLanguage("en")}
            >
                EN
            </button>
            <button
                type="button"
                className={`${styles.languageOption} ${language === "de" ? styles.active : ""}`}
                onClick={() => setLanguage("de")}
            >
                DE
            </button>
        </div>
    );
}
