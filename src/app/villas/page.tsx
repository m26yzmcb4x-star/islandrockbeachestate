import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import villaStyles from "./villas.module.css";
import Link from "next/link";
import { getPageContent } from "@/lib/cms";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "The Villas | Island Rock Beach Estate, Mozambique",
    description: "Explore 20 exclusive beachfront villas at Island Rock — 3, 4, and 5-bedroom designs from R4m. Full specs, floor plans, and pricing.",
    keywords: ["Mozambique villas", "beachfront villas", "Jangamo villas", "luxury villa design", "coastal architecture"],
    openGraph: { url: "https://islandrockestate.com/villas" },
};

// Update this number when a villa is reserved
const VILLAS_REMAINING = 16;
const TOTAL_VILLAS = 20;

const villaTypes = [
    {
        id: "A",
        label: "Villa Type A",
        bedrooms: 3,
        bathrooms: 3,
        livingArea: 240,
        plotSize: 600,
        priceFrom: "R4 000 000",
        priceTo: "R6 000 000",
        position: "Garden & Ocean View",
        targetBuyer: "Ideal for couples or small families — and highly optimised for the holiday rental market.",
        specs: [
            "Master ensuite + 2 further bedrooms (1 ensuite)",
            "Open-plan living / dining / kitchen",
            "Private pool (4×6 m)",
            "Ocean-facing wraparound deck",
            "Outdoor shower",
            "High thatch ceiling",
            "Natural materials throughout",
        ],
    },
    {
        id: "B",
        label: "Villa Type B",
        bedrooms: 2,
        bathrooms: 2,
        livingArea: 140,
        plotSize: 400,
        priceFrom: "R4 000 000",
        priceTo: "R5 000 000",
        position: "Direct Beachfront",
        targetBuyer: "The lock-up-and-go investment villa. Compact footprint, both bedrooms ensuite, strong rental yield.",
        specs: [
            "2 bedrooms — both ensuite",
            "Open-plan living / dining / kitchen",
            "Covered deck with ocean views",
            "Plunge pool or shared pool access",
            "Outdoor shower",
            "High thatch ceiling",
            "Compact, low-maintenance footprint",
        ],
    },
    {
        id: "C",
        label: "Villa Type C",
        bedrooms: 6,
        bathrooms: 6,
        livingArea: 440,
        plotSize: 1200,
        priceFrom: "R8 000 000",
        priceTo: "R10 000 000",
        position: "Prime Beachfront — Corner Position",
        targetBuyer: "Built for large families, group retreats, and the premium short-stay rental market.",
        specs: [
            "6 bedrooms — all ensuite; master wing separated",
            "Multiple living zones + formal dining + boma",
            "Private pool + wraparound ocean-facing deck",
            "Full garden + staff quarters",
            "Outdoor shower & outdoor bath",
            "High thatch ceiling throughout",
            "Maximum privacy buffer on estate",
        ],
    },
];

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

            {/* Availability strip */}
            <div style={{
                background: 'var(--color-charcoal)',
                color: 'white',
                textAlign: 'center',
                padding: '0.85rem 2rem',
                fontSize: '0.78rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
            }}>
                Phase 1 &nbsp;·&nbsp; {TOTAL_VILLAS} Villas &nbsp;·&nbsp;{' '}
                <strong>{VILLAS_REMAINING} of {TOTAL_VILLAS} remaining</strong>
            </div>

            {/* Design Intro */}
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
                        <span className={styles.sectionTitle}>Design Philosophy</span>
                        <h2 className={styles.heading}>{data.intro_title}</h2>
                        <p className={styles.paragraph}>{data.intro_text}</p>
                    </div>
                </div>
            </Section>

            {/* Villa Types */}
            <Section background="sand">
                <div>
                    <span className={styles.sectionTitle} style={{ display: 'block', textAlign: 'center', marginBottom: '0.75rem' }}>Choose Your Villa</span>
                    <h2 className={styles.heading} style={{ textAlign: 'center', marginBottom: '1rem' }}>Three Configurations</h2>
                    <p className={styles.paragraph} style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 4rem auto' }}>
                        All villas share the same design language — high thatch, natural materials, indoor-outdoor living.
                        The tiers differ in scale, position on the estate, and price.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {villaTypes.map((villa) => (
                            <div key={villa.id} className={villaStyles.villaCard}>
                                <div className={villaStyles.villaCardHeader}>
                                    <div>
                                        <span className={styles.sectionTitle}>{villa.position}</span>
                                        <h3 className={styles.heading} style={{ fontSize: '2rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>{villa.label}</h3>
                                        <p style={{ fontSize: '0.95rem', color: '#666', fontStyle: 'italic' }}>{villa.targetBuyer}</p>
                                    </div>
                                    <div className={villaStyles.priceBlock}>
                                        <span className={villaStyles.priceFrom}>From</span>
                                        <span className={villaStyles.price}>{villa.priceFrom}</span>
                                        <span className={villaStyles.priceFrom}>– {villa.priceTo}</span>
                                    </div>
                                </div>

                                {/* Key numbers */}
                                <div className={villaStyles.statRow}>
                                    <div className={villaStyles.stat}>
                                        <strong>{villa.bedrooms}</strong>
                                        <span>Bedrooms</span>
                                    </div>
                                    <div className={villaStyles.stat}>
                                        <strong>{villa.bathrooms}</strong>
                                        <span>Bathrooms</span>
                                    </div>
                                    <div className={villaStyles.stat}>
                                        <strong>{villa.livingArea}m²</strong>
                                        <span>Living Area</span>
                                    </div>
                                    <div className={villaStyles.stat}>
                                        <strong>{villa.plotSize}m²</strong>
                                        <span>Plot Size</span>
                                    </div>
                                </div>

                                {/* Spec list */}
                                <ul className={villaStyles.specList}>
                                    {villa.specs.map((s) => (
                                        <li key={s}>{s}</li>
                                    ))}
                                </ul>

                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                                    <Link href={`/contact?villa=${villa.id}`} className={styles.primaryButton} style={{ display: 'inline-block' }}>
                                        Enquire about Villa {villa.id}
                                    </Link>
                                    <Link href="/contact?brief=1" className={styles.secondaryButton} style={{ display: 'inline-block' }}>
                                        Download Investor Brief
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Design Zoning */}
            <Section background="white">
                <div className={styles.container} style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
                    <span className={styles.sectionTitle}>Design Thinking</span>
                    <h2 className={styles.heading} style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>Every Villa Follows the Same Spatial Logic</h2>
                    <p className={styles.paragraph} style={{ marginBottom: '2.5rem' }}>
                        The site is oriented so that every villa faces south towards the ocean. All bedrooms are positioned on the southern face
                        — so you wake up to the Indian Ocean. Service functions (kitchen, laundry, staff, parking, entrance) are placed on the
                        northern side, away from the views. Living zones occupy the centre, with large sliding doors opening directly onto the
                        deck, pool, and garden beyond.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '6px', overflow: 'hidden', textAlign: 'center', fontSize: '0.8rem' }}>
                        {[
                            { zone: '▲ North', label: 'Service', sub: 'Kitchen · Staff · Parking · Entrance', bg: '#f0ece4' },
                            { zone: '', label: 'Wet Rooms', sub: 'Bathrooms · Ensuites', bg: '#e4eeee' },
                            { zone: '', label: 'Living', sub: 'Open-plan living · Dining', bg: '#faf6ee', bold: true },
                            { zone: '', label: 'Bedrooms', sub: 'All ocean-facing', bg: '#eaf0ea' },
                            { zone: '▼ South', label: 'Deck · Pool · Garden', sub: 'Indian Ocean', bg: '#ddf0f7' },
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
                            { title: 'Natural Materials', desc: 'Thatch, timber, stone, and polished concrete — built for longevity in a coastal climate.' },
                            { title: 'Indoor-Outdoor Flow', desc: 'Large sliding glass doors dissolve the line between living spaces and the deck.' },
                            { title: 'Off-Grid Ready', desc: 'Solar and battery provision, borehole water, and robust build spec for the environment.' },
                            { title: 'Rental Management', desc: 'Optional placement in the estate\'s managed rental pool when not in personal use.' },
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
                        {VILLAS_REMAINING} of {TOTAL_VILLAS} villas remain in Phase 1.
                    </h2>
                    <p className={styles.paragraph} style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '560px', margin: '0 auto 2rem auto' }}>
                        Contact us to receive the full floor plan set, spec sheet, and pricing guide for your preferred villa type.
                    </p>
                    <Link href="/contact" className={styles.primaryButton}>Enquire Now</Link>
                </div>
            </Section>

            <BreadcrumbJsonLd items={[{ name: 'The Villas', href: '/villas' }]} />
        </main>
    );
}
