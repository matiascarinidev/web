import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Antenor",
  description: "Restaurante de campo",
};

export default function ReservasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex justify-center items-center p-6">{children}</main>
  );
}
