import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Usman — Modern Digital Visionary & AI Creator",
  description: "BSc Software Engineering student at NUTECH Islamabad, Freelance AI Creator, Developer, and Cinematic Storyteller operating at the intersection of AI innovation and modern digital craftsmanship.",
  keywords: [
    "Muhammad Usman",
    "AI Creator",
    "NUTECH Islamabad",
    "Software Engineer",
    "AI Video Ads Specialist",
    "Google Veo 3",
    "Runway ML",
    "Full-Stack Developer",
    "Cinematic Storyteller",
    "Next.js Developer"
  ],
  authors: [{ name: "Muhammad Usman" }],
  openGraph: {
    title: "Muhammad Usman — Modern Digital Visionary & AI Creator",
    description: "Building immersive digital experiences and ultra-realistic AI commercials through development, prompt engineering, and cinematic storytelling.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="bg-luxury-bg text-luxury-text min-h-full font-sans">
        {children}
      </body>
    </html>
  );
}
