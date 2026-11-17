import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { getPageContent } from "@/lib/cms";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { FACTS } from "@/lib/facts";

export const metadata: Metadata = {
    title: "The Villas | Island Rock Golf Estate, Mozambique",
    description: `${FACTS.villas.planned} villa stands planned at Island Rock Golf Estate (${FACTS.villas.standSizeM2}), tailored to bedrooms and client needs, across beach and golf-course positions.`,
    keywords: ["Mozambique golf villas", "beachfront villas", "Jangamo villas", "luxury villa design", "coastal architecture"],
    openGraph: { url: "https://islandrockestate.com/villas" },
};

export default async function VillasPage() {
    const data = await getPageContent("villas");

    if (!data) {
        return <div>Content not found</div>;
    }

    return (
        <main>
            <Hero
                headline={data.headline}
                subheadline={data.subheadline}
                variant="small"
                ctaText="Enquire About Availability"
                ctaLink="/contact"
            />

            {/* Status strip */}
            <div style={{
                background: 'var(--color-charcoal)',
                color: 'white',
                textAlign: 'center',
                padding: '0.85rem 2rem',
                fontSize: '0.78rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
            }}>
                Concept Stage &nbsp;·&nbsp; <strong>{FACTS.villas.planned} Villas Planned</strong>
            </div>

            {/* Design Intro */}
            <Section background="white">
                <div className={styles.introGrid}>
                    <div className={styles.imageColumn} style={{ position: 'relative', minHeight: '400px' }}>
                        <Image
                            src={data.intro_image}
                            alt="Architecturally designed villa at Island Rock Golf Estate"
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className={styles.textColumn}>
                        <span className={styles.sectionTitle}>Design Philosophy</span>
                        <h2 className={styles.heading}>{data.intro_title}</h2>
                        <p className={styles.paragraph}>{data.intro_text}</p>
                    </div>
                </div>
            </Section>

            {/* Villa Positions */}
            <Section background="sand">
                <div>
                    <span className={styles.sectionTitle} style={{ display: 'block', textAlign: 'center', marginBottom: '0.75rem' }}>Tailored to You</span>
                    <h2 className={styles.heading} style={{ textAlign: 'center', marginBottom: '1rem' }}>{FACTS.villas.planned} Villa Stands, Built to Fit</h2>
                    <p className={styles.paragraph} style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
                        {FACTS.villas.planned} stands ({FACTS.villas.standSizeM2}) are laid out across the dunes and
                        valley, positioned across a mix of beachfront and golf-course settings, with
                        layouts tailored to bedroom count and each buyer&apos;s needs.
                        Architecture, specifications and pricing will be confirmed as plans are finalised.
                    </p>
                    <div style={{ textAlign: 'center' }}>
                        <Link href="/contact" className={styles.primaryButton} style={{ display: 'inline-block' }}>
                            Register Villa Interest
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Design Zoning */}
            <Section background="white">
                <div className={styles.container} style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
                    <span className={styles.sectionTitle}>Design Thinking</span>
                    <h2 className={styles.heading} style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>Oriented to the Ocean</h2>
                    <p className={styles.paragraph} style={{ marginBottom: '2.5rem' }}>
                        The ocean lies east and south-east of the estate, and stands are laid out to make
                        the most of that outlook. The intent: bedrooms and living space toward the ocean
                        side, service functions (kitchen, laundry, staff, parking, entrance) toward the
                        landward side, with living zones in between opening onto a deck, pool and garden.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '6px', overflow: 'hidden', textAlign: 'center', fontSize: '0.8rem' }}>
                        {[
                            { zone: '◀ Landward', label: 'Service', sub: 'Kitchen · Staff · Parking · Entrance', bg: '#f0ece4' },
                            { zone: '', label: 'Wet Rooms', sub: 'Bathrooms · Ensuites', bg: '#e4eeee' },
                            { zone: '', label: 'Living', sub: 'Open-plan living · Dining', bg: '#faf6ee', bold: true },
                            { zone: '', label: 'Bedrooms', sub: 'Ocean-facing where possible', bg: '#eaf0ea' },
                            { zone: 'Ocean (E/SE) ▶', label: 'Deck · Pool · Garden', sub: 'Indian Ocean', bg: '#ddf0f7' },
                        ].map((z, i) => (
                            <div key={i} style={{ padding: '1.2rem 0.5rem', background: z.bg }}>
                                {z.zone && <div style={{ fontSize: '0.7rem', color: '#aaa', letterSpacing: '0.1em', marginBottom: '0.3rem', textTransform: 'uppercase' }}>{z.zone}</div>}
                                <div style={{ fontWeight: z.bold ? 700 : 600, color: '#333', marginBottom: '0.3rem' }}>{z.label}</div>
                                <div style={{ color: '#888', fontSize: '0.75rem', lineHeight: 1.4 }}>{z.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Common features */}
            <Section background="white">
                <div className={styles.container}>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '3rem' }}>All Villas Include</h3>
                    <div className={styles.featuresGrid}>
                        {[
                            { title: 'Built for the Coast', desc: 'Materials and finishes selected for longevity in a coastal climate — to be confirmed as architecture is finalised.' },
                            { title: 'Indoor-Outdoor Flow', desc: 'Large sliding glass doors dissolve the line between living spaces and the deck.' },
                            { title: 'Off-Grid Ready', desc: 'Solar and battery provision, borehole water, and robust build spec for the environment.' },
                            { title: 'Tailored Layouts', desc: 'Bedroom count and layout tailored to each buyer\'s needs, independent of the hotel.' },
                        ].map((f) => (
                            <div key={f.title} className={styles.featureCard}>
                                <h4 className={styles.featureTitle}>{f.title}</h4>
                                <p className={styles.cardDescription}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section background="dark">
                <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'white' }}>
                    <h2 className={styles.heading} style={{ color: 'white', marginBottom: '1rem' }}>
                        {FACTS.villas.planned} villas planned across the estate.
                    </h2>
                    <p className={styles.paragraph} style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '560px', margin: '0 auto 2rem auto' }}>
                        Register to receive villa updates as plans, specifications and pricing are confirmed.
                    </p>
                    <Link href="/contact" className={styles.primaryButton}>Enquire Now</Link>
                </div>
            </Section>

            <BreadcrumbJsonLd items={[{ name: 'The Villas', href: '/villas' }]} />
        </main>
    );
}
