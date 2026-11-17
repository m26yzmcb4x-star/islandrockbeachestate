import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { FACTS } from "@/lib/facts";

export const metadata: Metadata = {
    title: "The Course | Island Rock Golf Estate, Mozambique",
    description: `A full ${FACTS.golf.holes}-hole routing on the Jangamo dunes — the opening holes play along the coast with ocean views, dropping into a valley before returning to the coast. Course in development.`,
    keywords: ["Mozambique golf course routing", "Jangamo golf holes", "coastal golf course Mozambique", "dune golf course"],
    openGraph: { url: "https://islandrockestate.com/golf/course" },
};

export default function GolfCoursePage() {
    return (
        <main>
            <Hero
                headline="The Course"
                subheadline="Begin on the dune, with the ocean beside you."
                variant="small"
                ctaText="Register Interest"
                ctaLink="/contact"
            />

            <div style={{ background: 'var(--color-charcoal)', color: 'white', textAlign: 'center', padding: '0.85rem 2rem', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Concept Stage &nbsp;·&nbsp; Full {FACTS.golf.holes}-Hole Routing Complete &nbsp;·&nbsp;{' '}
                <Link href="/golf" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Back to Golf</Link>
            </div>

            <Section background="white">
                <div className={styles.container}>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '0.75rem' }}>{FACTS.golf.holes} Holes</h3>
                    <p className={styles.paragraph} style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 1.5rem auto' }}>
                        Owned and operated by the developer. The full routing was completed on the
                        15 September 2026 masterplan: {FACTS.golf.routingSummary}
                    </p>
                    <p className={styles.paragraph} style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
                        Par and yardage for each hole will be published once confirmed by the course
                        designer. See the full layout on the{' '}
                        <Link href="/masterplan" className={styles.link}>Masterplan</Link>.
                    </p>
                </div>
            </Section>

            <Section background="sand">
                <div className={styles.introGrid}>
                    <div className={styles.imageColumn} style={{ position: 'relative', minHeight: '360px' }}>
                        <Image
                            src="/images/new-coastline-aerial.jpg"
                            alt="Concept image of the dune landscape planned for holes 1 and 2"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '4px' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className={styles.textColumn}>
                        <span className={styles.sectionTitle}>Holes 1 &amp; 2</span>
                        <h3 className={styles.heading}>On the Dune, Ocean in View</h3>
                        <p className={styles.paragraph}>
                            Hole 1 {FACTS.golf.notableHoles.hole1}. Hole 2 {FACTS.golf.notableHoles.hole2}.
                        </p>
                    </div>
                </div>
            </Section>

            <Section background="white">
                <div className={styles.introGrid}>
                    <div className={styles.textColumn}>
                        <span className={styles.sectionTitle}>Hole 3</span>
                        <h3 className={styles.heading}>Down Into the Valley</h3>
                        <p className={styles.paragraph}>
                            From the dune top, the course turns inland: hole 3 {FACTS.golf.notableHoles.hole3} —
                            a drop of more than 40 metres, the first big change of elevation on the round.
                        </p>
                    </div>
                    <div className={styles.imageColumn} style={{ position: 'relative', minHeight: '360px' }}>
                        <Image
                            src="/images/villa-coastline-aerial.jpg"
                            alt="Concept image of the valley setting for hole 3"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '4px' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </Section>

            <Section background="sand">
                <div className={styles.container}>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '1.5rem' }}>The Rest of the Round</h3>
                    <p className={styles.paragraph} style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
                        Holes 4 to 15 play across the valley floor. Holes 16 to 18 climb back out of the
                        valley toward the clubhouse, finishing beside the driving range. A halfway house
                        sits at the northern turn, between the outward and inward nines.
                    </p>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '3rem' }}>Course Facilities</h3>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Practice &amp; Coaching</h4>
                            <p>A driving range with its own putting and chipping greens, plus a practice green at the clubhouse.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Carts, Caddies &amp; Hire</h4>
                            <p>Carts, caddies and club hire available, with handicap affiliation planned.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Water-Wise Irrigation</h4>
                            <p>{FACTS.golf.irrigation}, keeping the course light on the estate&apos;s resources.</p>
                        </div>
                    </div>
                    <p className={styles.paragraph} style={{ textAlign: 'center', marginTop: '2.5rem', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
                        All course imagery on this page is a labelled concept, not a built course.
                    </p>
                </div>
            </Section>

            <Section background="dark">
                <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'white' }}>
                    <h2 className={styles.heading} style={{ color: 'white', marginBottom: '1.5rem' }}>Follow the Routing</h2>
                    <p className={styles.paragraph} style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Register your interest to receive updates as hole-by-hole detail is published.
                    </p>
                    <Link href="/contact" className={styles.primaryButton}>Register Interest</Link>
                </div>
            </Section>
            <BreadcrumbJsonLd items={[{ name: 'Golf', href: '/golf' }, { name: 'The Course', href: '/golf/course' }]} />
        </main>
    );
}
