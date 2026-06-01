import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Link from "next/link";
import Image from "next/image";
import { TrendingUp, Globe, Shield } from "lucide-react";
import InvestmentBriefCapture from "@/components/InvestmentBriefCapture";

export const metadata: Metadata = {
    title: "Investment Opportunity | Island Rock Beach Estate, Mozambique",
    description: "Secure a rare beachfront investment in Jangamo, Mozambique. Villas from R4m–R10m with capital growth, rental yield projections, and full ownership guidance.",
    keywords: ["Mozambique investment", "beachfront property investment", "Jangamo villas", "Africa real estate investment", "coastal property", "DUAT Mozambique"],
    openGraph: { url: "https://islandrockestate.com/investment" },
};

const priceTiers = [
    {
        type: "Villa A",
        beds: "3 bed / 2 bath",
        size: "240m²",
        position: "Garden & Ocean View",
        price: "From R4 000 000",
        highlight: false,
    },
    {
        type: "Villa B",
        beds: "4 bed / 3 bath",
        size: "310m²",
        position: "Direct Beachfront",
        price: "From R6 500 000",
        highlight: true,
    },
    {
        type: "Villa C",
        beds: "5 bed / 4 bath",
        size: "380m²",
        position: "Prime Beachfront Corner",
        price: "From R9 000 000",
        highlight: false,
    },
];

export default function InvestmentPage() {
    return (
        <main>
            <Hero
                headline="A Lifestyle Investment"
                subheadline="In One of Africa's Last Untouched Coastal Regions."
                variant="small"
                ctaText="Download Investment Brief"
                ctaLink="#brief"
            />

            {/* Intro */}
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
                        <span className={styles.sectionTitle}>Lifestyle + Asset</span>
                        <h2 className={styles.heading}>Hybrid Value</h2>
                        <p className={styles.paragraph}>
                            Island Rock Estate is positioned as both a private coastal lifestyle destination
                            and a strategic long-term beachfront investment. We offer a rare opportunity to own
                            prime beachfront land at accessible entry points, with long-term appreciation built
                            on scarcity and growing international demand.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Price Tiers */}
            <Section background="stone">
                <div>
                    <span className={styles.sectionTitle} style={{ display: 'block', textAlign: 'center', marginBottom: '0.5rem' }}>Pricing Guide</span>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '0.75rem' }}>What Drives the Price</h3>
                    <p className={styles.paragraph} style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                        Price is determined by villa size, bedroom count, and beachfront position.
                        Corner and direct beachfront plots carry a premium over garden-view positions.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                        {priceTiers.map((t) => (
                            <div key={t.type} style={{
                                padding: '2.5rem 2rem',
                                background: t.highlight ? 'var(--color-charcoal)' : 'var(--color-white)',
                                color: t.highlight ? 'white' : 'inherit',
                                borderRadius: '4px',
                                border: t.highlight ? 'none' : '1px solid rgba(0,0,0,0.07)',
                                position: 'relative',
                            }}>
                                {t.highlight && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-12px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: 'var(--color-green, #4A6C6F)',
                                        color: 'white',
                                        fontSize: '0.7rem',
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                        padding: '0.3rem 1rem',
                                        borderRadius: '2px',
                                        whiteSpace: 'nowrap',
                                    }}>
                                        Most Popular
                                    </div>
                                )}
                                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>{t.type}</h4>
                                <p style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{t.beds}</p>
                                <p style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: '0.4rem' }}>{t.size} living area</p>
                                <p style={{ fontSize: '0.85rem', opacity: 0.75, marginBottom: '1.5rem' }}>{t.position}</p>
                                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>{t.price}</p>
                                <Link href="/contact" style={{
                                    display: 'inline-block',
                                    marginTop: '1.5rem',
                                    fontSize: '0.8rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    borderBottom: '1px solid currentColor',
                                    paddingBottom: '2px',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}>
                                    Enquire
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Key Value Drivers */}
            <Section background="white">
                <div className={styles.container}>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '3rem' }}>Key Value Drivers</h3>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <Shield size={32} strokeWidth={1.5} className={styles.cardIcon} color="#4A6C6F" />
                            <h4 className={styles.featureTitle}>Scarcity</h4>
                            <p>20 villas on a protected coastline. Once Phase 1 is sold, these positions are gone.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <TrendingUp size={32} strokeWidth={1.5} className={styles.cardIcon} color="#4A6C6F" />
                            <h4 className={styles.featureTitle}>Capital Growth</h4>
                            <p>Early-stage positioning in an emerging international destination with limited comparable supply.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <Globe size={32} strokeWidth={1.5} className={styles.cardIcon} color="#4A6C6F" />
                            <h4 className={styles.featureTitle}>Rental Income</h4>
                            <p>Comparable beachfront villas in Inhambane achieve USD 250–450/night in peak season.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Projected Returns */}
            <Section background="sand">
                <div>
                    <span className={styles.sectionTitle} style={{ display: 'block', textAlign: 'center', marginBottom: '0.5rem' }}>Rental Potential</span>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '0.75rem' }}>Illustrative Yield</h3>
                    <p className={styles.paragraph} style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                        Based on comparable beachfront villa rentals in the Inhambane region.
                        Actual yield depends on occupancy, villa type, and management approach.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
                        {[
                            { label: 'Average peak nightly rate', value: 'USD 300', note: 'Nov – Apr, comparable properties' },
                            { label: 'Conservative annual occupancy', value: '80 nights', note: 'vs 120+ nights at established lodges' },
                            { label: 'Gross annual rental income', value: '~R450 000', note: 'At current ZAR/USD rates' },
                            { label: 'Illustrative gross yield', value: '~11%', note: 'On R4m entry-level villa' },
                        ].map((s) => (
                            <div key={s.label} style={{
                                background: 'white',
                                padding: '2rem 1.5rem',
                                borderRadius: '4px',
                                textAlign: 'center',
                            }}>
                                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-charcoal)', marginBottom: '0.4rem' }}>{s.value}</p>
                                <p style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem', opacity: 0.75 }}>{s.label}</p>
                                <p style={{ fontSize: '0.78rem', opacity: 0.5 }}>{s.note}</p>
                            </div>
                        ))}
                    </div>
                    <p style={{ textAlign: 'center', fontSize: '0.78rem', opacity: 0.5, marginTop: '1.5rem' }}>
                        * Illustrative only. Not a guarantee of returns. Speak to us for the full financial model.
                    </p>
                </div>
            </Section>

            {/* Ownership in Mozambique */}
            <Section background="white">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <span className={styles.sectionTitle} style={{ display: 'block', marginBottom: '0.5rem' }}>Ownership Structure</span>
                    <h3 className={styles.heading} style={{ marginBottom: '2rem' }}>How Ownership Works in Mozambique</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ paddingLeft: '1.5rem', borderLeft: '3px solid var(--color-green, #4A6C6F)' }}>
                            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>DUAT — The Land Right</h4>
                            <p className={styles.paragraph} style={{ fontSize: '1rem' }}>
                                All land in Mozambique is owned by the state. Buyers acquire a <strong>DUAT</strong> (Direito de Uso
                                e Aproveitamento da Terra) — a 50-year renewable right to use and develop the land.
                                A DUAT is fully transferable, heritable, and recognised by Mozambican banks as security for financing.
                            </p>
                        </div>
                        <div style={{ paddingLeft: '1.5rem', borderLeft: '3px solid var(--color-green, #4A6C6F)' }}>
                            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Foreign Nationals</h4>
                            <p className={styles.paragraph} style={{ fontSize: '1rem' }}>
                                South African and other foreign nationals typically hold their DUAT interest through a
                                Mozambican-registered company (<em>Lda.</em>). This is standard practice and provides a clean,
                                bankable ownership structure. Island Rock's legal team guides every buyer through the registration process.
                            </p>
                        </div>
                        <div style={{ paddingLeft: '1.5rem', borderLeft: '3px solid var(--color-green, #4A6C6F)' }}>
                            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Title Security</h4>
                            <p className={styles.paragraph} style={{ fontSize: '1rem' }}>
                                The estate holds a valid DUAT over the full land parcel. Individual villa DUATs are
                                registered with the Jangamo District Authority, providing long-term legal certainty
                                for each owner.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '2.5rem', background: 'var(--color-sand)', padding: '1.5rem', borderRadius: '4px' }}>
                        <p style={{ fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                            <strong>Full legal guide available.</strong> Our Investment Brief includes a plain-language
                            ownership guide prepared with our Mozambican legal advisors. Request it below.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Lead Magnet */}
            <Section id="brief" background="stone">
                <div style={{ maxWidth: '680px', margin: '0 auto' }}>
                    <InvestmentBriefCapture />
                </div>
            </Section>

            <Section background="dark">
                <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'white' }}>
                    <h2 className={styles.heading} style={{ color: 'white', marginBottom: '1.5rem' }}>Ready to invest?</h2>
                    <p className={styles.paragraph} style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px', margin: '0 auto 2rem auto' }}>
                        Speak directly with our team about availability, pricing, and the legal process.
                    </p>
                    <Link href="/contact" className={styles.primaryButton}>Contact the Developer</Link>
                </div>
            </Section>

            <BreadcrumbJsonLd items={[{ name: 'Investment', href: '/investment' }]} />
        </main>
    );
}
