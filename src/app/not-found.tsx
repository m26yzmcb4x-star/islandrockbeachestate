import Link from "next/link";

export default function NotFound() {
    return (
        <div style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
        }}>
            <h1 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '4rem',
                fontWeight: 400,
                color: '#333',
                marginBottom: '1rem',
            }}>
                404
            </h1>
            <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.2rem',
                color: '#666',
                marginBottom: '2rem',
                maxWidth: '400px',
            }}>
                This page doesn&apos;t exist — but the coastline does. Let us help you find what you&apos;re looking for.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link href="/" style={{
                    display: 'inline-block',
                    background: '#333',
                    color: 'white',
                    padding: '0.8rem 2rem',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    transition: 'background 0.3s ease',
                }}>
                    Go Home
                </Link>
                <Link href="/contact" style={{
                    display: 'inline-block',
                    background: 'transparent',
                    color: '#333',
                    padding: '0.8rem 2rem',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    border: '1px solid #333',
                    transition: 'all 0.3s ease',
                }}>
                    Contact Us
                </Link>
            </div>
        </div>
    );
}
