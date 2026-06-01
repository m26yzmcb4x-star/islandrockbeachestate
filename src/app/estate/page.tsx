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
    openGraph: { url: "https://islandrockestate.com/estate" },
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

            {/* Developer Credibility */}
            <Section background="white">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <span className={styles.sectionTitle} style={{ display: 'block', marginBottom: '0.5rem' }}>The People Behind It</span>
                    <h3 className={styles.heading} style={{ marginBottom: '3rem' }}>The Developers</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div style={{
                                width: '72px',
                                height: '72px',
                                borderRadius: '50%',
                                background: 'var(--color-stone)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.5rem',
                                color: 'var(--color-charcoal)',
                                flexShrink: 0,
                            }}>F</div>
                            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', margin: 0 }}>Fritz</h4>
                            <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, margin: 0 }}>Development &amp; Sales — South Africa</p>
                            <p className={styles.paragraph} style={{ fontSize: '0.95rem' }}>
                                Fritz leads the Island Rock vision — from the initial land acquisition through to sales
                                and investor relations. He brings deep experience in coastal property development and
                                a long-standing passion for southern Mozambique's coastline.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.85rem' }}>
                                <a href="tel:+27824564103" style={{ color: 'inherit' }}>+27 82 456 4103</a>
                                <a href="mailto:fritz@islandrockestate.com" style={{ color: 'inherit' }}>fritz@islandrockestate.com</a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div style={{
                                width: '72px',
                                height: '72px',
                                borderRadius: '50%',
                                background: 'var(--color-stone)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.5rem',
                                color: 'var(--color-charcoal)',
                                flexShrink: 0,
                            }}>S</div>
                            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', margin: 0 }}>Shane</h4>
                            <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, margin: 0 }}>Operations &amp; Site — Mozambique</p>
                            <p className={styles.paragraph} style={{ fontSize: '0.95rem' }}>
                                Shane is on the ground in Mozambique, managing site operations, local authority
                                relations, and construction oversight. His years of experience in-country ensure
                                the project moves with the realities of the region.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.85rem' }}>
                                <a href="tel:+258850627916" style={{ color: 'inherit' }}>+258 85 062 7916</a>
                                <a href="mailto:shane@islandrockestate.com" style={{ color: 'inherit' }}>shane@islandrockestate.com</a>
                            </div>
                        </div>
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
