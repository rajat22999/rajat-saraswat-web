import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rajat Saraswat | Portfolio",
  description:
    "Rajat Saraswat is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://rajatsaraswat.in/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />        
        <meta charSet="UTF-8" />

        <title>Rajat Saraswat - Software Engineer & Frontend Developer</title>
        <meta name="description" content="Rajat Saraswat's portfolio - A software engineer specializing in frontend development, delivering exceptional user experiences through responsive and modern web designs." />
        <meta property="og:title" content="Rajat Saraswat - Software Engineer & Frontend Developer" />
        <meta property="og:description" content="Explore the portfolio of Rajat Saraswat, a skilled frontend developer with expertise in building interactive, user-focused web applications." />
        <meta property="og:image" content="/images/profile.jpeg" />
        <meta property="og:url" content="https://rajatsaraswat.in/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
          <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
