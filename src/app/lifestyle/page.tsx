import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function LifestylePage() {
    return (
        <main>
            <Hero
                headline="Lifestyle"
                subheadline="Days measured in tides, not hours."
                variant="small"
                ctaText="View Gallery"
                ctaLink="/gallery"
            />

            <Section background="white">
                <div className={styles.introGrid}>
                    <div className={styles.textColumn}>
                        <h2 className={styles.heading}>The Rhythm of Jangamo</h2>
                        <p className={styles.paragraph}>
                            Life here is dictated by the ocean. Calm mornings perfect for paddle-boarding,
                            afternoons spent exploring the dune forests, and evenings around a fire.
                            It is a place to disconnect from the noise and reconnect with what matters.
                        </p>
                    </div>
                    <div className={styles.imageColumn}>
                        <img src="/images/reef-detail.jpg" alt="Snorkeling in the bay" className={styles.imagePlaceholder} />
                    </div>
                </div>
            </Section>

            <Section background="sand">
                <div className={styles.container}>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '3rem' }}>Activities</h3>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Ocean</h4>
                            <p>Safe swimming, snorkeling in the bay, and world-class deep-sea fishing beyond the reef.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Land</h4>
                            <p>Fat-biking on endless beaches, dune walks, and exploring local culture.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Leisure</h4>
                            <p>Boat launching facilities, yacht parking, and quiet spaces to just be.</p>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
