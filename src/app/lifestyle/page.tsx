import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "Coastal Lifestyle | Island Rock Beach Estate, Mozambique",
    description: "Experience untouched coastal living in Jangamo. Swimming, snorkeling, fishing, dune walks, and quiet moments by the Indian Ocean.",
    keywords: ["Mozambique lifestyle", "coastal living", "Jangamo activities", "Indian Ocean", "beach lifestyle"],
    openGraph: { url: "https://islandrockestate.com/lifestyle" },
};

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
                    <div className={styles.imageColumn} style={{ position: 'relative', minHeight: '400px' }}>
                        <Image
                            src="/images/reef-detail.jpg"
                            alt="Crystal-clear reef waters perfect for snorkeling at Jangamo"
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
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

            <Section background="dark">
                <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'white' }}>
                    <h2 className={styles.heading} style={{ color: 'white', marginBottom: '1.5rem' }}>Live the Island Rock Lifestyle</h2>
                    <p className={styles.paragraph} style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Ready to wake up to the Indian Ocean? Start the conversation today.
                    </p>
                    <Link href="/contact" className={styles.primaryButton}>Enquire Now</Link>
                </div>
            </Section>
            <BreadcrumbJsonLd items={[{ name: 'Lifestyle', href: '/lifestyle' }]} />
        </main>
    );
}
