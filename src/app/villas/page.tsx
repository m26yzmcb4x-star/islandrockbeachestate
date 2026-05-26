import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { getPageContent } from "@/lib/cms";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "The Villas | Island Rock Beach Estate, Mozambique",
    description: "Explore 20 exclusive beachfront villas at Island Rock. Architecturally designed for coastal living with natural materials and ocean views.",
    keywords: ["Mozambique villas", "beachfront villas", "Jangamo villas", "luxury villa design", "coastal architecture"],
};

export default async function VillasPage() {
    const data = await getPageContent('villas');

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
                    <div className={styles.imageColumn} style={{ position: 'relative', minHeight: '400px' }}>
                        <Image
                            src={data.intro_image}
                            alt="Architecturally designed villa at Island Rock Beach Estate"
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className={styles.textColumn}>
                        <h2 className={styles.heading}>{data.intro_title}</h2>
                        <p className={styles.paragraph}>
                            {data.intro_text}
                        </p>
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
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link href="/contact" className={styles.link}>Request Floor Plans</Link>
                    </div>
                </div>
            </Section>
            <BreadcrumbJsonLd items={[{ name: 'The Villas', href: '/villas' }]} />
        </main>
    );
}
