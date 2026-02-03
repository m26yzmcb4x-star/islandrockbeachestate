"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";

export default function GalleryPage() {
    const images = Array.from({ length: 9 }).map((_, i) => i);

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
                    {[
                        '/images/hero-reef.jpg',
                        '/images/coastline.jpg',
                        '/images/shipwreck.jpg',
                        '/images/aerial-reef.jpg',
                        '/images/reef-detail.jpg',
                        '/images/villa-front-pool.jpg',
                        '/images/villa-aerial-topdown.jpg'
                    ].map((src, i) => (
                        <div key={i} style={{
                            height: '300px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <img src={src} alt={`Gallery image ${i}`} style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.5s ease'
                            }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
