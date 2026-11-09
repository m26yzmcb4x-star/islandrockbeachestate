import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Photo Gallery | Island Rock Golf Estate, Mozambique",
    description: "Browse photos of Island Rock Golf Estate — pristine coastline, reef-protected bay, villa designs, and the natural beauty of Jangamo, Mozambique.",
    keywords: ["Island Rock photos", "Mozambique beach gallery", "Jangamo images", "beachfront villa photos"],
    openGraph: { url: "https://islandrockestate.com/gallery" },
};

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
