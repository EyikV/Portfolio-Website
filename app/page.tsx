"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore, type CSSProperties } from "react";
import styles from "./page.module.css";
import { useTranslations } from "./hooks/useTranslations";
import { navigation } from "@/data/content";
import ContactForm from "./components/ContactForm/ContactForm";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";

type ThemeMode = "dusk" | "dawn";
const revealDelayKey = "--reveal-delay" as const;

function subscribeThemeStore(onStoreChange: () => void) {
    if (typeof window === "undefined") {
        return () => {};
    }

    const handleChange = () => onStoreChange();

    window.addEventListener("storage", handleChange);
    window.addEventListener("portfolio-theme-change", handleChange);

    return () => {
        window.removeEventListener("storage", handleChange);
        window.removeEventListener("portfolio-theme-change", handleChange);
    };
}

function getThemeSnapshot(): ThemeMode {
    if (typeof window === "undefined") {
        return "dusk";
    }

    return window.localStorage.getItem("portfolio-theme") === "dawn" ? "dawn" : "dusk";
}

function revealDelay(delay: number): CSSProperties {
    return {
        [revealDelayKey]: `${delay}ms`,
    } as CSSProperties;
}

export default function Page() {
    const texts = useTranslations();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const theme = useSyncExternalStore(subscribeThemeStore, getThemeSnapshot, () => "dusk");

    const heroStats = [texts.hero.stats.craft, texts.hero.stats.focus, texts.hero.stats.approach];

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        window.localStorage.setItem("portfolio-theme", theme);
    }, [theme]);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

        if (prefersReducedMotion) {
            revealElements.forEach((element) => {
                element.dataset.visible = "true";
            });
            return;
        }

        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.setAttribute("data-visible", "true");
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.18,
                rootMargin: "0px 0px -10% 0px",
            }
        );

        revealElements.forEach((element) => revealObserver.observe(element));

        return () => {
            revealObserver.disconnect();
        };
    }, []);

    useEffect(() => {
        const finePointer = window.matchMedia("(pointer: fine)").matches;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!finePointer || prefersReducedMotion) {
            return;
        }

        const magneticElements = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));

        function handlePointerMove(event: Event) {
            const element = event.currentTarget as HTMLElement;
            const pointerEvent = event as PointerEvent;
            const rect = element.getBoundingClientRect();
            const offsetX = pointerEvent.clientX - rect.left - rect.width / 2;
            const offsetY = pointerEvent.clientY - rect.top - rect.height / 2;

            element.style.setProperty("--magnetic-x", `${offsetX * 0.08}px`);
            element.style.setProperty("--magnetic-y", `${offsetY * 0.08}px`);
            element.style.setProperty("--glow-x", `${pointerEvent.clientX - rect.left}px`);
            element.style.setProperty("--glow-y", `${pointerEvent.clientY - rect.top}px`);
        }

        function resetPointer(event: Event) {
            const element = event.currentTarget as HTMLElement;
            element.style.setProperty("--magnetic-x", "0px");
            element.style.setProperty("--magnetic-y", "0px");
        }

        magneticElements.forEach((element) => {
            element.addEventListener("pointermove", handlePointerMove);
            element.addEventListener("pointerleave", resetPointer);
        });

        return () => {
            magneticElements.forEach((element) => {
                element.removeEventListener("pointermove", handlePointerMove);
                element.removeEventListener("pointerleave", resetPointer);
            });
        };
    }, []);

    function handleMenuToggle() {
        setIsMenuOpen((prev) => !prev);
    }

    function handleNavClick() {
        setIsMenuOpen(false);
    }

    function handleThemeChange(nextTheme: ThemeMode) {
        window.localStorage.setItem("portfolio-theme", nextTheme);
        window.dispatchEvent(new Event("portfolio-theme-change"));
    }

    return (
        <main className={`${styles.page} ${theme === "dawn" ? styles.themeDawn : styles.themeDusk}`}>
            <div className={styles.backdrop} aria-hidden="true">
                <div className={styles.gradientOrb} />
                <div className={styles.gradientOrbSecondary} />
                <div className={styles.grid} />
            </div>

            <header className={`${styles.header} ${styles.reveal}`} data-reveal data-visible="false">
                <div className={styles.headerTopRow}>
                    <a href="#about" className={styles.branding} onClick={handleNavClick}>
                        <div className={styles.logoShell}>
                            <Image className={styles.logo} src="/EV Logo.png" alt="Erik Vas logo" width={88} height={88} priority />
                        </div>
                        <div>
                            <span className={styles.name}>Erik Vas</span>
                            <p className={styles.brandTag}>{texts.hero.eyebrow}</p>
                        </div>
                    </a>

                    <button
                        type="button"
                        className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ""}`}
                        aria-expanded={isMenuOpen}
                        aria-controls="primary-navigation"
                        aria-label={texts.header.menuLabel}
                        onClick={handleMenuToggle}
                        data-magnetic
                    >
                        <span className={styles.menuToggleLine} />
                        <span className={styles.menuToggleLine} />
                        <span className={styles.menuToggleLine} />
                    </button>
                </div>

                <div className={styles.headerBottomRow}>
                    <nav
                        id="primary-navigation"
                        className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
                        aria-label="Primary"
                    >
                        {navigation.map((item) => (
                            <a key={item.label} className={`${styles.navLink} ${styles.magnetic}`} href={item.href} onClick={handleNavClick} data-magnetic>
                            {texts.header[item.label]}
                        </a>
                    ))}
                </nav>

                    <div className={styles.headerMeta}>
                        <p className={styles.availability}>{texts.hero.availability}</p>
                        <div className={styles.utilityRow}>
                            <div className={styles.themeSwitcher} aria-label={texts.controls.themeLabel}>
                                <button
                                    type="button"
                                    className={`${styles.themeButton} ${theme === "dusk" ? styles.themeButtonActive : ""}`}
                                    onClick={() => handleThemeChange("dusk")}
                                >
                                    {texts.controls.themes.dusk}
                                </button>
                                <button
                                    type="button"
                                    className={`${styles.themeButton} ${theme === "dawn" ? styles.themeButtonActive : ""}`}
                                    onClick={() => handleThemeChange("dawn")}
                                >
                                    {texts.controls.themes.dawn}
                                </button>
                            </div>
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>

                <div className={`${styles.mobilePanel} ${isMenuOpen ? styles.mobilePanelOpen : ""}`}>
                    <nav className={`${styles.nav} ${styles.navOpen}`} aria-label="Primary mobile">
                        {navigation.map((item) => (
                            <a key={`mobile-${item.label}`} className={`${styles.navLink} ${styles.magnetic}`} href={item.href} onClick={handleNavClick} data-magnetic>
                                {texts.header[item.label]}
                            </a>
                        ))}
                    </nav>

                    <div className={styles.headerMeta}>
                        <p className={styles.availability}>{texts.hero.availability}</p>
                        <div className={styles.utilityRow}>
                            <div className={styles.themeSwitcher} aria-label={texts.controls.themeLabel}>
                                <button
                                    type="button"
                                    className={`${styles.themeButton} ${theme === "dusk" ? styles.themeButtonActive : ""}`}
                                    onClick={() => handleThemeChange("dusk")}
                                >
                                    {texts.controls.themes.dusk}
                                </button>
                                <button
                                    type="button"
                                    className={`${styles.themeButton} ${theme === "dawn" ? styles.themeButtonActive : ""}`}
                                    onClick={() => handleThemeChange("dawn")}
                                >
                                    {texts.controls.themes.dawn}
                                </button>
                            </div>
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            </header>

            <section id="about" className={`${styles.heroSection} ${styles.reveal}`} data-reveal data-visible="false">
                <div className={styles.heroCopy}>
                    <span className={styles.kicker}>{texts.hero.eyebrow}</span>
                    <h1 className={styles.title}>
                        {texts.about.title}
                        <span>Erik Vas</span>
                    </h1>
                    <p className={styles.lead}>{texts.hero.intro}</p>

                    <div className={styles.ctaRow}>
                        <a className={`${styles.primaryCta} ${styles.magnetic}`} href="#contact" data-magnetic>
                            {texts.hero.primaryCta}
                        </a>
                        <a className={`${styles.secondaryCta} ${styles.magnetic}`} href="#projects" data-magnetic>
                            {texts.hero.secondaryCta}
                        </a>
                    </div>

                    <p className={styles.location}>{texts.hero.location}</p>
                </div>

                <div className={styles.heroPanel}>
                    <div className={`${styles.heroCard} ${styles.magnetic}`} data-magnetic>
                        <span className={styles.heroCardLabel}>{texts.hero.panelLabel}</span>
                        <p className={styles.heroCardText}>{texts.hero.panelText}</p>
                    </div>

                    <div className={styles.statGrid}>
                        {heroStats.map((stat, index) => (
                            <article
                                key={stat.value}
                                className={`${styles.statCard} ${styles.reveal}`}
                                data-reveal
                                data-visible="false"
                                style={revealDelay(index * 90)}
                            >
                                <h2>{stat.value}</h2>
                                <p>{stat.label}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`${styles.storySection} ${styles.reveal}`} data-reveal data-visible="false">
                <div className={styles.sectionIntro}>
                    <span className={styles.sectionLabel}>{texts.header.about}</span>
                    <h2>{texts.about.spotlightTitle}</h2>
                </div>

                <div className={styles.storyGrid}>
                    <div className={styles.storyText}>
                        {texts.about.paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className={styles.reveal}
                                data-reveal
                                data-visible="false"
                                style={revealDelay(index * 80)}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className={styles.spotlightPanel}>
                        {texts.about.spotlight.map((item, index) => (
                            <div
                                key={item}
                                className={`${styles.spotlightItem} ${styles.reveal}`}
                                data-reveal
                                data-visible="false"
                                style={revealDelay(index * 110)}
                            >
                                <span className={styles.spotlightIndex}>0{index + 1}</span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="projects" className={`${styles.projectsSection} ${styles.reveal}`} data-reveal data-visible="false">
                <div className={styles.sectionIntro}>
                    <span className={styles.sectionLabel}>{texts.header.projects}</span>
                    <h2>{texts.projects.title}</h2>
                    <p>{texts.projects.paragraphs[0]}</p>
                </div>

                <div className={styles.cardList}>
                    {texts.projects.cards.map((card, index) => (
                        <article
                            key={card.title}
                            className={`${styles.projectCard} ${styles.magnetic} ${styles.reveal}`}
                            data-reveal
                            data-visible="false"
                            data-magnetic
                            style={revealDelay(index * 110)}
                        >
                            <span className={styles.cardBadge}>{card.meta}</span>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                            <div className={styles.cardLine} />
                        </article>
                    ))}
                </div>
            </section>

            <section id="contact" className={`${styles.contactSection} ${styles.reveal}`} data-reveal data-visible="false">
                <div className={styles.contactIntro}>
                    <span className={styles.sectionLabel}>{texts.header.contact}</span>
                    <h2>{texts.contact.title}</h2>
                    <p>{texts.contact.cardText}</p>
                    <div className={`${styles.contactCard} ${styles.reveal}`} data-reveal data-visible="false" style={revealDelay(100)}>
                        <p className={styles.contactCardTitle}>{texts.contact.cardTitle}</p>
                        <p>{texts.contact.paragraphs[0]}</p>
                    </div>
                </div>

                <div className={styles.formShell}>
                    <ContactForm />
                </div>
            </section>
        </main>
    );
}
