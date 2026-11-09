import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Link from "next/link";
import Image from "next/image";
import { TrendingUp, Globe, Shield } from "lucide-react";
import InvestmentBriefCapture from "@/components/InvestmentBriefCapture";
import { FACTS } from "@/lib/facts";

export const metadata: Metadata = {
    title: "Investment Opportunity | Island Rock Golf Estate, Mozambique",
    description: `Register your interest in investing in Island Rock Golf Estate — a ${FACTS.sizeHectares}-hectare golf, residential and hotel development in Jangamo, Mozambique, at concept stage.`,
    keywords: ["Mozambique golf investment", "beachfront property investment", "Jangamo golf estate", "Africa real estate investment", "coastal property", "DUAT Mozambique"],
    openGraph: { url: "https://islandrockestate.com/investment" },
};

export default function InvestmentPage() {
    return (
        <main>
            <Hero
                headline="A Lifestyle Investment"
                subheadline="In One of Africa's Last Untouched Coastal Regions."
                variant="small"
                ctaText="Register as an Investor"
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

            {/* Scale */}
            <Section background="stone">
                <div>
                    <span className={styles.sectionTitle} style={{ display: 'block', textAlign: 'center', marginBottom: '0.5rem' }}>The Scale</span>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '0.75rem' }}>What&apos;s Planned</h3>
                    <p className={styles.paragraph} style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
                        A {FACTS.sizeHectares}-hectare golf, residential and hotel estate — {FACTS.golf.holes} holes,{' '}
                        {FACTS.villas.planned} freestanding villas ({FACTS.villas.sizeRangeM2} m², tailored to bedrooms
                        and client needs), and a {FACTS.hotel.rooms}-room sea-facing hotel. All currently at concept stage.
                        Villa positions, specifications and pricing will be confirmed as the estate is finalised.
                    </p>
                    <div style={{ textAlign: 'center' }}>
                        <Link href="/contact" className={styles.primaryButton} style={{ display: 'inline-block' }}>
                            Register Villa Interest
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Key Value Drivers */}
            <Section background="white">
                <div className={styles.container}>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Island Rock</h3>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <Shield size={32} strokeWidth={1.5} className={styles.cardIcon} color="#4A6C6F" />
                            <h4 className={styles.featureTitle}>Government-Backed Golf Zone</h4>
                            <p>Mozambique&apos;s Council of Ministers approved a special golf tourism zone in Inhambane, covering areas including Jangamo, in August 2026.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <TrendingUp size={32} strokeWidth={1.5} className={styles.cardIcon} color="#4A6C6F" />
                            <h4 className={styles.featureTitle}>Early-Stage Positioning</h4>
                            <p>An early position in an emerging golf and coastal destination, ahead of construction.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <Globe size={32} strokeWidth={1.5} className={styles.cardIcon} color="#4A6C6F" />
                            <h4 className={styles.featureTitle}>Golf, Hotel and Villas Together</h4>
                            <p>A single developer-owned and operated golf course anchors the estate&apos;s hotel and villa value.</p>
                        </div>
                    </div>
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
