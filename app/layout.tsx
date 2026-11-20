import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "HospitalBuddy — Know the price before you go";
const description =
  "HospitalBuddy compares hospital and clinic prices near you and gives personalized recommendations based on your insurance, budget, and care needs.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hospitalbuddy.org"),
  title,
  description,
  openGraph: {
    title,
    description: "Compare hospital prices near you, personalized to your insurance and needs.",
    type: "website",
    url: "https://hospitalbuddy.org/",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f766e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
