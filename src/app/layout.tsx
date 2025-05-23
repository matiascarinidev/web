import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";
import "@/styles/globals.css";
import styles from "@/styles/components/bgPhoto.module.css";

const bodoniSans = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antenor",
  description: "Restaurante de campo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodoniSans.variable} antialiased w-full absolute  ${styles.bgPhoto}`}
      >
        {children}
      </body>
    </html>
  );
}
