import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import TopNav from "./components/topNav";
import { SearchProvider } from "./context/searchContext";
import FilterSection from "./components/filterSection";
import SkipLinks from "./components/skipLinks";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rest Countries API",
  description:
    "A Next.js app to explore countries, their flags, populations, regions, capitals, and borders. Search, filter, and learn about every country in the world.",
  creator: "Asilcan Toper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased min-h-screen`}>
        <SkipLinks />
        <Header />
        <SearchProvider>
          <main>
            <FilterSection />
            <TopNav />
            {children}
          </main>
        </SearchProvider>
      </body>
    </html>
  );
}
