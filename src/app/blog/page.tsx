import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import { getBlogPosts } from "@/lib/cms";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
    title: "Insights — Mozambique Property & Investment | Island Rock Beach Estate",
    description: "Guides and insights on buying property in Mozambique, Inhambane investment returns, DUAT ownership, and coastal living. Written for South African investors.",
    keywords: ["Mozambique property guide", "Inhambane investment", "DUAT Mozambique", "buy property Mozambique South African", "beachfront investment"],
    openGraph: { url: "https://islandrockestate.com/blog" },
};

export default async function BlogPage() {
    const posts = await getBlogPosts();

    return (
        <main>
            <Hero
                headline="Insights"
                subheadline="Guides for South African investors considering coastal property in Mozambique."
                variant="small"
                ctaText="Download Investment Brief"
                ctaLink="/investment#brief"
            />

            <Section background="white">
                <div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: '2.5rem',
                    }}>
                        {posts.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
            </Section>

            <Section background="sand">
                <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                    <h3 className={styles.heading} style={{ marginBottom: '1rem' }}>Have questions we haven&apos;t answered?</h3>
                    <p className={styles.paragraph} style={{ marginBottom: '2rem' }}>
                        Our team is available to walk you through the investment case, legal process, and availability.
                    </p>
                    <Link href="/contact" className={styles.primaryButton}>Speak to the Developer</Link>
                </div>
            </Section>
        </main>
    );
}
