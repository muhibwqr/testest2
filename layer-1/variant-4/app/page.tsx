import { Bebas_Neue, Teko, Oswald, Barlow_Condensed, Anton, Archivo_Black, Raleway } from 'next/font/google';

const display = Teko({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const heading = Anton({ subsets: ['latin'], weight: ['400'] });
const body = Raleway({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] });

export default function MuhibVariant4() {
  return (
    <div className={`${body.className} min-h-screen bg-[#F0EDE6] overflow-x-hidden`}>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.4); }
          50% { box-shadow: 0 0 0 12px rgba(220, 38, 38, 0); }
        }
        .animate-marquee { animation: marquee 22s linear infinite; }
        .animate-fade-up { animation: fadeUp 0.9s ease forwards; }
        .animate-slide-in { animation: slideIn 0.9s ease forwards; }
        .animate-scale-in { animation: scaleIn 0.8s ease forwards; }
        .delay-1 { animation-delay: 0.15s; opacity: 0; }
        .delay-2 { animation-delay: 0.3s; opacity: 0; }
        .delay-3 { animation-delay: 0.45s; opacity: 0; }
        .delay-4 { animation-delay: 0.6s; opacity: 0; }
        .delay-5 { animation-delay: 0.75s; opacity: 0; }
        .cta-pulse { animation: pulse-glow 2.5s ease-in-out infinite; }
        .stat-card:hover { transform: translateY(-4px); }
        .stat-card { transition: transform 0.3s ease; }
        .feature-row:hover .feature-num { color: #DC2626; }
        .feature-row { transition: background 0.2s ease; }
        .feature-row:hover { background: rgba(220, 38, 38, 0.04); }
        .grid-bg {
          background-image: 
            linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .diagonal-cut {
          clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);
        }
        .text-stroke {
          -webkit-text-stroke: 2px #0D0D0D;
          color: transparent;
        }
        .text-stroke-red {
          -webkit-text-stroke: 2px #DC2626;
          color: transparent;
        }
        @media (max-width: 768px) {
          .text-stroke { -webkit-text-stroke: 1px #0D0D0D; }
          .text-stroke-red { -webkit-text-stroke: 1px #DC2626; }
        }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#F0EDE6]/90 backdrop-blur-sm border-b border-black/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#DC2626] flex items-center justify-center">
            <span className={`${heading.className} text-white text-sm leading-none`}>M</span>
          </div>
          <span className={`${heading.className} text-[#0D0D0D] text-xl tracking-widest uppercase`}>MUHIB</span>
        </div>
        <a
          href="https://pending"
          className="cta-pulse bg-[#DC2626] text-white px-6 py-2.5 text-sm font-700 tracking-widest uppercase hover:bg-[#B91C1C] transition-colors"
          style={{ fontWeight: 700, letterSpacing: '0.12em' }}
        >
          Get started
        </a>
      </nav>

      {/* HERO */}
      <section className="diagonal-cut grid-bg relative pt-28 pb-32 md:pt-36 md:pb-48 px-6 md:px-12 bg-[#F0EDE6] overflow-hidden">
        {/* Large decorative number */}
        <div
          className="absolute right-0 top-8 md:top-12 select-none pointer-events-none"
          style={{ lineHeight: 1 }}
        >
          <span
            className={`${heading.className} text-stroke opacity-[0.07] text-[180px] md:text-[320px] lg:text-[420px] leading-none`}
          >
            01
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Eyebrow */}
          <div className="animate-fade-up delay-1 flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#DC2626]"></div>
            <span className="text-[#DC2626] text-xs font-700 tracking-[0.3em] uppercase" style={{ fontWeight: 700 }}>Community Architecture</span>
          </div>

          {/* Headline */}
          <div className="animate-fade-up delay-2 mb-6">
            <h1
              className={`${heading.className} text-[#0D0D0D] leading-[0.88] uppercase`}
              style={{ fontSize: 'clamp(72px, 14vw, 200px)' }}
            >
              COMMUN
            </h1>
            <h1
              className={`${heading.className} leading-[0.88] uppercase`}
              style={{ fontSize: 'clamp(72px, 14vw, 200px)', WebkitTextStroke: 'clamp(1px, 0.15vw, 3px) #0D0D0D', color: 'transparent' }}
            >
              ITIES
            </h1>
            <h1
              className={`${heading.className} text-[#DC2626] leading-[0.88] uppercase`}
              style={{ fontSize: 'clamp(72px, 14vw, 200px)' }}
            >
              THAT
            </h1>
            <h1
              className={`${heading.className} text-[#0D0D0D] leading-[0.88] uppercase`}
              style={{ fontSize: 'clamp(72px, 14vw, 200px)' }}
            >
              SCALE
            </h1>
          </div>

          {/* Sub + CTA row */}
          <div className="animate-fade-up delay-3 flex flex-col md:flex-row md:items-end gap-8 md:gap-16 mt-10">
            <p className="text-[#4A4540] text-base md:text-lg font-400 max-w-md leading-relaxed" style={{ fontWeight: 400 }}>
              Muhib builds, grows, and monetizes engaged communities — so you can focus on leading, not managing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://pending"
                className="cta-pulse inline-flex items-center gap-3 bg-[#DC2626] text-white px-8 py-4 text-sm font-700 tracking-widest uppercase hover:bg-[#B91C1C] transition-colors group"
                style={{ fontWeight: 700, letterSpacing: '0.15em' }}
              >
                Get started
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="animate-fade-up delay-4 relative z-10 max-w-7xl mx-auto mt-16 md:mt-20 grid grid-cols-3 gap-0 border border-black/15">
          {[
            { num: '10×', label: 'Faster Growth' },
            { num: '94%', label: 'Retention Rate' },
            { num: '3.2×', label: 'Revenue Lift' },
          ].map((s, i) => (
            <div
              key={i}
              className={`stat-card px-6 py-6 md:px-10 md:py-8 ${i < 2 ? 'border-r border-black/15' : ''} bg-white/40`}
            >
              <div className={`${heading.className} text-[#DC2626] text-4xl md:text-6xl leading-none`}>{s.num}</div>
              <div className="text-[#4A4540] text-xs md:text-sm font-500 tracking-widest uppercase mt-2" style={{ fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <div className="bg-[#DC2626] py-3 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className={`${heading.className} text-white text-lg md:text-xl tracking-widest uppercase mx-8`}>
              COMMUNITY ARCHITECTURE ✦ MEMBER GROWTH ✦ MONETIZATION SYSTEMS ✦ ADVOCATE NETWORKS ✦ SCALE WITH PURPOSE ✦
            </span>
          ))}
        </div>
      </div>

      {/* FEATURES SECTION */}
      <section className="bg-[#0D0D0D] py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-[#DC2626]"></div>
                <span className="text-[#DC2626] text-xs font-700 tracking-[0.3em] uppercase" style={{ fontWeight: 700 }}>What We Do</span>
              </div>
              <h2
                className={`${heading.className} text-white uppercase leading-none`}
                style={{ fontSize: 'clamp(40px, 7vw, 96px)' }}
              >
                THE SYSTEM
              </h2>
            </div>
            <p className="text-[#6B6B6B] text-sm md:text-base max-w-xs leading-relaxed">
              Three pillars. One outcome: a community that compounds.
            </p>
          </div>

          {/* Feature rows */}
          <div className="border-t border-white/10">
            {[
              {
                num: '01',
                title: 'Architect',
                sub: 'Structure & Attraction',
                desc: 'Architect community structures that attract the right people and keep them engaged long-term',
              },
              {
                num: '02',
                title: 'Amplify',
                sub: 'Advocacy & Revenue',
                desc: 'Proven systems to turn members into advocates and advocates into revenue',
              },
              {
                num: '03',
                title: 'Accelerate',
                sub: 'End-to-End Growth',
                desc: 'From zero to thriving — end-to-end community building tailored to your vision',
              },
            ].map((f, i) => (
              <div
                key={i}
                className="feature-row border-b border-white/10 py-8 md:py-10 px-4 md:px-6 -mx-4 md:-mx-6 cursor-default"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
                  <span className={`feature-num ${heading.className} text-[#333] text-5xl md:text-7xl w-full md:w-32 shrink-0 transition-colors duration-300`}>{f.num}</span>
                  <div className="flex-1 md:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
                      <h3 className={`${heading.className} text-white uppercase text-3xl md:text-5xl leading-none`}>{f.title}</h3>
                      <span className="text-[#DC2626] text-xs font-700 tracking-widest uppercase" style={{ fontWeight: 700 }}>{f.sub}</span>
                    </div>
                    <p className="text-[#6B6B6B] text-sm md:text-base leading-relaxed max-w-xl">{f.desc}</p>
                  </div>
                  <div className="hidden md:flex items-center justify-end w-16">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#333]">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPOGRAPHIC MANIFESTO SECTION */}
      <section className="bg-[#F0EDE6] grid-bg py-20 md:py-32 px-6 md:px-12 overflow-hidden relative">
        {/* Decorative background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className={`${heading.className} uppercase leading-none opacity-[0.04]`}
            style={{ fontSize: 'clamp(100px, 25vw, 380px)', whiteSpace: 'nowrap' }}
          >
            SCALE
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-[#DC2626]"></div>
                <span className="text-[#DC2626] text-xs font-700 tracking-[0.3em] uppercase" style={{ fontWeight: 700 }}>The Muhib Way</span>
              </div>
              <h2
                className={`${heading.className} text-[#0D0D0D] uppercase leading-none mb-8`}
                style={{ fontSize: 'clamp(48px, 8vw, 112px)' }}
              >
                SELLING<br/>
                <span style={{ WebkitTextStroke: '2px #0D0D0D', color: 'transparent' }}>COMMUN</span><br/>
                <span className="text-[#DC2626]">ITIES.</span>
              </h2>
              <p className="text-[#4A4540] text-base leading-relaxed max-w-sm mb-8" style={{ fontWeight: 400 }}>
                We don't just build communities — we engineer growth engines. Every structure, every touchpoint, every system is designed to compound.
              </p>
              <a
                href="https://pending"
                className="inline-flex items-center gap-3 border-2 border-[#0D0D0D] text-[#0D0D0D] px-8 py-4 text-sm font-700 tracking-widest uppercase hover:bg-[#0D0D0D] hover:text-white transition-all group"
                style={{ fontWeight: 700, letterSpacing: '0.15em' }}
              >
                Get started
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Right — Process cards */}
            <div className="flex flex-col gap-4">
              {[
                { step: 'A', label: 'Assess', detail: 'Deep-dive into your audience, goals, and existing assets to map the opportunity.' },
                { step: 'B', label: 'Build', detail: 'Design and launch the community infrastructure with precision and speed.' },
                { step: 'C', label: 'Compound', detail: 'Activate growth loops that turn members into advocates and revenue.' },
              ].map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-6 bg-white border border-black/10 p-6 hover:border-[#DC2626]/40 transition-colors"
                >
                  <div className={`${heading.className} text-[#DC2626] text-5xl leading-none shrink-0 w-12`}>{p.step}</div>
                  <div>
                    <div className={`${heading.className} text-[#0D0D0D] text-2xl uppercase leading-none mb-2`}>{p.label}</div>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#DC2626] py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
        {/* Background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className={`${heading.className} text-white/10 uppercase leading-none`}
            style={{ fontSize: 'clamp(80px, 20vw, 300px)', whiteSpace: 'nowrap' }}
          >
            MUHIB
          </span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2
              className={`${heading.className} text-white uppercase leading-none`}
              style={{ fontSize: 'clamp(40px, 7vw, 96px)' }}
            >
              READY TO
            </h2>
            <h2
              className={`${heading.className} uppercase leading-none`}
              style={{ fontSize: 'clamp(40px, 7vw, 96px)', WebkitTextStroke: 'clamp(1px, 0.15vw, 3px) white', color: 'transparent' }}
            >
              SCALE?
            </h2>
          </div>
          <a
            href="https://pending"
            className="inline-flex items-center gap-4 bg-white text-[#DC2626] px-10 py-5 text-sm font-700 tracking-widest uppercase hover:bg-[#F0EDE6] transition-colors group shrink-0"
            style={{ fontWeight: 700, letterSpacing: '0.15em' }}
          >
            Get started
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform">
              <path d="M4 10h12M12 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0D0D0D] py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#DC2626] flex items-center justify-center">
              <span className={`${heading.className} text-white text-xs leading-none`}>M</span>
            </div>
            <span className={`${heading.className} text-white text-lg tracking-widest uppercase`}>MUHIB</span>
          </div>
          <p className="text-[#4A4540] text-xs tracking-widest uppercase" style={{ fontWeight: 500 }}>© 2025 Muhib. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}