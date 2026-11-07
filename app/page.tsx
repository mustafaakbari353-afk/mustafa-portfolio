
"use client";

import { useEffect, useState } from "react";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [closing, setClosing] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClosing(true);

      const closeTimer = setTimeout(() => {
        setLoading(false);
        setLoaded(true);
      }, 700);

      return () => clearTimeout(closeTimer);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  const handlePointerMove = (
    e: React.PointerEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setRotateY(((x - centerX) / centerX) * 12);
    setRotateX(-((y - centerY) / centerY) * 12);
    setScale(1.035);
  };

  const handlePointerLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#10100f] text-white">

      {/* ================================
          PRELOADER
      ================================= */}

      {loading && (
        <div
          className={
            "fixed inset-0 z-[9999] flex items-center justify-center bg-[#10100f] transition-all duration-700 " +
            (closing
              ? "scale-105 opacity-0"
              : "scale-100 opacity-100")
          }
        >
          <div className="loader">

            <div className="circle">
              <div className="dot"></div>
              <div className="outline"></div>
            </div>

            <div className="circle">
              <div className="dot"></div>
              <div className="outline"></div>
            </div>

            <div className="circle">
              <div className="dot"></div>
              <div className="outline"></div>
            </div>

            <div className="circle">
              <div className="dot"></div>
              <div className="outline"></div>
            </div>

          </div>
        </div>
      )}

      {/* ================================
          NAVBAR
      ================================= */}

      <header
        className={
          "fixed left-0 right-0 top-0 z-50 px-2.5 py-4 sm:px-5 md:px-8 md:py-5 transition-all duration-1000 " +
          (loaded
            ? "translate-y-0 opacity-100"
            : "-translate-y-5 opacity-0")
        }
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2">

          {/* MUSTAFA AKBARI */}

          <a
            href="#"
            className="live-glass group relative z-10 flex shrink-0 items-center overflow-hidden rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-2 text-[9px] font-medium tracking-wide text-white backdrop-blur-xl transition-all duration-300 hover:border-[#b8bd62]/60 hover:bg-white/[0.1] hover:shadow-[0_0_25px_rgba(184,189,98,0.15)] active:scale-95 sm:px-4 sm:py-2.5 sm:text-xs md:px-5 md:text-sm"
          >
            <span className="relative z-10 whitespace-nowrap">
              MUSTAFA AKBARI
            </span>
          </a>

          {/* NAVIGATION */}

          <nav className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2 md:gap-3">

            {/* نمونه‌کارها */}

            <a
              href="#work"
              className="live-glass group relative flex shrink-0 items-center overflow-hidden rounded-full border border-white/15 bg-white/[0.06] px-2 py-2 text-[9px] font-medium text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-[#b8bd62]/60 hover:bg-white/[0.1] hover:text-white hover:shadow-[0_0_25px_rgba(184,189,98,0.15)] active:scale-95 sm:px-3 sm:py-2.5 sm:text-xs md:px-5 md:text-sm"
            >
              <span className="relative z-10 whitespace-nowrap">
                نمونه‌کارها
              </span>
            </a>

            {/* درباره من */}

            <a
              href="#about"
              className="live-glass group relative flex shrink-0 items-center overflow-hidden rounded-full border border-white/15 bg-white/[0.06] px-2 py-2 text-[9px] font-medium text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-[#b8bd62]/60 hover:bg-white/[0.1] hover:text-white hover:shadow-[0_0_25px_rgba(184,189,98,0.15)] active:scale-95 sm:px-3 sm:py-2.5 sm:text-xs md:px-5 md:text-sm"
            >
              <span className="relative z-10 whitespace-nowrap">
                درباره من
              </span>
            </a>

            {/* شروع پروژه */}

            <a
              href="#contact"
              className="live-glass group relative hidden shrink-0 overflow-hidden rounded-full border border-[#b8bd62]/40 bg-[#b8bd62]/15 px-4 py-2.5 text-xs font-medium text-white backdrop-blur-xl transition-all duration-300 hover:bg-[#b8bd62]/25 hover:shadow-[0_0_30px_rgba(184,189,98,0.25)] active:scale-95 sm:flex md:px-5 md:text-sm"
            >
              <span className="relative z-10 whitespace-nowrap">
                شروع پروژه
              </span>
            </a>

          </nav>
        </div>
      </header>

      {/* ================================
          HERO
      ================================= */}

      <section className="relative min-h-screen px-4 pb-16 pt-28 sm:px-6 sm:pt-32 md:px-10 md:pt-36">

        {/* Background Glow */}

        <div className="pointer-events-none absolute -left-32 top-[20%] h-[350px] w-[350px] rounded-full bg-[#b8bd62]/5 blur-[100px] sm:h-[500px] sm:w-[500px]" />

        <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 md:gap-14 lg:grid-cols-2">

          {/* HERO TEXT */}

          <div
            className={
              "relative z-10 text-right transition-all duration-1000 " +
              (loaded
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0")
            }
          >

            <p className="mb-4 text-[10px] font-medium tracking-[0.25em] text-[#b8bd62] sm:text-xs md:mb-5 md:text-sm md:tracking-[0.3em]">
              CREATIVE DEVELOPER
            </p>

            <h1 className="text-4xl font-bold leading-[1.25] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              دنیای دیجیتال خود را
              <br />
              <span className="text-[#b8bd62]">
                رنگارنگ سازید.
              </span>
            </h1>

            <p className="mt-5 max-w-xl mr-auto text-sm leading-7 text-white/55 sm:text-base sm:leading-8 md:mt-7 md:text-lg">
              طراحی و ساخت وب‌سایت‌های مدرن، تعاملی و سریع
              با تمرکز روی تجربه‌ای متفاوت و ماندگار.
            </p>

            <div className="mt-7 flex justify-end md:mt-9">

              <a
                href="#contact"
                className="live-glass group relative overflow-hidden rounded-full border border-[#b8bd62]/50 bg-[#b8bd62]/10 px-5 py-3 text-xs font-medium text-white backdrop-blur-xl transition-all duration-300 hover:bg-[#b8bd62]/20 hover:shadow-[0_0_35px_rgba(184,189,98,0.2)] active:scale-95 sm:px-6 sm:py-3.5 sm:text-sm md:px-7"
              >
                <span className="relative z-10">
                  شروع یک پروژه
                </span>
              </a>

            </div>
          </div>

          {/* PROFILE */}

          <div
            className={
              "relative flex items-center justify-center transition-all duration-1000 " +
              (loaded
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0")
            }
          >

            <div
              className="relative flex h-[300px] w-[300px] items-center justify-center sm:h-[400px] sm:w-[400px] md:h-[470px] md:w-[470px]"
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
            >

              {/* Deep Glow */}

              <div className="absolute h-[70%] w-[70%] rounded-full bg-[#b8bd62]/10 blur-[65px] sm:blur-[80px]" />

              {/* Main Ring */}

              <div className="absolute h-[88%] w-[88%] animate-[spin_7s_linear_infinite] rounded-full border border-[#b8bd62]/30">

                <span className="absolute left-[8%] top-[13%] h-2.5 w-2.5 rounded-full bg-[#b8bd62] shadow-[0_0_18px_#b8bd62] sm:h-3 sm:w-3 sm:shadow-[0_0_20px_#b8bd62]" />

              </div>

              {/* Reverse Ring */}

              <div className="absolute h-[96%] w-[96%] animate-[spin_12s_linear_infinite_reverse] rounded-full border border-dashed border-white/15" />

              {/* Profile Card */}

              <div
                className="relative z-10 h-[70%] w-[70%] overflow-hidden rounded-[30px] border border-white/15 bg-white/[0.06] shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-transform duration-300 ease-out sm:rounded-[38px]"
                style={{
                  transform:
                    "perspective(1000px) rotateX(" +
                    rotateX +
                    "deg) rotateY(" +
                    rotateY +
                    "deg) scale(" +
                    scale +
                    ")",
                }}
              >

                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[#b8bd62]/10" />

                <img
                  src="/images/profile.jpg"
                  alt="Mustafa Akbari"
                  className="relative h-full w-full object-cover"
                />

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================================
          OTHER SECTIONS
      ================================= */}

      <Services />
      <Work />
      <About />
      <Contact />

    </main>
  );
}