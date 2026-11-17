"use client";

import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";

type GalleryImage = {
    src: string;
    alt: string;
    badge?: "Artist Impression" | "Representative Image";
};

type GalleryCategory = {
    id: string;
    heading: string;
    note?: string;
    images: GalleryImage[];
};

const categories: GalleryCategory[] = [
    {
        id: "course",
        heading: "The Course",
        note: "Representative photography of coastal golf elsewhere, not Island Rock's own course. Renders of the actual routing are coming once the design is finalised.",
        images: [
            { src: '/images/golf-hole-coastal.jpg', alt: 'A coastal golf hole with ocean view', badge: 'Representative Image' },
            { src: '/images/golf-hole-valley.jpg', alt: 'A green with an ocean backdrop', badge: 'Representative Image' },
        ],
    },
    {
        id: "clubhouse",
        heading: "The Clubhouse",
        note: "Representative photography of a golf clubhouse elsewhere, not Island Rock's own building.",
        images: [
            { src: '/images/clubhouse-exterior-real.jpg', alt: 'A golf clubhouse overlooking a green at sunset', badge: 'Representative Image' },
        ],
    },
    {
        id: "hotel",
        heading: "The Hotel",
        note: "Representative photography of a tropical resort elsewhere, not Island Rock's own hotel.",
        images: [
            { src: '/images/hotel-pool-aerial-real.jpg', alt: 'A tropical resort pool among palm trees', badge: 'Representative Image' },
            { src: '/images/hotel-room-real.jpg', alt: 'A hotel room opening onto an ocean view', badge: 'Representative Image' },
        ],
    },
    {
        id: "dining",
        heading: "Dining",
        note: "Representative photography of seaside dining elsewhere.",
        images: [
            { src: '/images/restaurant-terrace-real.jpg', alt: 'A table set for dining on a seaside terrace', badge: 'Representative Image' },
        ],
    },
    {
        id: "villas",
        heading: "The Villas",
        note: "Images below are representative or indicative concept photography, not completed villa designs.",
        images: [
            { src: '/images/villa-exterior-real.jpg', alt: 'A modern villa exterior', badge: 'Representative Image' },
            { src: '/images/villa-living-real.jpg', alt: 'A luxury open-plan living space with pool and ocean view', badge: 'Representative Image' },
            { src: '/images/villa-aerial-topdown.jpg', alt: 'Top-down aerial of the villa design and layout', badge: 'Artist Impression' },
            { src: '/images/beach-deck-view.jpg', alt: 'View from the deck towards the Indian Ocean', badge: 'Artist Impression' },
            { src: '/images/interior-sunbeams.jpg', alt: 'Natural light streaming into villa interior', badge: 'Artist Impression' },
            { src: '/images/beach-hammock.jpg', alt: 'Hammock on a secluded beach under palms' },
        ],
    },
    {
        id: "coastline",
        heading: "The Coastline",
        images: [
            { src: '/images/hero-reef.jpg', alt: 'Reef-protected bay with turquoise waters' },
            { src: '/images/coastline.jpg', alt: 'Pristine Jangamo coastline from above' },
            { src: '/images/aerial-reef.jpg', alt: 'Aerial view of the coral reef system' },
            { src: '/images/tropical-beach.jpg', alt: 'Tropical beach with white sand and clear water' },
            { src: '/images/sunset-dunes.jpg', alt: 'Golden sunset over the coastal dunes' },
            { src: '/images/turtle-hatchling.jpg', alt: 'Baby turtle hatchling on the beach' },
            { src: '/images/reef-detail.jpg', alt: 'Crystal clear reef waters ideal for snorkeling' },
            { src: '/images/shipwreck.jpg', alt: 'Historic shipwreck near Island Rock' },
            { src: '/images/palm-tree-1.jpg', alt: 'Palm trees along the Mozambican coast' },
        ],
    },
];

function GalleryGrid({ images }: { images: GalleryImage[] }) {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
        }}>
            {images.map((img, i) => (
                <div key={i} style={{ position: 'relative' }}>
                    <div style={{
                        height: '280px',
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: '2px',
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
                    {img.badge && (
                        <div style={{
                            position: 'absolute',
                            bottom: '8px',
                            left: '8px',
                            background: 'rgba(0,0,0,0.55)',
                            color: 'white',
                            fontSize: '0.65rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '2px',
                        }}>
                            {img.badge}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

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

            {/* Video / Drone Section */}
            <Section background="stone">
                <div style={{ textAlign: 'center' }}>
                    <span className={styles.sectionTitle} style={{ display: 'block', marginBottom: '0.5rem' }}>Drone Footage</span>
                    <h3 className={styles.heading} style={{ marginBottom: '1rem' }}>See It From Above</h3>
                    <p className={styles.paragraph} style={{ maxWidth: '560px', margin: '0 auto 2.5rem auto' }}>
                        Drone footage of the estate, reef, and coastline coming soon.
                        In the meantime, get in touch to arrange a site visit.
                    </p>
                    {/* Replace the div below with a YouTube/Vimeo embed when footage is available:
                        <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" ... />
                    */}
                    <div style={{
                        width: '100%',
                        maxWidth: '800px',
                        margin: '0 auto',
                        aspectRatio: '16 / 9',
                        background: 'rgba(0,0,0,0.08)',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px dashed rgba(0,0,0,0.15)',
                    }}>
                        <div style={{ textAlign: 'center', opacity: 0.5 }}>
                            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', marginBottom: '0.25rem' }}>Drone footage coming soon</p>
                            <p style={{ fontSize: '0.8rem' }}>Contact us to arrange a site visit</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Categorised gallery */}
            {categories.map((cat) => (
                <Section key={cat.id} background="white">
                    <div>
                        <h3 className={styles.heading} style={{ marginBottom: '0.5rem' }}>{cat.heading}</h3>
                        {cat.note && (
                            <p style={{ fontSize: '0.8rem', opacity: 0.55, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                                {cat.note}
                            </p>
                        )}
                        <div style={{ marginTop: cat.note ? 0 : '1.5rem' }}>
                            <GalleryGrid images={cat.images} />
                        </div>
                    </div>
                </Section>
            ))}

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
