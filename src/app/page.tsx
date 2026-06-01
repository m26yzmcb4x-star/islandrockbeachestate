import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import ScrollReveal from "@/components/ScrollReveal";
import { Gem, Maximize2, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Hero
        headline="Island Rock — Mozambique"
        subheadline="Private Coastal Living. Rare Investment Opportunity."
        ctaText="Explore the Estate"
        ctaLink="#lifestyle"
      />

      {/* Update VILLAS_REMAINING when a villa is reserved */}
      <div style={{ background: 'var(--color-charcoal)', color: 'white', textAlign: 'center', padding: '0.85rem 2rem', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
        Phase 1 &nbsp;·&nbsp; 20 Villas &nbsp;·&nbsp; <strong>16 of 20 remaining</strong> &mdash;{' '}
        <Link href="/villas" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}>View availability</Link>
      </div>

      <Section id="lifestyle" background="white">
        <ScrollReveal>
          <div className={styles.introGrid}>
            <div className={styles.textColumn}>
              <span className={styles.sectionTitle}>The Lifestyle</span>
              <h3 className={styles.heading}>Untouched Coastal Living</h3>
              <p className={styles.paragraph}>
                <strong>Southern Mozambique — Inhambane Province — Jangamo District</strong>
                <br /><br />
                Wake up to the Indian Ocean in one of Africa’s last untouched coastal regions.
                Island Rock Estate offers reef-protected waters, pristine beaches, and indigenous dune forests.
                <br /><br />
                <strong>This is not a resort — this is preserved coastal land.</strong>
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
                We are building a private coastal sanctuary through a phased development approach that preserves nature.
                <br /><br />
                <strong>Phase 1:</strong> Core infrastructure & first exclusive villas.
                <br />
                <strong>Future:</strong> Restaurant, spa, pool, diving & marine facilities.
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

