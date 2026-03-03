import { Bebas_Neue, Manrope, Playfair_Display, Source_Sans_3, Anton, DM_Sans, Raleway, Lora } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'], variable: '--font-raleway' });
const lora = Lora({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-lora' });
const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: ['400'], variable: '--font-bebas' });

export default function Page() {
  return (
    <main className={`${raleway.variable} ${lora.variable} ${bebasNeue.variable} min-h-screen overflow-x-hidden`} style={{ background: '#F0EDE8', fontFamily: 'var(--font-raleway), sans-serif' }}>
      <style>{`
        :root {
          --sage: #7A8C6E;
          --sage-light: #A8B89A;
          --sage-dark: #4A5C3E;
          --cream: #F0EDE8;
          --cream-dark: #E4E0D8;
          --ink: #1C1C1A;
          --ink-soft: #3A3A36;
          --red: #C8102E;
          --red-dark: #A00D24;
          --gold: #B8960C;
          --white: #FAFAF8;
        }
        .font-display { font-family: var(--font-raleway), sans-serif; }
        .font-serif { font-family: var(--font-lora), serif; }
        .font-stamp { font-family: var(--font-bebas), sans-serif; }
        .grain-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none;
          z-index: 100;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 128px 128px;
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
        .hero-headline {
          font-family: var(--font-raleway), sans-serif;
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 0.92;
        }
        .section-rule {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--sage), transparent);
        }
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(28,28,26,0.12);
        }
        .cta-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.5s ease;
        }
        .cta-btn:hover::before { left: 100%; }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(200,16,46,0.35); }
        .metric-item {
          border-left: 2px solid var(--sage);
          padding-left: 1rem;
        }
        .organic-shape {
          border-radius: 60% 40% 55% 45% / 45% 55% 40% 60%;
        }
        .nav-link {
          position: relative;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-size: 0.7rem;
          color: var(--ink-soft);
          transition: color 0.2s;
        }
        .pipeline-card {
          background: var(--white);
          border: 1px solid rgba(122,140,110,0.2);
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(28,28,26,0.08);
        }
        .feature-number {
          font-family: var(--font-raleway), sans-serif;
          font-weight: 900;
          font-size: 4rem;
          line-height: 1;
          color: var(--sage-light);
          opacity: 0.4;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        .float-anim { animation: float 6s ease-in-out infinite; }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        .pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .slide-in { animation: slide-in 0.8s ease forwards; }
        .slide-in-delay-1 { animation: slide-in 0.8s ease 0.15s forwards; opacity: 0; }
        .slide-in-delay-2 { animation: slide-in 0.8s ease 0.3s forwards; opacity: 0; }
        .slide-in-delay-3 { animation: slide-in 0.8s ease 0.45s forwards; opacity: 0; }
        .divider-organic {
          height: 2px;
          background: linear-gradient(90deg, var(--red) 0%, var(--sage) 50%, transparent 100%);
          border-radius: 2px;
        }
        .bg-texture {
          background-color: var(--cream);
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(122,140,110,0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(200,16,46,0.04) 0%, transparent 40%),
            radial-gradient(circle at 60% 80%, rgba(184,150,12,0.05) 0%, transparent 40%);
        }
      `}</style>

      <div className="grain-overlay" aria-hidden="true" />

      {/* NAV */}
      <nav className="relative z-50 w-full" style={{ background: 'rgba(240,237,232,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(122,140,110,0.15)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'var(--red)' }}>
              <span className="font-stamp text-white text-sm" style={{ lineHeight: 1 }}>M</span>
            </div>
            <div>
              <span className="font-display font-800 text-sm tracking-widest uppercase" style={{ color: 'var(--ink)', fontWeight: 800, letterSpacing: '0.12em' }}>muhibwaqar</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:block font-display text-xs tracking-widest uppercase" style={{ color: 'var(--sage-dark)', fontWeight: 600 }}>Pipeline. Community. Growth.</span>
            <a
              href="https://muhibwaqar.copm"
              className="cta-btn font-display font-700 text-xs tracking-widest uppercase px-5 py-2.5 rounded-full"
              style={{ background: 'var(--red)', color: 'var(--white)', fontWeight: 700, letterSpacing: '0.1em', textDecoration: 'none' }}
            >
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-texture relative overflow-hidden" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center' }}>
        {/* Decorative organic shape background */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10 organic-shape" style={{ background: 'var(--sage)', transform: 'translate(30%, -20%)' }} aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-8 organic-shape" style={{ background: 'var(--gold)', transform: 'translate(-30%, 30%)', opacity: 0.06 }} aria-hidden="true" />

        <div className="max-w-6xl mx-auto px-6 md:px-10 w-full py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left: Vertical label */}
            <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
              <div className="vertical-text font-display text-xs tracking-widest uppercase" style={{ color: 'var(--sage)', fontWeight: 700, letterSpacing: '0.2em' }}>B2B SaaS Growth</div>
            </div>

            {/* Center: Main headline */}
            <div className="lg:col-span-7 slide-in">
              <div className="mb-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full pulse-dot" style={{ background: 'var(--red)' }} />
                <span className="font-display text-xs tracking-widest uppercase" style={{ color: 'var(--sage-dark)', fontWeight: 700, letterSpacing: '0.18em' }}>Community-Led Revenue</span>
              </div>

              <h1 className="hero-headline mb-8" style={{ color: 'var(--ink)' }}>
                <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl">Build the</span>
                <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl" style={{ color: 'var(--red)', WebkitTextStroke: '0px' }}>Pipeline</span>
                <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl">That Builds</span>
                <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl" style={{ color: 'var(--sage-dark)' }}>Itself.</span>
              </h1>

              <div className="divider-organic mb-8" style={{ width: '60%' }} />

              <p className="font-serif text-lg md:text-xl mb-10 max-w-xl" style={{ color: 'var(--ink-soft)', lineHeight: 1.75, fontWeight: 400 }}>
                muhibwaqar works with B2B SaaS communities to turn relationships into repeatable revenue — strategy, systems, and execution in one place.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <a
                  href="https://muhibwaqar.copm"
                  className="cta-btn font-display font-700 text-sm tracking-widest uppercase px-8 py-4 rounded-full inline-block"
                  style={{ background: 'var(--red)', color: 'var(--white)', fontWeight: 700, letterSpacing: '0.12em', textDecoration: 'none' }}
                >
                  Get started
                </a>
                <div className="flex items-center gap-3 py-4">
                  <div className="flex -space-x-2">
                    {['#7A8C6E','#C8102E','#B8960C'].map((c, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2" style={{ background: c, borderColor: 'var(--cream)' }} />
                    ))}
                  </div>
                  <span className="font-display text-xs" style={{ color: 'var(--sage-dark)', fontWeight: 600 }}>Trusted by SaaS founders</span>
                </div>
              </div>
            </div>

            {/* Right: Floating metrics card */}
            <div className="lg:col-span-4 slide-in-delay-2">
              <div className="float-anim">
                <div className="pipeline-card p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-xs tracking-widest uppercase" style={{ color: 'var(--sage)', fontWeight: 700, letterSpacing: '0.15em' }}>Pipeline Velocity</span>
                    <div className="w-2 h-2 rounded-full pulse-dot" style={{ background: 'var(--sage)' }} />
                  </div>

                  <div className="space-y-5">
                    <div className="metric-item">
                      <div className="font-display font-900 text-3xl" style={{ color: 'var(--ink)', fontWeight: 900 }}>3.2×</div>
                      <div className="font-display text-xs" style={{ color: 'var(--sage-dark)', fontWeight: 600, letterSpacing: '0.08em' }}>Pipeline multiplier</div>
                    </div>
                    <div className="metric-item" style={{ borderColor: 'var(--red)' }}>
                      <div className="font-display font-900 text-3xl" style={{ color: 'var(--ink)', fontWeight: 900 }}>68%</div>
                      <div className="font-display text-xs" style={{ color: 'var(--sage-dark)', fontWeight: 600, letterSpacing: '0.08em' }}>Faster deal velocity</div>
                    </div>
                    <div className="metric-item" style={{ borderColor: 'var(--gold)' }}>
                      <div className="font-display font-900 text-3xl" style={{ color: 'var(--ink)', fontWeight: 900 }}>$2.4M</div>
                      <div className="font-display text-xs" style={{ color: 'var(--sage-dark)', fontWeight: 600, letterSpacing: '0.08em' }}>Community-sourced ARR</div>
                    </div>
                  </div>

                  <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(122,140,110,0.2)' }}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-display text-xs tracking-widest uppercase" style={{ color: 'var(--sage)', fontWeight: 700 }}>Deal Flow</span>
                    </div>
                    <div className="flex gap-1 items-end h-12">
                      {[40, 55, 45, 70, 60, 85, 75, 95].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 7 ? 'var(--red)' : i === 5 ? 'var(--sage)' : 'var(--sage-light)', opacity: i === 7 ? 1 : 0.6 + i * 0.05 }} />
                      ))}
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="font-display text-xs" style={{ color: 'var(--sage)', fontWeight: 500 }}>Q1</span>
                      <span className="font-display text-xs" style={{ color: 'var(--red)', fontWeight: 700 }}>Q4 ↑</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom organic divider */}
        <div className="absolute bottom-0 left-0 right-0" style={{ height: '3px', background: 'linear-gradient(90deg, var(--sage-dark) 0%, var(--red) 40%, var(--gold) 70%, transparent 100%)' }} />
      </section>

      {/* FEATURES SECTION */}
      <section style={{ background: 'var(--ink)', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle texture */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 10% 50%, rgba(122,140,110,0.08) 0%, transparent 50%), radial-gradient(circle at 90% 30%, rgba(200,16,46,0.06) 0%, transparent 40%)' }} aria-hidden="true" />
        
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="w-6 h-px" style={{ background: 'var(--red)' }} />
                <span className="font-display text-xs tracking-widest uppercase" style={{ color: 'var(--sage-light)', fontWeight: 700, letterSpacing: '0.18em' }}>How it works</span>
              </div>
              <h2 className="font-display font-900 text-4xl md:text-5xl lg:text-6xl" style={{ color: 'var(--white)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
                Strategy. Systems.<br />
                <span style={{ color: 'var(--sage-light)' }}>Execution.</span>
              </h2>
            </div>
            <p className="font-serif text-base md:text-lg max-w-sm" style={{ color: 'rgba(250,250,248,0.55)', lineHeight: 1.7 }}>
              Three pillars that compound into a self-sustaining growth engine for your B2B SaaS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Community-Led Pipeline',
                body: 'Community-led pipeline strategies that compound over time — turning your network into a predictable, scalable revenue source.',
                accent: 'var(--sage)',
                icon: '◈'
              },
              {
                num: '02',
                title: 'Positioning & Outreach',
                body: 'B2B SaaS positioning and outreach built for real conversion — messaging that resonates, sequences that land, deals that close.',
                accent: 'var(--red)',
                icon: '◎'
              },
              {
                num: '03',
                title: 'Hands-On Partnership',
                body: 'Hands-on partnership from first touchpoint to closed deal — we work alongside you, not just advise from the sidelines.',
                accent: 'var(--gold)',
                icon: '◉'
              }
            ].map((f, i) => (
              <div key={i} className="card-hover p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-start justify-between mb-6">
                  <span className="feature-number" style={{ color: f.accent, opacity: 0.35, fontFamily: 'var(--font-raleway)', fontWeight: 900 }}>{f.num}</span>
                  <span className="text-2xl" style={{ color: f.accent }}>{f.icon}</span>
                </div>
                <div className="w-8 h-0.5 mb-5 rounded" style={{ background: f.accent }} />
                <h3 className="font-display font-800 text-xl mb-4" style={{ color: 'var(--white)', fontWeight: 800, letterSpacing: '-0.01em' }}>{f.title}</h3>
                <p className="font-serif text-sm" style={{ color: 'rgba(250,250,248,0.55)', lineHeight: 1.75 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY / MIDDLE SECTION */}
      <section style={{ background: 'var(--cream-dark)', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(122,140,110,0.1) 0%, transparent 60%)' }} aria-hidden="true" />
        
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="w-6 h-px" style={{ background: 'var(--red)' }} />
                <span className="font-display text-xs tracking-widest uppercase" style={{ color: 'var(--sage-dark)', fontWeight: 700, letterSpacing: '0.18em' }}>The muhibwaqar approach</span>
              </div>
              <h2 className="font-display font-900 text-4xl md:text-5xl" style={{ color: 'var(--ink)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.05 }}>
                Relationships are the<br />
                <span style={{ color: 'var(--red)' }}>real pipeline.</span>
              </h2>
              <div className="divider-organic my-8" style={{ width: '40%' }} />
              <p className="font-serif text-lg mb-6" style={{ color: 'var(--ink-soft)', lineHeight: 1.8 }}>
                Most B2B SaaS companies chase cold outreach and paid acquisition. We build something different — community ecosystems where trust compounds, referrals flow naturally, and deals close faster because relationships came first.
              </p>
              <p className="font-serif text-base" style={{ color: 'var(--ink-soft)', lineHeight: 1.8, opacity: 0.75 }}>
                Pipeline. Community. Growth. — not three separate things, but one integrated motion that gets stronger every quarter.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Community Trust Score', value: 94, color: 'var(--sage)' },
                { label: 'Referral Pipeline Share', value: 71, color: 'var(--red)' },
                { label: 'Deal Close Rate', value: 58, color: 'var(--gold)' },
              ].map((stat, i) => (
                <div key={i} className="pipeline-card p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-display text-sm" style={{ color: 'var(--ink)', fontWeight: 700, letterSpacing: '0.05em' }}>{stat.label}</span>
                    <span className="font-display font-900 text-2xl" style={{ color: stat.color, fontWeight: 900 }}>{stat.value}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full" style={{ background: 'var(--cream-dark)' }}>
                    <div className="h-2 rounded-full" style={{ width: `${stat.value}%`, background: stat.color, transition: 'width 1s ease' }} />
                  </div>
                </div>
              ))}

              <div className="pipeline-card p-6" style={{ background: 'var(--ink)', border: '1px solid rgba(122,140,110,0.2)' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--red)' }}>
                    <span className="font-stamp text-white text-xl">MW</span>
                  </div>
                  <div>
                    <p className="font-serif text-sm italic mb-1" style={{ color: 'rgba(250,250,248,0.8)', lineHeight: 1.6 }}>
                      "The pipeline doesn't just grow — it compounds."
                    </p>
                    <span className="font-display text-xs" style={{ color: 'var(--sage-light)', fontWeight: 700, letterSpacing: '0.1em' }}>muhibwaqar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ background: 'var(--sage-dark)', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(200,16,46,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 30%, rgba(184,150,12,0.1) 0%, transparent 50%)' }} aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0" style={{ height: '2px', background: 'linear-gradient(90deg, var(--red), var(--gold), var(--sage-light))' }} />
        
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center relative z-10">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="w-8 h-px" style={{ background: 'rgba(250,250,248,0.3)' }} />
            <span className="font-display text-xs tracking-widest uppercase" style={{ color: 'rgba(250,250,248,0.6)', fontWeight: 700, letterSpacing: '0.2em' }}>Ready to compound?</span>
            <div className="w-8 h-px" style={{ background: 'rgba(250,250,248,0.3)' }} />
          </div>
          
          <h2 className="font-display font-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8" style={{ color: 'var(--white)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.0 }}>
            Your pipeline is<br />
            <span style={{ color: 'rgba(250,250,248,0.4)' }}>waiting to be built.</span>
          </h2>
          
          <p className="font-serif text-lg md:text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(250,250,248,0.65)', lineHeight: 1.75 }}>
            Join B2B SaaS founders who've turned community into their most powerful growth channel.
          </p>

          <a
            href="https://muhibwaqar.copm"
            className="cta-btn font-display font-700 text-base tracking-widest uppercase px-12 py-5 rounded-full inline-block"
            style={{ background: 'var(--red)', color: 'var(--white)', fontWeight: 700, letterSpacing: '0.12em', textDecoration: 'none', fontSize: '0.9rem' }}
          >
            Get started
          </a>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            {[
              { val: 'Pipeline.', desc: 'Built to compound' },
              { val: 'Community.', desc: 'Relationships that convert' },
              { val: 'Growth.', desc: 'Repeatable revenue' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="font-stamp text-2xl" style={{ color: 'rgba(250,250,248,0.9)', letterSpacing: '0.05em' }}>{item.val}</div>
                <div className="font-display text-xs" style={{ color: 'rgba(250,250,248,0.45)', fontWeight: 600, letterSpacing: '0.1em' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: 'var(--ink)', borderTop: '1px solid rgba(122,140,110,0.15)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: 'var(--red)' }}>
                <span className="font-stamp text-white text-xs" style={{ lineHeight: 1 }}>M</span>
              </div>
              <span className="font-display font-800 text-sm tracking-widest uppercase" style={{ color: 'var(--white)', fontWeight: 800, letterSpacing: '0.12em' }}>muhibwaqar</span>
            </div>
            <div className="text-center">
              <p className="font-display text-xs tracking-widest uppercase" style={{ color: 'rgba(250,250,248,0.35)', fontWeight: 600, letterSpacing: '0.15em' }}>Pipeline. Community. Growth.</p>
            </div>
            <div className="text-right">
              <p className="font-display text-xs" style={{ color: 'rgba(250,250,248,0.3)', fontWeight: 500 }}>© 2024 muhibwaqar. All rights reserved.</p>
              <p className="font-display text-xs mt-1" style={{ color: 'rgba(250,250,248,0.2)', fontWeight: 400 }}>Working with communities to build B2B SaaS growth.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}