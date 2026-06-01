"use client";

import { useState } from "react";
import styles from "@/styles/Home.module.css";

export default function InvestmentBriefCapture() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, source: "investment_brief" }),
            });

            if (res.ok) {
                setStatus("success");
                setEmail("");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div style={{
                background: 'var(--color-sand)',
                border: '1px solid rgba(74, 108, 111, 0.3)',
                borderRadius: '4px',
                padding: '2.5rem',
                textAlign: 'center',
            }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '0.75rem' }}>
                    Brief on its way.
                </h3>
                <p style={{ opacity: 0.75, lineHeight: 1.7 }}>
                    We will send the Island Rock Investment Brief to your inbox shortly.
                    Our team will also follow up directly if you have any questions.
                </p>
            </div>
        );
    }

    return (
        <div style={{
            background: 'var(--color-sand)',
            borderRadius: '4px',
            padding: '2.5rem',
        }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '0.5rem' }}>
                Download the Investment Brief
            </h3>
            <p style={{ opacity: 0.75, lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                A 6-page PDF covering the site plan, floor plans, pricing, ownership structure,
                and projected returns. Enter your email and we will send it directly.
            </p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    style={{
                        flex: '1 1 260px',
                        padding: '0.85rem 1rem',
                        border: '1px solid rgba(0,0,0,0.2)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        borderRadius: '2px',
                    }}
                />
                <button
                    type="submit"
                    disabled={status === "submitting"}
                    style={{
                        padding: '0.85rem 2rem',
                        background: 'var(--color-charcoal)',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontSize: '0.8rem',
                        borderRadius: '2px',
                        opacity: status === "submitting" ? 0.6 : 1,
                        whiteSpace: 'nowrap',
                    }}
                >
                    {status === "submitting" ? "Sending…" : "Send Me the Brief"}
                </button>
            </form>
            {status === "error" && (
                <p style={{ color: 'red', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                    Something went wrong — please try again or email us directly.
                </p>
            )}
        </div>
    );
}
