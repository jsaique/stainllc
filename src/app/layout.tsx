import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";

const roboto_mono = Roboto_Mono({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Stainless Specialties LLC",
  description: "Custom Fabrication and Industrial Maintenace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto_mono.variable} antialiased bg-stone-200 text-stone-900 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
