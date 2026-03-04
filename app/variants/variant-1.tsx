"use client";

import { Bebas_Neue, Manrope } from 'next/font/google';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' });
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-manrope' });

export default function MuhibVariant1() {
  return (
    <div className={`${bebas.variable} ${manrope.variable} min-h-screen bg-[#0A0A0A] text-[#F5F5F0] relative overflow-x-hidden`}>
      {/* Grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.04,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#1A1A1A] -z-10" />

      {/* NAV */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 lg:px-16 py-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#E8202A] flex items-center justify-center rounded-sm">
            <span className="font-bebas text-white text-lg leading-none" style={{ fontFamily: 'var(--font-bebas)' }}>M</span>
          </div>
          <span className="font-bebas text-[#F5F5F0] text-2xl tracking-widest" style={{ fontFamily: 'var(--font-bebas)' }}>MUHIB</span>
        </div>
        <a
          href="https://win.co"
          className="bg-[#E8202A] hover:bg-[#c41a22] transition-colors duration-200 text-white font-semibold text-sm px-6 py-2.5 rounded-full"
          style={{ fontFamily: 'var(--font-manrope)' }}
        >
          Get started
        </a>
      </nav>

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 lg:px-16 pt-10 md:pt-16 pb-20 md:pb-28">
        {/* Diagonal red slash */}
        <div
          className="absolute left-0 top-0 w-full h-full pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div
            style={{
              position: 'absolute',
              top: '10%',
              left: '-5%',
              width: '55%',
              height: '6px',
              background: '#E8202A',
              transform: 'rotate(-8deg)',
              opacity: 0.85,
              borderRadius: '2px',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 'calc(10% + 18px)',
              left: '-5%',
              width: '40%',
              height: '2px',
              background: '#E8202A',
              transform: 'rotate(-8deg)',
              opacity: 0.3,
              borderRadius: '2px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-8">
          {/* Left: Headline + CTA */}
          <div className="flex-1 relative">
            <div className="mb-3">
              <span
                className="text-[#E8202A] text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ fontFamily: 'var(--font-manrope)' }}
              >
                Sales Infrastructure
              </span>
            </div>
            <h1
              className="font-bebas leading-none tracking-wide text-[#F5F5F0]"
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(72px, 12vw, 160px)',
                lineHeight: 0.92,
              }}
            >
              WE BUILD
              <br />
              <span className="text-[#E8202A]">PIPELINES</span>
              <br />
              THAT CONVERT
            </h1>

            <p
              className="mt-8 text-[#8A8A8A] text-base md:text-lg leading-relaxed max-w-xl"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Muhib engineers end-to-end sales systems — from cold outreach to closed deals — so your team stops guessing and starts winning.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="https://win.co"
                className="inline-flex items-center gap-2 bg-[#E8202A] hover:bg-[#c41a22] active:scale-95 transition-all duration-200 text-white font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-red-900/30"
                style={{ fontFamily: 'var(--font-manrope)' }}
              >
                Get started
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <span className="text-[#8A8A8A] text-sm" style={{ fontFamily: 'var(--font-manrope)' }}>No retainers. No guesswork.</span>
            </div>
          </div>

          {/* Right: Floating pipeline card */}
          <div className="flex-shrink-0 lg:w-[420px] flex flex-col gap-4">
            {/* Main metric card */}
            <div
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: '#161616',
                border: '1px solid #2a2a2a',
                boxShadow: '0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(232,32,42,0.08)',
                borderLeft: '3px solid #E8202A',
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[#8A8A8A] text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: 'var(--font-manrope)' }}>Pipeline Overview</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E8202A] animate-pulse" />
                  <span className="text-[#E8202A] text-xs font-semibold" style={{ fontFamily: 'var(--font-manrope)' }}>Live</span>
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <div className="font-bebas text-5xl text-[#F5F5F0] leading-none" style={{ fontFamily: 'var(--font-bebas)' }}>47</div>
                  <div className="text-[#8A8A8A] text-xs mt-1" style={{ fontFamily: 'var(--font-manrope)' }}>Deals closed this month</div>
                </div>
                <div>
                  <div className="font-bebas text-5xl text-[#E8202A] leading-none" style={{ fontFamily: 'var(--font-bebas)' }}>$2.3M</div>
                  <div className="text-[#8A8A8A] text-xs mt-1" style={{ fontFamily: 'var(--font-manrope)' }}>Pipeline value</div>
                </div>
              </div>
              {/* Mini bar chart */}
              <div className="flex items-end gap-1.5 h-12">
                {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${h}%`,
                      background: i === 11 ? '#E8202A' : i > 8 ? 'rgba(232,32,42,0.4)' : '#2a2a2a',
                      transition: 'height 0.3s ease',
                    }}
                  />
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[#8A8A8A] text-xs" style={{ fontFamily: 'var(--font-manrope)' }}>Last 12 weeks</span>
                <span className="text-[#E8202A] text-xs font-semibold" style={{ fontFamily: 'var(--font-manrope)' }}>↑ 34% vs prior period</span>
              </div>
            </div>

            {/* Secondary cards row */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-xl p-4"
                style={{ background: '#161616', border: '1px solid #2a2a2a' }}
              >
                <div className="font-bebas text-3xl text-[#F5F5F0]" style={{ fontFamily: 'var(--font-bebas)' }}>312</div>
                <div className="text-[#8A8A8A] text-xs mt-0.5" style={{ fontFamily: 'var(--font-manrope)' }}>Qualified leads</div>
                <div className="text-[#E8202A] text-xs font-semibold mt-1" style={{ fontFamily: 'var(--font-manrope)' }}>↑ 18%</div>
              </div>
              <div
                className="rounded-xl p-4"
                style={{ background: '#161616', border: '1px solid #2a2a2a' }}
              >
                <div className="font-bebas text-3xl text-[#F5F5F0]" style={{ fontFamily: 'var(--font-bebas)' }}>68%</div>
                <div className="text-[#8A8A8A] text-xs mt-0.5" style={{ fontFamily: 'var(--font-manrope)' }}>Call show rate</div>
                <div className="text-[#E8202A] text-xs font-semibold mt-1" style={{ fontFamily: 'var(--font-manrope)' }}>↑ 12%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP / SOCIAL PROOF */}
      <section className="relative z-10 border-t border-[#1E1E1E] py-10 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[#8A8A8A] text-xs tracking-[0.2em] uppercase mb-8" style={{ fontFamily: 'var(--font-manrope)' }}>Trusted by growth-stage teams</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {['Acme Corp', 'Vertex AI', 'Northstar', 'Cascade', 'Luminary'].map((name) => (
              <span
                key={name}
                className="text-[#2E2E2E] font-bold text-lg tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.15em' }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-10 px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-start md:items-center mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-[#E8202A] to-transparent" />
            <span className="font-bebas text-[#E8202A] text-sm tracking-[0.3em] px-4" style={{ fontFamily: 'var(--font-bebas)' }}>HOW IT WORKS</span>
            <div className="h-px flex-1 bg-gradient-to-l from-[#E8202A] to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Niche-Targeted Prospecting',
                body: 'Puts you in front of buyers who are ready — not random lists that waste your team\'s time.',
              },
              {
                num: '02',
                title: 'Conversion-Engineered Sequences',
                body: 'Turn cold leads into booked calls with messaging built around psychology, not templates.',
              },
              {
                num: '03',
                title: 'Pipeline Infrastructure',
                body: 'Built to scale without adding headcount — systems that compound as your business grows.',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="rounded-2xl p-8 group hover:border-[#E8202A] transition-colors duration-300"
                style={{
                  background: '#161616',
                  border: '1px solid #2a2a2a',
                }}
              >
                <div
                  className="font-bebas text-6xl leading-none mb-6 group-hover:text-[#E8202A] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-bebas)', color: '#2a2a2a' }}
                >
                  {item.num}
                </div>
                <h3
                  className="font-bebas text-2xl text-[#F5F5F0] mb-3 tracking-wide"
                  style={{ fontFamily: 'var(--font-bebas)' }}
                >
                  {item.title}
                </h3>
                <p className="text-[#8A8A8A] text-sm leading-relaxed" style={{ fontFamily: 'var(--font-manrope)' }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative z-10 px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-2xl px-8 md:px-16 py-14 md:py-20 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1A0A0A 0%, #1A1A1A 100%)',
              border: '1px solid #2a2a2a',
            }}
          >
            {/* Decorative diagonal */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(232,32,42,0.12) 0%, transparent 70%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '30%',
                  right: '10%',
                  width: '200px',
                  height: '3px',
                  background: '#E8202A',
                  transform: 'rotate(-8deg)',
                  opacity: 0.6,
                  borderRadius: '2px',
                }}
              />
            </div>

            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2
                  className="font-bebas leading-none text-[#F5F5F0] mb-4"
                  style={{
                    fontFamily: 'var(--font-bebas)',
                    fontSize: 'clamp(40px, 6vw, 80px)',
                  }}
                >
                  READY TO STOP
                  <br />
                  <span className="text-[#E8202A]">LEAVING DEALS</span>
                  <br />
                  ON THE TABLE?
                </h2>
                <p className="text-[#8A8A8A] text-base" style={{ fontFamily: 'var(--font-manrope)' }}>
                  Let's build a pipeline that actually closes.
                </p>
              </div>
              <a
                href="https://win.co"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-[#E8202A] hover:bg-[#c41a22] active:scale-95 transition-all duration-200 text-white font-bold text-base px-10 py-5 rounded-full shadow-xl shadow-red-900/40"
                style={{ fontFamily: 'var(--font-manrope)' }}
              >
                Get started
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-[#1E1E1E] px-6 md:px-12 lg:px-16 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#E8202A] flex items-center justify-center rounded-sm">
              <span className="font-bebas text-white text-sm leading-none" style={{ fontFamily: 'var(--font-bebas)' }}>M</span>
            </div>
            <span className="font-bebas text-[#F5F5F0] text-xl tracking-widest" style={{ fontFamily: 'var(--font-bebas)' }}>MUHIB</span>
          </div>
          <p className="text-[#8A8A8A] text-xs" style={{ fontFamily: 'var(--font-manrope)' }}>
            © {new Date().getFullYear()} Muhib. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}