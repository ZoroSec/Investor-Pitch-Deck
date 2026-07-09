import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Pitch your investor: Turn your startup into an investor-ready pitch";
const description =
  "Build compelling pitch decks, uncover weaknesses before investors do, practice live with AI investors, and raise capital with confidence.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "pitch deck",
    "AI investor",
    "fundraising",
    "startup",
    "venture capital",
    "pitch practice",
  ],
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-mesh min-h-screen">{children}</body>
    </html>
  );
}
