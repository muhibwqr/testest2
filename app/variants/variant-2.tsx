"use client";

import { Anton, DM_Sans } from 'next/font/google';

const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });

export default function Page() {
  return (
    <main className={`${anton.variable} ${dmSans.variable} min-h-screen bg-[#F7F4EF] text-[#0D0D0D] overflow-x-hidden`}>
      <style>{`
        :root {
          --font-anton: 'Anton', sans-serif;
          --font-dm: 'DM Sans', sans-serif;
        }
        .font-display { font-family: var(--font-anton); }
        .font-body { font-family: var(--font-dm); }
        .slash-line {
          position: relative;
        }
        .slash-line::after {
          content: '';
          position: absolute;
          left: -5%;
          right: -5%;
          height: 6px;
          background: #D91A2A;
          transform: rotate(-1.5deg);
          bottom: -12px;
        }
        .red-block {
          background: #D91A2A;
          color: #fff;
          padding: 0 8px;
          display: inline;
        }
        .diagonal-card {
          clip-path: polygon(0 0, 100% 0, 100% 88%, 96% 100%, 0 100%);
        }
        .border-slash {
          position: relative;
        }
        .border-slash::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: #D91A2A;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .anim-1 { animation: slideUp 0.6s ease forwards; }
        .anim-2 { animation: slideUp 0.6s 0.15s ease both; }
        .anim-3 { animation: slideUp 0.6s 0.3s ease both; }
        .anim-4 { animation: slideUp 0.6s 0.45s ease both; }
        .anim-fade { animation: fadeIn 0.8s 0.2s ease both; }
        .stat-card:hover { transform: translateY(-4px); }
        .stat-card { transition: transform 0.2s ease; }
        .cta-btn {
          background: #D91A2A;
          color: #fff;
          font-family: var(--font-dm);
          font-weight: 700;
          letter-spacing: 0.04em;
          transition: background 0.2s, transform 0.15s;
        }
        .cta-btn:hover { background: #b81523; transform: scale(1.03); }
        .feature-card:hover { border-color: #D91A2A; }
        .feature-card { transition: border-color 0.2s; }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7F4EF] border-b border-[#E0DDD8]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#D91A2A] flex items-center justify-center">
              <span className="font-display text-white text-xs">MW</span>
            </div>
            <span className="font-display text-[#0D0D0D] text-lg tracking-wide">MUHIBWAQAR</span>
          </div>
          <a
            href="https://whop.com"
            className="cta-btn px-5 py-2 text-sm rounded-none"
          >
            Get started
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-0 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 items-start">
          {/* LEFT: Headline */}
          <div className="anim-1">
            <div className="mb-4">
              <span className="font-body text-xs font-bold tracking-[0.2em] uppercase text-[#D91A2A] border border-[#D91A2A] px-3 py-1">Community Strategy</span>
            </div>
            <h1 className="font-display uppercase leading-none text-[#0D0D0D]">
              <span className="block text-[clamp(56px,10vw,120px)] leading-none">TURN YOUR</span>
              <span className="block text-[clamp(56px,10vw,120px)] leading-none">BUSINESS</span>
              <span className="block text-[clamp(56px,10vw,120px)] leading-none relative">
                <span className="red-block">INTO A</span>
              </span>
              <span className="block text-[clamp(56px,10vw,120px)] leading-none">SALES</span>
              <div className="relative inline-block">
                <span className="block text-[clamp(56px,10vw,120px)] leading-none slash-line">ENGINE.</span>
              </div>
            </h1>
            <div className="mt-10 mb-8">
              <p className="font-body text-[#5A5A5A] text-base md:text-lg leading-relaxed max-w-md">
                muhibwaqar architects high-converting communities that attract buyers, build loyalty, and drive consistent revenue — without the guesswork.
              </p>
            </div>
            <a
              href="https://whop.com"
              className="cta-btn inline-block px-10 py-4 text-base uppercase tracking-widest"
            >
              Get started →
            </a>
            {/* Tagline */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-12 bg-[#D91A2A]"></div>
              <span className="font-body text-xs font-bold tracking-[0.25em] uppercase text-[#5A5A5A]">Communities That Convert.</span>
            </div>
          </div>

          {/* RIGHT: Dashboard Mockup Card */}
          <div className="anim-2 mt-12 lg:mt-0 relative">
            <div className="bg-[#0D0D0D] diagonal-card p-6 md:p-8 relative overflow-hidden">
              {/* Card header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-body text-[#5A5A5A] text-xs uppercase tracking-widest mb-1">Community Dashboard</p>
                  <p className="font-display text-white text-2xl tracking-wide">REVENUE OVERVIEW</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#D91A2A] shadow-[0_0_8px_#D91A2A]"></div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: 'Members', value: '12.4K', delta: '+18%' },
                  { label: 'Revenue', value: '$84K', delta: '+31%' },
                  { label: 'Conv. Rate', value: '6.2%', delta: '+2.1%' },
                ].map((s) => (
                  <div key={s.label} className="bg-[#1a1a1a] p-3">
                    <p className="font-body text-[#5A5A5A] text-xs mb-1">{s.label}</p>
                    <p className="font-display text-white text-xl">{s.value}</p>
                    <p className="font-body text-[#D91A2A] text-xs font-bold">{s.delta}</p>
                  </div>
                ))}
              </div>

              {/* Bar chart mockup */}
              <div className="mb-6">
                <p className="font-body text-[#5A5A5A] text-xs mb-3 uppercase tracking-widest">Monthly Revenue</p>
                <div className="flex items-end gap-2 h-24">
                  {[35, 52, 41, 68, 59, 82, 74, 91, 88, 100, 95, 100].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end">
                      <div
                        className="w-full"
                        style={{
                          height: `${h}%`,
                          background: i >= 9 ? '#D91A2A' : i >= 6 ? '#6b1a22' : '#2a2a2a',
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity feed */}
              <div className="space-y-2">
                {[
                  { action: 'New member joined', time: '2m ago', dot: '#D91A2A' },
                  { action: 'Purchase: Premium Plan', time: '5m ago', dot: '#D91A2A' },
                  { action: 'Engagement spike +40%', time: '12m ago', dot: '#888' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.dot }}></div>
                    <span className="font-body text-[#aaa] text-xs flex-1">{item.action}</span>
                    <span className="font-body text-[#555] text-xs">{item.time}</span>
                  </div>
                ))}
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#D91A2A] opacity-10"></div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#D91A2A] opacity-5 hidden lg:block"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-[#D91A2A] hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* RED SLASH DIVIDER */}
      <div className="relative my-16 md:my-24 overflow-hidden">
        <div className="h-px bg-[#E0DDD8] w-full"></div>
        <div
          className="absolute inset-0 flex items-center"
          style={{ transform: 'rotate(-1deg)', transformOrigin: 'left center' }}
        >
          <div className="h-[5px] bg-[#D91A2A] w-full opacity-90"></div>
        </div>
        <div className="relative z-10 flex justify-center">
          <span className="bg-[#F7F4EF] px-6 font-display text-[#D91A2A] text-lg tracking-widest uppercase">
            What We Build
          </span>
        </div>
      </div>

      {/* FEATURES GRID */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E0DDD8]">
          {[
            {
              icon: '⚡',
              title: 'SALES-OPTIMIZED STRUCTURES',
              body: 'Community architectures designed from the ground up to convert members into paying customers — every channel, every touchpoint.',
              num: '01',
            },
            {
              icon: '🔥',
              title: 'PROVEN ENGAGEMENT SYSTEMS',
              body: 'Keep your audience active, warm, and ready to buy with battle-tested engagement frameworks that maintain momentum.',
              num: '02',
            },
            {
              icon: '🎯',
              title: 'END-TO-END STRATEGY',
              body: 'From initial setup to full scale — complete community strategy built around your specific revenue goals and growth targets.',
              num: '03',
            },
          ].map((f, i) => (
            <div
              key={i}
              className={`feature-card border-slash p-8 border-[#E0DDD8] ${
                i < 2 ? 'md:border-r' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-3xl">{f.icon}</span>
                <span className="font-display text-[#E0DDD8] text-5xl leading-none">{f.num}</span>
              </div>
              <h3 className="font-display text-[#0D0D0D] text-xl mb-4 leading-tight">{f.title}</h3>
              <p className="font-body text-[#5A5A5A] text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF STATS */}
      <section className="bg-[#0D0D0D] py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { num: '500+', label: 'Communities Built' },
              { num: '$12M+', label: 'Revenue Generated' },
              { num: '94%', label: 'Client Retention' },
              { num: '3.8×', label: 'Avg. Revenue Lift' },
            ].map((s, i) => (
              <div key={i} className="text-center stat-card">
                <p className="font-display text-[#D91A2A] text-[clamp(36px,6vw,64px)] leading-none">{s.num}</p>
                <p className="font-body text-[#5A5A5A] text-xs uppercase tracking-widest mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-4 md:px-8 py-20 max-w-7xl mx-auto">
        <div className="bg-[#D91A2A] p-10 md:p-16 relative overflow-hidden">
          {/* Background text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
            <span className="font-display text-white text-[200px] whitespace-nowrap">CONVERT</span>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="font-body text-white/70 text-xs uppercase tracking-[0.2em] mb-3">Ready to scale?</p>
              <h2 className="font-display text-white text-[clamp(32px,5vw,72px)] leading-none uppercase">
                START CONVERTING<br />YOUR COMMUNITY.
              </h2>
            </div>
            <a
              href="https://whop.com"
              className="flex-shrink-0 bg-white text-[#D91A2A] font-body font-bold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#F7F4EF] transition-colors"
            >
              Get started →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E0DDD8] px-4 md:px-8 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#D91A2A]"></div>
            <span className="font-display text-[#0D0D0D] tracking-wide">MUHIBWAQAR</span>
          </div>
          <p className="font-body text-[#5A5A5A] text-xs">© 2024 muhibwaqar. Communities That Convert.</p>
        </div>
      </footer>
    </main>
  );
}