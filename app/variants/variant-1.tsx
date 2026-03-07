"use client";

import { Bebas_Neue, Manrope } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function Page() {
  return (
    <div
      className={`${bebas.variable} ${manrope.variable} min-h-screen relative overflow-hidden`}
      style={{
        backgroundColor: "#0A0A0B",
        fontFamily: "var(--font-manrope), sans-serif",
      }}
    >
      {/* Grain overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          opacity: 0.04,
        }}
      />

      {/* Radial spotlight */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "700px",
          background:
            "radial-gradient(ellipse at center, rgba(232,41,28,0.18) 0%, rgba(232,41,28,0.06) 35%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* NAV */}
        <nav
          style={{
            borderBottom: "1px solid #1E1E24",
            backgroundColor: "rgba(10,10,11,0.85)",
            backdropFilter: "blur(12px)",
          }}
          className="sticky top-0"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: 28,
                  height: 28,
                  background: "#E8291C",
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7L6 11L12 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span
                style={{
                  color: "#F5F5F0",
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 700,
                  fontSize: 15,
                  letterSpacing: "-0.01em",
                }}
              >
                muhibs busoness
              </span>
            </div>

            {/* Nav right */}
            <div className="flex items-center gap-4">
              <span
                style={{
                  color: "#6B6B72",
                  fontSize: 13,
                  fontFamily: "var(--font-manrope)",
                }}
                className="hidden sm:inline"
              >
                For Enterprise
              </span>
              <span
                style={{
                  color: "#6B6B72",
                  fontSize: 13,
                  fontFamily: "var(--font-manrope)",
                }}
                className="hidden sm:inline"
              >
                API
              </span>
              <span
                style={{
                  color: "#F5F5F0",
                  fontSize: 13,
                  fontFamily: "var(--font-manrope)",
                }}
                className="hidden sm:inline"
              >
                Sign In
              </span>
              <a
                href="https://whop.com"
                style={{
                  backgroundColor: "#E8291C",
                  color: "#F5F5F0",
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 700,
                  fontSize: 13,
                  padding: "7px 16px",
                  borderRadius: 8,
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#c92216")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#E8291C")}
              >
                Get started
              </a>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="flex flex-col items-center text-center px-4 sm:px-6 pt-16 pb-10 sm:pt-24 sm:pb-14">
          {/* Toggle pill */}
          <div
            style={{
              display: "inline-flex",
              backgroundColor: "#111114",
              border: "1px solid #1E1E24",
              borderRadius: 999,
              padding: "4px",
              marginBottom: 40,
              gap: 2,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: 13,
                fontWeight: 600,
                color: "#F5F5F0",
                backgroundColor: "#1E1E24",
                borderRadius: 999,
                padding: "5px 18px",
              }}
            >
              Launch
            </span>
            <span
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: 13,
                fontWeight: 500,
                color: "#6B6B72",
                padding: "5px 18px",
              }}
            >
              Discover
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-bebas)",
              color: "#F5F5F0",
              lineHeight: 0.92,
              letterSpacing: "0.02em",
              marginBottom: 24,
              maxWidth: 760,
            }}
            className="text-6xl sm:text-8xl md:text-[108px] lg:text-[128px]"
          >
            Where Data
            <br />
            <span style={{ color: "#E8291C" }}>Meets</span> Design.
          </h1>

          {/* Subhead */}
          <p
            style={{
              fontFamily: "var(--font-manrope)",
              color: "#6B6B72",
              maxWidth: 520,
              lineHeight: 1.65,
              marginBottom: 40,
            }}
            className="text-sm sm:text-base md:text-lg"
          >
            Landing pages that learn from every click — built fast, refined by real performance data, and deployed before your competition catches up.
          </p>

          {/* Prompt / CTA box */}
          <div
            style={{
              width: "100%",
              maxWidth: 580,
              backgroundColor: "#111114",
              border: "1px solid #1E1E24",
              borderRadius: 16,
              padding: "20px 20px 16px 20px",
              boxShadow: "0 0 0 1px rgba(232,41,28,0.08), 0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.03)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-manrope)",
                color: "#6B6B72",
                fontSize: 15,
                textAlign: "left",
                marginBottom: 16,
                lineHeight: 1.5,
              }}
            >
              Build a high-converting landing page for my SaaS...
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    border: "1px solid #1E1E24",
                    backgroundColor: "#0A0A0B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke="#6B6B72" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span style={{ color: "#6B6B72", fontSize: 12, fontFamily: "var(--font-manrope)" }}>Attach brief</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    border: "1px solid #1E1E24",
                    backgroundColor: "#0A0A0B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1C3.24 1 1 3.24 1 6s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill="#6B6B72" />
                  </svg>
                </div>
                <a
                  href="https://whop.com"
                  style={{
                    backgroundColor: "#E8291C",
                    color: "#F5F5F0",
                    fontFamily: "var(--font-manrope)",
                    fontWeight: 700,
                    fontSize: 13,
                    padding: "7px 18px",
                    borderRadius: 8,
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#c92216")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#E8291C")}
                >
                  Get started
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 mt-10"
            style={{
              fontFamily: "var(--font-manrope)",
            }}
          >
            {[
              { num: "$2.8M+", label: "revenue generated" },
              { num: "22,000+", label: "users served" },
              { num: "2,400+", label: "pages launched" },
            ].map((stat, i) => (
              <>
                <div key={stat.num} className="flex items-center gap-2">
                  <span
                    style={{
                      fontFamily: "var(--font-bebas)",
                      color: "#F5F5F0",
                      fontSize: 20,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {stat.num}
                  </span>
                  <span style={{ color: "#6B6B72", fontSize: 13 }}>{stat.label}</span>
                </div>
                {i < 2 && (
                  <span
                    key={`sep-${i}`}
                    style={{ color: "#1E1E24", margin: "0 16px", fontSize: 18 }}
                    className="hidden sm:inline"
                  >
                    ·
                  </span>
                )}
              </>
            ))}
          </div>
        </section>

        {/* GETTING STARTED SECTION */}
        <section
          style={{
            borderTop: "1px solid #1E1E24",
            padding: "64px 0",
          }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <p
              style={{
                fontFamily: "var(--font-manrope)",
                color: "#6B6B72",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 32,
              }}
            >
              Getting started
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: "⚡",
                  title: "Launch in hours",
                  desc: "Production-ready pages from day one — no waiting, no bloat.",
                },
                {
                  icon: "📊",
                  title: "Data-backed design",
                  desc: "Every layout decision is informed by live conversion metrics.",
                },
                {
                  icon: "🔁",
                  title: "Continuous iteration",
                  desc: "Results compound over time as pages learn and improve.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    backgroundColor: "#111114",
                    border: "1px solid #1E1E24",
                    borderRadius: 12,
                    padding: "24px",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(232,41,28,0.3)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1E1E24")}
                >
                  <div style={{ fontSize: 24, marginBottom: 12 }}>{item.icon}</div>
                  <h3
                    style={{
                      fontFamily: "var(--font-manrope)",
                      color: "#F5F5F0",
                      fontWeight: 700,
                      fontSize: 15,
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-manrope)",
                      color: "#6B6B72",
                      fontSize: 13,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section
          style={{
            borderTop: "1px solid #1E1E24",
            padding: "80px 0",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "-20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "600px",
              height: "400px",
              background:
                "radial-gradient(ellipse at center, rgba(232,41,28,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div className="max-w-2xl mx-auto px-4 sm:px-6" style={{ position: "relative" }}>
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                color: "#F5F5F0",
                fontSize: 64,
                letterSpacing: "0.03em",
                lineHeight: 0.95,
                marginBottom: 16,
              }}
              className="text-5xl sm:text-6xl md:text-7xl"
            >
              Build smarter.
              <br />
              <span style={{ color: "#E8291C" }}>Convert faster.</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-manrope)",
                color: "#6B6B72",
                fontSize: 15,
                lineHeight: 1.65,
                marginBottom: 32,
              }}
            >
              Join thousands of founders who ship landing pages that actually convert.
            </p>
            <a
              href="https://whop.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#E8291C",
                color: "#F5F5F0",
                fontFamily: "var(--font-manrope)",
                fontWeight: 700,
                fontSize: 15,
                padding: "14px 32px",
                borderRadius: 10,
                textDecoration: "none",
                transition: "background 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#c92216";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#E8291C";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Get started
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          style={{
            borderTop: "1px solid #1E1E24",
            padding: "28px 0",
          }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: 22,
                  height: 22,
                  background: "#E8291C",
                  borderRadius: 5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7L6 11L12 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span
                style={{
                  color: "#6B6B72",
                  fontFamily: "var(--font-manrope)",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                muhibs busoness
              </span>
            </div>
            <div className="flex items-center gap-5 flex-wrap justify-center">
              {["How it works", "Mission", "Press", "Brand", "Privacy", "Terms", "Status"].map((item) => (
                <span
                  key={item}
                  style={{
                    color: "#6B6B72",
                    fontFamily: "var(--font-manrope)",
                    fontSize: 12,
                    cursor: "default",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {[
                {
                  label: "YouTube",
                  path: "M10 7L6 4.5v5L10 7zm-8 5V2h12v10H2z",
                },
                {
                  label: "X",
                  path: "M2 2l10 10M12 2L2 12",
                },
                {
                  label: "Instagram",
                  path: "M3 3h8v8H3zM9 7a2 2 0 11-4 0 2 2 0 014 0z",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 7,
                    border: "1px solid #1E1E24",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "default",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d={s.path} stroke="#6B6B72" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
