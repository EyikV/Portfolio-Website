import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactBody = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as Partial<ContactBody>;

        const name = body.name?.trim() ?? "";
        const email = body.email?.trim() ?? "";
        const subject = body.subject?.trim() ?? "";
        const message = body.message?.trim() ?? "";

        if (!name || !email || !subject || !message) {
            return Response.json({ ok: false, error: "All fields are required." }, { status: 400 });
        }

        if (!isValidEmail(email)) {
            return Response.json({ ok: false, error: "Invalid email address." }, { status: 400 });
        }

        const { error } = await resend.emails.send({
            from: "contact@no-reply.erikvas.com",
            to: "info@erikvas.com",
            replyTo: email,
            subject: `Contact form: ${subject}`,
            text: `Name: ${name}
                  Email: ${email}
                  ${message}`,
        });

        if (error) {
            return Response.json({ ok: false, error: "Failed to send email." }, { status: 500 });
        }

        return Response.json({ ok: true });
    } catch {
        return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
    }
}
