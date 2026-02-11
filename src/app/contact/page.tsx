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
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <a href="tel:+27827735229" style={{ color: 'inherit', textDecoration: 'none' }}>+27 82 773 5229</a>
                                    <a
                                        href="https://wa.me/27827735229"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Chat with Elise on WhatsApp"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '40px',
                                            height: '40px',
                                            background: '#25D366',
                                            color: 'white',
                                            borderRadius: '50%',
                                            textDecoration: 'none',
                                            transition: 'transform 0.2s ease'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    >
                                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <strong>Fritz</strong><br />
                                <a href="mailto:fritz@islandrockestate.com" style={{ display: 'block', marginBottom: '0.5rem', color: 'inherit', textDecoration: 'none' }}>fritz@islandrockestate.com</a>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <a href="tel:+27824564103" style={{ color: 'inherit', textDecoration: 'none' }}>+27 82 456 4103</a>
                                    <a
                                        href="https://wa.me/27824564103"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Chat with Fritz on WhatsApp"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '40px',
                                            height: '40px',
                                            background: '#25D366',
                                            color: 'white',
                                            borderRadius: '50%',
                                            textDecoration: 'none',
                                            transition: 'transform 0.2s ease'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    >
                                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <strong>Shane</strong><br />
                                <a href="mailto:shane@islandrockestate.com" style={{ display: 'block', marginBottom: '0.5rem', color: 'inherit', textDecoration: 'none' }}>shane@islandrockestate.com</a>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <a href="tel:+258850627916" style={{ color: 'inherit', textDecoration: 'none' }}>+258 85 062 7916</a>
                                    <a
                                        href="https://wa.me/258850627916"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Chat with Shane on WhatsApp"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '40px',
                                            height: '40px',
                                            background: '#25D366',
                                            color: 'white',
                                            borderRadius: '50%',
                                            textDecoration: 'none',
                                            transition: 'transform 0.2s ease'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    >
                                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                    </a>
                                </div>
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
