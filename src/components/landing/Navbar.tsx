"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import LogoAntenor from "../LogoAntenor";

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const maxScroll = viewportHeight * 0.7; // 80vh como punto de referencia
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  const isSticky = scrollProgress >= 0.45;

  return (
    <>
      <div className={`${isSticky ? "relative h-[40vh]" : ""} `}></div>
      <header
        className={`z-50 transition-all duration-500 relative top-0 left-0 right-0 
        ${isSticky ? "bg-[#000f] p-2" : "bg-[#0008] "}`}
        style={
          isSticky
            ? { position: "fixed" }
            : { height: `${100 - scrollProgress * 100}vh` }
        }
      >
        <div
          className={`container mx-auto flex gap-24 ${
            isSticky
              ? "flex-row justify-between items-center"
              : "flex-col items-center justify-center h-full"
          }`}
        >
          <LogoAntenor
            color="#fff"
            size={isSticky ? 0.6 : 3}
            className="transition-all duration-200 "
          />

          <nav>
            <ul className={`flex gap-8 ${isSticky ? "text-lg" : "text-2xl"}`}>
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-400 transition-colors"
                >
                  Reservas
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-400 transition-colors"
                >
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-400 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
