import type { TranslationSchema } from "./en";

export const de: TranslationSchema = {
    header: {
        about: "Über mich",
        projects: "Projekte",
        contact: "Kontakt",
    },
    about: {
        title: "Ich bin ",
        paragraphs: [
            "Ich bin Webentwickler mit einem unkonventionellen Hintergrund und verbinde praktische Berufserfahrung mit einem starken Fokus auf moderne Webtechnologien.",
            "Schon immer haben mich Kunst, Design und die kleinen Details begeistert, die etwas besonders wirken lassen – und genau das prägt die Art, wie ich Websites und digitale Produkte entwickle.",
            "Ich liebe es, Erlebnisse zu schaffen, die sauber, modern und einprägsam aussehen, dabei aber schnell, reaktionsstark und benutzerfreundlich bleiben.",
            "Dank eines starken technischen Fundaments kann ich kreative Ideen in hochwertige Produkte verwandeln, die nicht nur gut aussehen, sondern auch im echten Einsatz zuverlässig und flüssig funktionieren.",
        ],
        button: "Kontaktiere mich!",
    },
    projects: {
        title: "Bisherige Projekte:",
        paragraphs: ["Schau dir einige der Projekte an, an denen ich in der Vergangenheit gearbeitet habe."],
    },
    contact: {
        title: "Kontaktiere mich",
        paragraphs: [
            "Wenn du mich für dein Projekt engagieren möchtest, fülle das Formular unten aus oder sende mir eine E-Mail an info@erikvas.com",
        ],
        form: {
            name: "Name",
            email: "E-Mail",
            subject: "Betreff",
            message: "Nachricht",
            button: "Senden",
            status: "Senden...",
            error: "Etwas ist schiefgelaufen.",
            success: "Nachricht erfolgreich gesendet.",
            networkError: "Netwerkfehler. Bitte versuchen Sie es erneut.",
        },
    },
    footer: {
        rights: "Alle Rechte vorbehalten",
    },
};
