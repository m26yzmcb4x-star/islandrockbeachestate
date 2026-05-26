import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { getPageContent } from "@/lib/cms";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "The Estate | Island Rock Beach Estate, Mozambique",
    description: "A private, reef-protected beachfront estate in Jangamo, Mozambique. 20 exclusive villas designed for quiet, timeless accessible luxury.",
    keywords: ["Island Rock Estate", "Mozambique beachfront", "private estate", "luxury coastal development", "Jangamo estate"],
};

export default async function EstatePage() {
    const data = await getPageContent('estate');

    if (!data) {
        return <div>Content not found</div>;
    }

    return (
        <main>
            <Hero
                headline={data.headline}
                subheadline={data.subheadline}
                variant="small"
                ctaText={data.cta_text}
                ctaLink={data.cta_link}
            />

            <Section background="white">
                <div className={styles.introGrid}>
                    <div className={styles.textColumn}>
                        <h2 className={styles.heading}>{data.philosophy_title}</h2>
                        <p className={styles.paragraph}>
                            {data.philosophy_text}
                        </p>
                    </div>
                    <div className={styles.imageColumn} style={{ position: 'relative', minHeight: '400px' }}>
                        <Image
                            src={data.philosophy_image}
                            alt="Aerial view of the Island Rock Beach Estate coastline"
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </Section>

            <Section background="sand">
                <div className={styles.container}>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '3rem' }}>{data.features_title}</h3>
                    <div className={styles.featuresGrid}>
                        {data.features && data.features.map((feature: { title: string; description: string }, index: number) => (
                            <div key={index} className={styles.featureCard}>
                                <h4 className={styles.featureTitle}>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section background="dark">
                <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'white' }}>
                    <h2 className={styles.heading} style={{ color: 'white', marginBottom: '1.5rem' }}>Interested in the Estate?</h2>
                    <p className={styles.paragraph} style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Discover your place at Island Rock. Get in touch to learn about availability and next steps.
                    </p>
                    <Link href="/contact" className={styles.primaryButton}>Enquire Now</Link>
                </div>
            </Section>
            <BreadcrumbJsonLd items={[{ name: 'The Estate', href: '/estate' }]} />
        </main>
    );
}
