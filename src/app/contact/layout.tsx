import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact & Enquire | Island Rock Beach Estate, Mozambique",
    description: "Get in touch with the Island Rock team. Enquire about villa availability, investment options, or schedule a site visit to Jangamo, Mozambique.",
    keywords: ["contact Island Rock", "enquire Mozambique property", "Jangamo site visit", "villa enquiry"],
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
