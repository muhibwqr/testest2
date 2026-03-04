"use client";

import { Bebas_Neue, Manrope } from 'next/font/google';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export default function MuhibVariant4() {
  return (
    <div className={`${bebas.variable} ${manrope.variable} min-h-screen bg-[#0B0F1A] text-white overflow-x-hidden`}>
      <style>{`
        :root {
          --font-display: var(--font-bebas);
          --font-body: var(--font-manrope);
        }
        * { box-sizing: border-box; }
        body { margin: 0; }
        .font-display { font-family: var(--font-display), sans-serif; }
        .font-body { font-family: var(--font-body), sans-serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulseGold {
          0%, 100% { box-shadow: 0 0 0 0 rgba(212,175,55,0.3); }
          50% { box-shadow: 0 0 0 8px rgba(212,175,55,0); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-headline { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
        .hero-sub { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s both; }
        .hero-cta { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s both; }
        .hero-card { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s both; }
        .nav-anim { animation: fadeIn 0.6s ease 0s both; }
        .feature-1 { animation: slideRight 0.7s cubic-bezier(0.16,1,0.3,1) 0.6s both; }
        .feature-2 { animation: slideRight 0.7s cubic-bezier(0.16,1,0.3,1) 0.75s both; }
        .feature-3 { animation: slideRight 0.7s cubic-bezier(0.16,1,0.3,1) 0.9s both; }
        .cta-pulse { animation: pulseGold 2.5s ease-in-out infinite; }
        .grain::after {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.035;
        }
        .gold-line {
          background: linear-gradient(90deg, #D4AF37 0%, #F5E27A 50%, #D4AF37 100%);
        }
        .navy-card {
          background: linear-gradient(135deg, #0F1829 0%, #131E30 100%);
          border: 1px solid rgba(212,175,55,0.18);
        }
        .metric-value {
          background: linear-gradient(135deg, #D4AF37, #F5E27A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cta-btn {
          background: linear-gradient(135deg, #D4AF37 0%, #C9A227 100%);
          color: #0B0F1A;
          transition: all 0.25s ease;
        }
        .cta-btn:hover {
          background: linear-gradient(135deg, #F5E27A 0%, #D4AF37 100%);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(212,175,55,0.35);
        }
        .feature-card {
          background: linear-gradient(135deg, #0F1829 0%, #111C2E 100%);
          border: 1px solid rgba(212,175,55,0.12);
          transition: all 0.3s ease;
        }
        .feature-card:hover {
          border-color: rgba(212,175,55,0.35);
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }
        .diagonal-accent {
          position: absolute;
          top: 0;
          right: 0;
          width: 45%;
          height: 100%;
          background: linear-gradient(135deg, transparent 40%, rgba(212,175,55,0.04) 100%);
          pointer-events: none;
        }
        .pipeline-bar {
          height: 6px;
          border-radius: 3px;
          background: linear-gradient(90deg, #D4AF37, #F5E27A);
        }
        .pipeline-bar-dim {
          height: 6px;
          border-radius: 3px;
          background: rgba(212,175,55,0.2);
        }
        .stage-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #D4AF37;
          flex-shrink: 0;
        }
        .stage-dot-dim {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(212,175,55,0.25);
          flex-shrink: 0;
        }
        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent);
        }
        .proof-badge {
          background: rgba(212,175,55,0.08);
          border: 1px solid rgba(212,175,55,0.2);
          border-radius: 100px;
        }
      `}</style>

      <div className="grain">
        {/* NAV */}
        <nav className="nav-anim fixed top-0 left-0 right-0 z-50" style={{background: 'rgba(11,15,26,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(212,175,55,0.1)'}}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{background: 'linear-gradient(135deg, #D4AF37, #C9A227)'}}>
                <span className="font-display text-[#0B0F1A] text-lg leading-none">M</span>
              </div>
              <span className="font-display text-white text-2xl tracking-widest">MUHIB</span>
            </div>
            <a
              href="https://win.co"
              className="cta-btn font-body font-bold text-sm px-6 py-2.5 rounded-full"
            >
              Get started
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section className="relative min-h-screen flex items-center pt-16" style={{background: 'linear-gradient(160deg, #0B0F1A 0%, #0D1220 50%, #0B0F1A 100%)'}}>
          <div className="diagonal-accent" />

          {/* Decorative gold orb */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)'}} />
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full pointer-events-none" style={{background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)'}} />

          <div className="max-w-7xl mx-auto px-6 md:px-10 w-full py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* LEFT */}
              <div>
                {/* Badge */}
                <div className="hero-headline inline-flex items-center gap-2 proof-badge px-4 py-2 mb-8">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  <span className="font-body text-xs font-semibold tracking-widest uppercase" style={{color: '#D4AF37'}}>Sales Infrastructure</span>
                </div>

                <h1 className="hero-headline font-display text-[72px] md:text-[96px] lg:text-[108px] leading-none tracking-wider text-white mb-6">
                  WE BUILD
                  <br />
                  <span className="metric-value">PIPELINES</span>
                  <br />
                  THAT CONVERT
                </h1>

                <p className="hero-sub font-body text-base md:text-lg leading-relaxed mb-10 max-w-lg" style={{color: '#8A9BB5'}}>
                  Muhib engineers end-to-end sales systems — from cold outreach to closed deals — so your team stops guessing and starts winning.
                </p>

                <div className="hero-cta flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <a
                    href="https://win.co"
                    className="cta-btn cta-pulse font-body font-bold text-base px-10 py-4 rounded-full inline-block"
                  >
                    Get started
                  </a>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {['#4A6FA5','#6B8CBE','#3D5A8A'].map((c, i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0B0F1A]" style={{background: c}} />
                      ))}
                    </div>
                    <span className="font-body text-sm" style={{color: '#8A9BB5'}}>Trusted by growth teams</span>
                  </div>
                </div>
              </div>

              {/* RIGHT — Pipeline Preview Card */}
              <div className="hero-card relative">
                <div className="navy-card rounded-2xl p-6 md:p-8" style={{boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.1)'}}>
                  {/* Card header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="font-body text-xs font-semibold tracking-widest uppercase mb-1" style={{color: '#D4AF37'}}>Live Pipeline</p>
                      <p className="font-display text-3xl tracking-wider text-white">Q4 DASHBOARD</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)'}}>
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37]" style={{animation: 'pulseGold 2s infinite'}} />
                      <span className="font-body text-xs font-semibold" style={{color: '#D4AF37'}}>LIVE</span>
                    </div>
                  </div>

                  {/* Big metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="rounded-xl p-4" style={{background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.1)'}}>
                      <p className="font-body text-xs mb-1" style={{color: '#8A9BB5'}}>Pipeline Value</p>
                      <p className="font-display text-3xl metric-value tracking-wider">$2.3M</p>
                    </div>
                    <div className="rounded-xl p-4" style={{background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.1)'}}>
                      <p className="font-body text-xs mb-1" style={{color: '#8A9BB5'}}>Deals Closed</p>
                      <p className="font-display text-3xl metric-value tracking-wider">47</p>
                    </div>
                  </div>

                  {/* Pipeline stages */}
                  <div className="space-y-3 mb-6">
                    <p className="font-body text-xs font-semibold tracking-widest uppercase" style={{color: '#8A9BB5'}}>Pipeline Stages</p>
                    {[
                      { label: 'Prospecting', count: '124 leads', pct: 100 },
                      { label: 'Qualified', count: '67 leads', pct: 54 },
                      { label: 'Proposal Sent', count: '31 leads', pct: 25 },
                      { label: 'Closed Won', count: '47 deals', pct: 38, gold: true },
                    ].map((stage, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <div className={stage.gold ? 'stage-dot' : 'stage-dot-dim'} />
                            <span className="font-body text-xs" style={{color: stage.gold ? '#D4AF37' : '#8A9BB5'}}>{stage.label}</span>
                          </div>
                          <span className="font-body text-xs font-semibold" style={{color: stage.gold ? '#D4AF37' : '#8A9BB5'}}>{stage.count}</span>
                        </div>
                        <div className="pipeline-bar-dim rounded-full overflow-hidden">
                          <div className="pipeline-bar" style={{width: `${stage.pct}%`, opacity: stage.gold ? 1 : 0.5}} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom stat */}
                  <div className="flex items-center justify-between pt-4" style={{borderTop: '1px solid rgba(212,175,55,0.1)'}}>
                    <span className="font-body text-xs" style={{color: '#8A9BB5'}}>Avg. close rate</span>
                    <span className="font-display text-xl metric-value tracking-wider">38% ↑</span>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 navy-card rounded-xl px-4 py-3 flex items-center gap-3" style={{boxShadow: '0 20px 40px rgba(0,0,0,0.4)'}}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{background: 'rgba(212,175,55,0.15)'}}>
                    <span className="text-sm">✦</span>
                  </div>
                  <div>
                    <p className="font-body text-xs font-bold text-white">47 deals closed</p>
                    <p className="font-body text-xs" style={{color: '#8A9BB5'}}>this month alone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="section-divider" />

        {/* FEATURES SECTION */}
        <section className="py-24 md:py-32" style={{background: 'linear-gradient(180deg, #0B0F1A 0%, #0D1220 100%)'}}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <p className="font-body text-xs font-semibold tracking-widest uppercase mb-4" style={{color: '#D4AF37'}}>How We Do It</p>
              <h2 className="font-display text-[56px] md:text-[72px] tracking-wider text-white leading-none">
                THE MUHIB
                <br />
                <span className="metric-value">SYSTEM</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'NICHE-TARGETED PROSPECTING',
                  body: 'Puts you in front of buyers who are ready — not just anyone with a pulse. Precision targeting that fills your pipeline with qualified opportunities.',
                  icon: '◎',
                  cls: 'feature-1',
                },
                {
                  num: '02',
                  title: 'CONVERSION-ENGINEERED SEQUENCES',
                  body: 'Turn cold leads into booked calls with sequences built around buyer psychology — not spray-and-pray email blasts.',
                  icon: '⟶',
                  cls: 'feature-2',
                },
                {
                  num: '03',
                  title: 'SCALABLE PIPELINE INFRASTRUCTURE',
                  body: 'Built to scale without adding headcount. Systems that compound — so your pipeline grows while your overhead stays flat.',
                  icon: '◈',
                  cls: 'feature-3',
                },
              ].map((f, i) => (
                <div key={i} className={`feature-card rounded-2xl p-8 ${f.cls}`}>
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-display text-5xl metric-value tracking-wider">{f.num}</span>
                    <span className="text-2xl" style={{color: 'rgba(212,175,55,0.4)'}}>{f.icon}</span>
                  </div>
                  <div className="gold-line w-12 h-0.5 mb-6 rounded-full" />
                  <h3 className="font-display text-xl tracking-wider text-white mb-4 leading-tight">{f.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{color: '#8A9BB5'}}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="section-divider" />

        {/* PROOF / STATS SECTION */}
        <section className="py-24 md:py-32" style={{background: '#0B0F1A'}}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="font-body text-xs font-semibold tracking-widest uppercase mb-4" style={{color: '#D4AF37'}}>Results That Speak</p>
                <h2 className="font-display text-[52px] md:text-[68px] tracking-wider text-white leading-none mb-6">
                  STOP GUESSING.
                  <br />
                  <span className="metric-value">START WINNING.</span>
                </h2>
                <p className="font-body text-base leading-relaxed mb-10" style={{color: '#8A9BB5'}}>
                  Most sales teams waste 60% of their time on leads that will never close. Muhib builds the infrastructure that puts the right conversations in front of your team — every time.
                </p>
                <a
                  href="https://win.co"
                  className="cta-btn font-body font-bold text-base px-10 py-4 rounded-full inline-block"
                >
                  Get started
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '$2.3M', label: 'Average pipeline built in 90 days' },
                  { value: '3.8×', label: 'Average ROI for clients in year one' },
                  { value: '47', label: 'Deals closed per client per quarter' },
                  { value: '60%', label: 'Reduction in time wasted on bad leads' },
                ].map((stat, i) => (
                  <div key={i} className="navy-card rounded-2xl p-6 text-center">
                    <p className="font-display text-4xl md:text-5xl metric-value tracking-wider mb-2">{stat.value}</p>
                    <p className="font-body text-xs leading-relaxed" style={{color: '#8A9BB5'}}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="section-divider" />

        {/* CTA BANNER */}
        <section className="py-24 md:py-32 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0D1220 0%, #0F1829 100%)'}}>
          <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.07) 0%, transparent 65%)'}} />
          <div className="absolute top-0 left-0 right-0 h-px gold-line opacity-30" />
          <div className="absolute bottom-0 left-0 right-0 h-px gold-line opacity-30" />

          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative">
            <div className="inline-flex items-center gap-2 proof-badge px-4 py-2 mb-8">
              <span className="font-body text-xs font-semibold tracking-widest uppercase" style={{color: '#D4AF37'}}>Ready to Scale?</span>
            </div>
            <h2 className="font-display text-[64px] md:text-[96px] lg:text-[112px] tracking-wider text-white leading-none mb-6">
              BUILD YOUR
              <br />
              <span className="metric-value">PIPELINE</span>
            </h2>
            <p className="font-body text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{color: '#8A9BB5'}}>
              Let Muhib engineer the sales system your team deserves. From first touch to closed deal — we handle the infrastructure so you can focus on closing.
            </p>
            <a
              href="https://win.co"
              className="cta-btn cta-pulse font-body font-bold text-lg px-14 py-5 rounded-full inline-block"
            >
              Get started
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10" style={{background: '#080C15', borderTop: '1px solid rgba(212,175,55,0.08)'}}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm flex items-center justify-center" style={{background: 'linear-gradient(135deg, #D4AF37, #C9A227)'}}>
                <span className="font-display text-[#0B0F1A] text-base leading-none">M</span>
              </div>
              <span className="font-display text-white text-xl tracking-widest">MUHIB</span>
            </div>
            <p className="font-body text-xs" style={{color: '#4A5568'}}>© {new Date().getFullYear()} Muhib. We build pipelines that convert.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}