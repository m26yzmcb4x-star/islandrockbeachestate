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
                <Gem size={32} strokeWidth={1.5} className={styles.cardIcon} color="#4A6C6F" />
                <h4 className={styles.featureTitle}>Exclusive</h4>
                <p className={styles.cardDescription}>Limited to only 20 beachfront villas.</p>
              </div>
              <div className={styles.featureCard}>
                <Maximize2 size={32} strokeWidth={1.5} className={styles.cardIcon} color="#4A6C6F" />
                <h4 className={styles.featureTitle}>Spacious</h4>
                <p className={styles.cardDescription}>Generous erven starting from 1,500m².</p>
              </div>
              <div className={styles.featureCard}>
                <ShieldCheck size={32} strokeWidth={1.5} className={styles.cardIcon} color="#4A6C6F" />
                <h4 className={styles.featureTitle}>Protected</h4>
                <p className={styles.cardDescription}>Secure estate living with 24/7 security.</p>
              </div>
            </div>
            <Link href="/villas" className={styles.link} style={{ marginTop: '3rem' }}>View The Villas</Link>
          </div>
        </ScrollReveal>
      </Section>

      <Section background="sand">
        <ScrollReveal>
          <div className={styles.textColumn} style={{ textAlign: 'center', alignItems: 'center' }}>
            <span className={styles.sectionTitle}>The Gallery</span>
            <h3 className={styles.heading}>Life at Island Rock</h3>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryItem}>
                <img src="/images/new-reef-horizon.jpg" alt="Reef Horizon" className={styles.galleryImage} />
              </div>
              <div className={styles.galleryItem}>
                <img src="/images/villa-front-pool.jpg" alt="Villa Pool" className={styles.galleryImage} />
              </div>
              <div className={styles.galleryItem}>
                <img src="/images/aerial-reef.jpg" alt="Aerial View" className={styles.galleryImage} />
              </div>
              <div className={styles.galleryItem}>
                <img src="/images/new-ocean-mood.jpg" alt="Ocean Mood" className={styles.galleryImage} />
              </div>
            </div>
            <Link href="/gallery" className={styles.link} style={{ marginTop: '3rem' }}>View Full Gallery</Link>
          </div>
        </ScrollReveal>
      </Section>
    </main>
  );
}

