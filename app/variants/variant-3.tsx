"use client";

import { Anton, Manrope } from 'next/font/google';

const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export default function Page() {
  return (
    <div className={`${anton.variable} ${manrope.variable} min-h-screen bg-[#0F0E17] text-[#FFFFFE] overflow-x-hidden`}>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(232,41,28,0.4); }
          50% { box-shadow: 0 0 40px rgba(232,41,28,0.8); }
        }
        .animate-slide-up { animation: slideUp 0.7s ease forwards; }
        .animate-slide-up-delay { animation: slideUp 0.7s ease 0.15s forwards; opacity: 0; }
        .animate-slide-up-delay2 { animation: slideUp 0.7s ease 0.3s forwards; opacity: 0; }
        .animate-slide-up-delay3 { animation: slideUp 0.7s ease 0.45s forwards; opacity: 0; }
        .animate-fade-in { animation: fadeIn 1s ease 0.6s forwards; opacity: 0; }
        .animate-slide-right { animation: slideRight 0.7s ease forwards; }
        .diagonal-clip { clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%); }
        .diagonal-clip-reverse { clip-path: polygon(0 0, 100% 8%, 100% 100%, 0 100%); }
        .diagonal-clip-bottom { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 88%); }
        .cta-btn {
          background: #E8291C;
          animation: pulse-glow 2.5s ease-in-out infinite;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .cta-btn:hover {
          background: #FF3D2E;
          transform: translateY(-2px) scale(1.03);
        }
        .stat-card {
          border-left: 3px solid #E8291C;
          transition: transform 0.2s ease;
        }
        .stat-card:hover { transform: translateX(6px); }
        .feature-card {
          border: 1px solid rgba(232,41,28,0.2);
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .feature-card:hover {
          border-color: rgba(232,41,28,0.6);
          transform: translateY(-4px);
        }
        .yellow-accent { color: #FFD700; }
        .noise-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }
        .diagonal-red-block {
          position: absolute;
          top: 0;
          right: -5%;
          width: 45%;
          height: 100%;
          background: #E8291C;
          clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
          opacity: 0.08;
          pointer-events: none;
        }
        .toggle-pill {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
        }
        .toggle-active {
          background: #E8291C;
          color: #FFFFFE;
        }
        .toggle-inactive {
          color: #A7A9BE;
        }
        .section-divider {
          height: 80px;
          background: #E8291C;
          clip-path: polygon(0 0, 100% 40%, 100% 100%, 0 60%);
          opacity: 0.15;
        }
        .kinetic-line {
          height: 3px;
          background: linear-gradient(90deg, #E8291C, #FFD700, transparent);
          width: 120px;
        }
        .grid-bg {
          background-image: linear-gradient(rgba(232,41,28,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232,41,28,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      <div className="noise-overlay" />

      {/* NAV */}
      <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-5 border-b border-[rgba(255,255,255,0.06)]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#E8291C] flex items-center justify-center" style={{clipPath:'polygon(0 0,100% 0,100% 75%,75% 100%,0 100%)'}}>
            <span className="text-white text-xs font-bold" style={{fontFamily:'var(--font-anton)'}}>M</span>
          </div>
          <span className="font-bold text-[#FFFFFE] tracking-widest text-sm uppercase" style={{fontFamily:'var(--font-manrope)'}}>muhibs</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden md:block text-[#A7A9BE] text-sm" style={{fontFamily:'var(--font-manrope)'}}>For Enterprise</span>
          <span className="hidden md:block text-[#A7A9BE] text-sm" style={{fontFamily:'var(--font-manrope)'}}>API</span>
          <span className="hidden md:block text-[#A7A9BE] text-sm" style={{fontFamily:'var(--font-manrope)'}}>Sign In</span>
          <a
            href="https://whop.com"
            className="cta-btn px-5 py-2.5 text-white text-sm font-bold uppercase tracking-wider"
            style={{fontFamily:'var(--font-manrope)', clipPath:'polygon(0 0,100% 0,100% 75%,95% 100%,0 100%)'}}
          >
            Get started
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative grid-bg min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-12 pt-16 pb-24 overflow-hidden">
        <div className="diagonal-red-block" />

        {/* Diagonal accent lines */}
        <div className="absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[rgba(232,41,28,0.3)] to-transparent" style={{transform:'rotate(-2deg)'}} />
        <div className="absolute bottom-32 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[rgba(255,215,0,0.2)] to-transparent" style={{transform:'rotate(1.5deg)'}} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Toggle pill */}
          <div className="animate-slide-up inline-flex toggle-pill rounded-full p-1 mb-10">
            <span className="toggle-active px-5 py-1.5 rounded-full text-sm font-semibold" style={{fontFamily:'var(--font-manrope)'}}>Launch</span>
            <span className="toggle-inactive px-5 py-1.5 rounded-full text-sm font-semibold" style={{fontFamily:'var(--font-manrope)'}}>Discover</span>
          </div>

          {/* Headline */}
          <div className="animate-slide-up-delay mb-2">
            <div className="kinetic-line mx-auto mb-6" />
            <h1
              className="text-6xl sm:text-8xl md:text-[110px] lg:text-[130px] leading-none tracking-wider uppercase text-[#FFFFFE]"
              style={{fontFamily:'var(--font-anton)'}}
            >
              Where{' '}
              <span className="yellow-accent" style={{WebkitTextStroke:'2px #FFD700', color:'transparent'}}>Data</span>
            </h1>
            <h1
              className="text-6xl sm:text-8xl md:text-[110px] lg:text-[130px] leading-none tracking-wider uppercase"
              style={{fontFamily:'var(--font-anton)', color:'#E8291C'}}
            >
              Meets Design.
            </h1>
            <div className="kinetic-line mx-auto mt-6" style={{background:'linear-gradient(90deg, transparent, #FFD700, #E8291C)'}} />
          </div>

          {/* Subhead */}
          <p
            className="animate-slide-up-delay2 text-[#A7A9BE] text-base md:text-lg max-w-2xl mx-auto mt-8 leading-relaxed"
            style={{fontFamily:'var(--font-manrope)'}}
          >
            Landing pages that learn from every click — built fast, refined by real performance data, and deployed before your competition catches up.
          </p>

          {/* CTA Box */}
          <div className="animate-slide-up-delay3 mt-10 max-w-xl mx-auto">
            <div className="bg-[#16151F] border border-[rgba(232,41,28,0.3)] p-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3" style={{clipPath:'polygon(0 0,100% 0,100% 88%,98% 100%,0 100%)'}}>
              <div className="flex-1 flex items-center gap-3 px-2">
                <span className="text-[#E8291C] text-lg">⚡</span>
                <span className="text-[#A7A9BE] text-sm" style={{fontFamily:'var(--font-manrope)'}}>Build a high-converting landing page...</span>
              </div>
              <a
                href="https://whop.com"
                className="cta-btn px-6 py-3 text-white text-sm font-bold uppercase tracking-widest whitespace-nowrap text-center"
                style={{fontFamily:'var(--font-manrope)'}}
              >
                Get started →
              </a>
            </div>
          </div>

          {/* Stats bar */}
          <div className="animate-fade-in mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {[
              { num: '$2.8M+', label: 'revenue generated' },
              { num: '22,000+', label: 'users served' },
              { num: '2,400+', label: 'pages launched' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <span
                  className="text-2xl md:text-3xl text-[#FFFFFE] tracking-wider"
                  style={{fontFamily:'var(--font-anton)'}}
                >
                  {s.num}
                </span>
                <span className="text-[#A7A9BE] text-xs uppercase tracking-widest" style={{fontFamily:'var(--font-manrope)'}}>·</span>
                <span className="text-[#A7A9BE] text-xs uppercase tracking-widest" style={{fontFamily:'var(--font-manrope)'}}>  {s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIAGONAL DIVIDER */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#E8291C]" style={{clipPath:'polygon(0 0,100% 60%,100% 100%,0 100%)', opacity:0.15}} />
        <div className="absolute inset-0 bg-[#FFD700]" style={{clipPath:'polygon(0 30%,100% 80%,100% 100%,0 100%)', opacity:0.06}} />
      </div>

      {/* FEATURES SECTION */}
      <section className="relative px-6 md:px-12 py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8291C] rounded-full opacity-5 blur-3xl" />
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="kinetic-line" />
            <span className="text-[#E8291C] text-xs uppercase tracking-[0.3em] font-bold" style={{fontFamily:'var(--font-manrope)'}}>How it works</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider text-[#FFFFFE] mb-16"
            style={{fontFamily:'var(--font-anton)'}}
          >
            Built to <span className="yellow-accent">Convert.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '⚡',
                title: 'Launch in Hours',
                desc: 'Production-ready pages from day one. No waiting, no back-and-forth — just live pages that perform.',
                accent: '#E8291C',
              },
              {
                icon: '📊',
                title: 'Data-Backed Design',
                desc: 'Every design decision backed by live conversion data. We don\'t guess — we measure and optimize.',
                accent: '#FFD700',
              },
              {
                icon: '🔁',
                title: 'Continuous Iteration',
                desc: 'Results compound over time. Each iteration builds on the last, accelerating your growth curve.',
                accent: '#E8291C',
              },
            ].map((f, i) => (
              <div
                key={i}
                className="feature-card bg-[#16151F] p-7"
                style={{clipPath: i === 1 ? 'polygon(0 0,100% 0,100% 92%,96% 100%,0 100%)' : 'polygon(0 0,96% 0,100% 8%,100% 100%,0 100%)'}}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center text-xl mb-5"
                  style={{background:`${f.accent}22`, clipPath:'polygon(0 0,100% 0,100% 75%,75% 100%,0 100%)'}}
                >
                  {f.icon}
                </div>
                <h3
                  className="text-xl uppercase tracking-wider text-[#FFFFFE] mb-3"
                  style={{fontFamily:'var(--font-anton)', color: f.accent === '#FFD700' ? '#FFD700' : '#FFFFFE'}}
                >
                  {f.title}
                </h3>
                <p className="text-[#A7A9BE] text-sm leading-relaxed" style={{fontFamily:'var(--font-manrope)'}}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIAGONAL DIVIDER 2 */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#E8291C]" style={{clipPath:'polygon(0 40%,100% 0,100% 100%,0 100%)', opacity:0.12}} />
      </div>

      {/* STATS SECTION */}
      <section className="relative px-6 md:px-12 py-20 bg-[#16151F] overflow-hidden">
        <div className="absolute inset-0" style={{background:'linear-gradient(135deg, rgba(232,41,28,0.05) 0%, transparent 60%)'}} />
        <div className="absolute bottom-0 left-0 w-full h-1" style={{background:'linear-gradient(90deg, #E8291C, #FFD700, transparent)'}} />

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="kinetic-line" style={{background:'linear-gradient(90deg, #FFD700, #E8291C, transparent)'}} />
            <span className="text-[#FFD700] text-xs uppercase tracking-[0.3em] font-bold" style={{fontFamily:'var(--font-manrope)'}}>Results</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider text-[#FFFFFE] mb-16"
            style={{fontFamily:'var(--font-anton)'}}
          >
            Numbers that <span style={{color:'#E8291C'}}>Move.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { num: '$2.8M+', label: 'Revenue Generated', sub: 'Across all client pages' },
              { num: '22K+', label: 'Users Served', sub: 'And growing every week' },
              { num: '2,400+', label: 'Pages Launched', sub: 'Production-ready, day one' },
            ].map((s, i) => (
              <div key={i} className="stat-card pl-5 py-2">
                <div
                  className="text-5xl md:text-6xl text-[#FFFFFE] tracking-wider mb-1"
                  style={{fontFamily:'var(--font-anton)'}}
                >
                  {s.num}
                </div>
                <div className="text-[#FFD700] text-xs uppercase tracking-widest font-bold mb-1" style={{fontFamily:'var(--font-manrope)'}}>{s.label}</div>
                <div className="text-[#A7A9BE] text-xs" style={{fontFamily:'var(--font-manrope)'}}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIAGONAL DIVIDER 3 */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#E8291C]" style={{clipPath:'polygon(0 0,100% 50%,100% 100%,0 100%)', opacity:0.1}} />
        <div className="absolute inset-0 bg-[#16151F]" style={{clipPath:'polygon(0 0,100% 0,100% 50%,0 0)', opacity:1}} />
      </div>

      {/* CTA SECTION */}
      <section className="relative px-6 md:px-12 py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E8291C] rounded-full opacity-5 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="kinetic-line mx-auto mb-8" style={{background:'linear-gradient(90deg, transparent, #E8291C, #FFD700)'}} />
          <h2
            className="text-5xl sm:text-6xl md:text-7xl uppercase tracking-wider text-[#FFFFFE] mb-6"
            style={{fontFamily:'var(--font-anton)'}}
          >
            Build <span style={{color:'#E8291C'}}>Smarter.</span><br />
            Convert <span className="yellow-accent">Faster.</span>
          </h2>
          <p
            className="text-[#A7A9BE] text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
            style={{fontFamily:'var(--font-manrope)'}}
          >
            Stop guessing. Start launching pages that learn, iterate, and compound results — before your competition catches up.
          </p>
          <a
            href="https://whop.com"
            className="cta-btn inline-block px-10 py-4 text-white text-base font-bold uppercase tracking-widest"
            style={{fontFamily:'var(--font-manrope)', clipPath:'polygon(0 0,100% 0,100% 80%,97% 100%,0 100%)'}}
          >
            Get started →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-[rgba(255,255,255,0.06)] px-6 md:px-12 py-10">
        <div className="absolute top-0 left-0 w-full h-0.5" style={{background:'linear-gradient(90deg, #E8291C, #FFD700, transparent)'}} />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#E8291C] flex items-center justify-center" style={{clipPath:'polygon(0 0,100% 0,100% 75%,75% 100%,0 100%)'}}>
              <span className="text-white text-xs font-bold" style={{fontFamily:'var(--font-anton)'}}>M</span>
            </div>
            <span className="font-bold text-[#FFFFFE] tracking-widest text-sm uppercase" style={{fontFamily:'var(--font-manrope)'}}>muhibs busoness</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#A7A9BE] text-xs uppercase tracking-widest" style={{fontFamily:'var(--font-manrope)'}}>
            <span>How it works</span>
            <span>Mission</span>
            <span>Press</span>
            <span>Brand</span>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Status</span>
          </div>
          <div className="text-[#A7A9BE] text-xs" style={{fontFamily:'var(--font-manrope)'}}>© 2024 muhibs busoness</div>
        </div>
      </footer>
    </div>
  );
}