import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import { getPageContent } from "@/lib/cms";

export default async function EstatePage() {
    const data = await getPageContent('estate');

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
                    <div className={styles.textColumn}>
                        <h2 className={styles.heading}>{data.philosophy_title}</h2>
                        <p className={styles.paragraph}>
                            {data.philosophy_text}
                        </p>
                    </div>
                    <div className={styles.imageColumn}>
                        <img
                            src={data.philosophy_image}
                            alt="Aerial view"
                            className={styles.imagePlaceholder}
                            style={{ objectFit: 'cover' }}
                        />
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
                </div>
            </Section>
        </main>
    );
}
