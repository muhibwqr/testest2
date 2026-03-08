"use client";

import { Playfair_Display, DM_Sans } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700', '900'], style: ['normal', 'italic'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export default function Page() {
  return (
    <div className={`${dmSans.className} min-h-screen`} style={{ backgroundColor: '#FAFAF8', color: '#0F0F0E' }}>
      <style>{`
        .playfair { font-family: ${playfair.style.fontFamily}; }
        .ink { color: #0F0F0E; }
        .accent { color: #D4240F; }
        .muted { color: #8A8A82; }
        .surface { background-color: #F0EFEB; }
        .border-col { border-color: #E2E1DC; }
        .funnel-bar { transition: width 0.6s ease; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .fade-up-1 { animation-delay: 0.1s; opacity: 0; }
        .fade-up-2 { animation-delay: 0.25s; opacity: 0; }
        .fade-up-3 { animation-delay: 0.4s; opacity: 0; }
        .fade-up-4 { animation-delay: 0.55s; opacity: 0; }
        .small-caps { font-variant: small-caps; letter-spacing: 0.12em; }
        .rule { border-color: #E2E1DC; }
        .feature-num { font-size: 0.65rem; letter-spacing: 0.18em; }
        .cta-pill {
          border: 1.5px solid #0F0F0E;
          border-radius: 999px;
          padding: 8px 22px;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          transition: background 0.2s, color 0.2s;
          background: transparent;
          color: #0F0F0E;
        }
        .cta-pill:hover {
          background: #0F0F0E;
          color: #FAFAF8;
        }
        .cta-pill-filled {
          border-radius: 999px;
          padding: 14px 36px;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          transition: opacity 0.2s;
          background: #D4240F;
          color: #FAFAF8;
          border: none;
        }
        .cta-pill-filled:hover { opacity: 0.88; }
        .funnel-card {
          background: #FFFFFF;
          border: 1.5px solid #E2E1DC;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.06);
        }
        .stat-card {
          background: #FFFFFF;
          border: 1.5px solid #E2E1DC;
          border-radius: 12px;
          padding: 28px 24px;
        }
        .marquee-track {
          display: flex;
          gap: 48px;
          animation: marquee 18s linear infinite;
          white-space: nowrap;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ borderBottom: '1px solid #E2E1DC', backgroundColor: '#FAFAF8' }} className="sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between" style={{ height: '60px' }}>
          <span className={`small-caps text-sm font-medium tracking-widest ink ${dmSans.className}`} style={{ fontSize: '0.78rem' }}>
            muhib waaqar
          </span>
          <a href="https://muhibwaqar.com" className="cta-pill" style={{ fontFamily: dmSans.style.fontFamily }}>
            Get started
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-16 md:pb-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          {/* Left: Headline + Sub */}
          <div className="flex-1 fade-up fade-up-1">
            <div className="mb-4 flex items-center gap-2">
              <span style={{ width: 28, height: 1.5, backgroundColor: '#D4240F', display: 'inline-block' }}></span>
              <span className="muted text-xs tracking-widest uppercase" style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}>Data-Driven Landing Pages</span>
            </div>
            <h1
              className={`playfair font-black italic leading-none mb-6`}
              style={{ fontSize: 'clamp(42px, 7vw, 80px)', color: '#0F0F0E', maxWidth: '640px' }}
            >
              Landing Pages That Learn From Every Click
            </h1>
            <p className="mb-8 leading-relaxed" style={{ color: '#8A8A82', fontSize: '1.05rem', maxWidth: '480px', fontWeight: 400 }}>
              Most landing pages are set-and-forget. Ours are living systems — continuously tested, refined by real data, and rebuilt to convert better every iteration.
            </p>
            <a href="https://muhibwaqar.com" className="cta-pill-filled inline-block" style={{ fontFamily: dmSans.style.fontFamily }}>
              Get started
            </a>
            <p className="mt-4 text-xs" style={{ color: '#8A8A82' }}>Pages that evolve. Results that compound.</p>
          </div>

          {/* Right: Funnel Card */}
          <div className="mt-12 lg:mt-0 lg:w-80 xl:w-96 flex-shrink-0 fade-up fade-up-2">
            <div className="funnel-card">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#8A8A82', fontSize: '0.65rem', letterSpacing: '0.18em' }}>Conversion Funnel</span>
                <span className="text-xs font-medium" style={{ color: '#D4240F', fontSize: '0.72rem' }}>↑ 8.9% CVR</span>
              </div>

              {/* Funnel rows */}
              {[
                { label: 'Visitors', value: '1,000', pct: 100, color: '#0F0F0E' },
                { label: 'Trials started', value: '340', pct: 34, color: '#D4240F' },
                { label: 'Paid conversions', value: '89', pct: 8.9, color: '#D4240F' },
              ].map((row, i) => (
                <div key={i} className="mb-4 last:mb-0">
                  <div className="flex justify-between items-baseline mb-1.5">
                    <span className="text-xs" style={{ color: '#8A8A82', fontSize: '0.75rem' }}>{row.label}</span>
                    <span className={`playfair font-bold`} style={{ fontSize: '1.15rem', color: row.color }}>{row.value}</span>
                  </div>
                  <div style={{ height: '3px', backgroundColor: '#F0EFEB', borderRadius: '2px', overflow: 'hidden' }}>
                    <div
                      className="funnel-bar"
                      style={{ height: '100%', width: `${row.pct}%`, backgroundColor: i === 0 ? '#0F0F0E' : '#D4240F', borderRadius: '2px' }}
                    />
                  </div>
                </div>
              ))}

              <div style={{ borderTop: '1px solid #E2E1DC', marginTop: '20px', paddingTop: '16px' }}>
                <div className="flex justify-between">
                  <div>
                    <div className="text-xs" style={{ color: '#8A8A82', fontSize: '0.68rem', marginBottom: '2px' }}>Before iteration</div>
                    <div className={`playfair font-bold`} style={{ fontSize: '1.3rem', color: '#8A8A82' }}>3.1%</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="text-xs" style={{ color: '#8A8A82', fontSize: '0.68rem', marginBottom: '2px' }}>After iteration</div>
                    <div className={`playfair font-bold`} style={{ fontSize: '1.3rem', color: '#D4240F' }}>8.9%</div>
                  </div>
                </div>
                <div style={{ marginTop: '10px', fontSize: '0.68rem', color: '#8A8A82', textAlign: 'center' }}>+187% lift over 6 iteration cycles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THIN RULE */}
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <hr style={{ borderColor: '#E2E1DC', borderTopWidth: '1px' }} />
      </div>

      {/* STATS STRIP */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-12 fade-up fade-up-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { num: '2,400+', label: 'Iteration cycles run', sub: 'across all active pages' },
            { num: '+187%', label: 'Average conversion lift', sub: 'from baseline to peak' },
            { num: '48hrs', label: 'First page live', sub: 'from brief to deployed' },
          ].map((s, i) => (
            <div key={i} className="stat-card">
              <div className={`playfair font-black`} style={{ fontSize: '2.4rem', color: '#0F0F0E', lineHeight: 1 }}>{s.num}</div>
              <div className="mt-2 font-medium" style={{ fontSize: '0.85rem', color: '#0F0F0E' }}>{s.label}</div>
              <div className="mt-0.5" style={{ fontSize: '0.75rem', color: '#8A8A82' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* THIN RULE */}
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <hr style={{ borderColor: '#E2E1DC', borderTopWidth: '1px' }} />
      </div>

      {/* FEATURES — Editorial numbered list */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20 fade-up fade-up-4">
        <div className="mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#8A8A82', fontSize: '0.68rem', letterSpacing: '0.2em' }}>What we do</span>
        </div>
        <div className="space-y-0">
          {[
            {
              num: '01',
              title: 'Data-driven iteration cycles',
              body: 'Conversion rates improve automatically through structured A/B testing and real behavioral data — not guesswork. Every cycle compounds on the last.',
            },
            {
              num: '02',
              title: 'SaaS-specialized design',
              body: 'Built specifically for signups, trials, and activation flows. We understand the SaaS funnel deeply — from first impression to paid conversion.',
            },
            {
              num: '03',
              title: 'Production-ready Next.js delivery',
              body: 'Every page ships as a deployable Next.js app. Connect to Vercel in minutes — not weeks. You own the code, the data, and the results.',
            },
          ].map((f, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10 py-8"
              style={{ borderBottom: i < 2 ? '1px solid #E2E1DC' : 'none' }}
            >
              <div className="flex-shrink-0">
                <span className="font-semibold" style={{ fontSize: '0.65rem', color: '#D4240F', letterSpacing: '0.2em', fontVariant: 'small-caps' }}>{f.num}</span>
              </div>
              <div className="flex-1">
                <h3 className={`playfair font-bold mb-2`} style={{ fontSize: '1.35rem', color: '#0F0F0E' }}>{f.title}</h3>
                <p style={{ color: '#8A8A82', fontSize: '0.92rem', lineHeight: 1.7, maxWidth: '520px' }}>{f.body}</p>
              </div>
              <div className="hidden sm:flex items-center" style={{ color: '#E2E1DC', fontSize: '1.5rem' }}>→</div>
            </div>
          ))}
        </div>
      </section>

      {/* THIN RULE */}
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <hr style={{ borderColor: '#E2E1DC', borderTopWidth: '1px' }} />
      </div>

      {/* CTA SECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className={`playfair font-black italic`} style={{ fontSize: 'clamp(32px, 5vw, 58px)', color: '#0F0F0E', lineHeight: 1.1, maxWidth: '520px' }}>
              Ready to build a page that gets smarter?
            </h2>
          </div>
          <div className="flex-shrink-0">
            <a href="https://muhibwaqar.com" className="cta-pill-filled inline-block" style={{ fontFamily: dmSans.style.fontFamily, fontSize: '1rem', padding: '16px 44px' }}>
              Get started
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #E2E1DC', backgroundColor: '#F0EFEB' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className={`small-caps text-xs font-medium tracking-widest`} style={{ color: '#8A8A82', fontSize: '0.72rem' }}>muhib waaqar</span>
          <span style={{ color: '#8A8A82', fontSize: '0.75rem' }}>Pages that evolve. Results that compound.</span>
          <span style={{ color: '#8A8A82', fontSize: '0.72rem' }}>© 2025 muhib waaqar</span>
        </div>
      </footer>
    </div>
  );
}