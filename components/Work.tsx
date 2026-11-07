"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    number: "01",
  },
  {
    number: "02",
  },
  {
    number: "03",
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative px-6 py-24 md:px-10 md:py-32"
    >
      {/* Header */}
      <div
        className={`mb-16 transition-all duration-1000 ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }`}
      >
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#b8bd62] sm:text-sm">
          Selected Work
        </p>

        <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl md:text-6xl">
          پروژه‌هایی که
          <br />
          در راه هستند.
        </h2>

        <p className="mt-6 max-w-xl text-base leading-7 text-[#f3f0e8]/50 sm:text-lg">
          این بخش به‌مرور با پروژه‌های واقعی و تجربه‌های جدید تکمیل خواهد شد.
        </p>
      </div>

      {/* Projects */}
      <div className="border-t border-[#f3f0e8]/10">
        {projects.map((project, index) => {
          const isActive = active === index;

          return (
            <div
              key={project.number}
              onTouchStart={() => setActive(index)}
              onTouchEnd={() => {
                setTimeout(() => setActive(null), 600);
              }}
              className={`group relative overflow-hidden border-b border-[#f3f0e8]/10 py-9 transition-all duration-1000 md:py-12 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
              style={{
                transitionDelay: `${250 + index * 150}ms`,
              }}
            >
              {/* Touch Background */}
              <div
                className={`pointer-events-none absolute inset-0 bg-[#f3f0e8]/[0.02] transition-all duration-700 ${
                  isActive
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                } md:group-hover:translate-x-0 md:group-hover:opacity-100`}
              />

              {/* Content */}
              <div className="relative z-10 flex items-center justify-between gap-6">
                {/* Number */}
                <span
                  className={`text-xs tracking-[0.2em] text-[#b8bd62] transition-all duration-500 ${
                    isActive
                      ? "translate-x-2 scale-110"
                      : "translate-x-0"
                  } md:group-hover:translate-x-2 md:group-hover:scale-110`}
                >
                  {project.number}
                </span>

                {/* Status */}
                <div className="flex items-center gap-4">
                  <span
                    className={`text-lg font-medium transition-all duration-500 sm:text-xl md:text-2xl ${
                      isActive
                        ? "translate-x-[-4px] text-[#f3f0e8]/80"
                        : "text-[#f3f0e8]/40"
                    } md:group-hover:translate-x-[-4px] md:group-hover:text-[#f3f0e8]/80`}
                  >
                    در دسترس نیست
                  </span>

                  {/* Arrow */}
                  <span
                    className={`text-lg text-[#b8bd62] transition-all duration-500 ${
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    } md:group-hover:translate-x-0 md:group-hover:opacity-100`}
                  >
                    →
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                className={`relative z-10 mt-3 ml-10 text-sm leading-7 transition-all duration-500 sm:text-base md:ml-14 ${
                  isActive
                    ? "translate-x-1 text-[#f3f0e8]/60"
                    : "text-[#f3f0e8]/30"
                } md:group-hover:translate-x-1 md:group-hover:text-[#f3f0e8]/60`}
              >
                پروژه فعالی برای نمایش وجود ندارد.
              </p>

              {/* Animated Line */}
              <div
                className={`absolute bottom-0 left-0 h-[2px] bg-[#b8bd62] transition-all duration-700 ${
                  isActive ? "w-full" : "w-0"
                } md:group-hover:w-full`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}