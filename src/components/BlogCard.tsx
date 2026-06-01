"use client";

import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/cms";

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogCard({ post }: { post: BlogPost }) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
        >
            <article
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    border: '1px solid rgba(0,0,0,0.07)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
            >
                {post.coverImage && (
                    <div style={{ position: 'relative', height: '200px', flexShrink: 0 }}>
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                )}
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem' }}>
                        <span style={{ fontSize: '0.75rem', opacity: 0.55, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                            {formatDate(post.date)}
                        </span>
                        <span style={{ fontSize: '0.75rem', opacity: 0.55 }}>{post.readTime}</span>
                    </div>
                    <h2 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.2rem',
                        lineHeight: 1.35,
                        marginBottom: '0.75rem',
                        color: 'var(--color-charcoal)',
                    }}>
                        {post.title}
                    </h2>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.65, opacity: 0.7, flex: 1 }}>
                        {post.excerpt}
                    </p>
                    <span style={{
                        display: 'inline-block',
                        marginTop: '1.25rem',
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        borderBottom: '1px solid currentColor',
                        paddingBottom: '2px',
                        color: 'var(--color-charcoal)',
                        width: 'fit-content',
                    }}>
                        Read article
                    </span>
                </div>
            </article>
        </Link>
    );
}
