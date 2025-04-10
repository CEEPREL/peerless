import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ReduxProvider } from "./redux/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Peerless - Asset Management Dashboard",
    template: "%s | Peerless",
  },
  description:
    "Peerless is a powerful, modern asset management dashboard for tracking individual and corporate finance records with ease.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  keywords: [
    "Fintech",
    "Asset Management",
    "Finance Dashboard",
    "Peerless App",
    "Corporate Records",
    "Loan Tracking",
    "Investment Tools",
  ],
  openGraph: {
    title: "Peerless - Asset Management Dashboard",
    description:
      "Manage and monitor corporate and individual finance records in one intuitive dashboard.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: "Peerless",
    images: [
      {
        url: "/icons/named-logo.svg",
        width: 1200,
        height: 630,
        alt: "Peerless Asset management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peerless - Asset Management App",
    description:
      "An intuitive dashboard to manage corporate and individual asset records.",
    creator: "@yourTwitterHandle",
    images: ["/icons/named-logo.svg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}`} />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-black dark:text-white`}
      >
        <ReduxProvider>
          <ThemeProvider attribute="class" enableSystem>
            {children}
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
