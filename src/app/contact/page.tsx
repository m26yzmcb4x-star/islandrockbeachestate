"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        honeypot: "", // Spam protection
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", message: "", honeypot: "" });
            } else {
                throw new Error(data.error || "Something went wrong.");
            }
        } catch (error: any) {
            setStatus("error");
            setErrorMessage(error.message);
        }
    };

    return (
        <main>
            <Hero
                headline="Connect"
                subheadline="Start the conversation about your forever place."
                variant="small"
                ctaText="Email Us"
                ctaLink="mailto:sales@islandrock.co.mz"
            />

            <Section background="white">
                <div className={styles.introGrid}>
                    <div className={styles.textColumn}>
                        <h2 className={styles.heading}>Enquiries</h2>
                        <p className={styles.paragraph}>
                            Please leave your details below and our in-house sales team will be in touch.
                            Enquiries are sent directly to sales@islandrock.co.mz.
                        </p>

                        {status === "success" ? (
                            <div style={{ padding: '2rem', background: '#e6ffe6', border: '1px solid #ccffcc', borderRadius: '4px', marginTop: '2rem' }}>
                                <h3 style={{ marginBottom: '1rem', color: '#006600' }}>Message Sent!</h3>
                                <p>Thank you for your enquiry. We will be in touch shortly.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: 'transparent', border: '1px solid currentColor', cursor: 'pointer' }}
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem', width: '100%' }}
                            >
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    style={{ padding: '1rem', border: '1px solid #ccc', fontFamily: 'var(--font-body)' }}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{ padding: '1rem', border: '1px solid #ccc', fontFamily: 'var(--font-body)' }}
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number (Optional)"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    style={{ padding: '1rem', border: '1px solid #ccc', fontFamily: 'var(--font-body)' }}
                                />
                                {/* Hidden honeypot field for spam protection */}
                                <input
                                    type="text"
                                    name="honeypot"
                                    style={{ display: 'none' }}
                                    value={formData.honeypot}
                                    onChange={handleChange}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="Message (e.g. Interested in Villa 4)"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    style={{ padding: '1rem', border: '1px solid #ccc', fontFamily: 'var(--font-body)' }}
                                />
                                {status === "error" && (
                                    <div style={{ color: 'red', fontSize: '0.9rem' }}>{errorMessage}</div>
                                )}
                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    style={{
                                        padding: '1rem 3rem',
                                        background: status === "submitting" ? '#ccc' : 'var(--color-charcoal)',
                                        color: 'white',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        alignSelf: 'flex-start',
                                        opacity: status === "submitting" ? 0.7 : 1
                                    }}
                                >
                                    {status === "submitting" ? "Sending..." : "Send Enquiry"}
                                </button>
                            </form>
                        )}
                    </div>

                    <div className={styles.column} style={{ padding: '2rem', background: 'var(--color-sand)' }}>
                        <h3 className={styles.heading} style={{ fontSize: '1.5rem' }}>Direct Contact</h3>
                        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <strong>Sales Office</strong><br />
                                <a href="mailto:sales@islandrock.co.mz">sales@islandrock.co.mz</a>
                            </div>
                            <div>
                                <strong>WhatsApp</strong><br />
                                <a href="tel:+258123456789">+258 123 456 789</a>
                            </div>
                            <div style={{ marginTop: '2rem' }}>
                                <strong>Location</strong><br />
                                Jangamo District,<br />
                                Inhambane Province,<br />
                                Mozambique
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
