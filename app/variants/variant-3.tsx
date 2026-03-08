"use client";

import { Oswald, Karla } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-oswald' });
const karla = Karla({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-karla' });

export default function Page() {
  return (
    <main className={`${oswald.variable} ${karla.variable} min-h-screen bg-[#F7F4EF] text-[#1A1A1A] overflow-x-hidden`}>
      <style>{`
        :root {
          --font-display: var(--font-oswald);
          --font-body: var(--font-karla);
        }
        * { box-sizing: border-box; }
        .font-display { font-family: var(--font-display); }
        .font-body { font-family: var(--font-body); }
        @keyframes riseUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes drawLine {
          from { stroke-dashoffset: 400; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseBar {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .anim-rise { animation: riseUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .anim-rise-2 { animation: riseUp 0.7s 0.15s cubic-bezier(0.22,1,0.36,1) both; }
        .anim-rise-3 { animation: riseUp 0.7s 0.3s cubic-bezier(0.22,1,0.36,1) both; }
        .anim-rise-4 { animation: riseUp 0.7s 0.45s cubic-bezier(0.22,1,0.36,1) both; }
        .anim-slide { animation: slideRight 0.7s 0.2s cubic-bezier(0.22,1,0.36,1) both; }
        .line-before { stroke-dasharray: 400; animation: drawLine 2s 0.5s ease both; }
        .line-after { stroke-dasharray: 400; animation: drawLine 2s 0.9s ease both; }
        .bar-pulse { animation: pulseBar 2s ease-in-out infinite; }
        .stat-anim { animation: countUp 0.6s ease both; }
        .stat-anim-2 { animation: countUp 0.6s 0.15s ease both; }
        .stat-anim-3 { animation: countUp 0.6s 0.3s ease both; }
        .red-underline {
          background: linear-gradient(to right, #C8200F, #C8200F);
          background-size: 100% 4px;
          background-repeat: no-repeat;
          background-position: 0 100%;
          padding-bottom: 4px;
        }
        .card-shadow { box-shadow: 8px 8px 0px #1A1A1A; }
        .card-shadow-red { box-shadow: 8px 8px 0px #C8200F; }
        .noise-bg {
          position: relative;
        }
        .noise-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }
        .ticker-track {
          display: flex;
          gap: 48px;
          animation: ticker 18s linear infinite;
          white-space: nowrap;
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .grid-bg {
          background-image: linear-gradient(rgba(26,26,26,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.06) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .diagonal-stripe {
          background: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 6px,
            rgba(200,32,15,0.12) 6px,
            rgba(200,32,15,0.12) 7px
          );
        }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7F4EF] border-b-2 border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
          <div className="font-display text-xl font-700 tracking-widest uppercase text-[#1A1A1A]">
            muhib<span className="text-[#C8200F]">.</span>waaqar
          </div>
          <a
            href="https://muhibwaqar.com"
            className="font-body font-600 text-sm uppercase tracking-widest bg-[#C8200F] text-white px-5 py-2 border-2 border-[#1A1A1A] card-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
          >
            Get started
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="noise-bg grid-bg pt-28 pb-0 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Tag */}
          <div className="anim-rise inline-flex items-center gap-2 mb-6">
            <div className="w-3 h-3 bg-[#C8200F] border-2 border-[#1A1A1A]"></div>
            <span className="font-body text-xs font-600 uppercase tracking-[0.2em] text-[#1A1A1A]">Iterative Landing Pages</span>
          </div>

          {/* Headline */}
          <div className="anim-rise-2 mb-8">
            <h1 className="font-display font-700 uppercase leading-none text-[#1A1A1A]" style={{fontSize: 'clamp(52px, 9vw, 120px)', letterSpacing: '-0.01em'}}>
              Landing Pages<br />
              <span className="relative inline-block">
                <span className="relative z-10">That <span className="text-[#C8200F]">Learn</span></span>
              </span><br />
              From Every Click
            </h1>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: subhead + CTA */}
            <div className="anim-rise-3">
              <p className="font-body text-lg md:text-xl text-[#3A3A3A] leading-relaxed mb-8 max-w-lg">
                Most landing pages are set-and-forget. Ours are living systems — continuously tested, refined by real data, and rebuilt to convert better every iteration.
              </p>
              <a
                href="https://muhibwaqar.com"
                className="font-body font-700 text-base uppercase tracking-widest bg-[#C8200F] text-white px-8 py-4 border-2 border-[#1A1A1A] card-shadow inline-block hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
              >
                Get started →
              </a>
              <p className="font-body text-xs text-[#8A8A82] mt-4 uppercase tracking-widest">Pages that evolve. Results that compound.</p>
            </div>

            {/* Right: Iteration card */}
            <div className="anim-rise-4">
              <div className="bg-white border-2 border-[#1A1A1A] card-shadow p-6 relative">
                {/* Card header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="font-display text-sm uppercase tracking-widest text-[#1A1A1A] font-500">Conversion Lift — Iteration 7</div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#C8200F] bar-pulse"></div>
                    <span className="font-body text-xs text-[#C8200F] font-600">LIVE</span>
                  </div>
                </div>

                {/* Chart */}
                <div className="relative h-40 mb-4">
                  <svg viewBox="0 0 320 140" className="w-full h-full" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="35" x2="320" y2="35" stroke="#E2E1DC" strokeWidth="1" strokeDasharray="4,4"/>
                    <line x1="0" y1="70" x2="320" y2="70" stroke="#E2E1DC" strokeWidth="1" strokeDasharray="4,4"/>
                    <line x1="0" y1="105" x2="320" y2="105" stroke="#E2E1DC" strokeWidth="1" strokeDasharray="4,4"/>
                    {/* Before line - flat */}
                    <polyline
                      className="line-before"
                      points="0,100 40,102 80,98 120,101 160,99 200,103 240,100 280,102 320,100"
                      fill="none" stroke="#C8C8D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    />
                    {/* After line - climbing */}
                    <polyline
                      className="line-after"
                      points="0,100 40,90 80,78 120,62 160,48 200,36 240,26 280,18 320,12"
                      fill="none" stroke="#C8200F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    />
                    {/* Labels */}
                    <text x="8" y="96" fill="#8A8A82" fontSize="9" fontFamily="sans-serif">Before</text>
                    <text x="270" y="10" fill="#C8200F" fontSize="9" fontFamily="sans-serif" fontWeight="bold">After</text>
                  </svg>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 border-t-2 border-[#1A1A1A] pt-4">
                  <div>
                    <div className="font-display text-2xl font-700 text-[#C8200F]">+47%</div>
                    <div className="font-body text-xs text-[#8A8A82] uppercase tracking-wide">CVR Lift</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-700 text-[#1A1A1A]">7</div>
                    <div className="font-body text-xs text-[#8A8A82] uppercase tracking-wide">Iterations</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-700 text-[#1A1A1A]">14d</div>
                    <div className="font-body text-xs text-[#8A8A82] uppercase tracking-wide">Cycle Time</div>
                  </div>
                </div>

                {/* Diagonal stripe accent */}
                <div className="absolute top-0 right-0 w-12 h-12 diagonal-stripe border-l-2 border-b-2 border-[#1A1A1A]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="mt-16 border-t-2 border-b-2 border-[#1A1A1A] bg-[#C8200F] py-3 overflow-hidden">
          <div className="ticker-track">
            {['Data-Driven Iteration', 'A/B Testing', 'Conversion Optimization', 'Next.js Production Apps', 'Vercel Deployment', 'SaaS Signups', 'Trial Activation', 'Living Systems', 'Data-Driven Iteration', 'A/B Testing', 'Conversion Optimization', 'Next.js Production Apps', 'Vercel Deployment', 'SaaS Signups', 'Trial Activation', 'Living Systems'].map((item, i) => (
              <span key={i} className="font-display text-sm uppercase tracking-widest text-white font-500">
                {item} <span className="mx-4 opacity-60">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[#3A3A3A]">
            <div className="stat-anim p-8 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-[#3A3A3A] text-center">
              <div className="font-display text-6xl md:text-7xl font-700 text-[#C8200F] mb-2">340+</div>
              <div className="font-body text-sm uppercase tracking-widest text-[#8A8A82]">Iterations Run</div>
            </div>
            <div className="stat-anim-2 p-8 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-[#3A3A3A] text-center">
              <div className="font-display text-6xl md:text-7xl font-700 text-white mb-2">+38%</div>
              <div className="font-body text-sm uppercase tracking-widest text-[#8A8A82]">Avg. Conversion Lift</div>
            </div>
            <div className="stat-anim-3 p-8 md:p-12 text-center">
              <div className="font-display text-6xl md:text-7xl font-700 text-white mb-2">60+</div>
              <div className="font-body text-sm uppercase tracking-widest text-[#8A8A82]">Pages Shipped</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-[#F7F4EF] noise-bg">
        <div className="max-w-7xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-[#1A1A1A]"></div>
            <span className="font-display text-sm uppercase tracking-[0.3em] text-[#1A1A1A] font-500">How It Works</span>
            <div className="h-px flex-1 bg-[#1A1A1A]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white border-2 border-[#1A1A1A] card-shadow p-8 relative group hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150">
              <div className="font-display text-5xl font-700 text-[#E8E4DC] mb-4 leading-none">01</div>
              <div className="w-8 h-1 bg-[#C8200F] mb-4"></div>
              <h3 className="font-display text-xl uppercase tracking-wide text-[#1A1A1A] font-600 mb-3">Data-Driven Iteration</h3>
              <p className="font-body text-sm text-[#5A5A5A] leading-relaxed">Iteration cycles that improve conversion rates automatically — driven by real user behavior, not guesswork.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#C8200F] border-2 border-[#1A1A1A] card-shadow p-8 relative group hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150">
              <div className="font-display text-5xl font-700 text-[#A01A0C] mb-4 leading-none">02</div>
              <div className="w-8 h-1 bg-white mb-4"></div>
              <h3 className="font-display text-xl uppercase tracking-wide text-white font-600 mb-3">SaaS-Specialized Design</h3>
              <p className="font-body text-sm text-[#F5C5C0] leading-relaxed">Built specifically for signups, trials, and activation — not generic marketing pages that could belong to anyone.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#1A1A1A] border-2 border-[#1A1A1A] card-shadow p-8 relative group hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150">
              <div className="font-display text-5xl font-700 text-[#2A2A2A] mb-4 leading-none">03</div>
              <div className="w-8 h-1 bg-[#C8200F] mb-4"></div>
              <h3 className="font-display text-xl uppercase tracking-wide text-white font-600 mb-3">Production-Ready Next.js</h3>
              <p className="font-body text-sm text-[#8A8A82] leading-relaxed">Every page ships as a deployable Next.js app. Connect to Vercel and go live in minutes — no handoff friction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-[#C8200F] border border-[#C8200F]"></div>
                <span className="font-body text-xs font-600 uppercase tracking-[0.2em] text-[#8A8A82]">The System</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl uppercase font-700 text-white leading-tight mb-6">
                Pages That Evolve.<br />
                <span className="text-[#C8200F]">Results</span> That Compound.
              </h2>
              <p className="font-body text-base text-[#8A8A82] leading-relaxed mb-8">
                Traditional agencies build once and walk away. We build systems that get smarter with every visitor — each iteration informed by the last, each version outperforming the previous.
              </p>
              <a
                href="https://muhibwaqar.com"
                className="font-body font-700 text-sm uppercase tracking-widest bg-[#C8200F] text-white px-7 py-3.5 border-2 border-[#C8200F] card-shadow-red inline-block hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
              >
                Get started →
              </a>
            </div>

            {/* Right: iteration diagram */}
            <div className="relative">
              <div className="bg-[#111114] border-2 border-[#3A3A3A] p-6">
                <div className="font-display text-xs uppercase tracking-widest text-[#8A8A82] mb-6 font-500">Iteration Cycle</div>

                {/* Cycle steps */}
                {[
                  { step: '01', label: 'Ship Page', desc: 'Production Next.js deployed to Vercel', color: '#C8200F' },
                  { step: '02', label: 'Collect Data', desc: 'Real user behavior tracked across sessions', color: '#8A8A82' },
                  { step: '03', label: 'Analyze & Hypothesize', desc: 'Identify friction points and opportunities', color: '#8A8A82' },
                  { step: '04', label: 'Iterate & Improve', desc: 'Refined variant ships, cycle repeats', color: '#8A8A82' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 mb-4 last:mb-0">
                    <div className="flex-shrink-0 w-8 h-8 border-2 flex items-center justify-center" style={{borderColor: item.color}}>
                      <span className="font-display text-xs font-700" style={{color: item.color}}>{item.step}</span>
                    </div>
                    <div className="flex-1 pt-0.5">
                      <div className="font-display text-sm uppercase tracking-wide text-white font-500 mb-0.5">{item.label}</div>
                      <div className="font-body text-xs text-[#5A5A5A]">{item.desc}</div>
                    </div>
                    {i < 3 && (
                      <div className="absolute left-[calc(1.5rem+16px)] mt-8" style={{display: 'none'}}></div>
                    )}
                  </div>
                ))}

                {/* Arrow connecting back */}
                <div className="mt-4 pt-4 border-t border-[#2A2A2A] flex items-center gap-2">
                  <div className="h-px flex-1 bg-[#C8200F]"></div>
                  <span className="font-body text-xs text-[#C8200F] uppercase tracking-widest">Repeat → Compound</span>
                  <div className="h-px flex-1 bg-[#C8200F]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-[#C8200F] border-t-2 border-b-2 border-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 diagonal-stripe opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl uppercase font-700 text-white leading-tight mb-2">
              Ready to Build a<br />Living Landing Page?
            </h2>
            <p className="font-body text-base text-[#F5C5C0]">Stop publishing. Start iterating.</p>
          </div>
          <a
            href="https://muhibwaqar.com"
            className="flex-shrink-0 font-body font-700 text-sm uppercase tracking-widest bg-white text-[#C8200F] px-8 py-4 border-2 border-[#1A1A1A] card-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
          >
            Get started →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 md:px-8 bg-[#1A1A1A] border-t-2 border-[#3A3A3A]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg font-700 tracking-widest uppercase text-white">
            muhib<span className="text-[#C8200F]">.</span>waaqar
          </div>
          <div className="font-body text-xs text-[#5A5A5A] uppercase tracking-widest text-center">
            Pages that evolve. Results that compound.
          </div>
          <div className="font-body text-xs text-[#3A3A3A] uppercase tracking-widest">
            © 2025 muhib waaqar
          </div>
        </div>
      </footer>
    </main>
  );
}