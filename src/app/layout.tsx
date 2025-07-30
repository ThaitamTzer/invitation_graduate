import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientProviders from "@/components/ClientProviders";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `Lễ Tốt Nghiệp 2025 - ${
      process.env.NEXT_PUBLIC_GRADUATE_NAME || "Lê Trần Thái Tâm"
    }`,
    template: `%s | Lễ Tốt Nghiệp 2025 - ${
      process.env.NEXT_PUBLIC_GRADUATE_NAME || "Lê Trần Thái Tâm"
    }`,
  },
  description: `Thân mời quý khách tham dự lễ tốt nghiệp đại học của ${
    process.env.NEXT_PUBLIC_GRADUATE_NAME || "Lê Trần Thái Tâm"
  } năm 2025. Đăng ký tham dự online ngay hôm nay! Lễ tốt nghiệp, tốt nghiệp đại học, invitation, mời tham dự.`,
  keywords: [
    "lễ tốt nghiệp Văn Lang",
    "graduation ceremony Văn Lang",
    "tốt nghiệp đại học Văn Lang",
    "mời tham dự lễ tốt nghiệp Văn Lang",
    "graduation invitation Van Lang",
    "Lê Trần Thái Tâm",
    "invitation 2025",
    "đăng ký tham dự lễ tốt nghiệp Văn Lang",
    "lễ tốt nghiệp online",
  ],
  authors: [
    { name: process.env.NEXT_PUBLIC_GRADUATE_NAME || "Lê Trần Thái Tâm" },
  ],
  creator: process.env.NEXT_PUBLIC_GRADUATE_NAME || "Lê Trần Thái Tâm",
  publisher: process.env.NEXT_PUBLIC_GRADUATE_NAME || "Lê Trần Thái Tâm",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://invitation-graduate.vercel.app"
  ),
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/",
    },
  },
  openGraph: {
    title: `Lễ Tốt Nghiệp 2025 - ${
      process.env.NEXT_PUBLIC_GRADUATE_NAME || "Lê Trần Thái Tâm"
    }`,
    description: `Thân mời quý khách tham dự lễ tốt nghiệp đại học của ${
      process.env.NEXT_PUBLIC_GRADUATE_NAME || "Lê Trần Thái Tâm"
    } năm 2025. Đăng ký tham dự ngay!`,
    url: "/",
    siteName: `Lễ Tốt Nghiệp 2025 - ${
      process.env.NEXT_PUBLIC_GRADUATE_NAME || "Lê Trần Thái Tâm"
    }`,
    images: [
      {
        url: "/graduation-og.jpg",
        width: 1200,
        height: 630,
        alt: `Lễ Tốt Nghiệp ${
          process.env.NEXT_PUBLIC_GRADUATE_NAME || "Lê Trần Thái Tâm"
        } 2025`,
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Lễ Tốt Nghiệp 2025 - ${
      process.env.NEXT_PUBLIC_GRADUATE_NAME || "Lê Trần Thái Tâm"
    }`,
    description: `Thân mời quý khách tham dự lễ tốt nghiệp đại học của ${
      process.env.NEXT_PUBLIC_GRADUATE_NAME || "Lê Trần Thái Tâm"
    } năm 2025.`,
    images: ["/graduation-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `Lễ Tốt Nghiệp 2025 - ${
      process.env.NEXT_PUBLIC_GRADUATE_NAME || "Lê Trần Thái Tâm"
    }`,
    description: `Lễ tốt nghiệp đại học của ${
      process.env.NEXT_PUBLIC_GRADUATE_NAME || "Lê Trần Thái Tâm"
    } năm 2025`,
    startDate: "2025-07-30T09:00:00+07:00",
    endDate: "2025-07-30T12:00:00+07:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Trường Đại Học ABC",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Đường ABC",
        addressLocality: "TP.HCM",
        addressCountry: "VN",
      },
    },
    organizer: {
      "@type": "Person",
      name: process.env.NEXT_PUBLIC_GRADUATE_NAME || "Lê Trần Thái Tâm",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "VND",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <html lang="vi">
      <head>
        <link
          rel="canonical"
          href={
            process.env.NEXT_PUBLIC_SITE_URL ||
            "https://invitation-graduate.vercel.app"
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta
          name="google-site-verification"
          content="jOPzX6yV61OBfZqfA6pb21S_M_0eqECRHtw6shEwf9g"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
