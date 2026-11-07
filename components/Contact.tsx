"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "ارسال پیام ناموفق بود.");
      }

      setStatus("پیام شما با موفقیت ارسال شد.");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("ارسال پیام با مشکل مواجه شد.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#10100f] px-6 py-32 text-[#f3f0e8] md:px-10 md:py-44"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div
          className={`max-w-4xl transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#b8bd62]">
            Contact
          </p>

          <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-8xl">
            شروع یک
            <br />
            پروژه.
          </h2>

          <p className="mt-8 max-w-xl text-base leading-7 text-[#f3f0e8]/55 md:text-lg">
            ایده‌ای داری؟ درباره پروژه‌ات بگو تا با هم آن را به یک تجربه
            دیجیتال تبدیل کنیم.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`mt-20 max-w-3xl transition-all delay-200 duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          {/* Name + Email */}
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-3 block text-sm text-[#f3f0e8]/45"
              >
                نام
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="نام شما"
                className="w-full border-b border-[#f3f0e8]/20 bg-transparent px-0 py-4 text-base outline-none transition-all duration-500 placeholder:text-[#f3f0e8]/20 focus:border-[#b8bd62] focus:pl-2"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-3 block text-sm text-[#f3f0e8]/45"
              >
                ایمیل
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full border-b border-[#f3f0e8]/20 bg-transparent px-0 py-4 text-base outline-none transition-all duration-500 placeholder:text-[#f3f0e8]/20 focus:border-[#b8bd62] focus:pl-2"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-10">
            <label
              htmlFor="message"
              className="mb-3 block text-sm text-[#f3f0e8]/45"
            >
              درباره پروژه
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="کمی درباره ایده یا پروژه‌تان بنویسید..."
              className="w-full resize-none border-b border-[#f3f0e8]/20 bg-transparent px-0 py-4 text-base leading-7 outline-none transition-all duration-500 placeholder:text-[#f3f0e8]/20 focus:border-[#b8bd62] focus:pl-2"
            />
          </div>

          {/* Button */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <button
              type="submit"
              disabled={isSending}
              className="group inline-flex items-center gap-3 rounded-full bg-[#b8bd62] px-7 py-3.5 text-sm font-medium text-[#10100f] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(184,189,98,0.15)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSending ? "در حال ارسال..." : "ارسال درخواست"}

              {!isSending && (
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              )}
            </button>

            {status && (
              <p className="animate-pulse text-sm text-[#b8bd62]">
                {status}
              </p>
            )}
          </div>
        </form>
      </div>

      {/* Glow */}
      <div
        className={`pointer-events-none absolute -left-40 top-1/3 h-[550px] w-[550px] rounded-full bg-[#b8bd62]/5 blur-[130px] transition-all duration-[1500ms] ${
          isVisible
            ? "scale-100 opacity-100"
            : "scale-75 opacity-0"
        }`}
      />
    </section>
  );
}