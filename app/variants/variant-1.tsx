"use client";

import { Bebas_Neue, Manrope } from 'next/font/google';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export default function Page() {
  return (
    <div className={`${bebas.variable} ${manrope.variable} min-h-screen bg-[#0A0A0B] text-[#F5F0E8] relative overflow-x-hidden`}>
      {/* Film grain overlay */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 0.75; transform: scale(1.08); }
        }
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-2%, -3%); }
          20% { transform: translate(3%, 2%); }
          30% { transform: translate(-1%, 4%); }
          40% { transform: translate(4%, -1%); }
          50% { transform: translate(-3%, 3%); }
          60% { transform: translate(2%, -4%); }
          70% { transform: translate(-4%, 1%); }
          80% { transform: translate(1%, -2%); }
          90% { transform: translate(3%, 4%); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        .grain-overlay::before {
          content: '';
          position: fixed;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.04;
          pointer-events: none;
          z-index: 9999;
          animation: grain 0.5s steps(1) infinite;
        }
        .hero-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        .fade-up-1 { animation: fadeUp 0.9s ease forwards; animation-delay: 0.1s; opacity: 0; }
        .fade-up-2 { animation: fadeUp 0.9s ease forwards; animation-delay: 0.3s; opacity: 0; }
        .fade-up-3 { animation: fadeUp 0.9s ease forwards; animation-delay: 0.5s; opacity: 0; }
        .fade-up-4 { animation: fadeUp 0.9s ease forwards; animation-delay: 0.7s; opacity: 0; }
        .fade-up-5 { animation: fadeUp 0.9s ease forwards; animation-delay: 0.9s; opacity: 0; }
        .fade-in-card { animation: fadeIn 1.2s ease forwards; animation-delay: 1.1s; opacity: 0; }
        .stat-card:hover { transform: translateY(-4px); transition: transform 0.3s ease; }
        .cta-btn:hover { background: #ff2a3d; box-shadow: 0 0 32px rgba(232,25,44,0.5); }
        .cta-btn { transition: background 0.2s ease, box-shadow 0.2s ease; }
      `}</style>

      <div className="grain-overlay" />

      {/* NAV */}
      <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/5">
        <div className="flex items-center gap-3">
          <button className="text-[#F5F0E8] opacity-70 hover:opacity-100 transition-opacity">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
          <span className="font-[family-name:var(--font-bebas)] text-2xl tracking-widest text-[#F5F0E8] ml-2">muhibwaqar</span>
          <span className="w-2 h-2 rounded-full bg-[#E8192C] inline-block ml-1 mt-0.5" />
        </div>
        <div className="hidden md:flex items-center gap-8">
          <span className="font-[family-name:var(--font-manrope)] text-sm text-[#6B6B7A] hover:text-[#F5F0E8] transition-colors cursor-default">Communities</span>
          <span className="font-[family-name:var(--font-manrope)] text-sm text-[#6B6B7A] hover:text-[#F5F0E8] transition-colors cursor-default">Results</span>
          <span className="font-[family-name:var(--font-manrope)] text-sm text-[#6B6B7A] hover:text-[#F5F0E8] transition-colors cursor-default">Process</span>
        </div>
        <a
          href="https://whop.com"
          className="cta-btn bg-[#E8192C] text-white font-[family-name:var(--font-manrope)] text-sm font-semibold px-5 py-2.5 rounded-full"
        >
          Get started
        </a>
      </nav>

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        {/* Ember glow orb */}
        <div className="hero-glow absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(232,25,44,0.22) 0%, rgba(255,107,53,0.08) 45%, transparent 70%)' }} />

        <div className="fade-up-1 mb-4">
          <span className="font-[family-name:var(--font-manrope)] text-xs font-semibold tracking-[0.2em] uppercase text-[#E8192C] bg-[#E8192C]/10 border border-[#E8192C]/20 px-4 py-1.5 rounded-full">
            Communities That Convert.
          </span>
        </div>

        <h1 className="fade-up-2 font-[family-name:var(--font-bebas)] text-[clamp(3.2rem,10vw,8rem)] leading-[0.92] tracking-wide text-[#F5F0E8] max-w-5xl mx-auto mt-6">
          Turn Your Business Into a<br />
          <span className="text-[#E8192C]">Community-Powered</span><br />
          Sales Engine
        </h1>

        <p className="fade-up-3 font-[family-name:var(--font-manrope)] text-base md:text-lg text-[#6B6B7A] max-w-xl mx-auto mt-7 leading-relaxed">
          muhibwaqar architects high-converting communities that attract buyers, build loyalty, and drive consistent revenue — without the guesswork.
        </p>

        <div className="fade-up-4 mt-10">
          <a
            href="https://whop.com"
            className="cta-btn inline-flex items-center gap-2 bg-[#E8192C] text-white font-[family-name:var(--font-manrope)] font-semibold text-base px-8 py-4 rounded-full"
          >
            Get started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        {/* Floating stat cards */}
        <div className="fade-in-card relative w-full max-w-4xl mx-auto mt-16 md:mt-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {/* Card 1 — offset up on md */}
            <div className="stat-card bg-[#111114] border border-white/8 rounded-2xl px-7 py-6 text-left w-full max-w-[220px] md:-translate-y-4 shadow-xl shadow-black/40">
              <div className="font-[family-name:var(--font-bebas)] text-5xl text-[#E8192C] leading-none">2.8B</div>
              <div className="font-[family-name:var(--font-manrope)] text-xs text-[#6B6B7A] mt-2 leading-snug">Revenue generated<br />across communities</div>
              <div className="mt-3 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8192C] animate-pulse" />
                <span className="font-[family-name:var(--font-manrope)] text-[10px] text-[#E8192C] font-semibold uppercase tracking-wider">Live</span>
              </div>
            </div>

            {/* Card 2 — center, slightly larger */}
            <div className="stat-card bg-[#111114] border border-[#E8192C]/20 rounded-2xl px-7 py-7 text-left w-full max-w-[240px] shadow-2xl shadow-[#E8192C]/10">
              <div className="font-[family-name:var(--font-bebas)] text-5xl text-[#F5F0E8] leading-none">22M+</div>
              <div className="font-[family-name:var(--font-manrope)] text-xs text-[#6B6B7A] mt-2 leading-snug">Community members<br />actively engaged</div>
              <div className="mt-3 w-full bg-white/5 rounded-full h-1">
                <div className="bg-[#E8192C] h-1 rounded-full" style={{ width: '78%' }} />
              </div>
              <div className="font-[family-name:var(--font-manrope)] text-[10px] text-[#6B6B7A] mt-1">78% avg. engagement rate</div>
            </div>

            {/* Card 3 — offset down on md */}
            <div className="stat-card bg-[#111114] border border-white/8 rounded-2xl px-7 py-6 text-left w-full max-w-[220px] md:translate-y-4 shadow-xl shadow-black/40">
              <div className="font-[family-name:var(--font-bebas)] text-5xl text-[#FF6B35] leading-none">2.4M</div>
              <div className="font-[family-name:var(--font-manrope)] text-xs text-[#6B6B7A] mt-2 leading-snug">Businesses scaled<br />through community</div>
              <div className="mt-3 flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#FF6B35"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative z-10 px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-5xl mx-auto bg-[#111114] border border-[#E8192C]/15 rounded-3xl px-8 md:px-14 py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
          {/* Glow accent */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,25,44,0.12) 0%, transparent 70%)' }} />
          <div className="flex-1">
            <div className="font-[family-name:var(--font-manrope)] text-xs font-semibold tracking-[0.18em] uppercase text-[#E8192C] mb-3">Ready to convert?</div>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.2rem,5vw,4rem)] leading-none text-[#F5F0E8]">Your Community Is Your<br /><span className="text-[#E8192C]">Greatest Sales Asset</span></h2>
            <p className="font-[family-name:var(--font-manrope)] text-sm text-[#6B6B7A] mt-4 max-w-md leading-relaxed">Stop leaving revenue on the table. Let muhibwaqar build the community infrastructure that turns your audience into a predictable revenue engine.</p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="https://whop.com"
              className="cta-btn inline-flex items-center gap-2 bg-[#E8192C] text-white font-[family-name:var(--font-manrope)] font-semibold text-base px-8 py-4 rounded-full whitespace-nowrap"
            >
              Get started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* STEPS / FEATURES */}
      <section className="relative z-10 px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="font-[family-name:var(--font-manrope)] text-xs font-semibold tracking-[0.18em] uppercase text-[#E8192C] mb-4">The System</div>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,6vw,5rem)] leading-none text-[#F5F0E8]">How We Build Communities<br /><span className="text-[#6B6B7A]">That Actually Sell</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                icon: '⚡',
                title: 'Sales-Optimized Structure',
                body: 'Sales-optimized community structures designed to convert members into paying customers — every touchpoint engineered for revenue.'
              },
              {
                num: '02',
                icon: '🔥',
                title: 'Proven Engagement Systems',
                body: 'Engagement systems that keep your audience active, warm, and ready to buy — so your community never goes cold.'
              },
              {
                num: '03',
                icon: '🎯',
                title: 'End-to-End Strategy',
                body: 'End-to-end community strategy — from setup to scale — built entirely around your revenue goals and growth trajectory.'
              }
            ].map((step, i) => (
              <div key={i} className="stat-card group bg-[#111114] border border-white/6 hover:border-[#E8192C]/30 rounded-2xl p-8 transition-colors duration-300">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-[family-name:var(--font-bebas)] text-6xl text-white/5 group-hover:text-[#E8192C]/15 transition-colors leading-none">{step.num}</span>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-[#F5F0E8] leading-tight mb-3">{step.title}</h3>
                <p className="font-[family-name:var(--font-manrope)] text-sm text-[#6B6B7A] leading-relaxed">{step.body}</p>
                <div className="mt-6 w-8 h-0.5 bg-[#E8192C]/40 group-hover:w-16 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/5 px-6 md:px-12 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-bebas)] text-xl tracking-widest text-[#F5F0E8]">muhibwaqar</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8192C]" />
          </div>
          <p className="font-[family-name:var(--font-manrope)] text-xs text-[#6B6B7A] text-center">
            © {new Date().getFullYear()} muhibwaqar. Communities That Convert.
          </p>
          <a href="https://whop.com" className="font-[family-name:var(--font-manrope)] text-xs text-[#E8192C] hover:text-[#ff2a3d] transition-colors font-semibold">Get started →</a>
        </div>
      </footer>
    </div>
  );
}