import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
    title: "FAQ — Ownership, Investment & Access | Island Rock Beach Estate",
    description: "Answers to common questions about owning property at Island Rock Beach Estate — access, ownership structures, rental options, and building timelines.",
    keywords: ["Mozambique property FAQ", "beachfront ownership", "Jangamo access", "property investment questions"],
    openGraph: { url: "https://islandrockestate.com/faq" },
};

export default function FAQPage() {
    return (
        <main>
            <Hero
                headline="Frequently Asked Questions"
                subheadline="Everything you need to know about ownership, lifestyle, and investment."
                variant="small"
                ctaText="Contact Us"
                ctaLink="/contact"
            />

            <Section background="white">
                <div className={styles.container} style={{ maxWidth: '800px', margin: '0 auto' }}>

                    <div className={styles.faqGroup} style={{ marginBottom: '4rem' }}>
                        <h3 className={styles.heading} style={{ fontSize: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '2rem' }}>Access & Location</h3>

                        <div className={styles.faqItem} style={{ marginBottom: '2.5rem' }}>
                            <h4 className={styles.featureTitle} style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>How do I get to Island Rock Estate?</h4>
                            <p className={styles.paragraph} style={{ fontSize: '1rem', lineHeight: '1.7', maxWidth: '100%' }}>
                                Island Rock Estate remains naturally protected and low-density. Access currently requires a 4x4 vehicle, which preserves our privacy, prevents overdevelopment, and maintains the untouched character of the coastline. Infrastructure improvements form part of the long-term development plan, but for now, the journey ensures seclusion.
                            </p>
                        </div>
                        <div className={styles.faqItem} style={{ marginBottom: '2.5rem' }}>
                            <h4 className={styles.featureTitle} style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>Where is Jangamo?</h4>
                            <p className={styles.paragraph} style={{ fontSize: '1rem', lineHeight: '1.7', maxWidth: '100%' }}>
                                Jangamo is located in the Inhambane Province of Southern Mozambique, situated south of Tofo and Barra. It is known for its pristine beaches, world-class diving reefs, and calm, warm waters.
                            </p>
                        </div>
                    </div>

                    <div className={styles.faqGroup} style={{ marginBottom: '4rem' }}>
                        <h3 className={styles.heading} style={{ fontSize: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '2rem' }}>Ownership & Investment</h3>

                        <div className={styles.faqItem} style={{ marginBottom: '2.5rem' }}>
                            <h4 className={styles.featureTitle} style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>What type of ownership is offered?</h4>
                            <p className={styles.paragraph} style={{ fontSize: '1rem', lineHeight: '1.7', maxWidth: '100%' }}>
                                We offer secure land tenure in accordance with Mozambican law, structured to provide long-term security for international investors. Please contact us for a detailed legal guide on ownership structures.
                            </p>
                        </div>

                        <div className={styles.faqItem} style={{ marginBottom: '2.5rem' }}>
                            <h4 className={styles.featureTitle} style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>Can I rent out my villa?</h4>
                            <p className={styles.paragraph} style={{ fontSize: '1rem', lineHeight: '1.7', maxWidth: '100%' }}>
                                Yes. Island Rock Estate is designed as a hybrid lifestyle-investment destination. Owners have the option to place their villas in a rental pool managed by the estate, generating income when not in personal use.
                            </p>
                        </div>

                        <div className={styles.faqItem} style={{ marginBottom: '2.5rem' }}>
                            <h4 className={styles.featureTitle} style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>What is the building timeline?</h4>
                            <p className={styles.paragraph} style={{ fontSize: '1rem', lineHeight: '1.7', maxWidth: '100%' }}>
                                We follow a phased development approach to minimize construction impact on residents. Phase 1 infrastructure is currently underway. Owners typically have a set building window to ensure the estate matures cohesively.
                            </p>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <p className={styles.paragraph} style={{ marginBottom: '1.5rem' }}>Have more questions?</p>
                        <Link href="/contact" className={styles.primaryButton}>Contact the Developer</Link>
                    </div>

                </div>
            </Section>
            <FAQJsonLd />
            <BreadcrumbJsonLd items={[{ name: 'FAQ', href: '/faq' }]} />
        </main>
    );
}

function FAQJsonLd() {
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do I get to Island Rock Estate?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Island Rock Estate remains naturally protected and low-density. Access currently requires a 4x4 vehicle, which preserves our privacy, prevents overdevelopment, and maintains the untouched character of the coastline. Infrastructure improvements form part of the long-term development plan, but for now, the journey ensures seclusion."
                }
            },
            {
                "@type": "Question",
                "name": "Where is Jangamo?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Jangamo is located in the Inhambane Province of Southern Mozambique, situated south of Tofo and Barra. It is known for its pristine beaches, world-class diving reefs, and calm, warm waters."
                }
            },
            {
                "@type": "Question",
                "name": "What type of ownership is offered?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer secure land tenure in accordance with Mozambican law, structured to provide long-term security for international investors. Please contact us for a detailed legal guide on ownership structures."
                }
            },
            {
                "@type": "Question",
                "name": "Can I rent out my villa?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Island Rock Estate is designed as a hybrid lifestyle-investment destination. Owners have the option to place their villas in a rental pool managed by the estate, generating income when not in personal use."
                }
            },
            {
                "@type": "Question",
                "name": "What is the building timeline?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We follow a phased development approach to minimize construction impact on residents. Phase 1 infrastructure is currently underway. Owners typically have a set building window to ensure the estate matures cohesively."
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
    );
}
