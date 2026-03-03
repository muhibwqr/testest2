import { Anton, DM_Sans } from 'next/font/google';

const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });

export default function Page() {
  return (
    <main className={`${anton.variable} ${dmSans.variable} min-h-screen bg-[#F5F0E8] text-[#0F0F0F] overflow-x-hidden`}>
      <style>{`
        :root {
          --font-anton: 'Anton', sans-serif;
          --font-dm-sans: 'DM Sans', sans-serif;
        }
        .font-display { font-family: var(--font-anton); }
        .font-body { font-family: var(--font-dm-sans); }
        .offset-card {
          box-shadow: 6px 6px 0px #1A1A1A;
        }
        .offset-card-orange {
          box-shadow: 6px 6px 0px #FF6B00;
        }
        .offset-card-yellow {
          box-shadow: 6px 6px 0px #FFD600;
        }
        .btn-brutal {
          box-shadow: 4px 4px 0px #1A1A1A;
          transition: box-shadow 0.1s, transform 0.1s;
        }
        .btn-brutal:hover {
          box-shadow: 2px 2px 0px #1A1A1A;
          transform: translate(2px, 2px);
        }
        .btn-brutal:active {
          box-shadow: 0px 0px 0px #1A1A1A;
          transform: translate(4px, 4px);
        }
        .ticker-track {
          display: flex;
          animation: ticker 18s linear infinite;
          width: max-content;
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .diagonal-stripe {
          background-image: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 6px,
            #FFD600 6px,
            #FFD600 12px
          );
        }
        .noise-overlay::after {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 9999;
          opacity: 0.4;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(2deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .float-anim { animation: float 4s ease-in-out infinite; }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .slide-in { animation: slideIn 0.6s ease forwards; }
        .slide-in-2 { animation: slideIn 0.6s 0.15s ease forwards; opacity: 0; }
        .slide-in-3 { animation: slideIn 0.6s 0.3s ease forwards; opacity: 0; }
      `}</style>

      <div className="noise-overlay">

        {/* NAV */}
        <nav className="relative z-50 border-b-4 border-[#1A1A1A] bg-[#F5F0E8]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#FF6B00] border-2 border-[#1A1A1A] flex items-center justify-center" style={{boxShadow:'2px 2px 0 #1A1A1A'}}>
                <span className="font-display text-white text-xs leading-none">M</span>
              </div>
              <span className="font-display text-[#1A1A1A] text-xl tracking-wide">MUHIBWAQAR</span>
            </div>
            <a
              href="https://muhibwaqar.copm"
              className="btn-brutal font-body font-700 bg-[#FF6B00] text-white border-2 border-[#1A1A1A] px-5 py-2 text-sm font-bold uppercase tracking-wider"
            >
              Get Started
            </a>
          </div>
        </nav>

        {/* TICKER STRIP */}
        <div className="border-b-4 border-[#1A1A1A] bg-[#FFD600] overflow-hidden py-2">
          <div className="ticker-track">
            {Array(8).fill(null).map((_, i) => (
              <span key={i} className="font-display text-[#1A1A1A] text-sm tracking-widest mx-8 whitespace-nowrap">
                PIPELINE &nbsp;·&nbsp; COMMUNITY &nbsp;·&nbsp; GROWTH &nbsp;·&nbsp; B2B SAAS &nbsp;·&nbsp; REPEATABLE REVENUE &nbsp;·&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* HERO */}
        <section className="relative border-b-4 border-[#1A1A1A] overflow-hidden">
          {/* Diagonal stripe accent top-right */}
          <div className="absolute top-0 right-0 w-48 h-48 diagonal-stripe opacity-60 border-l-4 border-b-4 border-[#1A1A1A]" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-0 md:pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">

              {/* LEFT: Headline */}
              <div className="lg:col-span-7 relative">
                {/* Orange label tag */}
                <div className="inline-flex items-center gap-2 bg-[#1A1A1A] text-[#FFD600] px-3 py-1 mb-6 border-2 border-[#1A1A1A] slide-in">
                  <span className="w-2 h-2 bg-[#FF6B00] rounded-full"></span>
                  <span className="font-body text-xs font-bold uppercase tracking-widest">B2B SaaS Growth Partner</span>
                </div>

                <h1 className="font-display text-[#1A1A1A] leading-none uppercase slide-in-2">
                  <span className="block text-[clamp(64px,12vw,140px)] leading-none">BUILD</span>
                  <span className="block text-[clamp(64px,12vw,140px)] leading-none relative">
                    THE
                    <span className="absolute -bottom-1 left-0 w-full h-3 bg-[#FF6B00] -z-10"></span>
                  </span>
                  <span className="block text-[clamp(64px,12vw,140px)] leading-none">PIPELINE</span>
                  <div className="flex items-center gap-4">
                    <span className="block text-[clamp(64px,12vw,140px)] leading-none text-[#FF6B00]">THAT</span>
                  </div>
                  <span className="block text-[clamp(64px,12vw,140px)] leading-none">BUILDS</span>
                  <div className="flex items-center gap-4">
                    <div className="w-16 md:w-24 h-4 md:h-6 bg-[#FFD600] border-2 border-[#1A1A1A] flex-shrink-0"></div>
                    <span className="block text-[clamp(64px,12vw,140px)] leading-none">ITSELF</span>
                  </div>
                </h1>

                <div className="mt-8 mb-0 flex flex-col sm:flex-row items-start gap-4 slide-in-3">
                  <a
                    href="https://muhibwaqar.copm"
                    className="btn-brutal font-body font-bold bg-[#FF6B00] text-white border-2 border-[#1A1A1A] px-8 py-4 text-base uppercase tracking-wider whitespace-nowrap"
                  >
                    Get Started →
                  </a>
                  <div className="font-body text-sm text-[#1A1A1A] opacity-60 pt-2 max-w-xs">
                    Strategy, systems, and execution — in one place.
                  </div>
                </div>
              </div>

              {/* RIGHT: Floating metrics card */}
              <div className="lg:col-span-5 flex items-end justify-center lg:justify-end pt-8 lg:pt-0 pb-0">
                <div className="relative w-full max-w-sm">
                  {/* Main card */}
                  <div className="bg-white border-4 border-[#1A1A1A] offset-card p-6 float-anim">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display text-[#1A1A1A] text-lg tracking-wide">PIPELINE METRICS</span>
                      <div className="w-3 h-3 bg-[#FF6B00] border-2 border-[#1A1A1A]"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-2 border-[#1A1A1A] p-3 bg-[#F5F0E8]">
                        <span className="font-body text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] opacity-60">Pipeline Velocity</span>
                        <span className="font-display text-[#FF6B00] text-2xl">+340%</span>
                      </div>
                      <div className="flex items-center justify-between border-2 border-[#1A1A1A] p-3 bg-[#F5F0E8]">
                        <span className="font-body text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] opacity-60">Community Deals</span>
                        <span className="font-display text-[#1A1A1A] text-2xl">127</span>
                      </div>
                      <div className="flex items-center justify-between border-2 border-[#1A1A1A] p-3 bg-[#FFD600]">
                        <span className="font-body text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] opacity-60">Avg. Close Rate</span>
                        <span className="font-display text-[#1A1A1A] text-2xl">68%</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t-2 border-[#1A1A1A]">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {[80, 60, 90, 70, 100, 85, 95].map((h, i) => (
                            <div key={i} className="w-4 border-2 border-[#1A1A1A]" style={{height: `${h * 0.4}px`, background: i === 6 ? '#FF6B00' : i === 4 ? '#FFD600' : '#1A1A1A'}}></div>
                          ))}
                        </div>
                        <span className="font-body text-xs text-[#1A1A1A] opacity-50 ml-2">7-week trend</span>
                      </div>
                    </div>
                  </div>

                  {/* Small floating tag */}
                  <div className="absolute -top-4 -left-4 bg-[#FFD600] border-2 border-[#1A1A1A] px-3 py-1" style={{boxShadow:'3px 3px 0 #1A1A1A', transform:'rotate(-3deg)'}}>
                    <span className="font-display text-[#1A1A1A] text-sm tracking-wide">LIVE DATA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom border accent */}
          <div className="mt-12 h-4 bg-[#1A1A1A] w-full"></div>
        </section>

        {/* SUBHEAD BAND */}
        <section className="bg-[#1A1A1A] border-b-4 border-[#FF6B00] py-8 md:py-10">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <p className="font-body text-[#F5F0E8] text-lg md:text-xl leading-relaxed">
                muhibwaqar works with B2B SaaS communities to turn relationships into repeatable revenue — strategy, systems, and execution in one place.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Strategy', 'Systems', 'Execution'].map((tag, i) => (
                  <div key={i} className="border-2 border-[#FF6B00] px-4 py-2">
                    <span className="font-display text-[#FF6B00] text-lg tracking-wider">{tag.toUpperCase()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-16 md:py-24 border-b-4 border-[#1A1A1A]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-1 w-12 bg-[#FF6B00]"></div>
                <span className="font-body text-xs font-bold uppercase tracking-widest text-[#FF6B00]">What We Do</span>
              </div>
              <h2 className="font-display text-[#1A1A1A] text-[clamp(40px,7vw,80px)] leading-none uppercase">HOW IT<br/>WORKS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[#1A1A1A]">
              {[
                {
                  num: '01',
                  title: 'COMMUNITY-LED PIPELINE',
                  body: 'Community-led pipeline strategies that compound over time — turning warm relationships into qualified opportunities at scale.',
                  accent: '#FF6B00',
                  bg: '#FFFFFF',
                },
                {
                  num: '02',
                  title: 'POSITIONING & OUTREACH',
                  body: 'B2B SaaS positioning and outreach built for real conversion — not vanity metrics. Every message engineered to move deals forward.',
                  accent: '#FFD600',
                  bg: '#1A1A1A',
                  light: true,
                },
                {
                  num: '03',
                  title: 'HANDS-ON PARTNERSHIP',
                  body: 'Hands-on partnership from first touchpoint to closed deal. We work alongside your team, not just advise from the sidelines.',
                  accent: '#FF6B00',
                  bg: '#FFFFFF',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-8 border-r-2 last:border-r-0 border-[#1A1A1A] relative overflow-hidden group`}
                  style={{background: item.bg}}
                >
                  {/* Number */}
                  <div className="font-display text-[80px] leading-none mb-4" style={{color: item.light ? item.accent : '#F5F0E8', opacity: item.light ? 1 : 0.08}}>
                    {item.num}
                  </div>
                  {/* Accent bar */}
                  <div className="h-1 w-12 mb-4" style={{background: item.accent}}></div>
                  <h3 className="font-display text-xl md:text-2xl leading-tight mb-4 uppercase" style={{color: item.light ? '#F5F0E8' : '#1A1A1A'}}>
                    {item.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{color: item.light ? 'rgba(245,240,232,0.7)' : '#555'}}>
                    {item.body}
                  </p>
                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-t-2 border-l-2" style={{borderColor: item.accent}}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROOF / NUMBERS SECTION */}
        <section className="bg-[#FF6B00] border-b-4 border-[#1A1A1A] py-16 md:py-20 relative overflow-hidden">
          {/* BG text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <span className="font-display text-[200px] text-white opacity-5 whitespace-nowrap select-none">GROWTH</span>
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
              {[
                { stat: '3X', label: 'Average pipeline growth in 90 days' },
                { stat: '60+', label: 'B2B SaaS communities activated' },
                { stat: '100%', label: 'Hands-on execution, zero fluff' },
              ].map((item, i) => (
                <div key={i} className={`text-center md:text-left ${i < 2 ? 'md:border-r-4 md:border-[#1A1A1A]' : ''} md:px-12 first:pl-0`}>
                  <div className="font-display text-[clamp(60px,10vw,100px)] text-white leading-none">{item.stat}</div>
                  <div className="font-body text-white text-sm md:text-base mt-2 opacity-80 max-w-xs mx-auto md:mx-0">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="py-16 md:py-24 border-b-4 border-[#1A1A1A] bg-[#F5F0E8]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-1 w-12 bg-[#1A1A1A]"></div>
                  <span className="font-body text-xs font-bold uppercase tracking-widest text-[#1A1A1A] opacity-50">The Process</span>
                </div>
                <h2 className="font-display text-[#1A1A1A] text-[clamp(36px,6vw,72px)] leading-none uppercase mb-8">
                  PIPELINE.<br/>
                  <span className="text-[#FF6B00]">COMMUNITY.</span><br/>
                  GROWTH.
                </h2>
                <p className="font-body text-[#1A1A1A] text-base md:text-lg leading-relaxed opacity-70 mb-8">
                  We don't hand you a playbook and disappear. muhibwaqar embeds into your growth motion — identifying the right communities, building the right relationships, and converting them into pipeline that compounds.
                </p>
                <a
                  href="https://muhibwaqar.copm"
                  className="btn-brutal inline-flex items-center gap-3 font-body font-bold bg-[#1A1A1A] text-white border-2 border-[#1A1A1A] px-8 py-4 text-base uppercase tracking-wider"
                >
                  Get Started
                  <span className="text-[#FFD600]">→</span>
                </a>
              </div>

              {/* Steps */}
              <div className="space-y-0 border-2 border-[#1A1A1A]">
                {[
                  { step: 'DISCOVER', desc: 'Map your ideal communities and identify warm entry points with the highest conversion potential.', color: '#FFD600' },
                  { step: 'ACTIVATE', desc: 'Build authentic presence and relationships that position you as a trusted resource, not a vendor.', color: '#FF6B00' },
                  { step: 'CONVERT', desc: 'Systematically move relationships from awareness to pipeline with proven outreach frameworks.', color: '#1A1A1A' },
                  { step: 'COMPOUND', desc: 'Turn closed deals into referral engines. Build the flywheel that generates pipeline on autopilot.', color: '#FF6B00' },
                ].map((item, i) => (
                  <div key={i} className="flex items-stretch border-b-2 last:border-b-0 border-[#1A1A1A] group hover:bg-white transition-colors">
                    <div className="w-16 flex-shrink-0 flex items-center justify-center border-r-2 border-[#1A1A1A]" style={{background: item.color}}>
                      <span className="font-display text-white text-xs" style={{writingMode:'vertical-rl', textOrientation:'mixed', transform:'rotate(180deg)', color: item.color === '#FFD600' ? '#1A1A1A' : 'white'}}>{String(i+1).padStart(2,'0')}</span>
                    </div>
                    <div className="p-5 flex-1">
                      <div className="font-display text-[#1A1A1A] text-xl mb-1">{item.step}</div>
                      <div className="font-body text-sm text-[#1A1A1A] opacity-60 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-[#1A1A1A] py-20 md:py-28 relative overflow-hidden">
          {/* Diagonal stripe accent */}
          <div className="absolute top-0 left-0 w-32 h-full diagonal-stripe opacity-20"></div>
          <div className="absolute top-0 right-0 w-32 h-full diagonal-stripe opacity-20"></div>

          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
            <div className="inline-block bg-[#FF6B00] border-2 border-[#FF6B00] px-4 py-1 mb-6" style={{boxShadow:'3px 3px 0 #FF6B00'}}>
              <span className="font-display text-white text-sm tracking-widest">READY TO BUILD?</span>
            </div>
            <h2 className="font-display text-white text-[clamp(48px,9vw,100px)] leading-none uppercase mb-6">
              START YOUR<br/>
              <span className="text-[#FF6B00]">PIPELINE</span><br/>
              TODAY
            </h2>
            <p className="font-body text-[#F5F0E8] opacity-60 text-lg mb-10 max-w-xl mx-auto">
              Join B2B SaaS teams using community-led growth to build pipelines that don't depend on cold outreach alone.
            </p>
            <a
              href="https://muhibwaqar.copm"
              className="btn-brutal inline-flex items-center gap-3 font-body font-bold bg-[#FF6B00] text-white border-2 border-[#FF6B00] px-10 py-5 text-lg uppercase tracking-wider"
              style={{boxShadow:'5px 5px 0px #FF6B00'}}
            >
              Get Started
              <span className="text-[#FFD600] text-2xl">→</span>
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#F5F0E8] border-t-4 border-[#1A1A1A] py-8">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#FF6B00] border-2 border-[#1A1A1A] flex items-center justify-center">
                  <span className="font-display text-white text-xs">M</span>
                </div>
                <span className="font-display text-[#1A1A1A] text-lg tracking-wide">MUHIBWAQAR</span>
              </div>
              <div className="font-body text-xs text-[#1A1A1A] opacity-40 text-center">
                Pipeline. Community. Growth. &nbsp;·&nbsp; © {new Date().getFullYear()} muhibwaqar &nbsp;·&nbsp; All rights reserved
              </div>
              <div className="font-body text-xs text-[#1A1A1A] opacity-40">
                Working with communities to build and pipeline B2B SaaS growth.
              </div>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}