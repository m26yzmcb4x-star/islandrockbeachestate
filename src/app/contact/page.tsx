"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        honeypot: "" // Client-side honeypot
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", message: "", honeypot: "" });
            } else {
                const data = await response.json();
                setStatus("error");
                setErrorMessage(data.message || "Failed to send message. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("An unexpected error occurred.");
        }
    };

    return (
        <main>
            <Hero
                headline="Connect"
                subheadline="Start the conversation about your forever place."
                variant="small"
                ctaText="Email Us"
                ctaLink="mailto:fritz@islandrockestate.com"
            />

            <Section background="white">
                <div className={styles.introGrid}>
                    <div className={styles.textColumn}>
                        <h2 className={styles.heading}>Enquiries</h2>
                        <p className={styles.paragraph}>
                            Please leave your details below and our in-house sales team will be in touch.
                            Enquiries are sent directly to fritz@islandrockestate.com.
                        </p>

                        {status === "success" ? (
                            <div style={{ padding: '2rem', background: '#e6ffe6', border: '1px solid #ccffcc', borderRadius: '4px', marginTop: '2rem', color: '#006600' }}>
                                <h3 style={{ marginTop: 0 }}>Enquiry Sent!</h3>
                                <p>Thank you for contacting us. We will get back to you shortly.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    style={{
                                        marginTop: '1rem',
                                        padding: '0.5rem 1rem',
                                        background: 'var(--color-charcoal)',
                                        color: 'white',
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Send Another
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
                        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div>
                                <strong>Elise</strong><br />
                                <a href="mailto:elise@islandrockestate.com" style={{ display: 'block', marginBottom: '0.5rem', color: 'inherit', textDecoration: 'none' }}>elise@islandrockestate.com</a>
                                <a href="tel:+27827735229" style={{ display: 'block', marginBottom: '0.5rem', color: 'inherit', textDecoration: 'none' }}>+27 82 773 5229</a>
                                <a
                                    href="https://wa.me/27827735229"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-block',
                                        padding: '0.5rem 1rem',
                                        background: '#25D366',
                                        color: 'white',
                                        borderRadius: '4px',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    WhatsApp Elise
                                </a>
                            </div>

                            <div>
                                <strong>Fritz</strong><br />
                                <a href="mailto:fritz@islandrockestate.com" style={{ display: 'block', marginBottom: '0.5rem', color: 'inherit', textDecoration: 'none' }}>fritz@islandrockestate.com</a>
                                <a href="tel:+27824564103" style={{ display: 'block', marginBottom: '0.5rem', color: 'inherit', textDecoration: 'none' }}>+27 82 456 4103</a>
                                <a
                                    href="https://wa.me/27824564103"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-block',
                                        padding: '0.5rem 1rem',
                                        background: '#25D366',
                                        color: 'white',
                                        borderRadius: '4px',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    WhatsApp Fritz
                                </a>
                            </div>

                            <div>
                                <strong>Shane</strong><br />
                                <a href="mailto:shane@islandrockestate.com" style={{ display: 'block', marginBottom: '0.5rem', color: 'inherit', textDecoration: 'none' }}>shane@islandrockestate.com</a>
                                <a href="tel:+258850627916" style={{ display: 'block', marginBottom: '0.5rem', color: 'inherit', textDecoration: 'none' }}>+258 85 062 7916</a>
                                <a
                                    href="https://wa.me/258850627916"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-block',
                                        padding: '0.5rem 1rem',
                                        background: '#25D366',
                                        color: 'white',
                                        borderRadius: '4px',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    WhatsApp Shane
                                </a>
                            </div>

                            <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2rem' }}>
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
