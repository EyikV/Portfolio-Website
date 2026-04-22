"use client";

import { useTranslations } from "@/app/hooks/useTranslations";
import { useState } from "react";
import styles from "./ContactForm.module.css";

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type FieldName = keyof FormData;
type FieldErrors = Partial<Record<FieldName, string>>;

export default function ContactForm() {
    const text = useTranslations();

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<FieldErrors>({});
    const [status, setStatus] = useState<{
        loading: boolean;
        error: string;
        success: string;
    }>({
        loading: false,
        error: "",
        success: "",
    });

    function validateField(name: FieldName, value: string) {
        const trimmedValue = value.trim();

        if (!trimmedValue) {
            return text.contact.form.validation.required;
        }

        if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
            return text.contact.form.validation.invalidEmail;
        }

        if (name === "message" && trimmedValue.length < 20) {
            return text.contact.form.validation.shortMessage;
        }

        return "";
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        const fieldName = name as FieldName;

        setFormData((prev) => ({
            ...prev,
            [fieldName]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [fieldName]: prev[fieldName] ? validateField(fieldName, value) : "",
        }));
    }

    function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const fieldName = e.target.name as FieldName;

        setErrors((prev) => ({
            ...prev,
            [fieldName]: validateField(fieldName, e.target.value),
        }));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const nextErrors = Object.entries(formData).reduce<FieldErrors>((acc, [key, value]) => {
            const fieldName = key as FieldName;
            const error = validateField(fieldName, value);

            if (error) {
                acc[fieldName] = error;
            }

            return acc;
        }, {});

        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
            setStatus({ loading: false, error: text.contact.form.error, success: "" });
            return;
        }

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
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.fieldGroup}>
                <label htmlFor="name">{text.contact.form.name}</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    placeholder={text.contact.form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name ? styles.invalidField : ""}
                    aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <p className={styles.fieldError}>{errors.name}</p>}
            </div>

            <div className={styles.fieldGroup}>
                <label htmlFor="email">{text.contact.form.email}</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    placeholder={text.contact.form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email ? styles.invalidField : ""}
                    aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <p className={styles.fieldError}>{errors.email}</p>}
            </div>

            <div className={styles.fieldGroup}>
                <label htmlFor="subject">{text.contact.form.subject}</label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    placeholder={text.contact.form.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.subject ? styles.invalidField : ""}
                    aria-invalid={Boolean(errors.subject)}
                />
                {errors.subject && <p className={styles.fieldError}>{errors.subject}</p>}
            </div>

            <div className={styles.fieldGroup}>
                <label htmlFor="message">{text.contact.form.message}</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    placeholder={text.contact.form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.message ? styles.invalidField : ""}
                    aria-invalid={Boolean(errors.message)}
                />
                <div className={styles.fieldHintRow}>
                    <p className={styles.fieldHint}>{text.contact.form.helper}</p>
                    <span className={styles.characterCount}>
                        {formData.message.trim().length} {text.contact.form.messageCountLabel}
                    </span>
                </div>
                {errors.message && <p className={styles.fieldError}>{errors.message}</p>}
            </div>

            <button type="submit" disabled={status.loading} className={styles.submitButton} data-magnetic>
                {status.loading && <span className={styles.spinner} aria-hidden="true" />}
                {status.loading ? text.contact.form.status : text.contact.form.button}
            </button>

            {status.error && !status.success && (
                <div className={styles.statusError} role="alert">
                    <p className={styles.statusTitle}>{text.contact.form.error}</p>
                    <p className={styles.statusText}>{status.error}</p>
                </div>
            )}
            {status.success && (
                <div className={styles.statusSuccess}>
                    <p className={styles.statusTitle}>{text.contact.form.successTitle}</p>
                    <p className={styles.statusText}>{status.success}</p>
                    <button type="button" className={styles.dismissButton} onClick={() => setStatus({ loading: false, error: "", success: "" })}>
                        OK
                    </button>
                </div>
            )}
        </form>
    );
}
