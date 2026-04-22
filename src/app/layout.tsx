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
  title: "SABA Management Consulting — AI Infrastructure Strategy and Market Access",
  description:
    "SABA helps AI-native firms secure GPU capacity, enables land, power, and shell owners to find offtakers, and connects neo-clouds with capital partners for AI infrastructure in North America.",
  keywords: [
    "AI infrastructure consulting",
    "GPU capacity",
    "neo-cloud",
    "AI infrastructure strategy",
    "AI offtake agreements",
    "North America AI infrastructure",
  ],
  openGraph: {
    title: "SABA Management Consulting — AI Infrastructure Strategy and Market Access",
    description:
      "Connecting AI natives, land/power/shell providers, and neo-clouds with capital partners for secure, scalable AI infrastructure across North America.",
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
