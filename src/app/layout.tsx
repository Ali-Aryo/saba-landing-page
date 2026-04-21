import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SABA Management Consulting — Strategic AI for Enterprise",
  description:
    "We architecture strategic AI advantages for enterprise. Moving beyond conceptual frameworks into operational reality.",
  keywords: [
    "AI consulting",
    "enterprise AI",
    "management consulting",
    "AI strategy",
    "LLM implementation",
  ],
  openGraph: {
    title: "SABA Management Consulting",
    description:
      "Unlocking Intelligence. Scaling Impact. Strategic AI consulting for enterprise.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
