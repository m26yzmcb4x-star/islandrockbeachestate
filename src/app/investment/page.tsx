import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { TrendingUp, Globe, Shield } from "lucide-react";

export default function InvestmentPage() {
    return (
        <main>
            <Hero
                headline="A Lifestyle Investment"
                subheadline="In One of Africa’s Last Untouched Coastal Regions."
                variant="small"
                ctaText="Enquire Now"
                ctaLink="/contact"
            />

            <Section background="white">
                <div className={styles.introGrid}>
                    <div className={styles.imageColumn} style={{ position: 'relative', minHeight: '400px' }}>
                        <Image
                            src="/images/terrace-ocean-view.jpg"
                            alt="Luxury villa terrace overlooking the Indian Ocean"
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className={styles.textColumn}>
                        <h2 className={styles.heading}>Hybrid Value</h2>
                        <span className={styles.sectionTitle}>Lifestyle + Asset</span>
                        <p className={styles.paragraph}>
                            Island Rock Estate is positioned as both a private coastal lifestyle destination and a strategic long-term beachfront investment.
                            <br /><br />
                            We offer a rare opportunity to own prime beachfront property at accessible entry points, prioritizing long-term value over short-term speculation.
                            <br /><br />
                            <strong>Villas range from R4m – R10m.</strong>
                        </p>
                    </div>
                </div>
            </Section>

            <Section background="stone">
                <div className={styles.container}>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '3rem' }}>Key Value Drivers</h3>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <Shield size={32} strokeWidth={1.5} className={styles.cardIcon} color="#4A6C6F" />
                            <h4 className={styles.featureTitle}>Scarcity</h4>
                            <p>Strictly limited beachfront supply in a protected region.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <TrendingUp size={32} strokeWidth={1.5} className={styles.cardIcon} color="#4A6C6F" />
                            <h4 className={styles.featureTitle}>Growth</h4>
                            <p>Early-stage positioning in an emerging international destination.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <Globe size={32} strokeWidth={1.5} className={styles.cardIcon} color="#4A6C6F" />
                            <h4 className={styles.featureTitle}>Global Trend</h4>
                            <p>Increasing demand for nature-based, private coastal living.</p>
                        </div>
                    </div>

                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Capital Growth</h4>
                            <p className={styles.cardDescription}>Driven by infrastructure improvements and rising demand.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Rental Potential</h4>
                            <p className={styles.cardDescription}>High-demand holiday rental market for exclusive villas.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Legacy</h4>
                            <p className={styles.cardDescription}>A tangible asset to pass down through generations.</p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <Link href="/contact" className={styles.primaryButton}>Request Investment Guide</Link>
                    </div>
                </div>
            </Section>
        </main>
    );
}
