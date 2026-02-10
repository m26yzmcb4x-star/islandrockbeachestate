import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";

export default function ContactPage() {
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

                        <form
                            action="https://formspree.io/f/mqkenqro"
                            method="POST"
                            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem', width: '100%' }}
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                style={{ padding: '1rem', border: '1px solid #ccc', fontFamily: 'var(--font-body)' }}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                style={{ padding: '1rem', border: '1px solid #ccc', fontFamily: 'var(--font-body)' }}
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number (Optional)"
                                style={{ padding: '1rem', border: '1px solid #ccc', fontFamily: 'var(--font-body)' }}
                            />
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Message (e.g. Interested in Villa 4)"
                                required
                                style={{ padding: '1rem', border: '1px solid #ccc', fontFamily: 'var(--font-body)' }}
                            />
                            <button
                                type="submit"
                                style={{
                                    padding: '1rem 3rem',
                                    background: 'var(--color-charcoal)',
                                    color: 'white',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    alignSelf: 'flex-start'
                                }}
                            >
                                Send Enquiry
                            </button>
                        </form>
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
