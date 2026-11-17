"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { FACTS } from "@/lib/facts";

// Real surveyed reference points from the Island Rock Terrain Model (built from
// the 14 Sept 2026 contour survey). u/v are normalised across the site: u runs
// west (0) to east (1, where the ocean begins), v runs north (0) to south (1).
// Heights are metres above the beach line.
const SPOTS: { name: string; u: number; v: number; h: number }[] = [
    { name: "Highest point", u: 0.0712, v: 0.257, h: 77 },
    { name: "Driving range", u: 0.1169, v: 0.806, h: 14 },
    { name: "18th green", u: 0.2124, v: 0.8146, h: 25 },
    { name: "Hotel", u: 0.2379, v: 0.9444, h: 20 },
    { name: "Clubhouse", u: 0.3132, v: 0.8325, h: 35 },
    { name: "17th hole", u: 0.3239, v: 0.7, h: 27 },
    { name: "16th fairway", u: 0.3441, v: 0.6517, h: 13 },
    { name: "3rd green", u: 0.371, v: 0.4914, h: 5 },
    { name: "Halfway house", u: 0.4355, v: 0.1344, h: 18 },
    { name: "Valley floor, 5th", u: 0.4301, v: 0.445, h: 6 },
    { name: "2nd green", u: 0.4435, v: 0.594, h: 53 },
    { name: "1st green", u: 0.3858, v: 0.7371, h: 41 },
    { name: "Top of the frontal dunes", u: 0.6129, v: 0.4563, h: 62 },
];

// Schematic routing between the points we have confirmed heights for -- not
// the full 18-hole line, since only these points were surveyed and named.
const ROUTE = ["Clubhouse", "1st green", "2nd green", "3rd green", "Valley floor, 5th", "Halfway house", "16th fairway", "17th hole", "18th green", "Driving range"];

const W = 420;
const H = 852; // matches the real 1816.2 x 3684.5 m aspect ratio

function x(u: number) { return u * W; }
function y(v: number) { return v * H; }

// The sea, traced from the terrain model's own coastline shape.
const SEA = [[1.03, 0.08], [2.3, 0.08], [1.5, 1.14], [0.14, 1.05]]
    .map(([u, v]) => `${x(u)},${y(v)}`).join(" ");

function elevationColor(h: number) {
    // 0m (beach) -> sand, ~77m (highest) -> deep green
    const t = Math.min(1, h / 77);
    const r = Math.round(239 - t * 160);
    const g = Math.round(228 - t * 90);
    const b = Math.round(205 - t * 140);
    return `rgb(${r},${g},${b})`;
}

export default function MasterplanPage() {
    const [showRoute, setShowRoute] = useState(true);
    const [showLabels, setShowLabels] = useState(true);
    const [showElevation, setShowElevation] = useState(true);

    const byName = Object.fromEntries(SPOTS.map((s) => [s.name, s]));
    const routePoints = ROUTE.map((n) => byName[n]).filter(Boolean) as typeof SPOTS;

    // A 500 m scale bar, from the real site dimensions (1816.2 x 3684.5 m).
    const metersPerUnit = (FACTS.site.widthKm * 1000) / W;
    const scaleBarUnits = 500 / metersPerUnit;

    return (
        <main>
            <Hero
                headline="The Masterplan"
                subheadline="Where the course, clubhouse, hotel and villa stands sit."
                variant="small"
                ctaText="Register Interest"
                ctaLink="/contact"
            />

            <div style={{ background: 'var(--color-charcoal)', color: 'white', textAlign: 'center', padding: '0.85rem 2rem', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Concept Stage &nbsp;·&nbsp; Built From the 15 Sept 2026 Masterplan &amp; Survey &nbsp;·&nbsp;{' '}
                <a href={FACTS.terrainModelUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Open the 3D Terrain Model</a>
            </div>

            <Section background="white">
                <div className={styles.container} style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
                    <p className={styles.paragraph}>
                        This plan is built from the estate&apos;s own survey reference points, true to
                        scale, north up. It is a schematic overview for release one — full pan, zoom and
                        selectable stands follow once the CAD drawing is confirmed. For the surveyed
                        terrain in 3D, with real height readings, use the{' '}
                        <a href={FACTS.terrainModelUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>interactive Terrain Model</a>.
                    </p>
                </div>
            </Section>

            <Section background="sand">
                <div className={styles.container} style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        {[
                            { label: "Routing", on: showRoute, set: setShowRoute },
                            { label: "Pins", on: showLabels, set: setShowLabels },
                            { label: "Elevation tint", on: showElevation, set: setShowElevation },
                        ].map((l) => (
                            <button
                                key={l.label}
                                onClick={() => l.set(!l.on)}
                                aria-pressed={l.on}
                                style={{
                                    padding: '0.5rem 1rem',
                                    fontSize: '0.78rem',
                                    letterSpacing: '0.05em',
                                    textTransform: 'uppercase',
                                    border: '1px solid var(--color-charcoal)',
                                    background: l.on ? 'var(--color-charcoal)' : 'transparent',
                                    color: l.on ? 'white' : 'var(--color-charcoal)',
                                    borderRadius: '2px',
                                    cursor: 'pointer',
                                }}
                            >
                                {l.label}
                            </button>
                        ))}
                    </div>

                    <div style={{ background: 'white', borderRadius: '6px', padding: '1.5rem', boxShadow: '0 1px 2px rgba(0,0,0,0.06)' }}>
                        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Schematic masterplan of Island Rock Golf Estate, showing the clubhouse, hotel, halfway house and golf routing reference points, true to scale and oriented north up." style={{ width: '100%', height: 'auto', display: 'block' }}>
                            <rect x={0} y={0} width={W} height={H} fill="#efe4cd" />
                            {showElevation && SPOTS.map((s) => (
                                <circle key={`glow-${s.name}`} cx={x(s.u)} cy={y(s.v)} r={34} fill={elevationColor(s.h)} opacity={0.55} />
                            ))}
                            <polygon points={SEA} fill="#1d5a66" opacity={0.85} />

                            {showRoute && (
                                <polyline
                                    points={routePoints.map((s) => `${x(s.u)},${y(s.v)}`).join(" ")}
                                    fill="none"
                                    stroke="#2c4a3b"
                                    strokeWidth={2.5}
                                    strokeDasharray="1 7"
                                    strokeLinecap="round"
                                />
                            )}

                            {SPOTS.map((s) => (
                                <g key={s.name}>
                                    <circle cx={x(s.u)} cy={y(s.v)} r={5} fill="#2c4a3b" stroke="white" strokeWidth={1.5} />
                                    {showLabels && (
                                        <text
                                            x={x(s.u) + 9}
                                            y={y(s.v) + 4}
                                            fontSize={13}
                                            fontFamily="var(--font-body, sans-serif)"
                                            fill="#1d241c"
                                            style={{ paintOrder: 'stroke', stroke: 'white', strokeWidth: 3 }}
                                        >
                                            {s.name} · {s.h}m
                                        </text>
                                    )}
                                </g>
                            ))}

                            {/* Scale bar */}
                            <g transform={`translate(20, ${H - 40})`}>
                                <line x1={0} y1={0} x2={scaleBarUnits} y2={0} stroke="#1d241c" strokeWidth={2} />
                                <line x1={0} y1={-5} x2={0} y2={5} stroke="#1d241c" strokeWidth={2} />
                                <line x1={scaleBarUnits} y1={-5} x2={scaleBarUnits} y2={5} stroke="#1d241c" strokeWidth={2} />
                                <text x={scaleBarUnits / 2} y={-10} fontSize={13} textAnchor="middle" fill="#1d241c">500 m</text>
                            </g>

                            {/* North arrow */}
                            <g transform={`translate(${W - 34}, 34)`}>
                                <line x1={0} y1={14} x2={0} y2={-14} stroke="#1d241c" strokeWidth={2} />
                                <polygon points="0,-18 -6,-8 6,-8" fill="#1d241c" />
                                <text x={0} y={28} fontSize={12} textAnchor="middle" fill="#1d241c">N</text>
                            </g>
                        </svg>
                    </div>
                    <p className={styles.paragraph} style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.82rem', opacity: 0.7, maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Schematic, built from the surveyed reference points in the Terrain Model — not a
                        reproduction of the original CAD drawing. The ocean lies to the east and
                        south-east; the hotel sits at the beach on the estate&apos;s southern tip.
                    </p>
                </div>
            </Section>

            <Section background="white">
                <div className={styles.container}>
                    <h3 className={styles.heading} style={{ textAlign: 'center', marginBottom: '3rem' }}>The Estate at a Glance</h3>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>{FACTS.site.lengthKm} km</h4>
                            <p>North to south, with {FACTS.site.widthKm} km east to west and about {FACTS.site.oceanFrontageKm} km of ocean frontage.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>{FACTS.golf.holes} Holes</h4>
                            <p>{FACTS.golf.routingSummary}</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h4 className={styles.featureTitle}>{FACTS.villas.planned} Stands</h4>
                            <p>Laid out across the dunes and valley, each {FACTS.villas.standSizeM2}.</p>
                        </div>
                    </div>
                    <p className={styles.paragraph} style={{ textAlign: 'center', marginTop: '2.5rem', maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto' }}>
                        The frontal dunes reach about 50 to 60 m above the beach. The valley behind them
                        is only 3 to 8 m above the beach — a drop of more than 40 m. The clubhouse sits at
                        about {FACTS.clubhouse.elevationM} m and the hotel at about {FACTS.hotel.elevationM} m.
                    </p>
                </div>
            </Section>

            <Section background="dark">
                <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'white' }}>
                    <h2 className={styles.heading} style={{ color: 'white', marginBottom: '1.5rem' }}>Explore the Terrain in 3D</h2>
                    <p className={styles.paragraph} style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Drag to orbit, scroll to zoom, and point anywhere on the ground to read its real
                        surveyed height.
                    </p>
                    <a href={FACTS.terrainModelUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>Open the Terrain Model</a>
                </div>
            </Section>
            <BreadcrumbJsonLd items={[{ name: 'Masterplan', href: '/masterplan' }]} />
        </main>
    );
}
