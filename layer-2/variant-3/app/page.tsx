import { Barlow_Condensed, Work_Sans } from 'next/font/google';

const barlow = Barlow_Condensed({ subsets: ['latin'], weight: ['400', '600', '700', '800', '900'], variable: '--font-barlow' });
const workSans = Work_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-work' });

export default function MuhibsFlowsBrutalist() {
  return (
    <div className={`${barlow.variable} ${workSans.variable} min-h-screen bg-[#F2F0EB] overflow-x-hidden`}>
      <style>{`
        :root {
          --font-display: var(--font-barlow);
          --font-body: var(--font-work);
        }
        * { box-sizing: border-box; }
        .font-display { font-family: var(--font-display); }
        .font-body { font-family: var(--font-body); }
        .marquee-track {
          display: flex;
          gap: 0;
          animation: marquee 18s linear infinite;
          width: max-content;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .grid-bg {
          background-image:
            linear-gradient(rgba(17,17,17,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17,17,17,0.07) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .yellow-glow {
          box-shadow: 0 0 0 3px #FFE500, 0 8px 40px rgba(255,229,0,0.25);
        }
        .card-border {
          border: 3px solid #111111;
        }
        .thick-border {
          border: 4px solid #111111;
        }
        .step-num {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 5rem;
          line-height: 1;
          color: #FFE500;
          -webkit-text-stroke: 2px #111111;
        }
        .hero-headline {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(64px, 10vw, 140px);
          line-height: 0.92;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          color: #111111;
        }
        .section-label {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #111111;
        }
        .feature-title {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(28px, 3vw, 42px);
          text-transform: uppercase;
          letter-spacing: 0.02em;
          line-height: 1.05;
          color: #111111;
        }
        .invert-card {
          background: #111111;
          color: #F2F0EB;
        }
        .yellow-card {
          background: #FFE500;
          color: #111111;
        }
        .noise-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 9999;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
        }
        .cta-btn {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 18px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: #FFE500;
          color: #111111;
          border: 3px solid #111111;
          padding: 14px 36px;
          display: inline-block;
          transition: transform 0.12s, box-shadow 0.12s;
          box-shadow: 4px 4px 0px #111111;
          cursor: pointer;
          text-decoration: none;
        }
        .cta-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px #111111;
        }
        .cta-btn:active {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0px #111111;
        }
        .flow-card {
          background: #FFFFFF;
          border: 3px solid #111111;
          box-shadow: 6px 6px 0px #111111;
        }
        .flow-node {
          background: #F2F0EB;
          border: 2px solid #111111;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 8px 14px;
          display: inline-block;
        }
        .flow-node-active {
          background: #FFE500;
          border: 2px solid #111111;
          box-shadow: 3px 3px 0px #111111;
        }
        .flow-connector {
          width: 2px;
          background: #111111;
          margin: 0 auto;
          height: 20px;
        }
        .context-tag {
          background: #111111;
          color: #FFE500;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 3px 8px;
          display: inline-block;
        }
        .testimonial-card {
          background: #111111;
          border: 3px solid #111111;
          box-shadow: 6px 6px 0px #FFE500;
          color: #F2F0EB;
        }
        .nav-pill {
          background: rgba(242,240,235,0.92);
          backdrop-filter: blur(12px);
          border: 2px solid #111111;
          box-shadow: 3px 3px 0px #111111;
        }
        @media (max-width: 768px) {
          .hero-headline { font-size: clamp(52px, 14vw, 80px); }
        }
      `}</style>

      <div className="noise-overlay" />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="nav-pill flex items-center justify-between px-5 py-3 rounded-none">
            <div className="flex items-center gap-3">
              <img src="data:image/png;base64,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" alt="Muhib's Flows" className="h-8 w-auto" />
              <span className="font-display font-800 text-sm tracking-widest uppercase text-[#111111]" style={{fontFamily:'var(--font-display)', fontWeight:800, letterSpacing:'0.15em'}}>MUHIB'S FLOWS</span>
            </div>
            <a href="https://muhibwaqar.com" className="cta-btn" style={{fontSize:'13px', padding:'8px 20px', boxShadow:'3px 3px 0px #111111'}}>Get started</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="grid-bg pt-32 pb-0 relative overflow-hidden">
        {/* Thick top border accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFE500]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Label row */}
          <div className="flex items-center gap-4 mb-6">
            <div className="section-label">B2B SaaS Context Layer</div>
            <div className="flex-1 h-px bg-[#111111]" />
            <div className="context-tag">v1.0 — Live Now</div>
          </div>

          {/* Main hero grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
            {/* Left: Headline */}
            <div className="lg:col-span-7 relative">
              <div className="hero-headline mb-0">
                <div>YOUR</div>
                <div className="relative">
                  <span>BUSINESS</span>
                </div>
                <div className="relative">
                  <span className="relative z-10">FLOWS,</span>
                  <div className="absolute bottom-2 left-0 h-4 bg-[#FFE500] w-full -z-0" style={{bottom:'8px'}} />
                </div>
                <div>FINALLY</div>
                <div className="relative">
                  <span>IN</span>
                  <span className="ml-4 text-[#F2F0EB]" style={{WebkitTextStroke:'3px #111111'}}>CONTEXT</span>
                </div>
              </div>

              <div className="mt-8 mb-8 border-t-4 border-[#111111] pt-6">
                <p className="font-body text-[#111111] text-base sm:text-lg leading-relaxed max-w-lg" style={{fontFamily:'var(--font-body)'}}>
                  Muhib's Flows gives B2B SaaS teams the missing layer — the context behind every process, decision, and handoff. Stop guessing. Start understanding.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a href="https://muhibwaqar.com" className="cta-btn">Get started</a>
                <div className="flex items-center gap-2 pt-2">
                  <div className="w-2 h-2 bg-[#FFE500] border-2 border-[#111111]" />
                  <span className="font-body text-sm text-[#111111] font-600" style={{fontFamily:'var(--font-body)', fontWeight:600}}>No credit card required</span>
                </div>
              </div>
            </div>

            {/* Right: Flow preview card */}
            <div className="lg:col-span-5 lg:pl-8 mt-12 lg:mt-0">
              <div className="flow-card p-6 relative">
                <div className="absolute -top-3 -right-3 context-tag">LIVE PREVIEW</div>
                <div className="section-label mb-4">Context Flow — Onboarding</div>

                {/* Flow diagram mock */}
                <div className="space-y-0">
                  <div className="flex items-center gap-3">
                    <div className="flow-node">Lead Qualified</div>
                    <div className="flex-1 h-px bg-[#111111]" />
                    <div className="context-tag">CRM</div>
                  </div>
                  <div className="flow-connector" />
                  <div className="flex items-center gap-3">
                    <div className="flow-node flow-node-active">Contract Signed</div>
                    <div className="flex-1 h-px bg-[#111111]" />
                    <div className="context-tag" style={{background:'#FFE500', color:'#111111', border:'1px solid #111111'}}>WHY?</div>
                  </div>
                  <div className="flow-connector" />
                  <div className="bg-[#F2F0EB] border-2 border-[#111111] p-3 mb-0">
                    <div className="section-label mb-1">Context Note</div>
                    <p className="font-body text-xs text-[#111111] leading-relaxed" style={{fontFamily:'var(--font-body)'}}>"Deal closed after 3rd demo — champion was VP Ops, not IT. Onboarding must involve ops team first."</p>
                  </div>
                  <div className="flow-connector" />
                  <div className="flex items-center gap-3">
                    <div className="flow-node">Kickoff Scheduled</div>
                    <div className="flex-1 h-px bg-[#111111]" />
                    <div className="context-tag">CS</div>
                  </div>
                  <div className="flow-connector" />
                  <div className="flex items-center gap-3">
                    <div className="flow-node">Handoff to Success</div>
                    <div className="flex-1 h-px bg-[#111111]" />
                    <div className="context-tag">SLACK</div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t-2 border-[#111111] flex items-center justify-between">
                  <span className="font-body text-xs font-600 text-[#111111]" style={{fontFamily:'var(--font-body)', fontWeight:600}}>5 steps · 2 context notes</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#FFE500] border border-[#111111]" />
                    <div className="w-2 h-2 bg-[#111111]" />
                    <div className="w-2 h-2 bg-[#111111]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="mt-16 border-t-4 border-b-4 border-[#111111] bg-[#FFE500] py-3 overflow-hidden">
          <div className="marquee-track">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-0">
                {['CONTEXT', 'CLARITY', 'FLOWS', 'DECISIONS', 'HANDOFFS', 'PROCESSES', 'TEAMS', 'UNDERSTANDING', 'CONTEXT', 'CLARITY', 'FLOWS', 'DECISIONS', 'HANDOFFS', 'PROCESSES', 'TEAMS', 'UNDERSTANDING'].map((word, j) => (
                  <span key={j} className="font-display font-900 text-[#111111] text-sm tracking-widest uppercase px-6" style={{fontFamily:'var(--font-display)', fontWeight:900}}>
                    {word} <span className="text-[#111111] opacity-40">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-[#F2F0EB] border-b-4 border-[#111111]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="section-label">What it does</div>
            <div className="flex-1 h-1 bg-[#111111]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                num: '01',
                title: 'MAP EVERY FLOW',
                body: 'Map every business flow with the context your team actually needs to act — not just what happened, but why.',
                bg: 'bg-[#111111]',
                textColor: 'text-[#F2F0EB]',
                accentColor: '#FFE500',
              },
              {
                num: '02',
                title: 'BRIDGE THE GAP',
                body: 'Bridge the gap between what your tools track and what your people understand. Context lives where work happens.',
                bg: 'bg-[#FFE500]',
                textColor: 'text-[#111111]',
                accentColor: '#111111',
              },
              {
                num: '03',
                title: 'BUILT FOR SPEED',
                body: 'Built for B2B SaaS teams who move fast and can\'t afford to lose the thread — across tools, teams, and time zones.',
                bg: 'bg-[#F2F0EB]',
                textColor: 'text-[#111111]',
                accentColor: '#111111',
              },
            ].map((feat, i) => (
              <div
                key={i}
                className={`${feat.bg} ${feat.textColor} p-8 border-2 border-[#111111] ${i > 0 ? '-ml-px' : ''} relative group transition-transform hover:-translate-y-1`}
                style={{boxShadow: i === 1 ? '0 8px 0px #111111' : 'none'}}
              >
                <div className="step-num mb-4" style={{color: feat.accentColor, WebkitTextStroke: `2px ${feat.textColor === 'text-[#F2F0EB]' ? '#F2F0EB' : '#111111'}`}}>{feat.num}</div>
                <div className="feature-title mb-4" style={{color: feat.textColor === 'text-[#F2F0EB]' ? '#F2F0EB' : '#111111'}}>{feat.title}</div>
                <p className="font-body text-sm leading-relaxed opacity-80" style={{fontFamily:'var(--font-body)'}}>{feat.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS SECTION */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="section-label" style={{color:'#FFE500'}}>How it works</div>
            <div className="flex-1 h-1 bg-[#FFE500]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { step: '1', label: 'CONNECT YOUR TOOLS', desc: 'Plug in your existing stack — CRM, project tools, Slack, docs.' },
              { step: '2', label: 'MAP YOUR FLOWS', desc: 'Define the key business flows your team runs every day.' },
              { step: '3', label: 'ADD CONTEXT', desc: 'Annotate decisions, handoffs, and the "why" behind each step.' },
              { step: '4', label: 'TEAM CLARITY', desc: 'Everyone sees the full picture — no more guessing or re-asking.' },
            ].map((s, i) => (
              <div key={i} className={`p-6 border-2 border-[#FFE500] ${i > 0 ? '-ml-px' : ''} relative`}>
                <div className="font-display font-900 text-[#FFE500] mb-3" style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'64px', lineHeight:1, WebkitTextStroke:'1px #FFE500'}}>{s.step}</div>
                <div className="font-display font-800 text-[#F2F0EB] text-lg mb-3 uppercase tracking-wide" style={{fontFamily:'var(--font-display)', fontWeight:800}}>{s.label}</div>
                <p className="font-body text-sm text-[#7A8499] leading-relaxed" style={{fontFamily:'var(--font-body)'}}>{s.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 z-10 font-display font-900 text-[#FFE500] text-2xl" style={{fontFamily:'var(--font-display)', fontWeight:900, transform:'translateY(-50%)'}}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECOND FEATURES SECTION — full-width alternating */}
      <section className="py-20 bg-[#F2F0EB] border-t-4 border-[#111111]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="section-label">Why it matters</div>
            <div className="flex-1 h-1 bg-[#111111]" />
          </div>

          <div className="space-y-0">
            {[
              {
                tag: 'CONTEXT LAYER',
                headline: 'STOP LOSING THE THREAD',
                body: 'Every handoff is a risk. Every tool switch is a context gap. Muhib\'s Flows captures the invisible layer — the decisions, the reasoning, the "why we did it this way" — so nothing gets lost in translation.',
                side: 'left',
              },
              {
                tag: 'TEAM ALIGNMENT',
                headline: 'EVERYONE ON THE SAME PAGE',
                body: 'New hire? Returning from leave? Joining a project mid-stream? With Muhib\'s Flows, the context is always there. No more 30-minute Slack threads to reconstruct what happened.',
                side: 'right',
              },
            ].map((item, i) => (
              <div key={i} className={`grid grid-cols-1 md:grid-cols-2 border-2 border-[#111111] ${i > 0 ? '-mt-px' : ''} ${i % 2 === 1 ? 'bg-[#111111]' : 'bg-white'}`}>
                <div className={`p-10 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="context-tag mb-4" style={i % 2 === 1 ? {background:'#FFE500', color:'#111111'} : {}}>{item.tag}</div>
                  <div className="feature-title mb-4" style={{color: i % 2 === 1 ? '#F2F0EB' : '#111111'}}>{item.headline}</div>
                  <p className="font-body text-base leading-relaxed" style={{fontFamily:'var(--font-body)', color: i % 2 === 1 ? '#9CA3AF' : '#444444'}}>{item.body}</p>
                </div>
                <div className={`border-l-2 border-[#111111] p-10 flex items-center justify-center ${i % 2 === 1 ? 'md:order-1 border-l-0 border-r-2' : ''}`} style={{background: i % 2 === 1 ? '#1A1A1A' : '#F2F0EB'}}>
                  {i === 0 ? (
                    <div className="w-full max-w-xs">
                      <div className="flow-card p-4">
                        <div className="section-label mb-3">Before Muhib's Flows</div>
                        {['"Why did we do X?"', '"Who made this call?"', '"What was the context?"', '"Can someone explain..."'].map((q, qi) => (
                          <div key={qi} className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 bg-[#FF4444] border border-[#111111] flex-shrink-0" />
                            <span className="font-body text-xs text-[#111111]" style={{fontFamily:'var(--font-body)'}}>{q}</span>
                          </div>
                        ))}
                        <div className="mt-3 pt-3 border-t-2 border-[#111111]">
                          <div className="section-label mb-2" style={{color:'#111111'}}>After Muhib's Flows</div>
                          {['Context always attached', 'Decisions documented', 'Team always aligned'].map((q, qi) => (
                            <div key={qi} className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 bg-[#FFE500] border border-[#111111] flex-shrink-0" />
                              <span className="font-body text-xs text-[#111111] font-600" style={{fontFamily:'var(--font-body)', fontWeight:600}}>{q}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full max-w-xs">
                      <div className="border-2 border-[#FFE500] p-4" style={{boxShadow:'4px 4px 0px #FFE500'}}>
                        <div className="section-label mb-3" style={{color:'#FFE500'}}>Team Context Score</div>
                        {[{label:'Sales → CS Handoff', pct:92}, {label:'Sprint Planning', pct:87}, {label:'Incident Response', pct:95}].map((m, mi) => (
                          <div key={mi} className="mb-3">
                            <div className="flex justify-between mb-1">
                              <span className="font-body text-xs text-[#F2F0EB]" style={{fontFamily:'var(--font-body)'}}>{m.label}</span>
                              <span className="font-display font-800 text-[#FFE500] text-xs" style={{fontFamily:'var(--font-display)', fontWeight:800}}>{m.pct}%</span>
                            </div>
                            <div className="h-2 bg-[#333333] border border-[#555555]">
                              <div className="h-full bg-[#FFE500]" style={{width:`${m.pct}%`}} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#F2F0EB] border-t-4 border-[#111111]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="section-label">What teams say</div>
            <div className="flex-1 h-1 bg-[#111111]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                quote: '"Finally, a tool that captures the WHY, not just the WHAT. Our onboarding time dropped by 40%."',
                name: 'Sarah K.',
                role: 'Head of Customer Success',
                co: 'B2B SaaS Co.',
              },
              {
                quote: '"We stopped losing context at every handoff. Muhib\'s Flows is the missing piece in our ops stack."',
                name: 'James T.',
                role: 'VP Operations',
                co: 'Series B Startup',
              },
              {
                quote: '"Every new hire gets up to speed in days, not weeks. The context is just... there."',
                name: 'Priya M.',
                role: 'Product Lead',
                co: 'SaaS Platform',
              },
            ].map((t, i) => (
              <div key={i} className={`testimonial-card p-8 ${i > 0 ? '-ml-px' : ''}`}>
                <div className="font-display font-900 text-[#FFE500] text-5xl mb-4 leading-none" style={{fontFamily:'var(--font-display)', fontWeight:900}}>"</div>
                <p className="font-body text-[#F2F0EB] text-sm leading-relaxed mb-6" style={{fontFamily:'var(--font-body)'}}>{t.quote}</p>
                <div className="border-t-2 border-[#FFE500] pt-4">
                  <div className="font-display font-800 text-[#FFE500] text-base uppercase tracking-wide" style={{fontFamily:'var(--font-display)', fontWeight:800}}>{t.name}</div>
                  <div className="font-body text-xs text-[#9CA3AF] mt-1" style={{fontFamily:'var(--font-body)'}}>{t.role} · {t.co}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY / TRUST */}
      <section className="py-16 bg-[#111111] border-t-4 border-[#FFE500]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="section-label" style={{color:'#FFE500'}}>Built for enterprise trust</div>
            <div className="flex-1 h-1 bg-[#FFE500]" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
              {icon:'🔒', label:'SOC-2 READY'},
              {icon:'🇪🇺', label:'GDPR COMPLIANT'},
              {icon:'🔐', label:'END-TO-END ENCRYPTED'},
              {icon:'⚡', label:'99.9% UPTIME SLA'},
            ].map((badge, i) => (
              <div key={i} className={`border-2 border-[#FFE500] p-6 flex flex-col items-center gap-3 ${i > 0 ? '-ml-px' : ''}`}>
                <span className="text-3xl">{badge.icon}</span>
                <span className="font-display font-800 text-[#FFE500] text-xs tracking-widest text-center" style={{fontFamily:'var(--font-display)', fontWeight:800}}>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-[#FFE500] border-t-4 border-b-4 border-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="context-tag mb-6 mx-auto inline-block">START TODAY</div>
          <div className="hero-headline text-[#111111] mb-6" style={{fontSize:'clamp(48px, 8vw, 100px)'}}>
            CLARITY IN<br />EVERY FLOW.
          </div>
          <p className="font-body text-[#111111] text-lg mb-10 max-w-xl mx-auto opacity-80" style={{fontFamily:'var(--font-body)'}}>
            Join B2B SaaS teams who've stopped guessing and started understanding.
          </p>
          <a href="https://muhibwaqar.com" className="cta-btn" style={{background:'#111111', color:'#FFE500', boxShadow:'6px 6px 0px rgba(0,0,0,0.3)', fontSize:'20px', padding:'18px 48px'}}>
            Get started
          </a>
          <div className="mt-6 font-body text-sm text-[#111111] opacity-60" style={{fontFamily:'var(--font-body)'}}>No credit card required · Set up in minutes</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111111] border-t-4 border-[#FFE500] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="data:image/png;base64,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" alt="Muhib's Flows" className="h-7 w-auto opacity-80" />
            <span className="font-display font-800 text-[#F2F0EB] text-sm tracking-widest uppercase" style={{fontFamily:'var(--font-display)', fontWeight:800}}>MUHIB'S FLOWS</span>
          </div>
          <div className="font-body text-xs text-[#7A8499] tracking-wide" style={{fontFamily:'var(--font-body)'}}>© 2025 Muhib's Flows</div>
          <div className="font-display font-700 text-[#FFE500] text-xs tracking-widest uppercase" style={{fontFamily:'var(--font-display)', fontWeight:700}}>CLARITY IN EVERY FLOW.</div>
        </div>
      </footer>
    </div>
  );
}