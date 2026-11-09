import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "Membership | Island Rock Golf Estate, Mozambique",
    description: "Golf membership at Island Rock comes with a villa and is open to owners, hotel guests and the public — tournaments and corporate days planned, fees to be announced.",
    keywords: ["Mozambique golf membership", "Jangamo golf club", "golf estate membership Africa"],
    openGraph: { url: "https://islandrockestate.com/golf/membership" },
};

export default function GolfMembershipPage() {
    return (
        <main>
            <Hero
                headline="Membership"
                subheadline="Golf open to owners, hotel guests and the public."
                variant="small"
                ctaText="Register Interest"
                ctaLink="/contact"
            />

            <div style={{ background: 'var(--color-charcoal)', color: 'white', textAlign: 'center', padding: '0.85rem 2rem', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Concept Stage &nbsp;·&nbsp; Fees To Be Announced &nbsp;·&nbsp;{' '}
                <Link href="/golf" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Back to Golf</Link>
            </div>

            <Section background="white">
                <div className={styles.introGrid}>
                    <div className={styles.textColumn}>
                        <span className={styles.sectionTitle}>Who Can Play</span>
                        <h2 className={styles.heading}>A Course Built to Be Used</h2>
                        <p className={styles.paragraph}>
                            The course is not reserved for owners alone. Island Rock&apos;s golf is open to
                            estate owners, hotel guests and the wider public, with membership, tournaments,
                            corporate days and stay-and-play golf all part of the plan.
                        </p>
                    </div>
                    <div className={styles.imageColumn} style={{ position: 'relative', minHeight: '360px' }}>
                        <Image
                            src="/images/new-coastline-aerial.jpg"
                            alt="Concept image of the course landscape planned for Island Rock Golf Estate"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '4px' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </Section>

            <Section background="sand">
                <div className={styles.container}>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '3rem' }}>How Membership Works</h3>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Comes With a Villa</h4>
                            <p>Golf membership is tied to villa ownership, with monthly levies and green fees. Amounts have not been set.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Tournaments &amp; Corporate Days</h4>
                            <p>A calendar of member tournaments and corporate golf days is planned alongside everyday play.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Stay-and-Play</h4>
                            <p>Hotel guests and visiting golfers will be able to book stay-and-play access once the hotel opens.</p>
                        </div>
                    </div>
                    <p className={styles.paragraph} style={{ textAlign: 'center', marginTop: '2.5rem', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Membership fees, levies and the golf body affiliation will be published once confirmed.
                    </p>
                </div>
            </Section>

            <Section background="dark">
                <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'white' }}>
                    <h2 className={styles.heading} style={{ color: 'white', marginBottom: '1.5rem' }}>Register for Golf Updates</h2>
                    <p className={styles.paragraph} style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Be first to hear when membership fees and the golf calendar are announced.
                    </p>
                    <Link href="/contact" className={styles.primaryButton}>Register Interest</Link>
                </div>
            </Section>
            <BreadcrumbJsonLd items={[{ name: 'Golf', href: '/golf' }, { name: 'Membership', href: '/golf/membership' }]} />
        </main>
    );
}
