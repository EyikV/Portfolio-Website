"use client";
import styles from "./page.module.css";
import { useTranslations } from "./hooks/useTranslations";
import { navigation } from "@/data/content";

export default function Page() {
    const t = useTranslations();

    return (
        <main className={styles.page}>
            <header className={styles.header}>
                <div className={styles.branding}>
                    <img className={styles.logo} src="/EV Logo.png" />
                    <span className={styles.name}>Erik Vas</span>
                </div>
                <ul className={styles.links}>
                    {navigation.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}>{t.header[item.label]}</a>
                        </li>
                    ))}
                </ul>
            </header>

            <div className={styles.content}>
                <section id="about" className={styles.about}>
                    <h1>{t.about.title} Erik Vas</h1>
                    <div>
                        {t.about.paragraphs.map((paragraph, index) => {
                            return <p key={index}>{paragraph}</p>;
                        })}
                    </div>
                </section>

                <section id="projects" className={styles.projects}>
                    <h1>{t.about.title} Projects</h1>
                    <div>
                        {t.about.paragraphs.map((paragraph, index) => {
                            return <p key={index}>{paragraph}</p>;
                        })}
                    </div>
                </section>

                <section id="contact" className={styles.projects}>
                    <h1>{t.about.title} Contact</h1>
                    <div>
                        {t.about.paragraphs.map((paragraph, index) => {
                            return <p key={index}>{paragraph}</p>;
                        })}
                    </div>
                </section>
            </div>
        </main>
    );
}
