import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import ScrollReveal from "@/components/ScrollReveal";
import { Gem, Maximize2, ShieldCheck } from "lucide-react";
import { FACTS } from "@/lib/facts";

export default function Home() {
  return (
    <main>
      <Hero
        headline="Island Rock Golf Estate"
        subheadline={`${FACTS.golf.holes} Holes of Golf. Beachfront Living. A Rare Investment on Mozambique's Untouched Coast.`}
        ctaText="Explore the Estate"
        ctaLink="#lifestyle"
      />

      <div style={{ background: 'var(--color-charcoal)', color: 'white', textAlign: 'center', padding: '0.85rem 2rem', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
        Concept Stage &nbsp;·&nbsp; {FACTS.sizeHectares} Hectares &nbsp;·&nbsp; <strong>{FACTS.golf.holes} Holes &middot; {FACTS.villas.planned} Villas &middot; {FACTS.hotel.rooms}-Room Hotel</strong> &mdash;{' '}
        <Link href="/contact" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Register your interest</Link>
      </div>

      <Section id="lifestyle" background="white">
        <ScrollReveal>
          <div className={styles.introGrid}>
            <div className={styles.textColumn}>
              <span className={styles.sectionTitle}>The Lifestyle</span>
              <h3 className={styles.heading}>Golf Meets the Indian Ocean</h3>
              <p className={styles.paragraph}>
                <strong>Southern Mozambique — Inhambane Province — Jangamo District</strong>
                <br /><br />
                Play a full {FACTS.golf.holes}-hole coastal golf course, then walk to reef-protected water.
                Island Rock Golf Estate pairs golf with pristine beaches and indigenous dune forests
                in one of Africa’s last untouched coastal regions.
                <br /><br />
                <strong>Nothing is built yet — register to follow the estate from the ground up.</strong>
              </p>
            </div>
            <div className={styles.imageColumn} style={{ position: 'relative', minHeight: '500px' }}>
              <Image
                src="/images/beach-coastline-sunset.jpg"
                alt="Panoramic sunset over the Island Rock coastline"
                fill
                style={{ objectFit: 'cover', borderRadius: '4px' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section background="stone">
        <ScrollReveal>
          <div className={styles.introGrid}>
            <div className={styles.imageColumn} style={{ position: 'relative', minHeight: '500px' }}>
              <Image
                src="/images/villa-coastline-aerial.jpg"
                alt="Aerial view of the villa and pristine coastline"
                fill
                style={{ objectFit: 'cover', borderRadius: '4px' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={styles.textColumn}>
              <span className={styles.sectionTitle}>The Investment</span>
              <h3 className={styles.heading}>Enduring Value</h3>
              <p className={styles.paragraph}>
                Secure a limited beachfront position in an emerging destination.
                With low density and high privacy, Island Rock offers early-stage positioning for long-term appreciation.
                <br /><br />
                <strong>Own early. Benefit long-term.</strong>
              </p>
              <Link href="/investment" className={styles.link}>View Investment Potential</Link>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section background="white">
        <ScrollReveal>
          <div className={styles.introGrid}>
            <div className={styles.imageColumn} style={{ position: 'relative', minHeight: '500px' }}>
              <Image
                src="/images/golf-hole-coastal.jpg"
                alt="A coastal golf hole, representative of the course planned for Island Rock"
                fill
                style={{ objectFit: 'cover', borderRadius: '4px' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'rgba(0,0,0,0.55)', color: 'white', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.5rem', borderRadius: '2px' }}>
                Representative Image
              </div>
            </div>
            <div className={styles.textColumn}>
              <span className={styles.sectionTitle}>The Golf</span>
              <h3 className={styles.heading}>A Full {FACTS.golf.holes}-Hole Coastal Course</h3>
              <p className={styles.paragraph}>
                The full routing is complete: holes 1 and 2 play along the dune top with ocean views,
                then the course drops into a valley before returning along the coast.
                <br /><br />
                <strong>In development — register for early access.</strong>
              </p>
              <Link href="/golf" className={styles.link}>Explore the Golf Course</Link>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section background="white">
        <ScrollReveal>
          <div className={styles.textColumn} style={{ textAlign: 'center', alignItems: 'center' }}>
            <span className={styles.sectionTitle}>The Masterplan</span>
            <h3 className={styles.heading}>Where Everything Sits</h3>
            <p className={styles.paragraph} style={{ maxWidth: '640px' }}>
              The clubhouse anchors the southern end of the course, beside the first tee. The hotel
              sits further south again, on the beach at the estate&apos;s tip. {FACTS.villas.planned} villa
              stands are laid out across the dunes and valley between them.
            </p>
            <Link href="/masterplan" className={styles.primaryButton} style={{ marginTop: '1rem' }}>View the Full Masterplan</Link>
          </div>
        </ScrollReveal>
      </Section>

      <Section background="stone">
        <ScrollReveal>
          <div className={styles.introGrid}>
            <div className={styles.textColumn}>
              <span className={styles.sectionTitle}>The Hotel</span>
              <h3 className={styles.heading}>{FACTS.hotel.rooms} Rooms on the Beach</h3>
              <p className={styles.paragraph}>
                At the estate&apos;s southern tip, on the beach — rooms, dining and spa drawing on the
                estate&apos;s coastal setting.
                <br /><br />
                <strong>In development — join the priority list.</strong>
              </p>
              <Link href="/hotel" className={styles.link}>Discover the Hotel</Link>
            </div>
            <div className={styles.imageColumn} style={{ position: 'relative', minHeight: '500px' }}>
              <Image
                src="/images/hotel-pool-aerial-real.jpg"
                alt="A tropical resort pool, representative of the style planned for the Island Rock hotel"
                fill
                style={{ objectFit: 'cover', borderRadius: '4px' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'rgba(0,0,0,0.55)', color: 'white', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.5rem', borderRadius: '2px' }}>
                Representative Image
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section background="white">
        <ScrollReveal>
          <div className={styles.textColumn} style={{ textAlign: 'center', alignItems: 'center' }}>
            <span className={styles.sectionTitle}>Why Mozambique</span>
            <h3 className={styles.heading}>Raw Nature. Refined Living.</h3>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <Gem size={32} strokeWidth={1.5} className={styles.cardIcon} color="#4A6C6F" />
                <h4 className={styles.featureTitle}>Untouched</h4>
                <p className={styles.cardDescription}>A coastline that remains wild and pristine.</p>
              </div>
              <div className={styles.featureCard}>
                <Maximize2 size={32} strokeWidth={1.5} className={styles.cardIcon} color="#4A6C6F" />
                <h4 className={styles.featureTitle}>Warm Waters</h4>
                <p className={styles.cardDescription}>Year-round Indian Ocean temperatures.</p>
              </div>
              <div className={styles.featureCard}>
                <ShieldCheck size={32} strokeWidth={1.5} className={styles.cardIcon} color="#4A6C6F" />
                <h4 className={styles.featureTitle}>Exclusive</h4>
                <p className={styles.cardDescription}>Low density, no mass tourism.</p>
              </div>
            </div>
            <p className={styles.paragraph} style={{ marginTop: '2rem', maxWidth: '600px' }}>
              Mozambique is where raw nature meets future value. Growing international demand meets limited supply.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      <Section background="sand">
        <ScrollReveal>
          <div className={styles.introGrid}>
            <div className={styles.textColumn}>
              <span className={styles.sectionTitle}>The Vision</span>
              <h3 className={styles.heading}>A Phased Legacy</h3>
              <p className={styles.paragraph}>
                We are building a private golf-and-coastal sanctuary through a phased development approach that preserves nature.
                <br /><br />
                <strong>First:</strong> The restaurant and beach bar.
                <br />
                <strong>Then:</strong> The golf course.
                <br />
                <strong>Then:</strong> The hotel and villas, developed in phases.
              </p>
            </div>
            <div className={styles.imageColumn} style={{ position: 'relative', minHeight: '500px' }}>
              <Image
                src="/images/villa-sunset-overview.jpg"
                alt="The estate at golden hour"
                fill
                style={{ objectFit: 'cover', borderRadius: '4px' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section background="dark">
        <ScrollReveal>
          <div className={styles.ctaContainer} style={{ textAlign: 'center', color: 'white' }}>
            <h2 className={styles.largeStatement} style={{ color: 'white', marginBottom: '2rem' }}>
              Own a rare coastal position on Africa’s last untouched shoreline.
            </h2>
            <Link href="/contact" className={styles.primaryButton}>Enquire Now</Link>
          </div>
        </ScrollReveal>
      </Section>
    </main>
  );
}

