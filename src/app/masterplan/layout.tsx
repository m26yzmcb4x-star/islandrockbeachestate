import type { Metadata } from "next";
import { FACTS } from "@/lib/facts";

export const metadata: Metadata = {
    title: "The Masterplan | Island Rock Golf Estate, Mozambique",
    description: `The Island Rock Golf Estate masterplan — a full ${FACTS.golf.holes}-hole course, clubhouse, hotel and ${FACTS.villas.planned} villa stands, true to scale from the 15 September 2026 survey.`,
    keywords: ["Island Rock masterplan", "Jangamo golf estate plan", "Mozambique golf estate site plan"],
    openGraph: { url: "https://islandrockestate.com/masterplan" },
};

export default function MasterplanLayout({ children }: { children: React.ReactNode }) {
    return children;
}
