"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Web Design",
    text: "طراحی رابط‌های دیجیتال با تمرکز روی هویت بصری، ساختار و تجربه کاربر.",
  },
  {
    number: "02",
    title: "Web Development",
    text: "تبدیل طراحی به وب‌سایت‌های سریع، واکنش‌گرا و قابل توسعه.",
  },
  {
    number: "03",
    title: "3D & Motion",
    text: "ساخت عناصر سه‌بعدی و انیمیشن‌هایی که به تجربه سایت شخصیت می‌دهند.",
  },
  {
    number: "04",
    title: "Interactive Experience",
    text: "ساخت تجربه‌های تعاملی که کاربر را درگیر محتوا و داستان پروژه می‌کنند.",
  },
];

export default function Services() {
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
      ref={sectionRef}
      className="relative px-6 py-24 md:px-10 md:py-32"
    >
      {/* Header */}
      <div
        className={`mb-16 max-w-2xl transition-all duration-1000 ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }`}
      >
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#b8bd62] sm:text-sm">
          What I Do
        </p>

        <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl md:text-6xl">
          چیزی بیشتر از
          <br />
          یک وب‌سایت.
        </h2>

        <p className="mt-6 max-w-xl text-base leading-7 text-[#f3f0e8]/50 sm:text-lg">
          از ایده اولیه تا تجربه نهایی، هر پروژه با تمرکز روی طراحی،
          عملکرد و جزئیات ساخته می‌شود.
        </p>
      </div>

      {/* Services */}
      <div className="border-t border-[#f3f0e8]/10">
        {services.map((service, index) => {
          const isActive = active === index;

          return (
            <div
              key={service.number}
              onTouchStart={() => setActive(index)}
              onTouchEnd={() => {
                setTimeout(() => setActive(null), 500);
              }}
              className={`group relative grid gap-6 overflow-hidden border-b border-[#f3f0e8]/10 py-8 transition-all duration-1000 md:grid-cols-[80px_1fr_1.5fr] md:items-center md:gap-10 md:py-10 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
              style={{
                transitionDelay: `${250 + index * 120}ms`,
              }}
            >
              {/* Background Touch Effect */}
              <div
                className={`pointer-events-none absolute inset-0 bg-[#b8bd62]/[0.025] transition-all duration-500 ${
                  isActive
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              />

              {/* Number */}
              <span
                className={`relative z-10 text-xs tracking-[0.2em] text-[#b8bd62] transition-all duration-500 ${
                  isActive
                    ? "translate-x-2 scale-110"
                    : "translate-x-0 scale-100"
                } md:group-hover:translate-x-2 md:group-hover:scale-110`}
              >
                {service.number}
              </span>

              {/* Title */}
              <h3
                className={`relative z-10 text-2xl font-medium tracking-[-0.02em] transition-all duration-500 sm:text-3xl md:text-4xl ${
                  isActive
                    ? "translate-x-2"
                    : "translate-x-0"
                } md:group-hover:translate-x-2`}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`relative z-10 max-w-xl text-sm leading-7 transition-all duration-500 sm:text-base ${
                  isActive
                    ? "translate-x-1 text-[#f3f0e8]/75"
                    : "text-[#f3f0e8]/50"
                } md:group-hover:translate-x-1 md:group-hover:text-[#f3f0e8]/75`}
              >
                {service.text}
              </p>

              {/* Animated Line */}
              <div
                className={`pointer-events-none absolute bottom-0 left-0 h-[2px] bg-[#b8bd62] transition-all duration-700 ${
                  isActive ? "w-full" : "w-0"
                } md:group-hover:w-full`}
              />

              {/* Small Arrow */}
              <span
                className={`pointer-events-none absolute right-0 top-1/2 z-10 -translate-y-1/2 text-xl text-[#b8bd62] transition-all duration-500 ${
                  isActive
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                } md:group-hover:translate-x-0 md:group-hover:opacity-100`}
              >
                →
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}