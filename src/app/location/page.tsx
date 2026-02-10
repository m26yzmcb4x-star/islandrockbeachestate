import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";

export default function LocationPage() {
    return (
        <main>
            <Hero
                headline="Location"
                subheadline="Jangamo, Inhambane — A hidden gem on the Mozambican coast."
                variant="small"
                ctaText="View Map"
                ctaLink="#map"
            />

            <Section background="white">
                <div className={styles.introGrid}>
                    <div className={styles.textColumn}>
                        <h2 className={styles.heading}>The Region</h2>
                        <p className={styles.paragraph}>
                            Located in the Jangamo District of Inhambane, Island Rock is nestled in a region known for its
                            pristine coastline, coconut forests, and vibrant marine life. It is far enough to be wild,
                            yet accessible enough for regular visits.
                        </p>
                    </div>
                    <div className={styles.imageColumn}>
                        <img src="/images/shipwreck.jpg" alt="Shipwreck landmark" className={styles.imagePlaceholder} />
                    </div>
                </div>
            </Section>

            <Section background="stone">
                <div className={styles.textColumn} style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h3 className={styles.heading}>Reef & Bay</h3>
                    <p className={styles.paragraph}>
                        The estate fronts a reef-protected bay. This geological formation creates a calm, swimming-pool-like
                        area safe for children and ideal for snorkeling, while the outer reef offers world-class fishing and diving.
                    </p>
                </div>
            </Section>
        </main>
    );
}
