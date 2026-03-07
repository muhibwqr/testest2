"use client";

import { Archivo_Black, DM_Sans } from "next/font/google";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm",
});

export default function Page() {
  return (
    <main
      className={`${archivoBlack.variable} ${dmSans.variable} min-h-screen bg-[#FFFFFF] text-[#0D0D0D]`}
      style={{ fontFamily: "var(--font-dm), sans-serif" }}
    >
      {/* Top black rule */}
      <div className="w-full h-[3px] bg-[#0D0D0D]" />

      {/* Nav */}
      <nav className="w-full border-b border-[#E0E0DC] px-6 md:px-12 py-4 flex items-center justify-between">
        <span
          className="text-[#0D0D0D] text-lg tracking-tight"
          style={{ fontFamily: "var(--font-archivo), sans-serif" }}
        >
          muhibs busoness
        </span>
        <div className="flex items-center gap-6">
          <span className="hidden md:block text-sm text-[#5A5A5A] cursor-default">For Enterprise</span>
          <span className="hidden md:block text-sm text-[#5A5A5A] cursor-default">API</span>
          <span className="hidden md:block text-sm text-[#5A5A5A] cursor-default">Sign In</span>
          <a
            href="https://whop.com"
            className="bg-[#0D0D0D] text-white text-sm px-5 py-2.5 font-medium transition-colors duration-200 hover:bg-[#D42B1E]"
            style={{ fontFamily: "var(--font-dm), sans-serif" }}
          >
            Get started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 md:px-12 pt-16 md:pt-24 pb-12 md:pb-20">
        {/* Toggle pill */}
        <div className="flex items-center border border-[#E0E0DC] rounded-full overflow-hidden mb-10 md:mb-14">
          <span
            className="px-5 py-2 text-sm bg-[#0D0D0D] text-white"
            style={{ fontFamily: "var(--font-dm), sans-serif" }}
          >
            Launch
          </span>
          <span
            className="px-5 py-2 text-sm text-[#5A5A5A]"
            style={{ fontFamily: "var(--font-dm), sans-serif" }}
          >
            Discover
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-[clamp(52px,10vw,108px)] leading-[0.92] tracking-tight text-[#0D0D0D] max-w-4xl mb-6 md:mb-8"
          style={{ fontFamily: "var(--font-archivo), sans-serif" }}
        >
          Where Data{" "}
          <span
            className="relative inline-block"
            style={{
              textDecoration: "underline",
              textDecorationColor: "#D42B1E",
              textDecorationThickness: "4px",
              textUnderlineOffset: "6px",
            }}
          >
            Meets
          </span>{" "}
          Design.
        </h1>

        {/* Subhead */}
        <p
          className="text-[#5A5A5A] text-base md:text-lg max-w-xl leading-relaxed mb-10 md:mb-12"
          style={{ fontFamily: "var(--font-dm), sans-serif", fontWeight: 400 }}
        >
          Landing pages that learn from every click — built fast, refined by real performance data, and deployed before your competition catches up.
        </p>

        {/* Prompt / CTA box */}
        <div
          className="w-full max-w-2xl border border-[#E0E0DC] bg-[#F4F4F2] flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-3"
          style={{ borderRadius: "2px" }}
        >
          <input
            type="text"
            placeholder="Describe your landing page..."
            className="flex-1 bg-transparent text-[#0D0D0D] placeholder-[#5A5A5A] text-sm px-3 py-2 outline-none"
            style={{ fontFamily: "var(--font-dm), sans-serif" }}
          />
          <a
            href="https://whop.com"
            className="bg-[#0D0D0D] text-white text-sm font-medium px-6 py-3 whitespace-nowrap transition-colors duration-200 hover:bg-[#D42B1E] text-center"
            style={{ fontFamily: "var(--font-dm), sans-serif" }}
          >
            Get started
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-12 md:mt-16 w-full max-w-2xl">
          <div className="w-full h-px bg-[#E0E0DC] mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 sm:divide-x sm:divide-[#E0E0DC]">
            <div className="sm:px-8 text-center">
              <span
                className="text-2xl md:text-3xl text-[#0D0D0D] block"
                style={{ fontFamily: "var(--font-archivo), sans-serif" }}
              >
                $2.8M+
              </span>
              <span className="text-xs text-[#5A5A5A] uppercase tracking-widest mt-1 block">revenue generated</span>
            </div>
            <div className="sm:px-8 text-center">
              <span
                className="text-2xl md:text-3xl text-[#0D0D0D] block"
                style={{ fontFamily: "var(--font-archivo), sans-serif" }}
              >
                22,000+
              </span>
              <span className="text-xs text-[#5A5A5A] uppercase tracking-widest mt-1 block">users served</span>
            </div>
            <div className="sm:px-8 text-center">
              <span
                className="text-2xl md:text-3xl text-[#0D0D0D] block"
                style={{ fontFamily: "var(--font-archivo), sans-serif" }}
              >
                2,400+
              </span>
              <span className="text-xs text-[#5A5A5A] uppercase tracking-widest mt-1 block">pages launched</span>
            </div>
          </div>
          <div className="w-full h-px bg-[#E0E0DC] mt-6" />
        </div>
      </section>

      {/* Getting started section */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-[#F4F4F2]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <h2
              className="text-[clamp(32px,5vw,56px)] leading-tight text-[#0D0D0D] max-w-lg"
              style={{ fontFamily: "var(--font-archivo), sans-serif" }}
            >
              Getting started
            </h2>
            <p className="text-[#5A5A5A] text-sm max-w-xs" style={{ fontFamily: "var(--font-dm), sans-serif" }}>
              Three steps from idea to live, converting page.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E0E0DC]">
            {[
              {
                num: "01",
                title: "Launch in hours",
                desc: "Production-ready pages from day one. No waiting, no bottlenecks — your page is live before the competition blinks.",
                icon: "⚡",
              },
              {
                num: "02",
                title: "Data-backed design",
                desc: "Every design decision is backed by live conversion data. We don't guess — we measure, then refine.",
                icon: "📊",
              },
              {
                num: "03",
                title: "Continuous iteration",
                desc: "Results compound over time. Each iteration builds on the last, turning good pages into great ones.",
                icon: "🔁",
              },
            ].map((item) => (
              <div key={item.num} className="bg-[#FFFFFF] p-8 md:p-10">
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="text-[#D42B1E] text-sm font-medium"
                    style={{ fontFamily: "var(--font-archivo), sans-serif" }}
                  >
                    {item.num}
                  </span>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3
                  className="text-xl md:text-2xl text-[#0D0D0D] mb-3"
                  style={{ fontFamily: "var(--font-archivo), sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed" style={{ fontFamily: "var(--font-dm), sans-serif" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-[clamp(28px,4vw,52px)] leading-tight text-white mb-3"
              style={{ fontFamily: "var(--font-archivo), sans-serif" }}
            >
              Build smarter.
              <br />
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#D42B1E",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "5px",
                }}
              >
                Convert faster.
              </span>
            </h2>
            <p className="text-[#5A5A5A] text-sm max-w-sm" style={{ fontFamily: "var(--font-dm), sans-serif" }}>
              Join 22,000+ users who trust muhibs busoness to turn data into design that converts.
            </p>
          </div>
          <a
            href="https://whop.com"
            className="flex-shrink-0 bg-[#D42B1E] text-white text-base font-medium px-10 py-4 transition-colors duration-200 hover:bg-white hover:text-[#0D0D0D]"
            style={{ fontFamily: "var(--font-dm), sans-serif" }}
          >
            Get started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E0E0DC] px-6 md:px-12 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span
            className="text-[#0D0D0D] text-sm"
            style={{ fontFamily: "var(--font-archivo), sans-serif" }}
          >
            muhibs busoness
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#5A5A5A]" style={{ fontFamily: "var(--font-dm), sans-serif" }}>
            <span>How it works</span>
            <span>Mission</span>
            <span>Press</span>
            <span>Brand</span>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Status</span>
          </div>
          <span className="text-xs text-[#5A5A5A]" style={{ fontFamily: "var(--font-dm), sans-serif" }}>
            © 2024 muhibs busoness
          </span>
        </div>
      </footer>
    </main>
  );
}
