import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { FACTS } from "@/lib/facts";

export const metadata: Metadata = {
    title: "The Golf Course | Island Rock Golf Estate, Mozambique",
    description: `A full ${FACTS.golf.holes}-hole coastal golf course at Island Rock Golf Estate in Jangamo, Mozambique — routed through the dune landscape, with ocean views from the opening holes. Currently in development.`,
    keywords: ["Mozambique golf course", "coastal golf estate", "Jangamo golf", "golf villas Mozambique", "Inhambane golf"],
    openGraph: { url: "https://islandrockestate.com/golf" },
};

export default function GolfPage() {
    return (
        <main>
            <Hero
                headline="The Golf Course"
                subheadline="A full 18-hole course on Mozambique's untouched dune coast."
                variant="small"
                ctaText="Register Interest"
                ctaLink="/contact"
            />

            {/* Development notice */}
            <div style={{ background: 'var(--color-charcoal)', color: 'white', textAlign: 'center', padding: '0.85rem 2rem', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Concept Stage &nbsp;·&nbsp; Full {FACTS.golf.holes}-Hole Routing Complete &nbsp;·&nbsp;{' '}
                <Link href="/contact" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Register your interest</Link>
            </div>

            <Section background="white">
                <div className={styles.introGrid}>
                    <div className={styles.textColumn}>
                        <span className={styles.sectionTitle}>The Vision</span>
                        <h2 className={styles.heading}>Golf, Framed by the Ocean</h2>
                        <p className={styles.paragraph}>
                            The course is routed to move with the natural contours of the Jangamo dune
                            landscape — preserving indigenous vegetation and opening sightlines to the
                            Indian Ocean from the opening holes.
                            <br /><br />
                            The result: a walkable, memorable round where the coastline is always part of the game.
                            See the full routing on the <Link href="/masterplan" className={styles.link}>Masterplan</Link>.
                        </p>
                    </div>
                    <div className={styles.imageColumn} style={{ position: 'relative', minHeight: '400px' }}>
                        <Image
                            src="/images/golf-hole-coastal.jpg"
                            alt="A coastal golf hole, representative of the dune-top routing planned for the course"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '4px' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'rgba(0,0,0,0.55)', color: 'white', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.5rem', borderRadius: '2px' }}>
                            Representative Image
                        </div>
                    </div>
                </div>
            </Section>

            <Section background="sand">
                <div className={styles.container}>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '3rem' }}>Explore the Golf Estate</h3>
                    <div className={styles.featuresGrid}>
                        <Link href="/golf/course" className={styles.featureCard} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                            <h4 className={styles.featureTitle}>The Course &rarr;</h4>
                            <p>{FACTS.golf.holes} holes, full routing complete — dune-top ocean views on 1 and 2, a valley hole at 3.</p>
                        </Link>
                        <Link href="/golf/membership" className={styles.featureCard} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                            <h4 className={styles.featureTitle}>Membership &rarr;</h4>
                            <p>Open to owners, hotel guests and the public. Comes with a villa; fees to be announced.</p>
                        </Link>
                        <Link href="/golf/clubhouse" className={styles.featureCard} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                            <h4 className={styles.featureTitle}>Clubhouse &rarr;</h4>
                            <p>At the southern end of the course, beside the first tee. Scale to be confirmed.</p>
                        </Link>
                    </div>
                    <p className={styles.paragraph} style={{ textAlign: 'center', marginTop: '2.5rem', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Par and yardage for each hole will be published once confirmed by the course designer.
                        Details on this page are indicative and subject to change.
                    </p>
                </div>
            </Section>

            <Section background="dark">
                <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'white' }}>
                    <h2 className={styles.heading} style={{ color: 'white', marginBottom: '1.5rem' }}>Be First on the Fairway</h2>
                    <p className={styles.paragraph} style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Register your interest to receive golf-course updates and priority access to golf-front villas.
                    </p>
                    <Link href="/contact" className={styles.primaryButton}>Register Interest</Link>
                </div>
            </Section>
            <BreadcrumbJsonLd items={[{ name: 'The Golf Course', href: '/golf' }]} />
        </main>
    );
}
