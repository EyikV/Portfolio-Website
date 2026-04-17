"use client";

import { useTranslations } from "@/app/hooks/useTranslations";
import { useState } from "react";

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactForm() {
    const text = useTranslations();

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState<{
        loading: boolean;
        error: string;
        success: string;
    }>({
        loading: false,
        error: "",
        success: "",
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setStatus({ loading: true, error: "", success: "" });

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = (await res.json()) as { ok: boolean; error?: string };

            if (!res.ok || !data.ok) {
                setStatus({
                    loading: false,
                    error: data.error ?? text.contact.form.error,
                    success: "",
                });
                return;
            }

            setStatus({
                loading: false,
                error: "",
                success: text.contact.form.success,
            });

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch {
            setStatus({
                loading: false,
                error: text.contact.form.networkError,
                success: "",
            });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">{text.contact.form.name}</label>
            <input id="name" name="name" type="text" value={formData.name} placeholder={text.contact.form.name} onChange={handleChange} />

            <label htmlFor="email">{text.contact.form.email}</label>
            <input id="email" name="email" type="email" value={formData.email} placeholder={text.contact.form.email} onChange={handleChange} />

            <label htmlFor="subject">{text.contact.form.subject}</label>
            <input id="subject" name="subject" type="text" value={formData.subject} placeholder={text.contact.form.subject} onChange={handleChange} />

            <label htmlFor="message">{text.contact.form.message}</label>
            <textarea id="message" name="message" value={formData.message} placeholder={text.contact.form.message} onChange={handleChange} />

            <button type="submit" disabled={status.loading}>
                {status.loading ? text.contact.form.status : text.contact.form.button}
            </button>

            {status.error && <p>{status.error}</p>}
            {status.success && (
                <p>
                    {status.success}{" "}
                    <a href="#about">
                        <button onClick={() => setStatus({ loading: false, error: "", success: "" })}>OK</button>
                    </a>
                </p>
            )}
        </form>
    );
}
