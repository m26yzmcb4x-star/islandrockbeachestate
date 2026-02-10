import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function InvestmentPage() {
    return (
        <main>
            <Hero
                headline="Investment"
                subheadline="Secure your legacy in an emerging, high-value coastal region."
                variant="small"
                ctaText="Enquire Now"
                ctaLink="/contact"
            />

            <Section background="white">
                <div className={styles.introGrid}>
                    <div className={styles.imageColumn}>
                        <div style={{ width: '100%', height: '100%', background: '#333333' }}></div>
                    </div>
                    <div className={styles.textColumn}>
                        <h2 className={styles.heading}>Accessible Luxury</h2>
                        <p className={styles.paragraph}>
                            Island Rock offers a rare opportunity to own prime beachfront property at accessible entry points.
                            <br /><br />
                            <strong>Villas range from R4m – R10m.</strong>
                            <br /><br />
                            We prioritize long-term value over short-term speculation, ensuring a community of like-minded owners.
                        </p>
                    </div>
                </div>
            </Section>

            <Section background="stone">
                <div className={styles.container}>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '3rem' }}>Ownership & Vision</h3>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Low Density</h4>
                            <p>Strict rules ensure the estate remains uncrowded and private forever.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Phased Approach</h4>
                            <p>Future phases are planned to enhance value, not dilute it.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Management</h4>
                            <p>Full-time estate management to care for your property when you are away.</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link href="/contact" className={styles.link}>Request Investment Guide</Link>
                    </div>
                </div>
            </Section>
        </main>
    );
}
