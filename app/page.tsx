"use client";
import styles from "./page.module.css";
import { useTranslations } from "./hooks/useTranslations";
import { navigation } from "@/data/content";
import ContactForm from "./components/ContactForm/ContactForm";

export default function Page() {
    const texts = useTranslations();

    return (
        <main className={styles.page}>
            <header className={styles.header}>
                <div className={styles.branding}>
                    <a href="#about">
                        <img className={styles.logo} src="/EV Logo.png" />
                    </a>
                    <a href="#about">
                        <span className={styles.name}>Erik Vas</span>
                        <p>This website is work in progress</p>
                    </a>
                </div>

                <ul className={styles.links}>
                    {navigation.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}>{texts.header[item.label]}</a>
                        </li>
                    ))}
                </ul>
            </header>

            <div className={styles.content}>
                <section id="about" className={styles.about}>
                    <h1>{texts.about.title} Erik Vas</h1>
                    <div className={styles.texts}>
                        {texts.about.paragraphs.map((paragraph, index) => {
                            return <p key={index}>{paragraph}</p>;
                        })}
                    </div>
                    <a href="#contact">
                        <button>{texts.about.button}</button>
                    </a>
                </section>

                <section id="projects" className={styles.projects}>
                    <h1>{texts.projects.title}</h1>
                    <div className={styles.texts}>
                        {texts.projects.paragraphs.map((paragraph, index) => {
                            return <p key={index}>{paragraph}</p>;
                        })}
                    </div>
                    <div className={styles.cardList}>
                        <div className={styles.card}>Coming soon...</div>
                        <div className={styles.card}>Coming soon...</div>
                        <div className={styles.card}>Coming soon...</div>
                    </div>
                </section>

                <section id="contact" className={styles.contact}>
                    <h1>{texts.contact.title}</h1>
                    <div className={styles.texts}>
                        {texts.contact.paragraphs.map((paragraph, index) => {
                            return <p key={index}>{paragraph}</p>;
                        })}
                    </div>
                    <ContactForm />
                </section>
            </div>
        </main>
    );
}
