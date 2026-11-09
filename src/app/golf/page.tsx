import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "The Golf Course | Island Rock Golf Estate, Mozambique",
    description: "A signature coastal golf course at Island Rock Golf Estate in Jangamo, Mozambique — designed to sit lightly on the dune landscape, with ocean views from the fairways. Currently in development.",
    keywords: ["Mozambique golf course", "coastal golf estate", "Jangamo golf", "golf villas Mozambique", "Inhambane golf"],
    openGraph: { url: "https://islandrockestate.com/golf" },
};

export default function GolfPage() {
    return (
        <main>
            <Hero
                headline="The Golf Course"
                subheadline="Championship golf on Mozambique's untouched dune coast."
                variant="small"
                ctaText="Register Interest"
                ctaLink="/contact"
            />

            {/* Development notice */}
            <div style={{ background: 'var(--color-charcoal)', color: 'white', textAlign: 'center', padding: '0.85rem 2rem', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                In Development &nbsp;·&nbsp; Course design & routing underway &nbsp;·&nbsp;{' '}
                <Link href="/contact" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Register your interest</Link>
            </div>

            <Section background="white">
                <div className={styles.introGrid}>
                    <div className={styles.textColumn}>
                        <span className={styles.sectionTitle}>The Vision</span>
                        <h2 className={styles.heading}>Golf, Framed by the Ocean</h2>
                        <p className={styles.paragraph}>
                            Island Rock&apos;s signature course is being designed to move with the natural
                            contours of the Jangamo dune landscape — routed to preserve indigenous vegetation
                            and to open sightlines to the Indian Ocean from the fairways.
                            <br /><br />
                            The result: a walkable, memorable round where the coastline is always part of the game.
                        </p>
                    </div>
                    <div className={styles.imageColumn} style={{ position: 'relative', minHeight: '400px' }}>
                        <Image
                            src="/images/new-coastline-aerial.jpg"
                            alt="Aerial view of the coastal dune landscape planned for the Island Rock golf course"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '4px' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </Section>

            <Section background="sand">
                <div className={styles.container}>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '3rem' }}>Course Highlights</h3>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Coastal Routing</h4>
                            <p>Fairways shaped to the dunes, with ocean views across the front and closing holes.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Environmentally Led</h4>
                            <p>Indigenous planting, water-wise turf, and a light footprint on preserved coastal land.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>Clubhouse Living</h4>
                            <p>A future clubhouse, practice facilities, and golf-front villa positions on the estate.</p>
                        </div>
                    </div>
                    <p className={styles.paragraph} style={{ textAlign: 'center', marginTop: '2.5rem', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Course specifications, par, and yardage will be published as the design is finalised.
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
