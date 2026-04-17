export const en = {
    header: {
        about: "About",
        projects: "Projects",
        contact: "Contact",
    },
    about: {
        title: "I'm ",
        paragraphs: [
            "I’m a web developer with a non-traditional background, combining hands-on industry experience with a strong focus on modern web technologies.",
            "I’ve always been drawn to art, design, and the small details that make something feel special, which naturally shapes the way I build websites and digital products. I enjoy creating experiences that look clean, modern, and memorable, while making sure they stay fast, responsive, and easy to use.",
            "With a strong technical foundation, I’m able to turn creative ideas into polished products that not only look great but perform smoothly in the real world.",
        ],
        button: "Contact me!",
    },
    projects: {
        title: "Past projects:",
        paragraphs: ["Check out some of the projects I've worked on in the past."],
    },
    contact: {
        title: "Contact me",
        paragraphs: ["If you would like to hire me for your project, fill in the form below, or send me an email at info@erikvas.com"],
        form: {
            name: "Name",
            email: "E-Mail",
            subject: "Subject",
            message: "Message",
            button: "Send",
            status: "Sending...",
            error: "Something went wrong.",
            success: "Message sent successfully.",
            networkError: "Network error. Please try again.",
        },
    },
    footer: {
        rights: "All rights reserved",
    },
};

export type TranslationSchema = typeof en;
