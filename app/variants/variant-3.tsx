"use client";

import { Barlow_Condensed, Karla } from 'next/font/google';

const barlow = Barlow_Condensed({ subsets: ['latin'], weight: ['400', '600', '700', '800', '900'], variable: '--font-barlow' });
const karla = Karla({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-karla' });

export default function Page() {
  return (
    <div className={`${barlow.variable} ${karla.variable} min-h-screen bg-[#080C14] text-[#EEF2FF] overflow-x-hidden`} style={{ fontFamily: 'var(--font-karla)' }}>
      <style>{`
        .dot-grid {
          background-image: radial-gradient(circle, rgba(255,31,61,0.12) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .diagonal-clip {
          clip-path: polygon(0 0, 100% 0, 100% 82%, 0 100%);
        }
        .diagonal-clip-reverse {
          clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 100%);
        }
        .diagonal-clip-mid {
          clip-path: polygon(0 0, 100% 8%, 100% 100%, 0 92%);
        }
        .font-display { font-family: var(--font-barlow); }
        .red-line {
          position: relative;
        }
        .red-line::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 3px;
          background: #FF1F3D;
          transform: skewX(-12deg);
        }
        @keyframes slideRight {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeUp {
          from { transform: translateY(24px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes pulse-red {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,31,61,0.4); }
          50% { box-shadow: 0 0 0 8px rgba(255,31,61,0); }
        }
        .animate-slide { animation: slideRight 0.7s ease forwards; }
        .animate-fade-up { animation: fadeUp 0.7s ease forwards; }
        .animate-fade-up-2 { animation: fadeUp 0.7s 0.15s ease both; }
        .animate-fade-up-3 { animation: fadeUp 0.7s 0.3s ease both; }
        .animate-fade-up-4 { animation: fadeUp 0.7s 0.45s ease both; }
        .pulse-btn { animation: pulse-red 2.5s infinite; }
        .stat-card {
          background: linear-gradient(135deg, #0F1520 60%, #0D1829 100%);
          border: 1px solid rgba(255,31,61,0.18);
        }
        .feature-card {
          background: linear-gradient(160deg, #0F1520 70%, #0D1829 100%);
          border: 1px solid rgba(26,58,107,0.5);
          transition: border-color 0.3s, transform 0.3s;
        }
        .feature-card:hover {
          border-color: rgba(255,31,61,0.4);
          transform: translateY(-4px);
        }
        .nav-link { transition: color 0.2s; }
        .nav-link:hover { color: #FF1F3D; }
        .step-line {
          position: relative;
        }
        .step-line::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 100%;
          width: 2px;
          height: 48px;
          background: linear-gradient(to bottom, #FF1F3D, transparent);
          transform: translateX(-50%);
        }
        .diagonal-accent {
          position: absolute;
          width: 3px;
          background: linear-gradient(to bottom, #FF1F3D, transparent);
          transform: skewX(-8deg);
        }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4" style={{ background: 'rgba(8,12,20,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,31,61,0.08)' }}>
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded flex items-center justify-center" style={{ background: '#FF1F3D' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7L6 11L12 3" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-display text-xl font-700 tracking-wide text-[#EEF2FF]" style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700, letterSpacing: '0.04em' }}>MUHIBWAQAR</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden md:block text-sm text-[#7A8BAA] nav-link cursor-default">Communities</span>
          <span className="hidden md:block text-sm text-[#7A8BAA] nav-link cursor-default">Results</span>
          <a href="https://whop.com" className="px-5 py-2 rounded-full text-sm font-600 text-white pulse-btn" style={{ background: '#FF1F3D', fontFamily: 'var(--font-karla)', fontWeight: 600 }}>Get started</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center dot-grid diagonal-clip" style={{ background: 'linear-gradient(135deg, #080C14 0%, #0D1829 60%, #080C14 100%)', paddingTop: '100px' }}>
        {/* Diagonal accent lines */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div style={{ position: 'absolute', top: '15%', right: '8%', width: '2px', height: '180px', background: 'linear-gradient(to bottom, #FF1F3D, transparent)', transform: 'skewX(-8deg)' }} />
          <div style={{ position: 'absolute', top: '30%', right: '14%', width: '2px', height: '100px', background: 'linear-gradient(to bottom, rgba(255,31,61,0.4), transparent)', transform: 'skewX(-8deg)' }} />
          <div style={{ position: 'absolute', bottom: '20%', left: '5%', width: '2px', height: '140px', background: 'linear-gradient(to bottom, rgba(26,58,107,0.8), transparent)', transform: 'skewX(-8deg)' }} />
          {/* Large diagonal red slash */}
          <div style={{ position: 'absolute', top: '-10%', right: '20%', width: '4px', height: '60vh', background: 'linear-gradient(to bottom, transparent, rgba(255,31,61,0.15), transparent)', transform: 'skewX(-20deg)' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-8 pb-32">
          {/* Eyebrow */}
          <div className="animate-slide flex items-center gap-3 mb-6">
            <div style={{ width: '40px', height: '3px', background: '#FF1F3D', transform: 'skewX(-12deg)' }} />
            <span className="text-xs font-600 tracking-widest text-[#FF1F3D] uppercase" style={{ fontFamily: 'var(--font-karla)', fontWeight: 600 }}>Community Architecture</span>
          </div>

          {/* Headline */}
          <h1 className="font-display animate-fade-up text-[clamp(3rem,9vw,8rem)] font-900 leading-none uppercase tracking-tight mb-2" style={{ fontFamily: 'var(--font-barlow)', fontWeight: 900, lineHeight: 0.92 }}>
            <span className="block text-[#EEF2FF]">TURN YOUR</span>
            <span className="block" style={{ color: '#FF1F3D' }}>BUSINESS</span>
            <span className="block text-[#EEF2FF]">INTO A</span>
            <span className="block" style={{ WebkitTextStroke: '2px #EEF2FF', color: 'transparent' }}>COMMUNITY-</span>
            <span className="block text-[#EEF2FF]">POWERED</span>
            <span className="block" style={{ color: '#FF1F3D' }}>SALES ENGINE</span>
          </h1>

          {/* Subhead + CTA row */}
          <div className="animate-fade-up-2 mt-10 flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
            <p className="max-w-md text-base md:text-lg text-[#7A8BAA] leading-relaxed" style={{ fontFamily: 'var(--font-karla)' }}>
              muhibwaqar architects high-converting communities that attract buyers, build loyalty, and drive consistent revenue — without the guesswork.
            </p>
            <div className="flex flex-col gap-3">
              <a href="https://whop.com" className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-700 text-white text-lg" style={{ background: '#FF1F3D', fontFamily: 'var(--font-karla)', fontWeight: 700, boxShadow: '0 0 32px rgba(255,31,61,0.35)' }}>
                Get started
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <span className="text-xs text-[#7A8BAA] pl-2" style={{ fontFamily: 'var(--font-karla)' }}>No guesswork. Just growth.</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="animate-fade-up-3 mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { num: '10K+', label: 'Community Members Activated' },
              { num: '$2.8M', label: 'Revenue Generated' },
              { num: '94%', label: 'Engagement Retention Rate' },
            ].map((s, i) => (
              <div key={i} className="stat-card rounded-2xl px-6 py-5">
                <div className="font-display text-3xl md:text-4xl font-800" style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800, color: '#FF1F3D' }}>{s.num}</div>
                <div className="text-xs text-[#7A8BAA] mt-1 leading-snug" style={{ fontFamily: 'var(--font-karla)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative diagonal-clip-reverse" style={{ background: '#0F1520', marginTop: '-2px', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-4">
            <div style={{ width: '32px', height: '3px', background: '#FF1F3D', transform: 'skewX(-12deg)' }} />
            <span className="text-xs font-600 tracking-widest text-[#FF1F3D] uppercase" style={{ fontFamily: 'var(--font-karla)', fontWeight: 600 }}>What We Build</span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-800 uppercase leading-none text-[#EEF2FF] mb-12" style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}>
            EVERYTHING YOUR<br />
            <span style={{ color: '#FF1F3D' }}>COMMUNITY NEEDS</span><br />
            TO CONVERT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: '⚡',
                title: 'Sales-Optimized Structures',
                body: 'Community architectures designed from the ground up to convert members into paying customers — every channel, every touchpoint.',
              },
              {
                icon: '🔥',
                title: 'Proven Engagement Systems',
                body: 'Keep your audience active, warm, and ready to buy with battle-tested engagement frameworks that eliminate cold audiences.',
              },
              {
                icon: '🎯',
                title: 'End-to-End Strategy',
                body: 'From setup to scale — a complete community strategy built around your revenue goals, not vanity metrics.',
              },
            ].map((f, i) => (
              <div key={i} className="feature-card rounded-2xl p-7">
                <div className="text-3xl mb-4">{f.icon}</div>
                <div className="font-display text-xl font-700 uppercase text-[#EEF2FF] mb-3" style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700 }}>{f.title}</div>
                <p className="text-sm text-[#7A8BAA] leading-relaxed" style={{ fontFamily: 'var(--font-karla)' }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / STEPS */}
      <section className="relative" style={{ background: '#080C14', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,31,61,0.06) 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,58,107,0.15) 0%, transparent 70%)' }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-4">
            <div style={{ width: '32px', height: '3px', background: '#FF1F3D', transform: 'skewX(-12deg)' }} />
            <span className="text-xs font-600 tracking-widest text-[#FF1F3D] uppercase" style={{ fontFamily: 'var(--font-karla)', fontWeight: 600 }}>The Process</span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-800 uppercase leading-none text-[#EEF2FF] mb-16" style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800 }}>
            FROM ZERO TO<br />
            <span style={{ color: '#FF1F3D' }}>SALES MACHINE</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
            {/* Connecting line desktop */}
            <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-px" style={{ background: 'linear-gradient(to right, #FF1F3D, rgba(255,31,61,0.2), #FF1F3D)' }} />

            {[
              { step: '01', title: 'Strategy Sprint', body: 'We audit your business, audience, and goals to architect a community blueprint built for conversion.' },
              { step: '02', title: 'Build & Launch', body: 'We set up every channel, system, and automation — then launch with a proven onboarding sequence.' },
              { step: '03', title: 'Scale & Optimize', body: 'Ongoing engagement, analytics, and iteration to keep your community growing and your revenue climbing.' },
            ].map((s, i) => (
              <div key={i} className="relative flex flex-col items-start md:items-center text-left md:text-center px-0 md:px-8 pb-12 md:pb-0">
                <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: '#0F1520', border: '2px solid #FF1F3D' }}>
                  <span className="font-display text-lg font-800" style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800, color: '#FF1F3D' }}>{s.step}</span>
                </div>
                <div className="font-display text-2xl font-700 uppercase text-[#EEF2FF] mb-3" style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700 }}>{s.title}</div>
                <p className="text-sm text-[#7A8BAA] leading-relaxed max-w-xs" style={{ fontFamily: 'var(--font-karla)' }}>{s.body}</p>
                {i < 2 && <div className="md:hidden mt-6 w-px h-10 ml-8" style={{ background: 'linear-gradient(to bottom, #FF1F3D, transparent)' }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative diagonal-clip-mid" style={{ background: 'linear-gradient(135deg, #0D1829 0%, #1A3A6B 50%, #0D1829 100%)', paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '300px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,31,61,0.12) 0%, transparent 70%)' }} />
          {/* Diagonal slash accents */}
          <div style={{ position: 'absolute', top: 0, left: '30%', width: '3px', height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(255,31,61,0.2), transparent)', transform: 'skewX(-15deg)' }} />
          <div style={{ position: 'absolute', top: 0, right: '25%', width: '2px', height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(255,31,61,0.1), transparent)', transform: 'skewX(-15deg)' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ background: 'rgba(255,31,61,0.12)', border: '1px solid rgba(255,31,61,0.3)' }}>
            <div className="w-2 h-2 rounded-full" style={{ background: '#FF1F3D' }} />
            <span className="text-xs font-600 tracking-widest text-[#FF1F3D] uppercase" style={{ fontFamily: 'var(--font-karla)', fontWeight: 600 }}>Communities That Convert</span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] font-900 uppercase leading-none text-[#EEF2FF] mb-6" style={{ fontFamily: 'var(--font-barlow)', fontWeight: 900 }}>
            READY TO BUILD YOUR<br />
            <span style={{ color: '#FF1F3D' }}>SALES MACHINE?</span>
          </h2>
          <p className="text-base md:text-lg text-[#7A8BAA] mb-10 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-karla)' }}>
            Stop leaving revenue on the table. Let muhibwaqar build the community infrastructure that turns your audience into your best sales channel.
          </p>
          <a href="https://whop.com" className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-700 text-white text-xl" style={{ background: '#FF1F3D', fontFamily: 'var(--font-karla)', fontWeight: 700, boxShadow: '0 0 48px rgba(255,31,61,0.4)', fontSize: '1.1rem' }}>
            Get started
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#080C14', borderTop: '1px solid rgba(255,31,61,0.1)', padding: '32px 0' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: '#FF1F3D' }}>
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M2 7L6 11L12 3" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-display text-base font-700 tracking-wide text-[#EEF2FF]" style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700, letterSpacing: '0.04em' }}>MUHIBWAQAR</span>
          </div>
          <p className="text-xs text-[#7A8BAA]" style={{ fontFamily: 'var(--font-karla)' }}>© {new Date().getFullYear()} muhibwaqar. Communities That Convert.</p>
        </div>
      </footer>
    </div>
  );
}