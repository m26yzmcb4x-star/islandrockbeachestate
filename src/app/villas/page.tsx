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
        bathrooms: 2,
        livingArea: 240,
        plotSize: 600,
        priceFrom: "R4 000 000",
        position: "Garden & Ocean View",
        specs: [
            "Private plunge pool",
            "High thatch ceiling",
            "Open-plan living & dining",
            "Ocean-facing covered deck",
            "Outdoor shower",
            "Staff quarters",
        ],
        floorPlan: "/images/floorplan-villa-a.jpg",
    },
    {
        id: "B",
        label: "Villa Type B",
        bedrooms: 4,
        bathrooms: 3,
        livingArea: 310,
        plotSize: 800,
        priceFrom: "R6 500 000",
        position: "Direct Beachfront",
        specs: [
            "Private plunge pool",
            "High thatch ceiling",
            "Open-plan living + separate lounge",
            "Wraparound ocean-facing deck",
            "Outdoor shower",
            "Staff quarters",
            "Double carport",
        ],
        floorPlan: "/images/floorplan-villa-b.jpg",
    },
    {
        id: "C",
        label: "Villa Type C",
        bedrooms: 5,
        bathrooms: 4,
        livingArea: 380,
        plotSize: 1000,
        priceFrom: "R9 000 000",
        position: "Prime Beachfront Corner",
        specs: [
            "Private pool",
            "High thatch ceiling",
            "Open-plan living + formal lounge",
            "Wraparound ocean-facing deck",
            "Outdoor shower & bath",
            "Staff quarters",
            "Double garage",
            "Home office / 5th bedroom",
        ],
        floorPlan: "/images/floorplan-villa-c.jpg",
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

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
                        {villaTypes.map((villa, i) => (
                            <div key={villa.id} className={villaStyles.villaRow} style={{ flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}>
                                {/* Floor Plan */}
                                <div className={villaStyles.floorPlanBox}>
                                    <div className={villaStyles.floorPlanPlaceholder}>
                                        <span className={villaStyles.floorPlanLabel}>Floor Plan</span>
                                        <span className={villaStyles.floorPlanSub}>Villa {villa.id} — {villa.livingArea}m²</span>
                                        <p className={villaStyles.floorPlanNote}>
                                            Architectural drawings available on request.<br />
                                            Contact us to receive the full plan set.
                                        </p>
                                    </div>
                                </div>

                                {/* Specs */}
                                <div className={villaStyles.villaSpecs}>
                                    <span className={styles.sectionTitle}>{villa.position}</span>
                                    <h3 className={styles.heading} style={{ fontSize: '2rem', marginTop: '0.5rem' }}>{villa.label}</h3>

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

                                    <div className={villaStyles.priceRow}>
                                        <span className={villaStyles.priceFrom}>From</span>
                                        <span className={villaStyles.price}>{villa.priceFrom}</span>
                                    </div>

                                    <Link href={`/contact?villa=${villa.id}`} className={styles.primaryButton} style={{ marginTop: '2rem', display: 'inline-block' }}>
                                        Enquire about Villa {villa.id}
                                    </Link>
                                </div>
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
