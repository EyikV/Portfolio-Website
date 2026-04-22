export const en = {
    header: {
        about: "About",
        projects: "Projects",
        contact: "Contact",
        menuLabel: "Toggle navigation menu",
    },
    controls: {
        themeLabel: "Mood switcher",
        themes: {
            dusk: "Dusk",
            dawn: "Dawn",
        },
    },
    hero: {
        eyebrow: "Frontend developer and creative builder",
        availability: "Available for freelance and in-house opportunities",
        intro: "Design-minded websites with strong structure, smooth interactions, and a sharp visual point of view.",
        primaryCta: "Start a project",
        secondaryCta: "View work",
        location: "Based in Germany, building for teams everywhere",
        panelLabel: "Selected focus",
        panelText: "Modern interfaces shaped with an eye for atmosphere, motion, and clean structure.",
        stats: {
            craft: {
                value: "Design + code",
                label: "Bridging visual taste and technical execution",
            },
            focus: {
                value: "Fast, modern UX",
                label: "Interfaces that feel polished on every screen",
            },
            approach: {
                value: "Detail obsessed",
                label: "Refinement in typography, motion, and layout",
            },
        },
    },
    about: {
        title: "I'm ",
        paragraphs: [
            "I'm a web developer with a non-traditional background, combining hands-on industry experience with a strong focus on modern web technologies.",
            "I've always been drawn to art, design, and the small details that make something feel special, which naturally shapes the way I build websites and digital products. I enjoy creating experiences that look clean, modern, and memorable, while making sure they stay fast, responsive, and easy to use.",
            "With a strong technical foundation, I'm able to turn creative ideas into polished products that not only look great but perform smoothly in the real world.",
        ],
        button: "Contact me",
        spotlightTitle: "What I bring",
        spotlight: [
            "A modern frontend approach with attention to performance and responsiveness.",
            "A strong eye for art direction, spacing, and the details that make interfaces feel premium.",
            "A practical mindset that turns concepts into reliable, usable products.",
        ],
    },
    projects: {
        title: "Past projects",
        paragraphs: ["A few directions that define the kind of work I like building most."],
        cards: [
            {
                title: "Brand-led experiences",
                description: "Landing pages and portfolio surfaces that feel distinctive instead of template-driven.",
                meta: "Visual identity, motion, conversion",
            },
            {
                title: "Interactive product UI",
                description: "Clean interfaces with thoughtful states, hierarchy, and responsive behavior baked in.",
                meta: "Component systems, accessibility, polish",
            },
            {
                title: "Performance-minded builds",
                description: "Modern implementations that balance aesthetics with maintainability and speed.",
                meta: "Next.js, responsive layout, production focus",
            },
        ],
    },
    contact: {
        title: "Contact me",
        paragraphs: ["If you would like to hire me for your project, fill in the form below, or send me an email at info@erikvas.com."],
        cardTitle: "Let's make something sharp",
        cardText: "Whether you need a portfolio, landing page, or a more complete product interface, I can help shape the design and build it with care.",
        form: {
            name: "Name",
            email: "E-Mail",
            subject: "Subject",
            message: "Message",
            button: "Send",
            status: "Sending...",
            error: "Something went wrong.",
            success: "Message sent successfully.",
            successTitle: "Thanks, your note is on its way.",
            networkError: "Network error. Please try again.",
            helper: "A short brief is enough. I usually reply within a couple of days.",
            messageCountLabel: "characters",
            validation: {
                required: "Please fill out this field.",
                invalidEmail: "Please enter a valid email address.",
                shortMessage: "A little more detail would help. Please write at least 20 characters.",
            },
        },
    },
    footer: {
        rights: "All rights reserved",
    },
};

export type TranslationSchema = typeof en;
