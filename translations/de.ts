import type { TranslationSchema } from "./en";

export const de: TranslationSchema = {
    header: {
        about: "Über mich",
        projects: "Projekte",
        contact: "Kontakt",
        menuLabel: "Navigationsmenü umschalten",
    },
    controls: {
        themeLabel: "Stimmung umschalten",
        themes: {
            dusk: "Dämmerung",
            dawn: "Morgenlicht",
        },
    },
    hero: {
        eyebrow: "Frontend-Entwickler und kreativer Builder",
        availability: "Verfügbar für Freelance- und Inhouse-Projekte",
        intro: "Ich gestalte Websites mit klarer Struktur, flüssigen Interaktionen und einem ausgeprägten Gespür für Design.",
        primaryCta: "Projekt starten",
        secondaryCta: "Arbeiten ansehen",
        location: "In Deutschland ansässig, für Teams überall im Einsatz",
        panelLabel: "Ausgewählter Fokus",
        panelText: "Moderne Interfaces mit Gespür für Atmosphäre, Motion und klare visuelle Struktur.",
        stats: {
            craft: {
                value: "Design + Code",
                label: "Visuelles Gespür und technische Umsetzung zusammenbringen",
            },
            focus: {
                value: "Schnelle, moderne UX",
                label: "Interfaces, die sich auf jedem Bildschirm hochwertig anfühlen",
            },
            approach: {
                value: "Detailverliebt",
                label: "Feinschliff bei Typografie, Motion und Layout",
            },
        },
    },
    about: {
        title: "Ich bin ",
        paragraphs: [
            "Ich bin Webentwickler mit einem unkonventionellen Hintergrund und verbinde praktische Berufserfahrung mit einem starken Fokus auf moderne Webtechnologien.",
            "Schon immer haben mich Kunst, Design und die kleinen Details begeistert, die etwas besonders wirken lassen - und genau das prägt die Art, wie ich Websites und digitale Produkte entwickle.",
            "Ich liebe es, Erlebnisse zu schaffen, die sauber, modern und einprägsam aussehen, dabei aber schnell, reaktionsstark und benutzerfreundlich bleiben.",
            "Dank eines starken technischen Fundaments kann ich kreative Ideen in hochwertige Produkte verwandeln, die nicht nur gut aussehen, sondern auch im echten Einsatz zuverlässig und flüssig funktionieren.",
        ],
        button: "Kontaktiere mich",
        spotlightTitle: "Was ich mitbringe",
        spotlight: [
            "Einen modernen Frontend-Ansatz mit Fokus auf Performance und Responsivität.",
            "Ein starkes Gespür für Art Direction, Abstände und die Details, die Interfaces hochwertig wirken lassen.",
            "Eine pragmatische Denkweise, die aus Ideen verlässliche und nutzbare Produkte macht.",
        ],
    },
    projects: {
        title: "Bisherige Projekte",
        paragraphs: ["Ein paar Richtungen, die die Art von Arbeit zeigen, die ich besonders gerne umsetze."],
        cards: [
            {
                title: "Markenstarke Erlebnisse",
                description: "Landingpages und Portfolio-Auftritte, die eigenständig wirken statt wie Vorlagen.",
                meta: "Visuelle Identität, Motion, Conversion",
            },
            {
                title: "Interaktive Produkt-UI",
                description: "Saubere Interfaces mit durchdachten Zuständen, klarer Hierarchie und responsivem Verhalten.",
                meta: "Komponentensysteme, Barrierefreiheit, Feinschliff",
            },
            {
                title: "Performance-orientierte Builds",
                description: "Moderne Umsetzungen, die Ästhetik mit Wartbarkeit und Geschwindigkeit verbinden.",
                meta: "Next.js, responsive Layouts, Production-Fokus",
            },
        ],
    },
    contact: {
        title: "Kontaktiere mich",
        paragraphs: ["Wenn du mich für dein Projekt engagieren möchtest, fülle das Formular unten aus oder sende mir eine E-Mail an info@erikvas.com."],
        cardTitle: "Lass uns etwas Starkes bauen",
        cardText: "Ob Portfolio, Landingpage oder ein größeres Produkt-Interface: Ich kann beim Design mitdenken und die Umsetzung sauber realisieren.",
        form: {
            name: "Name",
            email: "E-Mail",
            subject: "Betreff",
            message: "Nachricht",
            button: "Senden",
            status: "Senden...",
            error: "Etwas ist schiefgelaufen.",
            success: "Nachricht erfolgreich gesendet.",
            successTitle: "Danke, deine Nachricht ist unterwegs.",
            networkError: "Netzwerkfehler. Bitte versuche es erneut.",
            helper: "Ein kurzer Überblick reicht völlig. Ich antworte in der Regel innerhalb weniger Tage.",
            messageCountLabel: "Zeichen",
            validation: {
                required: "Bitte fülle dieses Feld aus.",
                invalidEmail: "Bitte gib eine gültige E-Mail-Adresse ein.",
                shortMessage: "Ein wenig mehr Kontext wäre hilfreich. Bitte schreibe mindestens 20 Zeichen.",
            },
        },
    },
    footer: {
        rights: "Alle Rechte vorbehalten",
    },
};
