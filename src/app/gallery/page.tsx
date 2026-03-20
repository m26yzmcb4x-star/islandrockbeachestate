"use client";

import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";

const galleryImages = [
    { src: '/images/hero-reef.jpg', alt: 'Reef-protected bay with turquoise waters' },
    { src: '/images/coastline.jpg', alt: 'Pristine Jangamo coastline from above' },
    { src: '/images/shipwreck.jpg', alt: 'Historic shipwreck near Island Rock' },
    { src: '/images/turtle-hatchling.jpg', alt: 'Baby turtle hatchling on the beach' },
    { src: '/images/aerial-reef.jpg', alt: 'Aerial view of the coral reef system' },
    { src: '/images/beach-hammock.jpg', alt: 'Hammock on a secluded beach under palms' },
    { src: '/images/reef-detail.jpg', alt: 'Crystal clear reef waters ideal for snorkeling' },
    { src: '/images/palm-tree-1.jpg', alt: 'Palm trees along the Mozambican coast' },
    { src: '/images/villa-front-pool.jpg', alt: 'Villa with front-facing pool overlooking the ocean' },
    { src: '/images/tropical-beach.jpg', alt: 'Tropical beach with white sand and clear water' },
    { src: '/images/villa-aerial-topdown.jpg', alt: 'Top-down aerial of the villa design and layout' },
    { src: '/images/beach-deck-view.jpg', alt: 'View from the deck towards the Indian Ocean' },
    { src: '/images/terrace-ocean-view.jpg', alt: 'Villa terrace with panoramic ocean vista' },
    { src: '/images/living-room-view.jpg', alt: 'Open-plan living room with ocean views' },
    { src: '/images/sunset-dunes.jpg', alt: 'Golden sunset over the coastal dunes' },
    { src: '/images/interior-sunbeams.jpg', alt: 'Natural light streaming into villa interior' },
];

export default function GalleryPage() {
    return (
        <main>
            <Hero
                headline="Gallery"
                subheadline="A visual journey through Island Rock and its surroundings."
                variant="small"
                ctaText="Enquire"
                ctaLink="/contact"
            />

            <Section background="white">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {galleryImages.map((img, i) => (
                        <div key={i} style={{
                            height: '300px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>
                    ))}
                </div>
            </Section>

            <Section background="dark">
                <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'white' }}>
                    <h2 className={styles.heading} style={{ color: 'white', marginBottom: '1.5rem' }}>Like What You See?</h2>
                    <p className={styles.paragraph} style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        These images only capture a fraction of the beauty. Get in touch to learn more or arrange a visit.
                    </p>
                    <Link href="/contact" className={styles.primaryButton}>Enquire Now</Link>
                </div>
            </Section>
        </main>
    );
}
