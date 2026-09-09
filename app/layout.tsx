import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "InnerPeace | Live 1-on-1 & Small Group Yoga with Elite Masters",
  description:
    "Experience authentic, interactive live yoga from home. Real-time posture correction, tailored 1-on-1 private training, and intimate group sessions with accredited global masters.",
  keywords: [
    "live online yoga",
    "private yoga instructor online",
    "real-time yoga feedback",
    "interactive yoga classes zoom",
    "posture correction yoga",
    "vinyasa live class",
    "yin yoga stress relief"
  ],
  metadataBase: new URL("https://innerpeace.com"),
  openGraph: {
    title: "Live, Interactive Yoga With Master Instructors | InnerPeace",
    description:
      "Boutique studio quality, tailored to your living room. Two-way video feedback for alignment, strength, and calm.",
    url: "https://innerpeace.com",
    siteName: "InnerPeace",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "InnerPeace Live Yoga Session",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF7F2] text-[#242E25] antialiased selection:bg-[#C97A58]/20 selection:text-[#B46949]">
        {children}
      </body>
    </html>
  );
}
