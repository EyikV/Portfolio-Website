"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className={styles.languageSwitcher}>
            <span className={styles.languageOption} onClick={(e) => setLanguage("en")}>EN</span>
            <span className={styles.languageOption} onClick={(e) => setLanguage("de")}>DE</span>
        </div>
    );
}
