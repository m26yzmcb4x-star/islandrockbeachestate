import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import { getBlogPost, getBlogPosts } from "@/lib/cms";
import { notFound } from "next/navigation";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import InvestmentBriefCapture from "@/components/InvestmentBriefCapture";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogPost(slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            url: `https://islandrockestate.com/blog/${post.slug}`,
            title: post.title,
            description: post.excerpt,
            images: post.coverImage ? [{ url: post.coverImage }] : [],
        },
    };
}

export async function generateStaticParams() {
    const posts = await getBlogPosts();
    return posts.map((p) => ({ slug: p.slug }));
}

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) notFound();

    return (
        <main>
            {/* Article Header */}
            <div style={{ background: 'var(--color-charcoal)', color: 'white', padding: '6rem 2rem 4rem' }}>
                <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                    <Link href="/blog" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>
                        ← All Insights
                    </Link>
                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.25rem' }}>
                        <span style={{ fontSize: '0.8rem', opacity: 0.55, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                            {formatDate(post.date)}
                        </span>
                        <span style={{ fontSize: '0.8rem', opacity: 0.55 }}>{post.readTime}</span>
                    </div>
                    <h1 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                        lineHeight: 1.2,
                        color: 'white',
                        marginBottom: '1.5rem',
                    }}>
                        {post.title}
                    </h1>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', maxWidth: '640px' }}>
                        {post.excerpt}
                    </p>
                </div>
            </div>

            {/* Cover Image */}
            {post.coverImage && (
                <div style={{ position: 'relative', height: '420px', width: '100%' }}>
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                        sizes="100vw"
                    />
                </div>
            )}

            {/* Article Body */}
            <Section background="white">
                <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                    {post.sections.map((section, i) => (
                        <div key={i} style={{ marginBottom: '2.5rem' }}>
                            <h2 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.5rem',
                                color: 'var(--color-charcoal)',
                                marginBottom: '0.75rem',
                                lineHeight: 1.25,
                            }}>
                                {section.heading}
                            </h2>
                            <p style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '1.05rem',
                                lineHeight: 1.8,
                                color: 'var(--color-charcoal)',
                                opacity: 0.85,
                            }}>
                                {section.content}
                            </p>
                        </div>
                    ))}

                    <div style={{
                        borderTop: '1px solid rgba(0,0,0,0.1)',
                        paddingTop: '2rem',
                        marginTop: '3rem',
                        display: 'flex',
                        gap: '2rem',
                        flexWrap: 'wrap',
                    }}>
                        <Link href="/villas" className={styles.link}>View the Villas</Link>
                        <Link href="/investment" className={styles.link}>Investment Overview</Link>
                        <Link href="/contact" className={styles.link}>Speak to the Team</Link>
                    </div>
                </div>
            </Section>

            {/* Lead Magnet */}
            <Section background="stone">
                <div style={{ maxWidth: '680px', margin: '0 auto' }}>
                    <InvestmentBriefCapture />
                </div>
            </Section>

            <BreadcrumbJsonLd items={[
                { name: 'Insights', href: '/blog' },
                { name: post.title, href: `/blog/${post.slug}` },
            ]} />
        </main>
    );
}
