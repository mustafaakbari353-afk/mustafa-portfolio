"use client";

import { useEffect, useRef, useState } from "react";

const points = [
  {
    number: "01",
    title: "Design",
  },
  {
    number: "02",
    title: "Development",
  },
  {
    number: "03",
    title: "Creative",
  },
  {
    number: "04",
    title: "Learning",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#10100f] px-6 py-32 text-[#f3f0e8] md:px-10 md:py-44"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`max-w-5xl transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#b8bd62]">
            About Me
          </p>

          <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl">
            من فقط وب‌سایت نمی‌سازم؛
            <br />
            تجربه می‌سازم.
          </h2>
        </div>

        {/* Text */}
        <div
          className={`mt-12 max-w-3xl transition-all delay-200 duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <p className="text-base leading-8 text-[#f3f0e8]/60 md:text-lg md:leading-9">
            من در مسیر یادگیری طراحی و توسعه وب هستم و علاقه دارم ایده‌های
            ساده را به تجربه‌های دیجیتال زیبا، سریع و کاربردی تبدیل کنم.
            هر پروژه برای من فرصتی است برای یادگیری، تجربه کردن و بهتر شدن.
          </p>

          <p className="mt-6 text-base leading-8 text-[#f3f0e8]/60 md:text-lg md:leading-9">
            تمرکز من روی ترکیب طراحی، کدنویسی و جزئیات تعاملی است تا نتیجه
            نهایی فقط یک صفحه وب نباشد؛ بلکه تجربه‌ای باشد که کاربر آن را
            به خاطر بسپارد.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-20 grid border-t border-[#f3f0e8]/10 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, index) => (
            <div
              key={point.number}
              className={`group border-b border-[#f3f0e8]/10 py-8 transition-all duration-700 ease-out sm:border-r sm:px-6 lg:border-b-0 lg:px-8 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible
                  ? `${450 + index * 120}ms`
                  : "0ms",
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#b8bd62]">
                  {point.number}
                </span>

                <span className="text-xl font-light text-[#f3f0e8]/30 transition-all duration-500 group-hover:rotate-45 group-hover:text-[#b8bd62]">
                  +
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-medium transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                {point.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div
        className={`pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#b8bd62]/5 blur-[120px] transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </section>
  );
}