import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import ScrollReveal from "@/components/ScrollReveal";
import { Gem, Maximize2, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Hero
        headline="Island Rock Estate — Mozambique"
        subheadline="Private Coastal Living. Rare Investment Opportunity."
        ctaText="Explore the Estate"
        ctaLink="#lifestyle"
      />

      <div className={styles.locationBanner}>
        Southern Mozambique — Inhambane Province — Jangamo District
      </div>

      <Section id="lifestyle" background="white">
        <ScrollReveal>
          <div className={styles.introGrid}>
            <div className={styles.textColumn}>
              <span className={styles.sectionTitle}>The Lifestyle</span>
              <h3 className={styles.heading}>Untouched Coastal Living</h3>
              <p className={styles.paragraph}>
                Wake up to the Indian Ocean in one of Africa’s last untouched coastal regions.
                Island Rock Estate offers reef-protected waters, pristine beaches, and indigenous dune forests.
                <br /><br />
                <strong>This is not a resort — this is preserved coastal land.</strong>
              </p>
            </div>
            <div className={styles.imageColumn}>
              <img src="/images/coastline.jpg" alt="Untouched Coastline" className={styles.imagePlaceholder} />
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section background="stone">
        <ScrollReveal>
          <div className={styles.introGrid}>
            <div className={styles.imageColumn}>
              <div style={{ width: '100%', height: '100%', background: '#333333' }}></div>
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
            <div className={styles.imageColumn}>
              <img src="/images/villa-front-pool.jpg" alt="Villa Concept" className={styles.imagePlaceholder} />
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

