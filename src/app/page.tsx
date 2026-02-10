import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      <Hero
        headline="Island Rock Beach Estate"
        subheadline="A rare reef-protected beachfront estate in Jangamo, Mozambique."
        ctaText="Enquire"
        ctaLink="/contact"
      />

      <Section background="sand">
        <ScrollReveal>
          <h2 className={styles.largeStatement}>
            "This is a forever place, not a resort. A quiet, timeless sanctuary designed for living, not showing."
          </h2>
        </ScrollReveal>
      </Section>

      <Section background="white">
        <ScrollReveal>
          <div className={styles.introGrid}>
            <div className={styles.textColumn}>
              <span className={styles.sectionTitle}>The Estate</span>
              <h3 className={styles.heading}>Untouched Luxury</h3>
              <p className={styles.paragraph}>
                Island Rock is a low-density, ultra-private beachfront estate located in Jangamo District.
                With only 20 exclusive villas on large erven, we prioritize privacy, space, and a deeply grounding coastal lifestyle.
              </p>
              <Link href="/estate" className={styles.link}>Discover The Estate</Link>
            </div>
            <div className={styles.imageColumn}>
              <img src="/images/coastline.jpg" alt="Estate coastline" className={styles.imagePlaceholder} />
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section background="stone">
        <ScrollReveal>
          <div className={styles.introGrid}>
            <div className={styles.imageColumn}>
              <img src="/images/reef-detail.jpg" alt="Reef protected bay" className={styles.imagePlaceholder} />
            </div>
            <div className={styles.textColumn}>
              <span className={styles.sectionTitle}>Location</span>
              <h3 className={styles.heading}>Reef-Protected Bay</h3>
              <p className={styles.paragraph}>
                Set within a reef-protected bay with calm waters and natural swimming pools,
                Island Rock offers safe swimming, deep-sea fishing, and untouched coastal landscapes.
              </p>
              <Link href="/location" className={styles.link}>Explore Location</Link>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section background="white">
        <ScrollReveal>
          <div className={styles.textColumn} style={{ textAlign: 'center', alignItems: 'center' }}>
            <span className={styles.sectionTitle}>The Villas</span>
            <h3 className={styles.heading}>Modern Thatch Architecture</h3>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <h4 className={styles.featureTitle}>Exclusive</h4>
                <p>Only 20 villas available.</p>
              </div>
              <div className={styles.featureCard}>
                <h4 className={styles.featureTitle}>Spacious</h4>
                <p>Erven from 1,500m².</p>
              </div>
              <div className={styles.featureCard}>
                <h4 className={styles.featureTitle}>Private</h4>
                <p>Designed for absolute privacy.</p>
              </div>
            </div>
            <Link href="/villas" className={styles.link} style={{ marginTop: '3rem' }}>View The Villas</Link>
          </div>
        </ScrollReveal>
      </Section>
    </main>
  );
}

