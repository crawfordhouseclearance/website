"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const run = () => {
      const section = sectionRef.current;
      const content = contentRef.current;
      if (!section || !content) return;
      const vh = typeof window !== "undefined" ? window.innerHeight : 0;
      const sectionRect = section.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const contentScrollH = content.scrollHeight;
      const sectionClientH = section.clientHeight;
      const exceeds = contentScrollH > sectionClientH;
      const contentBottomPastSection = contentRect.bottom > sectionRect.bottom + 0.5;
      const alignItems = getComputedStyle(section).alignItems;
      const isMobile =
        typeof window !== "undefined" ? window.matchMedia("(max-width: 767px)").matches : false;
      // #region agent log
      fetch("http://127.0.0.1:7522/ingest/5a67757b-9c88-4743-9fdd-c513f0047a20", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Debug-Session-Id": "252f0f",
        },
        body: JSON.stringify({
          sessionId: "252f0f",
          location: "Hero.tsx:useEffect",
          message: "hero layout measure",
          data: {
            vh,
            sectionH: sectionRect.height,
            sectionClientH,
            contentScrollH,
            exceeds,
            delta: contentScrollH - sectionClientH,
            isMobile,
            alignItems,
            contentBottomPastSection,
            contentTop: contentRect.top,
            sectionTop: sectionRect.top,
          },
          timestamp: Date.now(),
          runId: "post-fix",
          hypothesisId: exceeds ? "A" : "A-ok",
        }),
      }).catch(() => {});
      // #endregion
    };
    run();
    window.addEventListener("resize", run);
    return () => window.removeEventListener("resize", run);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-[72vh] md:min-h-0 md:h-[60vh] flex items-start md:items-center justify-center md:justify-start texture-overlay px-6 sm:px-8 md:pl-16 lg:pl-24 md:pr-10 pt-8 pb-14 md:py-0"
    >

      {/* Background Image */}
      <img
        src="/images/web/approved-hero.webp"
        className="absolute inset-0 w-full h-full object-cover object-center sm:object-[50%_50%] brightness-[0.93] saturate-[0.9]"
        alt=""
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/28 to-transparent" />

      {/* Hero Content */}
      <div
        ref={contentRef}
        className="relative w-full max-w-md mx-auto md:mx-0 md:ml-12 lg:ml-20 md:max-w-xl text-center md:text-left antialiased"
      >

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight drop-shadow-sm">
          Probate, Domestic & Commercial Clearances
        </h1>

        <p className="mt-3 md:mt-5 text-text-main text-base md:text-lg leading-relaxed drop-shadow-sm">
          Across Falkirk, Stirling and Central Scotland, with clear pricing agreed upfront.
        </p>

        <div className="mt-4 md:mt-7 flex justify-center md:justify-start">
          <a
            href="#contact"
            className="inline-block bg-cta text-brand-deep px-6 py-3 rounded-lg font-medium shadow-xl shadow-black/50 ring-2 ring-white/35 hover:bg-cta-hover hover:shadow-2xl hover:shadow-black/60 hover:ring-white/50 transition-[background-color,box-shadow,ring-color,ring-opacity] duration-200"
          >
            Get a Quote
          </a>
        </div>

        <ul className="mt-5 md:mt-8 flex flex-wrap justify-center md:justify-start gap-x-4 md:gap-x-5 gap-y-1.5 md:gap-y-2 text-sm text-white/75 list-none px-0">
          <li>✓ Fully Insured</li>
          <li>✓ SEPA Registered Waste Carrier</li>
          <li>✓ Waste Transfer Notes Provided</li>
          <li>✓ Local & Reliable</li>
        </ul>

      </div>

    </section>
  )
}