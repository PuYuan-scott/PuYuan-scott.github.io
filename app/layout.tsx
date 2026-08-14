import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://puyuan-scott.github.io"),
  title: {
    default: "Scott Yuan Research",
    template: "%s | Scott Yuan Research",
  },
  description:
    "Independent equity research, investment reports, economic analysis and short-form insights by Scott Yuan.",
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <NewsletterSignup />
        <Footer />
      </body>
    </html>
  );
}
