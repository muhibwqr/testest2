"use client";

import { Barlow_Condensed, Karla } from 'next/font/google';

const barlow = Barlow_Condensed({ subsets: ['latin'], weight: ['400', '600', '700', '800', '900'], variable: '--font-barlow' });
const karla = Karla({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-karla' });

export default function Page() {
  return (
    <div className={`${barlow.variable} ${karla.variable} min-h-screen bg-[#080C14] text-[#EEF2FF] overflow-x-hidden`} style={{ fontFamily: 'var(--font-karla)' }}>
      <style>{`
        :root {
          --font-barlow: ${barlow.style.fontFamily};
          --font-karla: ${karla.style.fontFamily};
        }
        .font-display { font-family: var(--font-barlow); }
        .font-body { font-family: var(--font-karla); }
        .dot-grid {
          background-image: radial-gradient(circle, rgba(255,31,61,0.18) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .diagonal-clip {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        .diagonal-clip-reverse {
          clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
        }
        .diagonal-mid {
          clip-path: polygon(0 8%, 100% 0, 100% 92%, 0 100%);
        }
        .red-slash {
          position: relative;
        }
        .red-slash::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 4px;
          background: #FF1F3D;
          transform: skewX(-12deg);
        }
        .kinetic-border {
          border-left: 3px solid #FF1F3D;
          transform: skewY(-1deg);
        }
        .stat-card {
          background: linear-gradient(135deg, #0F1520 0%, #0D1829 100%);
          border: 1px solid rgba(255,31,61,0.2);
          position: relative;
          overflow: hidden;
        }
        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #FF1F3D, transparent);
        }
        .feature-card {
          background: linear-gradient(135deg, #0F1520 0%, #0D1829 100%);
          border: 1px solid rgba(26,58,107,0.5);
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .feature-card:hover {
          border-color: rgba(255,31,61,0.4);
          transform: translateY(-4px) skewY(-0.5deg);
        }
        .feature-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #FF1F3D, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .feature-card:hover::after {
          opacity: 1;
        }
        .cta-btn {
          background: #FF1F3D;
          color: #fff;
          font-family: var(--font-barlow);
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
        }
        .cta-btn:hover {
          background: #e0001a;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(255,31,61,0.4);
        }
        .nav-cta {
          background: #FF1F3D;
          color: #fff;
          font-family: var(--font-barlow);
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: background 0.2s ease;
          clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
        }
        .nav-cta:hover {
          background: #e0001a;
        }
        .hero-number {
          font-family: var(--font-barlow);
          font-weight: 900;
          color: #FF1F3D;
          line-height: 1;
        }
        .step-number {
          font-family: var(--font-barlow);
          font-weight: 900;
          color: rgba(255,31,61,0.15);
          line-height: 1;
          font-size: 6rem;
          position: absolute;
          top: -1rem;
          left: -0.5rem;
          z-index: 0;
        }
        .angled-divider {
          width: 100%;
          height: 80px;
          background: #0D1829;
          clip-path: polygon(0 0, 100% 40%, 100% 100%, 0 100%);
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px) skewX(-3deg); }
          to { opacity: 1; transform: translateX(0) skewX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-left { animation: slideInLeft 0.8s ease forwards; }
        .animate-slide-right { animation: slideInRight 0.8s ease 0.2s forwards; opacity: 0; }
        .animate-fade-up { animation: fadeUp 0.7s ease forwards; }
        .animate-fade-up-1 { animation: fadeUp 0.7s ease 0.1s forwards; opacity: 0; }
        .animate-fade-up-2 { animation: fadeUp 0.7s ease 0.2s forwards; opacity: 0; }
        .animate-fade-up-3 { animation: fadeUp 0.7s ease 0.3s forwards; opacity: 0; }
        .animate-fade-up-4 { animation: fadeUp 0.7s ease 0.4s forwards; opacity: 0; }
        .grid-line {
          position: absolute;
          background: rgba(255,31,61,0.08);
        }
        .grid-line-v {
          width: 1px;
          top: 0;
          bottom: 0;
        }
        .grid-line-h {
          height: 1px;
          left: 0;
          right: 0;
        }
      `}</style>

      {/* NAV */}
      <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-5" style={{ background: 'rgba(8,12,20,0.95)', borderBottom: '1px solid rgba(255,31,61,0.1)' }}>
        <div className="flex items-center gap-3">
          <div style={{ width: 28, height: 28, background: '#FF1F3D', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
          <span className="font-display text-xl font-bold tracking-widest text-[#EEF2FF] uppercase">muhibwaqar</span>
        </div>
        <a href="https://whop.com" className="nav-cta px-6 py-2 text-sm rounded-none">
          Get started
        </a>
      </nav>

      {/* HERO */}
      <section className="relative diagonal-clip bg-[#080C14] dot-grid pt-20 pb-40 md:pt-28 md:pb-56 overflow-hidden">
        {/* Grid lines */}
        <div className="grid-line grid-line-v" style={{ left: '20%' }} />
        <div className="grid-line grid-line-v" style={{ left: '80%' }} />
        <div className="grid-line grid-line-h" style={{ top: '40%' }} />

        {/* Red accent bar top-left */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#FF1F3D] to-transparent opacity-60" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
            {/* Left: Headline */}
            <div className="flex-1 animate-slide-left">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2" style={{ background: 'rgba(255,31,61,0.1)', border: '1px solid rgba(255,31,61,0.3)', clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)' }}>
                <div className="w-2 h-2 rounded-full bg-[#FF1F3D]" style={{ boxShadow: '0 0 8px #FF1F3D' }} />
                <span className="font-display text-sm font-700 tracking-widest text-[#FF1F3D] uppercase">Communities That Convert</span>
              </div>

              <h1 className="font-display font-900 uppercase leading-none text-[#EEF2FF] mb-6" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 900, lineHeight: 0.92 }}>
                <span className="block">Turn Your</span>
                <span className="block text-[#FF1F3D]">Business</span>
                <span className="block">Into A</span>
                <span className="block" style={{ WebkitTextStroke: '2px #EEF2FF', color: 'transparent' }}>Community-</span>
                <span className="block">Powered</span>
                <span className="block text-[#FF1F3D]">Sales Engine</span>
              </h1>

              <div className="kinetic-border pl-4 mb-8">
                <p className="font-body text-[#7A8BAA] text-base md:text-lg leading-relaxed max-w-lg">
                  muhibwaqar architects high-converting communities that attract buyers, build loyalty, and drive consistent revenue — without the guesswork.
                </p>
              </div>

              <a href="https://whop.com" className="cta-btn inline-block px-10 py-4 text-lg">
                Get started →
              </a>
            </div>

            {/* Right: Stats panel */}
            <div className="flex-shrink-0 w-full md:w-80 animate-slide-right">
              <div className="stat-card rounded-none p-6 mb-4" style={{ transform: 'skewY(-2deg)' }}>
                <div className="" style={{ transform: 'skewY(2deg)' }}>
                  <div className="hero-number text-5xl md:text-6xl">22M+</div>
                  <div className="font-body text-[#7A8BAA] text-sm uppercase tracking-widest mt-1">Community Members</div>
                  <div className="mt-3 h-1 w-16 bg-[#FF1F3D]" style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 4px) 100%, 0 100%)' }} />
                </div>
              </div>
              <div className="stat-card rounded-none p-6 mb-4 ml-6" style={{ transform: 'skewY(-2deg)' }}>
                <div style={{ transform: 'skewY(2deg)' }}>
                  <div className="hero-number text-5xl md:text-6xl">$2.8B</div>
                  <div className="font-body text-[#7A8BAA] text-sm uppercase tracking-widest mt-1">Revenue Generated</div>
                  <div className="mt-3 h-1 w-16 bg-[#FF1F3D]" style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 4px) 100%, 0 100%)' }} />
                </div>
              </div>
              <div className="stat-card rounded-none p-6 ml-3" style={{ transform: 'skewY(-2deg)' }}>
                <div style={{ transform: 'skewY(2deg)' }}>
                  <div className="hero-number text-5xl md:text-6xl">2.4M</div>
                  <div className="font-body text-[#7A8BAA] text-sm uppercase tracking-widest mt-1">Businesses Scaled</div>
                  <div className="mt-3 h-1 w-16 bg-[#FF1F3D]" style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 4px) 100%, 0 100%)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative bg-[#0D1829] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        {/* Diagonal accent */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10" style={{ background: 'radial-gradient(circle, #FF1F3D 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-16 animate-fade-up">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-[#FF1F3D] to-transparent" />
              <span className="font-display text-sm font-700 tracking-widest text-[#FF1F3D] uppercase">What We Build</span>
              <div className="h-px w-12 bg-[#FF1F3D]" />
            </div>
            <h2 className="font-display font-900 uppercase text-[#EEF2FF] leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900 }}>
              Engineered For
              <span className="text-[#FF1F3D]"> Revenue</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="feature-card p-8 animate-fade-up-1">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-display font-700 uppercase text-[#EEF2FF] text-2xl mb-3 leading-tight">Sales-Optimized Structures</h3>
              <p className="font-body text-[#7A8BAA] text-sm leading-relaxed">Community architectures designed from the ground up to convert members into paying customers at every touchpoint.</p>
              <div className="mt-6 flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-[#FF1F3D] to-transparent opacity-40" />
                <div className="w-2 h-2 bg-[#FF1F3D] rotate-45" />
              </div>
            </div>

            <div className="feature-card p-8 animate-fade-up-2">
              <div className="text-3xl mb-4">🔥</div>
              <h3 className="font-display font-700 uppercase text-[#EEF2FF] text-2xl mb-3 leading-tight">Proven Engagement Systems</h3>
              <p className="font-body text-[#7A8BAA] text-sm leading-relaxed">Battle-tested frameworks that keep your audience active, warm, and primed to buy — day after day, month after month.</p>
              <div className="mt-6 flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-[#FF1F3D] to-transparent opacity-40" />
                <div className="w-2 h-2 bg-[#FF1F3D] rotate-45" />
              </div>
            </div>

            <div className="feature-card p-8 animate-fade-up-3">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-display font-700 uppercase text-[#EEF2FF] text-2xl mb-3 leading-tight">End-to-End Strategy</h3>
              <p className="font-body text-[#7A8BAA] text-sm leading-relaxed">From initial setup to full-scale growth — every decision built around your revenue goals, not vanity metrics.</p>
              <div className="mt-6 flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-[#FF1F3D] to-transparent opacity-40" />
                <div className="w-2 h-2 bg-[#FF1F3D] rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — STEPS */}
      <section className="relative bg-[#080C14] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        {/* Diagonal accent lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute" style={{ top: '10%', left: '-5%', width: '110%', height: '2px', background: 'linear-gradient(90deg, transparent, rgba(255,31,61,0.15), transparent)', transform: 'rotate(-3deg)' }} />
          <div className="absolute" style={{ top: '60%', left: '-5%', width: '110%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,31,61,0.1), transparent)', transform: 'rotate(-3deg)' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#FF1F3D]" />
              <span className="font-display text-sm font-700 tracking-widest text-[#FF1F3D] uppercase">The Process</span>
            </div>
            <h2 className="font-display font-900 uppercase text-[#EEF2FF] leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900 }}>
              From Zero To
              <span className="text-[#FF1F3D]"> Sales Machine</span>
            </h2>
          </div>

          <div className="space-y-8">
            {[
              { num: '01', title: 'Strategy & Architecture', desc: 'We map your revenue goals and design a community structure built to convert — not just collect members.' },
              { num: '02', title: 'Build & Launch', desc: 'Full setup on your platform of choice. Every channel, role, and automation wired for maximum engagement and sales flow.' },
              { num: '03', title: 'Activate & Scale', desc: 'Proven onboarding sequences, content cadences, and conversion triggers that compound over time.' },
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col md:flex-row md:items-center gap-6 p-8" style={{ background: 'linear-gradient(135deg, #0F1520 0%, #0D1829 100%)', border: '1px solid rgba(26,58,107,0.4)', clipPath: i % 2 === 0 ? 'polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%)' : 'polygon(12px 0, 100% 0, 100% 100%, 0 100%)' }}>
                <div className="flex-shrink-0">
                  <div className="font-display font-900 text-[#FF1F3D] opacity-30 leading-none" style={{ fontSize: '5rem', fontWeight: 900 }}>{step.num}</div>
                </div>
                <div className="w-px h-16 bg-gradient-to-b from-[#FF1F3D] to-transparent hidden md:block" />
                <div className="flex-1">
                  <h3 className="font-display font-700 uppercase text-[#EEF2FF] text-2xl md:text-3xl mb-2" style={{ fontWeight: 700 }}>{step.title}</h3>
                  <p className="font-body text-[#7A8BAA] leading-relaxed">{step.desc}</p>
                </div>
                <div className="flex-shrink-0 hidden md:block">
                  <div className="w-3 h-3 bg-[#FF1F3D] rotate-45" style={{ boxShadow: '0 0 12px rgba(255,31,61,0.6)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden py-24 md:py-32" style={{ background: 'linear-gradient(135deg, #0D1829 0%, #080C14 50%, #0F1520 100%)' }}>
        {/* Diagonal red slash */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute" style={{ top: 0, left: '-10%', width: '120%', height: '100%', background: 'linear-gradient(135deg, transparent 45%, rgba(255,31,61,0.04) 45%, rgba(255,31,61,0.04) 55%, transparent 55%)' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF1F3D] to-transparent opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF1F3D] to-transparent opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2" style={{ background: 'rgba(255,31,61,0.1)', border: '1px solid rgba(255,31,61,0.3)', clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}>
            <div className="w-2 h-2 rounded-full bg-[#FF1F3D]" style={{ boxShadow: '0 0 8px #FF1F3D' }} />
            <span className="font-display text-sm font-700 tracking-widest text-[#FF1F3D] uppercase">Ready to convert?</span>
          </div>

          <h2 className="font-display font-900 uppercase text-[#EEF2FF] mb-6 leading-none" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 900 }}>
            Your Community
            <span className="block text-[#FF1F3D]">Should Be Selling</span>
            <span className="block" style={{ WebkitTextStroke: '2px #EEF2FF', color: 'transparent' }}>For You</span>
          </h2>

          <p className="font-body text-[#7A8BAA] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Stop leaving revenue on the table. Let muhibwaqar build you a community that works as hard as you do.
          </p>

          <a href="https://whop.com" className="cta-btn inline-block px-14 py-5 text-xl">
            Get started →
          </a>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            {[
              { val: '22M+', label: 'Members' },
              { val: '$2.8B', label: 'Revenue' },
              { val: '2.4M', label: 'Businesses' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display font-900 text-[#FF1F3D] text-3xl" style={{ fontWeight: 900 }}>{s.val}</div>
                <div className="font-body text-[#7A8BAA] text-xs uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-[#080C14] py-10 px-6 md:px-12" style={{ borderTop: '1px solid rgba(255,31,61,0.15)' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div style={{ width: 20, height: 20, background: '#FF1F3D', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
            <span className="font-display text-base font-bold tracking-widest text-[#EEF2FF] uppercase">muhibwaqar</span>
          </div>
          <p className="font-body text-[#7A8BAA] text-sm">© {new Date().getFullYear()} muhibwaqar. Communities That Convert.</p>
        </div>
      </footer>
    </div>
  );
}