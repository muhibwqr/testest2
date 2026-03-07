"use client";

import { Bebas_Neue, Manrope } from 'next/font/google';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export default function Page() {
  return (
    <main className={`${bebas.variable} ${manrope.variable} min-h-screen bg-[#0A0A0B] text-[#F5F5F0] relative overflow-x-hidden`}>
      {/* Grain overlay */}
      <div
        aria-hidden
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.04,
        }}
      />

      {/* Radial spotlight */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '700px',
          background: 'radial-gradient(ellipse at center, rgba(232,41,28,0.18) 0%, rgba(232,41,28,0.06) 35%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* NAV */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-5 border-b border-[#1E1E24]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-sm bg-[#E8291C] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7L6 11L12 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-[family-name:var(--font-manrope)] font-bold text-[#F5F5F0] text-base tracking-tight">muhibs busoness</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <span className="font-[family-name:var(--font-manrope)] text-sm text-[#6B6B72]">For Enterprise</span>
          <span className="font-[family-name:var(--font-manrope)] text-sm text-[#6B6B72]">API</span>
          <span className="font-[family-name:var(--font-manrope)] text-sm text-[#6B6B72]">Sign In</span>
        </div>
        <a
          href="https://whop.com"
          className="font-[family-name:var(--font-manrope)] font-semibold text-sm bg-[#E8291C] hover:bg-[#c9221a] text-white px-5 py-2.5 rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(232,41,28,0.3)]"
        >
          Get started
        </a>
      </nav>

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        {/* Toggle pill */}
        <div className="inline-flex items-center gap-1 bg-[#111114] border border-[#1E1E24] rounded-full px-1.5 py-1.5 mb-10">
          <span className="font-[family-name:var(--font-manrope)] text-sm font-semibold bg-[#F5F5F0] text-[#0A0A0B] px-4 py-1.5 rounded-full">Launch</span>
          <span className="font-[family-name:var(--font-manrope)] text-sm font-medium text-[#6B6B72] px-4 py-1.5">Discover</span>
        </div>

        {/* Headline */}
        <h1
          className="font-[family-name:var(--font-bebas)] leading-none tracking-wide text-[#F5F5F0] mb-6"
          style={{ fontSize: 'clamp(64px, 12vw, 140px)', lineHeight: '0.95' }}
        >
          Where Data<br />Meets Design.
        </h1>

        {/* Subhead */}
        <p className="font-[family-name:var(--font-manrope)] text-[#6B6B72] text-base md:text-lg max-w-xl leading-relaxed mb-10">
          Landing pages that learn from every click — built fast, refined by real performance data, and deployed before your competition catches up.
        </p>

        {/* Prompt / CTA box */}
        <div
          className="w-full max-w-2xl bg-[#111114] border border-[#1E1E24] rounded-2xl p-4 md:p-5 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
          style={{ boxShadow: '0 0 0 1px #1E1E24, 0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)' }}
        >
          <p className="font-[family-name:var(--font-manrope)] text-[#6B6B72] text-sm md:text-base text-left mb-4 px-1">
            Build a high-converting landing page...
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="w-8 h-8 rounded-lg bg-[#1E1E24] flex items-center justify-center text-[#6B6B72] hover:text-[#F5F5F0] transition-colors">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-lg bg-[#1E1E24] flex items-center justify-center text-[#6B6B72] hover:text-[#F5F5F0] transition-colors">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1C3.686 1 1 3.686 1 7s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 2.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 7.5a4.5 4.5 0 01-3.75-2.014C3.25 7.5 5.5 6.75 7 6.75s3.75.75 3.75 1.236A4.5 4.5 0 017 11z" fill="currentColor"/>
                </svg>
              </button>
              <a
                href="https://whop.com"
                className="w-8 h-8 rounded-lg bg-[#E8291C] hover:bg-[#c9221a] flex items-center justify-center transition-all duration-200 shadow-[0_0_16px_rgba(232,41,28,0.4)]"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mt-10 text-center">
          <div className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-bebas)] text-2xl text-[#F5F5F0] tracking-wide">$2.8M+</span>
            <span className="font-[family-name:var(--font-manrope)] text-sm text-[#6B6B72]">revenue generated</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-[#1E1E24]" />
          <div className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-bebas)] text-2xl text-[#F5F5F0] tracking-wide">22,000+</span>
            <span className="font-[family-name:var(--font-manrope)] text-sm text-[#6B6B72]">users served</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-[#1E1E24]" />
          <div className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-bebas)] text-2xl text-[#F5F5F0] tracking-wide">2,400+</span>
            <span className="font-[family-name:var(--font-manrope)] text-sm text-[#6B6B72]">pages launched</span>
          </div>
        </div>
      </section>

      {/* GETTING STARTED SECTION */}
      <section className="relative z-10 px-6 md:px-12 py-16 md:py-24 border-t border-[#1E1E24]">
        <div className="max-w-5xl mx-auto">
          <p className="font-[family-name:var(--font-manrope)] text-xs font-semibold tracking-[0.2em] uppercase text-[#E8291C] mb-4">How it works</p>
          <h2 className="font-[family-name:var(--font-bebas)] text-[#F5F5F0] mb-12 leading-none tracking-wide" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>Getting Started</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                num: '01',
                icon: '⚡',
                title: 'Launch in hours',
                desc: 'Production-ready pages from day one. No waiting, no back-and-forth. Your page goes live before your competition blinks.',
              },
              {
                num: '02',
                icon: '📊',
                title: 'Data-backed design',
                desc: 'Every design decision backed by live conversion data. We track what works and double down — no guesswork, ever.',
              },
              {
                num: '03',
                icon: '🔁',
                title: 'Continuous iteration',
                desc: 'Results compound over time. Each iteration improves on the last, building a conversion machine that gets smarter.',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-[#111114] border border-[#1E1E24] rounded-2xl p-6 md:p-8 group hover:border-[#E8291C]/30 transition-all duration-300"
                style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)' }}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-[family-name:var(--font-bebas)] text-5xl text-[#1E1E24] group-hover:text-[#E8291C]/20 transition-colors leading-none tracking-wide">{item.num}</span>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-[family-name:var(--font-manrope)] font-bold text-[#F5F5F0] text-lg mb-3">{item.title}</h3>
                <p className="font-[family-name:var(--font-manrope)] text-[#6B6B72] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 px-6 md:px-12 py-16 md:py-24 border-t border-[#1E1E24]">
        <div
          className="max-w-3xl mx-auto text-center rounded-3xl p-10 md:p-16 relative overflow-hidden"
          style={{
            background: '#111114',
            border: '1px solid #1E1E24',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
          }}
        >
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: '-50%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '600px',
              height: '400px',
              background: 'radial-gradient(ellipse at center, rgba(232,41,28,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <p className="font-[family-name:var(--font-manrope)] text-xs font-semibold tracking-[0.2em] uppercase text-[#E8291C] mb-4 relative z-10">Build smarter. Convert faster.</p>
          <h2
            className="font-[family-name:var(--font-bebas)] text-[#F5F5F0] mb-6 leading-none tracking-wide relative z-10"
            style={{ fontSize: 'clamp(40px, 7vw, 80px)' }}
          >
            Ready to outperform<br />your competition?
          </h2>
          <p className="font-[family-name:var(--font-manrope)] text-[#6B6B72] text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed relative z-10">
            Join 22,000+ users who launch faster, iterate smarter, and convert better with muhibs busoness.
          </p>
          <a
            href="https://whop.com"
            className="relative z-10 inline-flex items-center gap-2 font-[family-name:var(--font-manrope)] font-semibold text-base bg-[#E8291C] hover:bg-[#c9221a] text-white px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(232,41,28,0.4)] hover:shadow-[0_0_40px_rgba(232,41,28,0.6)]"
          >
            Get started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-[#1E1E24] px-6 md:px-12 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-sm bg-[#E8291C] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M2 7L6 11L12 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-[family-name:var(--font-manrope)] font-bold text-[#F5F5F0] text-sm">muhibs busoness</span>
          </div>
          <div className="flex items-center gap-6">
            {['How it works', 'Mission', 'Press', 'Brand', 'Privacy', 'Terms', 'Status'].map((item) => (
              <span key={item} className="font-[family-name:var(--font-manrope)] text-xs text-[#6B6B72]">{item}</span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#111114] border border-[#1E1E24] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#6B6B72">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </div>
            <div className="w-8 h-8 rounded-lg bg-[#111114] border border-[#1E1E24] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B6B72" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-6 pt-6 border-t border-[#1E1E24]">
          <p className="font-[family-name:var(--font-manrope)] text-xs text-[#6B6B72] text-center">
            © 2024 muhibs busoness. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}