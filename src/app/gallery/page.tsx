"use client";

import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";

type GalleryImage = {
    src: string;
    alt: string;
    isRender?: boolean;
};

type GalleryCategory = {
    id: string;
    heading: string;
    note?: string;
    images: GalleryImage[];
};

const categories: GalleryCategory[] = [
    {
        id: "coastline",
        heading: "The Coastline",
        images: [
            { src: '/images/hero-reef.jpg', alt: 'Reef-protected bay with turquoise waters' },
            { src: '/images/coastline.jpg', alt: 'Pristine Jangamo coastline from above' },
            { src: '/images/aerial-reef.jpg', alt: 'Aerial view of the coral reef system' },
            { src: '/images/tropical-beach.jpg', alt: 'Tropical beach with white sand and clear water' },
            { src: '/images/sunset-dunes.jpg', alt: 'Golden sunset over the coastal dunes' },
        ],
    },
    {
        id: "wildlife",
        heading: "Marine Life & Nature",
        images: [
            { src: '/images/turtle-hatchling.jpg', alt: 'Baby turtle hatchling on the beach' },
            { src: '/images/reef-detail.jpg', alt: 'Crystal clear reef waters ideal for snorkeling' },
            { src: '/images/shipwreck.jpg', alt: 'Historic shipwreck near Island Rock' },
            { src: '/images/palm-tree-1.jpg', alt: 'Palm trees along the Mozambican coast' },
        ],
    },
    {
        id: "villas",
        heading: "The Villas",
        note: "Images below are artist impressions of the completed villa designs.",
        images: [
            { src: '/images/villa-front-pool.jpg', alt: 'Villa with front-facing pool overlooking the ocean', isRender: true },
            { src: '/images/villa-aerial-topdown.jpg', alt: 'Top-down aerial of the villa design and layout', isRender: true },
            { src: '/images/beach-deck-view.jpg', alt: 'View from the deck towards the Indian Ocean', isRender: true },
            { src: '/images/terrace-ocean-view.jpg', alt: 'Villa terrace with panoramic ocean vista', isRender: true },
            { src: '/images/living-room-view.jpg', alt: 'Open-plan living room with ocean views', isRender: true },
            { src: '/images/interior-sunbeams.jpg', alt: 'Natural light streaming into villa interior', isRender: true },
            { src: '/images/beach-hammock.jpg', alt: 'Hammock on a secluded beach under palms' },
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
                    {img.isRender && (
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
                            Artist Impression
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
