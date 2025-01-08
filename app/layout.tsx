export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = IBM_Plex_Serif({ subsets: ["latin"],variable:'--font-inter' ,weight:["400","700"]});
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: "--font-ibm-plex-serif",
  weight: ["400", "700"],

});

export const metadata: Metadata = {
  title: "Horizon",
  description: "Generated for JAC",
  icons: {
    icon: "/icons/logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable}`} >
        {children}
      </body>
    </html>
  );
}
