"use client";

import { Abril_Fatface, Karla } from 'next/font/google';

const abril = Abril_Fatface({ subsets: ['latin'], weight: '400' });
const karla = Karla({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export default function Page() {
  return (
    <div className={`${karla.className} min-h-screen bg-[#F7F3EE] overflow-x-hidden`}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes grow {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes barUp {
          0% { height: 0%; }
          100% { height: var(--h); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .bar-animate {
          animation: barUp 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: var(--delay);
          height: 0%;
        }
        .float-card {
          animation: float 6s ease-in-out infinite;
        }
        .slide-in {
          animation: slideIn 0.6s ease forwards;
        }
        .marquee-track {
          display: flex;
          gap: 3rem;
          animation: marquee 20s linear infinite;
          white-space: nowrap;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .noise-overlay::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 9999;
          opacity: 0.5;
        }
        .diagonal-stripe {
          background: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 8px,
            rgba(200, 80, 30, 0.06) 8px,
            rgba(200, 80, 30, 0.06) 9px
          );
        }
        .text-stroke {
          -webkit-text-stroke: 2px #2A1A0E;
          color: transparent;
        }
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
        }
      `}</style>

      <div className="noise-overlay" />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7F3EE]/90 backdrop-blur-sm border-b border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#C8401E] rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">mw</span>
            </div>
            <span className="font-semibold text-[#2A1A0E] text-sm tracking-wide">muhib waaqar</span>
          </div>
          <a
            href="https://muhibwaqar.com"
            className="bg-[#C8401E] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#A83318] transition-colors duration-200"
          >
            Get started
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-0 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-start">
          {/* Left: Text */}
          <div className="lg:pt-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#2A1A0E] text-[#F7F3EE] text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-[#C8401E] rounded-full" style={{animation: 'pulse-dot 2s ease-in-out infinite'}} />
              Live iteration engine
            </div>

            <h1 className={`${abril.className} text-[52px] md:text-[68px] lg:text-[76px] leading-[0.95] text-[#2A1A0E] mb-8`}>
              Landing Pages
              <br />
              <span className="text-stroke">That Learn</span>
              <br />
              From Every
              <br />
              <span className="text-[#C8401E]">Click.</span>
            </h1>

            <p className="text-[#6B5A4A] text-lg leading-relaxed mb-10 max-w-md">
              Most landing pages are set-and-forget. Ours are living systems — continuously tested, refined by real data, and rebuilt to convert better every iteration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="https://muhibwaqar.com"
                className="bg-[#C8401E] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#A83318] transition-all duration-200 hover:scale-105 inline-block"
              >
                Get started →
              </a>
              <div className="flex items-center gap-3 py-4">
                <div className="flex -space-x-2">
                  {['#8B6F5E','#C8401E','#2A1A0E'].map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#F7F3EE]" style={{background: c}} />
                  ))}
                </div>
                <span className="text-sm text-[#6B5A4A]">Trusted by SaaS founders</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-12 pt-8 border-t border-[#E8E0D5] grid grid-cols-3 gap-6">
              {[
                { num: '340+', label: 'Iterations run' },
                { num: '2.8×', label: 'Avg. lift' },
                { num: '60+', label: 'Pages shipped' },
              ].map((s, i) => (
                <div key={i}>
                  <div className={`${abril.className} text-3xl md:text-4xl text-[#2A1A0E]`}>{s.num}</div>
                  <div className="text-xs text-[#8A7A6A] mt-1 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Stack */}
          <div className="relative lg:pl-8">
            {/* Main card */}
            <div className="float-card bg-white rounded-2xl shadow-2xl shadow-[#2A1A0E]/10 p-6 border border-[#E8E0D5] relative overflow-hidden">
              {/* Card header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs text-[#8A7A6A] uppercase tracking-wider mb-1">Conversion Dashboard</div>
                  <div className="font-bold text-[#2A1A0E]">Iteration #7 — Live</div>
                </div>
                <div className="flex items-center gap-2 bg-[#F0EBE3] px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full" style={{animation: 'pulse-dot 1.5s ease-in-out infinite'}} />
                  <span className="text-xs font-semibold text-[#2A1A0E]">+34% CVR</span>
                </div>
              </div>

              {/* Bar chart */}
              <div className="flex items-end gap-2 h-36 mb-4">
                {[
                  { h: '35', label: 'W1', color: '#E8D5C8' },
                  { h: '42', label: 'W2', color: '#E8D5C8' },
                  { h: '38', label: 'W3', color: '#E8D5C8' },
                  { h: '55', label: 'W4', color: '#C8401E' },
                  { h: '68', label: 'W5', color: '#C8401E' },
                  { h: '72', label: 'W6', color: '#C8401E' },
                  { h: '85', label: 'W7', color: '#C8401E' },
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full rounded-t-sm bar-animate" style={{
                      '--h': bar.h + '%',
                      '--delay': (i * 0.1) + 's',
                      background: bar.color,
                      alignSelf: 'flex-end'
                    } as React.CSSProperties} />
                    <span className="text-[10px] text-[#8A7A6A]">{bar.label}</span>
                  </div>
                ))}
              </div>

              {/* Funnel mini */}
              <div className="bg-[#F7F3EE] rounded-xl p-4">
                <div className="text-xs text-[#8A7A6A] mb-3 uppercase tracking-wider">Funnel — This Iteration</div>
                <div className="space-y-2">
                  {[
                    { label: 'Visitors', val: '1,000', w: '100%', color: '#2A1A0E' },
                    { label: 'Trials', val: '340', w: '34%', color: '#C8401E' },
                    { label: 'Paid', val: '89', w: '8.9%', color: '#8B3015' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-16 text-xs text-[#8A7A6A]">{row.label}</div>
                      <div className="flex-1 h-2 bg-[#E8E0D5] rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-1000" style={{width: row.w, background: row.color}} />
                      </div>
                      <div className="w-10 text-xs font-bold text-[#2A1A0E] text-right">{row.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Diagonal stripe accent */}
              <div className="absolute top-0 right-0 w-24 h-24 diagonal-stripe rounded-tr-2xl" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#2A1A0E] text-white rounded-xl px-4 py-3 shadow-xl">
              <div className="text-xs text-[#8A7A6A] mb-0.5">Next.js + Vercel</div>
              <div className="text-sm font-bold">Ships in minutes</div>
            </div>

            {/* Floating tag */}
            <div className="absolute -top-4 -right-4 bg-[#C8401E] text-white rounded-full px-4 py-2 text-xs font-bold shadow-lg">
              SaaS-specialized
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="mt-20 bg-[#2A1A0E] py-4 overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, rep) => (
            <div key={rep} className="flex gap-12 items-center">
              {['Data-driven iteration', '✦', 'SaaS-specialized', '✦', 'Next.js production apps', '✦', 'Vercel deployable', '✦', 'Conversion-first design', '✦', 'A/B tested', '✦'].map((item, i) => (
                <span key={i} className="text-sm font-semibold text-[#F7F3EE]/70 whitespace-nowrap">{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES SECTION */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-[#C8401E] font-bold mb-4">How it works</div>
          <h2 className={`${abril.className} text-4xl md:text-5xl text-[#2A1A0E]`}>Pages that evolve.<br />Results that compound.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              num: '01',
              title: 'Data-driven iteration cycles',
              desc: 'Conversion rates improve automatically through structured testing loops. Every click teaches the page how to convert better.',
              icon: '⟳',
              bg: '#2A1A0E',
              text: '#F7F3EE',
            },
            {
              num: '02',
              title: 'SaaS-specialized design',
              desc: 'Built for signups, trials, and activation flows. Every design decision is calibrated for SaaS conversion metrics.',
              icon: '◈',
              bg: '#C8401E',
              text: '#F7F3EE',
            },
            {
              num: '03',
              title: 'Production-ready Next.js',
              desc: 'Every page ships as a deployable Next.js app. Connect to Vercel and go live in minutes, not weeks.',
              icon: '⬡',
              bg: '#F0EBE3',
              text: '#2A1A0E',
            },
          ].map((card, i) => (
            <div
              key={i}
              className="hover-lift rounded-2xl p-8 relative overflow-hidden"
              style={{background: card.bg, color: card.text}}
            >
              <div className="text-5xl mb-6 opacity-20 absolute top-6 right-6 font-bold">{card.num}</div>
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className={`${abril.className} text-2xl mb-4 leading-tight`}>{card.title}</h3>
              <p className="text-sm leading-relaxed opacity-80">{card.desc}</p>
              {i === 0 && (
                <div className="mt-6 flex items-center gap-2">
                  <div className="h-1 flex-1 bg-[#C8401E] rounded-full" />
                  <div className="h-1 flex-1 bg-[#C8401E]/40 rounded-full" />
                  <div className="h-1 flex-1 bg-[#C8401E]/20 rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 px-6 md:px-10 bg-[#2A1A0E]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#C8401E] font-bold mb-6">The system</div>
              <h2 className={`${abril.className} text-4xl md:text-5xl text-[#F7F3EE] mb-8 leading-tight`}>
                Not a page.<br />A learning machine.
              </h2>
              <p className="text-[#8A7A6A] text-lg leading-relaxed mb-10">
                Traditional agencies hand you a static page and walk away. We build systems that get smarter with every visitor — turning your traffic into a continuous feedback loop.
              </p>
              <a
                href="https://muhibwaqar.com"
                className="inline-block bg-[#C8401E] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#A83318] transition-all duration-200 hover:scale-105"
              >
                Get started →
              </a>
            </div>

            {/* Process steps */}
            <div className="space-y-4">
              {[
                { step: '1', title: 'Ship', desc: 'Production-ready Next.js page deployed to Vercel', color: '#C8401E' },
                { step: '2', title: 'Measure', desc: 'Real visitor data collected across every interaction', color: '#8B5E3C' },
                { step: '3', title: 'Iterate', desc: 'Data-driven changes implemented in structured cycles', color: '#6B8A4A' },
                { step: '4', title: 'Compound', desc: 'Each iteration builds on the last — results accelerate', color: '#4A6B8A' },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-[#3A2A1E] rounded-xl p-5 hover-lift">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{background: step.color}}>
                    {step.step}
                  </div>
                  <div>
                    <div className={`${abril.className} text-xl text-[#F7F3EE] mb-1`}>{step.title}</div>
                    <div className="text-sm text-[#8A7A6A]">{step.desc}</div>
                  </div>
                  <div className="ml-auto text-[#8A7A6A] text-xl">→</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[#C8401E] rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="diagonal-stripe absolute inset-0 opacity-30" />
            <div className="relative z-10">
              <h2 className={`${abril.className} text-4xl md:text-6xl text-white mb-6 leading-tight`}>
                Ready to build a page that learns?
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                Join SaaS founders who've replaced static pages with living conversion systems.
              </p>
              <a
                href="https://muhibwaqar.com"
                className="inline-block bg-white text-[#C8401E] font-bold text-lg px-10 py-5 rounded-full hover:bg-[#F7F3EE] transition-all duration-200 hover:scale-105 shadow-2xl"
              >
                Get started →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E8E0D5] py-10 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#C8401E] rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xs">mw</span>
            </div>
            <span className="font-semibold text-[#2A1A0E] text-sm">muhib waaqar</span>
          </div>
          <p className="text-sm text-[#8A7A6A] text-center">
            Pages that evolve. Results that compound.
          </p>
          <p className="text-xs text-[#8A7A6A]">
            © 2024 muhib waaqar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}