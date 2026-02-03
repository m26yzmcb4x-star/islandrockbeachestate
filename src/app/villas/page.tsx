import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { getPageContent } from "@/lib/cms";

export default async function VillasPage() {
    const data = await getPageContent('villas');

    if (!data) {
        return <div>Content not found</div>;
    }

    return (
        <main>
            <Hero
                headline={data.headline}
                subheadline={data.subheadline}
                variant="small"
                ctaText={data.cta_text}
                ctaLink={data.cta_link}
            />

            <Section background="white">
                <div className={styles.introGrid}>
                    <div className={styles.imageColumn}>
                        <img
                            src={data.intro_image}
                            alt="Lecture villa"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div className={styles.textColumn}>
                        <h2 className={styles.heading}>{data.intro_title}</h2>
                        <p className={styles.paragraph}>
                            {data.intro_text}
                        </p>
                    </div>
                </div>
            </Section>

            <Section background="sand">
                <div className={styles.container}>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '3rem' }}>{data.features_title}</h3>
                    <div className={styles.featuresGrid}>
                        {data.features && data.features.map((feature: any, index: number) => (
                            <div key={index} className={styles.featureCard}>
                                <h4 className={styles.featureTitle}>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link href="/contact" className={styles.link}>Request Floor Plans</Link>
                    </div>
                </div>
            </Section>
        </main>
    );
}
