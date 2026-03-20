import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "Location — Jangamo, Inhambane | Island Rock Beach Estate",
    description: "Discover Jangamo, Inhambane Province — a pristine reef-protected bay on Mozambique's southern coast. Remote enough to be wild, accessible enough for regular visits.",
    keywords: ["Jangamo Mozambique", "Inhambane property", "reef-protected beach", "Mozambique coast", "beachfront location"],
};

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
                    <div className={styles.imageColumn} style={{ position: 'relative', minHeight: '400px' }}>
                        <Image
                            src="/images/shipwreck.jpg"
                            alt="Historic shipwreck landmark near Island Rock Beach Estate"
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
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

            <Section background="dark">
                <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'white' }}>
                    <h2 className={styles.heading} style={{ color: 'white', marginBottom: '1.5rem' }}>Discover Jangamo for Yourself</h2>
                    <p className={styles.paragraph} style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Get in touch to learn more about the location and arrange a site visit.
                    </p>
                    <Link href="/contact" className={styles.primaryButton}>Enquire Now</Link>
                </div>
            </Section>
            <BreadcrumbJsonLd items={[{ name: 'Location', href: '/location' }]} />
        </main>
    );
}
