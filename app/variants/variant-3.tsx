"use client";

import { Oswald, DM_Sans } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600'] });

export default function MuhibVariant3() {
  return (
    <div className={`${dmSans.className} bg-[#FAFAFA] min-h-screen`}>
      <style>{`
        .oswald { font-family: ${oswald.style.fontFamily}; }
        .pipeline-bar { animation: growBar 1.2s ease-out forwards; }
        @keyframes growBar {
          from { width: 0%; }
          to { width: var(--target-width); }
        }
        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeUp 0.7s ease-out forwards;
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .metric-pulse {
          animation: pulse 2.5s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .red-underline {
          position: relative;
          display: inline-block;
        }
        .red-underline::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 4px;
          background: #D91F26;
        }
      `}</style>

      {/* NAV */}
      <nav className="w-full bg-[#FAFAFA] border-b border-[#E8E8E8] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#111111] flex items-center justify-center">
              <span className={`${oswald.className} text-white text-sm font-700 leading-none`}>M</span>
            </div>
            <span className={`${oswald.className} text-[#111111] text-xl font-600 tracking-wider`}>MUHIB</span>
          </div>
          <a
            href="https://win.co"
            className={`${oswald.className} bg-[#D91F26] text-white px-6 py-2 rounded-full text-sm font-600 tracking-widest hover:bg-[#b81920] transition-colors duration-200`}
          >
            GET STARTED
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 pt-20 md:pt-28 pb-16 md:pb-24 text-center">
        <div className="fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 bg-white border border-[#E8E8E8] rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#D91F26] metric-pulse"></span>
            <span className="text-[#555555] text-xs font-500 tracking-widest uppercase">Sales Infrastructure for Serious Teams</span>
          </div>
        </div>

        <div className="fade-up" style={{ animationDelay: '0.2s' }}>
          <h1 className={`${oswald.className} text-[#111111] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-700 leading-none tracking-tight mb-6`}>
            WE BUILD<br />
            PIPELINES<br />
            <span className="red-underline text-[#D91F26]">THAT CONVERT</span>
          </h1>
        </div>

        <div className="fade-up" style={{ animationDelay: '0.35s' }}>
          <p className="text-[#555555] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Muhib engineers end-to-end sales systems — from cold outreach to closed deals — so your team stops guessing and starts winning.
          </p>
        </div>

        <div className="fade-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="https://win.co"
            className={`${oswald.className} inline-block bg-[#D91F26] text-white px-10 py-4 rounded-full text-lg font-600 tracking-widest hover:bg-[#b81920] transition-all duration-200 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-0.5`}
          >
            GET STARTED
          </a>
        </div>
      </section>

      {/* PIPELINE DASHBOARD MOCKUP */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 pb-20 md:pb-28">
        <div className="fade-up" style={{ animationDelay: '0.65s' }}>
          <div className="bg-white border border-[#E8E8E8] rounded-2xl overflow-hidden shadow-xl shadow-black/5">
            {/* Dashboard Header */}
            <div className="border-b border-[#E8E8E8] px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#E8E8E8]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#E8E8E8]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#E8E8E8]"></div>
                </div>
                <span className="text-[#555555] text-xs font-500 tracking-wide">Pipeline Dashboard — Q4 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D91F26] metric-pulse"></span>
                <span className="text-[#D91F26] text-xs font-600">LIVE</span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              {/* Metric Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: 'Pipeline Value', value: '$2.3M', change: '+34%', up: true },
                  { label: 'Deals Closed', value: '47', change: '+18', up: true },
                  { label: 'Calls Booked', value: '183', change: '+61%', up: true },
                  { label: 'Avg. Deal Size', value: '$48.9K', change: '+12%', up: true },
                ].map((metric, i) => (
                  <div key={i} className="bg-[#FAFAFA] border border-[#E8E8E8] rounded-xl p-4">
                    <div className="text-[#555555] text-xs font-500 mb-1 tracking-wide">{metric.label}</div>
                    <div className={`${oswald.className} text-[#111111] text-2xl md:text-3xl font-700 leading-none mb-1`}>{metric.value}</div>
                    <div className="text-[#D91F26] text-xs font-600">{metric.change} this month</div>
                  </div>
                ))}
              </div>

              {/* Pipeline Stages */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`${oswald.className} text-[#111111] text-sm font-600 tracking-widest`}>PIPELINE STAGES</span>
                  <span className="text-[#555555] text-xs">This Quarter</span>
                </div>
                <div className="space-y-3">
                  {[
                    { stage: 'Prospecting', count: 312, pct: 100 },
                    { stage: 'Outreach Sent', count: 248, pct: 79 },
                    { stage: 'Calls Booked', count: 183, pct: 59 },
                    { stage: 'Proposals Sent', count: 94, pct: 30 },
                    { stage: 'Closed Won', count: 47, pct: 15 },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-28 md:w-36 text-[#555555] text-xs font-500 shrink-0">{row.stage}</div>
                      <div className="flex-1 bg-[#F0F0F0] rounded-full h-2 overflow-hidden">
                        <div
                          className="pipeline-bar h-full rounded-full bg-[#D91F26]"
                          style={{
                            '--target-width': `${row.pct}%`,
                            animationDelay: `${0.8 + i * 0.15}s`,
                          } as React.CSSProperties}
                        ></div>
                      </div>
                      <div className={`${oswald.className} text-[#111111] text-sm font-600 w-8 text-right shrink-0`}>{row.count}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="border-t border-[#E8E8E8] pt-5">
                <div className={`${oswald.className} text-[#111111] text-sm font-600 tracking-widest mb-3`}>RECENT WINS</div>
                <div className="space-y-2">
                  {[
                    { co: 'Acme Corp', val: '$62,000', time: '2h ago' },
                    { co: 'Vertex Solutions', val: '$38,500', time: '5h ago' },
                    { co: 'NorthStar SaaS', val: '$91,200', time: '1d ago' },
                  ].map((win, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-[#F0F0F0] last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#D91F26] flex items-center justify-center">
                          <span className="text-white text-xs font-700">✓</span>
                        </div>
                        <span className="text-[#111111] text-sm font-500">{win.co}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`${oswald.className} text-[#D91F26] text-sm font-700`}>{win.val}</span>
                        <span className="text-[#555555] text-xs">{win.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#111111] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center mb-14">
            <h2 className={`${oswald.className} text-white text-4xl md:text-5xl font-700 tracking-tight mb-4`}>
              THE SYSTEM BEHIND THE RESULTS
            </h2>
            <div className="w-12 h-1 bg-[#D91F26] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Niche-Targeted Prospecting',
                body: 'Puts you in front of buyers who are ready — not just anyone with a pulse. We identify and reach the exact decision-makers in your market.',
              },
              {
                num: '02',
                title: 'Conversion-Engineered Sequences',
                body: 'Turn cold leads into booked calls with messaging built around buyer psychology — not spray-and-pray templates.',
              },
              {
                num: '03',
                title: 'Scalable Pipeline Infrastructure',
                body: 'Built to grow without adding headcount. Systems, automations, and processes that compound as your business scales.',
              },
            ].map((feat, i) => (
              <div key={i} className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-7 group hover:border-[#D91F26] transition-colors duration-300">
                <div className={`${oswald.className} text-[#D91F26] text-5xl font-700 leading-none mb-5 opacity-60 group-hover:opacity-100 transition-opacity duration-300`}>{feat.num}</div>
                <h3 className={`${oswald.className} text-white text-xl font-600 tracking-wide mb-3`}>{feat.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{feat.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#FAFAFA] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <div className="w-12 h-1 bg-[#D91F26] mx-auto mb-8"></div>
          <h2 className={`${oswald.className} text-[#111111] text-4xl md:text-6xl font-700 tracking-tight leading-none mb-6`}>
            STOP GUESSING.<br />START WINNING.
          </h2>
          <p className="text-[#555555] text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Your competitors are building systems while you're still figuring out the process. Let Muhib engineer your pipeline — and close the gap.
          </p>
          <a
            href="https://win.co"
            className={`${oswald.className} inline-block bg-[#D91F26] text-white px-12 py-4 rounded-full text-lg font-600 tracking-widest hover:bg-[#b81920] transition-all duration-200 hover:shadow-xl hover:shadow-red-200 hover:-translate-y-1`}
          >
            GET STARTED
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111111] border-t border-[#1E1E1E] py-10">
        <div className="max-w-5xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#D91F26] flex items-center justify-center">
              <span className={`${oswald.className} text-white text-xs font-700`}>M</span>
            </div>
            <span className={`${oswald.className} text-white text-lg font-600 tracking-wider`}>MUHIB</span>
          </div>
          <p className="text-[#555555] text-xs text-center">
            © {new Date().getFullYear()} Muhib. We build pipelines that convert.
          </p>
          <p className="text-[#555555] text-xs">All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}