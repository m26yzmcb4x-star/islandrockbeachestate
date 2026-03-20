import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Photo Gallery | Island Rock Beach Estate, Mozambique",
    description: "Browse photos of Island Rock Beach Estate — pristine coastline, reef-protected bay, villa designs, and the natural beauty of Jangamo, Mozambique.",
    keywords: ["Island Rock photos", "Mozambique beach gallery", "Jangamo images", "beachfront villa photos"],
};

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
