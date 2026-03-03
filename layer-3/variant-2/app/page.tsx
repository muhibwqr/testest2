"use client";
import { Playfair_Display, Source_Sans_3, Bebas_Neue } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"], style: ["normal", "italic"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export default function Page() {
  return (
    <div className={`${sourceSans.className} min-h-screen`} style={{ backgroundColor: "#F8F6F1", color: "#111111" }}>
      {/* Grain overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.025,
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />

      {/* NAV */}
      <nav
        style={{ borderBottom: "1px solid #E0DDD6", backgroundColor: "#F8F6F1" }}
        className="sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              style={{ backgroundColor: "#C8102E", width: 8, height: 28 }}
              className="hidden sm:block"
            />
            <span
              className={`${playfair.className} text-xl font-bold tracking-tight`}
              style={{ color: "#111111" }}
            >
              muhibwaqar
            </span>
          </div>
          <a
            href="https://muhibwaqar.copm"
            className="inline-block text-sm font-semibold tracking-widest uppercase px-6 py-2.5 transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: "#C8102E",
              color: "#FFFFFF",
              letterSpacing: "0.12em",
            }}
          >
            Get started
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-0">
        {/* Issue line */}
        <div
          className="flex items-center gap-4 mb-8"
          style={{ borderTop: "2px solid #111111", paddingTop: "12px" }}
        >
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#888880" }}
          >
            B2B SaaS Growth
          </span>
          <div style={{ flex: 1, height: 1, backgroundColor: "#E0DDD6" }} />
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#888880" }}
          >
            Pipeline · Community · Growth
          </span>
        </div>

        {/* Two-column hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Headline + CTA */}
          <div className="relative">
            {/* Red stamp */}
            <div
              className="absolute -top-4 -left-2 z-10 hidden sm:flex items-center justify-center"
              style={{
                backgroundColor: "#C8102E",
                transform: "rotate(-3deg)",
                padding: "6px 14px",
              }}
            >
              <span
                className={`${bebas.className} text-white text-xl tracking-widest`}
                style={{ letterSpacing: "0.15em" }}
              >
                B2B PIPELINE
              </span>
            </div>

            <h1
              className={`${playfair.className} font-black leading-none mt-10 sm:mt-14`}
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                lineHeight: 1.05,
                color: "#111111",
              }}
            >
              Build the Pipeline
              <br />
              <em style={{ color: "#C8102E" }}>That Builds</em>
              <br />
              Itself
            </h1>

            {/* Thick rule */}
            <div
              style={{ width: "100%", height: 3, backgroundColor: "#111111", margin: "28px 0" }}
            />

            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: "#444440", maxWidth: 480, fontWeight: 300 }}
            >
              muhibwaqar works with B2B SaaS communities to turn relationships into repeatable revenue — strategy, systems, and execution in one place.
            </p>

            <a
              href="https://muhibwaqar.copm"
              className="inline-flex items-center gap-3 text-base font-semibold tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:gap-5"
              style={{
                backgroundColor: "#C8102E",
                color: "#FFFFFF",
                letterSpacing: "0.1em",
              }}
            >
              Get started
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <p
              className="mt-5 text-sm"
              style={{ color: "#888880" }}
            >
              Strategy, systems, and execution — in one place.
            </p>
          </div>

          {/* Right: Case study preview box */}
          <div
            className="relative mt-8 lg:mt-14"
            style={{
              border: "1.5px solid #1A1A1A",
              backgroundColor: "#FFFFFF",
            }}
          >
            {/* Box header */}
            <div
              style={{
                borderBottom: "1.5px solid #1A1A1A",
                backgroundColor: "#1A1A1A",
                padding: "10px 20px",
              }}
              className="flex items-center justify-between"
            >
              <span
                className={`${bebas.className} text-white tracking-widest text-sm`}
                style={{ letterSpacing: "0.2em" }}
              >
                PIPELINE VELOCITY REPORT
              </span>
              <span
                className="text-xs"
                style={{ color: "#888880" }}
              >
                Q4 2024
              </span>
            </div>

            <div className="p-6 md:p-8">
              {/* Metrics grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { label: "Pipeline Generated", value: "$2.4M", delta: "+38%" },
                  { label: "Deals Closed", value: "47", delta: "+22%" },
                  { label: "Avg. Deal Velocity", value: "18 days", delta: "-31%" },
                  { label: "Community Sourced", value: "73%", delta: "+15pts" },
                ].map((m) => (
                  <div key={m.label} style={{ borderLeft: "3px solid #C8102E", paddingLeft: 14 }}>
                    <div
                      className={`${playfair.className} font-bold`}
                      style={{ fontSize: "1.6rem", lineHeight: 1.1, color: "#111111" }}
                    >
                      {m.value}
                    </div>
                    <div
                      className="text-xs font-semibold mt-1"
                      style={{ color: "#C8102E" }}
                    >
                      {m.delta} YoY
                    </div>
                    <div
                      className="text-xs mt-1"
                      style={{ color: "#888880" }}
                    >
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini bar chart */}
              <div
                style={{ borderTop: "1px solid #E0DDD6", paddingTop: 20 }}
              >
                <div
                  className="text-xs font-semibold tracking-widest uppercase mb-4"
                  style={{ color: "#888880" }}
                >
                  Monthly Pipeline Growth
                </div>
                <div className="flex items-end gap-2" style={{ height: 64 }}>
                  {[30, 42, 38, 55, 62, 58, 75, 80, 72, 88, 92, 100].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        backgroundColor: i >= 9 ? "#C8102E" : "#E0DDD6",
                        transition: "height 0.3s",
                      }}
                    />
                  ))}
                </div>
                <div
                  className="flex justify-between text-xs mt-2"
                  style={{ color: "#888880" }}
                >
                  <span>Jan</span>
                  <span>Jun</span>
                  <span>Dec</span>
                </div>
              </div>

              {/* Quote */}
              <div
                style={{
                  borderTop: "1px solid #E0DDD6",
                  marginTop: 20,
                  paddingTop: 20,
                }}
              >
                <p
                  className={`${playfair.className} italic text-sm leading-relaxed`}
                  style={{ color: "#444440" }}
                >
                  &ldquo;Community-led growth isn&rsquo;t a channel — it&rsquo;s the compounding asset that makes every other channel work harder.&rdquo;
                </p>
                <p
                  className="text-xs mt-2 font-semibold"
                  style={{ color: "#888880" }}
                >
                  — muhibwaqar methodology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width red rule */}
      <div style={{ width: "100%", height: 4, backgroundColor: "#C8102E", marginTop: 64 }} />

      {/* FEATURE STRIP — newspaper layout */}
      <section style={{ backgroundColor: "#FFFFFF", borderBottom: "1.5px solid #1A1A1A" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Section header */}
          <div
            style={{
              borderBottom: "1.5px solid #1A1A1A",
              padding: "16px 0",
            }}
            className="flex items-center gap-4"
          >
            <span
              className={`${bebas.className} text-2xl tracking-widest`}
              style={{ color: "#111111", letterSpacing: "0.15em" }}
            >
              HOW IT WORKS
            </span>
            <div style={{ flex: 1, height: 1, backgroundColor: "#E0DDD6" }} />
            <span
              className="text-xs tracking-widest uppercase font-semibold"
              style={{ color: "#888880" }}
            >
              Three pillars
            </span>
          </div>

          {/* Three columns */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Community-Led Pipeline",
                body: "Community-led pipeline strategies that compound over time — turning relationships into a self-reinforcing revenue engine that grows with every interaction.",
                tag: "STRATEGY",
              },
              {
                number: "02",
                title: "Positioning & Outreach",
                body: "B2B SaaS positioning and outreach built for real conversion — messaging that resonates with buyers, not just audiences, and systems that scale without losing the human touch.",
                tag: "SYSTEMS",
              },
              {
                number: "03",
                title: "Hands-On Partnership",
                body: "Hands-on partnership from first touchpoint to closed deal — we work alongside your team at every stage, from pipeline architecture to deal execution and beyond.",
                tag: "EXECUTION",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="py-10 px-0 md:px-8"
                style={{
                  borderRight: i < 2 ? "1px solid #E0DDD6" : "none",
                  paddingLeft: i === 0 ? 0 : undefined,
                  paddingRight: i === 2 ? 0 : undefined,
                }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <span
                    className={`${playfair.className} font-black`}
                    style={{ fontSize: "3rem", lineHeight: 1, color: "#E0DDD6" }}
                  >
                    {item.number}
                  </span>
                  <div
                    style={{
                      backgroundColor: "#C8102E",
                      padding: "2px 8px",
                      alignSelf: "center",
                    }}
                  >
                    <span
                      className={`${bebas.className} text-white text-xs tracking-widest`}
                      style={{ letterSpacing: "0.2em" }}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>
                <h3
                  className={`${playfair.className} font-bold mb-4`}
                  style={{ fontSize: "1.35rem", lineHeight: 1.25, color: "#111111" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#444440", fontWeight: 300 }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO SECTION */}
      <section
        style={{ backgroundColor: "#1A1A1A" }}
        className="py-20 md:py-28"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-6"
                style={{ color: "#C8102E" }}
              >
                The muhibwaqar Approach
              </div>
              <h2
                className={`${playfair.className} font-black leading-tight mb-8`}
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "#F8F6F1",
                  lineHeight: 1.1,
                }}
              >
                Revenue that compounds.
                <br />
                <em style={{ color: "#C8102E" }}>Communities that convert.</em>
              </h2>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "#AAAAAA", fontWeight: 300, maxWidth: 540 }}
              >
                Most B2B SaaS companies treat community as a marketing afterthought. We treat it as the primary growth engine — building systems where every relationship, conversation, and touchpoint feeds directly into pipeline.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#AAAAAA", fontWeight: 300, maxWidth: 540 }}
              >
                The result isn&rsquo;t just more deals. It&rsquo;s a pipeline that builds itself — compounding month over month, quarter over quarter.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div
                style={{
                  border: "1px solid #333333",
                  backgroundColor: "#111111",
                  padding: "32px",
                }}
              >
                <div
                  className="text-xs font-semibold tracking-widest uppercase mb-6"
                  style={{ color: "#888880" }}
                >
                  What you get
                </div>
                {[
                  "Community-led pipeline strategies that compound over time",
                  "B2B SaaS positioning and outreach built for real conversion",
                  "Hands-on partnership from first touchpoint to closed deal",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 mb-6 last:mb-0"
                    style={{
                      paddingBottom: i < 2 ? 24 : 0,
                      borderBottom: i < 2 ? "1px solid #222222" : "none",
                    }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        backgroundColor: "#C8102E",
                        flexShrink: 0,
                        marginTop: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#CCCCCC", fontWeight: 300 }}
                    >
                      {item}
                    </p>
                  </div>
                ))}

                <div style={{ borderTop: "1px solid #333333", marginTop: 28, paddingTop: 28 }}>
                  <a
                    href="https://muhibwaqar.copm"
                    className="inline-flex items-center gap-3 text-sm font-semibold tracking-widest uppercase px-6 py-3.5 w-full justify-center transition-all duration-200 hover:opacity-90"
                    style={{
                      backgroundColor: "#C8102E",
                      color: "#FFFFFF",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Get started
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#F8F6F1",
          borderTop: "2px solid #111111",
        }}
        className="py-10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div style={{ backgroundColor: "#C8102E", width: 6, height: 22 }} />
                <span
                  className={`${playfair.className} text-lg font-bold`}
                  style={{ color: "#111111" }}
                >
                  muhibwaqar
                </span>
              </div>
              <p
                className="text-sm"
                style={{ color: "#888880", fontWeight: 300 }}
              >
                Pipeline. Community. Growth.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-1">
              <p
                className="text-xs"
                style={{ color: "#888880" }}
              >
                © 2024 muhibwaqar. All rights reserved.
              </p>
              <p
                className="text-xs"
                style={{ color: "#888880" }}
              >
                Working with communities to build and pipeline B2B SaaS growth.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}