import { Bebas_Neue, Manrope } from 'next/font/google';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export default function Home() {
  return (
    <main className={`${bebas.variable} ${manrope.variable} min-h-screen`} style={{ backgroundColor: '#0D0D0D', color: '#F5F5F0', fontFamily: 'var(--font-manrope)' }}>
      {/* Grain overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 50,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.04,
        }}
      />

      {/* NAV */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.6rem', letterSpacing: '0.12em', color: '#F5F5F0' }}>
          muhibwaqar
        </div>
        <a
          href="https://muhibwaqar.copm"
          style={{
            backgroundColor: '#E8192C',
            color: '#F5F5F0',
            fontFamily: 'var(--font-manrope)',
            fontWeight: 700,
            fontSize: '0.8rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '10px 24px',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          Get Started
        </a>
      </nav>

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 pt-10 md:pt-16 pb-0 overflow-hidden">
        {/* Floating metrics card */}
        <div
          className="hidden lg:block absolute"
          style={{
            top: '60px',
            right: '48px',
            backgroundColor: '#161616',
            border: '1px solid #2A2A2A',
            padding: '24px 28px',
            width: '240px',
            boxShadow: '0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(232,25,44,0.08)',
            zIndex: 20,
          }}
        >
          <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.75rem', letterSpacing: '0.18em', color: '#6B6B6B', marginBottom: '16px' }}>PIPELINE METRICS</div>
          <div style={{ marginBottom: '14px' }}>
            <div style={{ fontSize: '0.7rem', color: '#6B6B6B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>Pipeline Velocity</div>
            <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '2rem', color: '#F5F5F0', letterSpacing: '0.04em' }}>+340%</div>
            <div style={{ width: '100%', height: '2px', backgroundColor: '#2A2A2A', marginTop: '6px' }}>
              <div style={{ width: '72%', height: '100%', backgroundColor: '#E8192C' }} />
            </div>
          </div>
          <div style={{ marginBottom: '14px' }}>
            <div style={{ fontSize: '0.7rem', color: '#6B6B6B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>Deals Closed</div>
            <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '2rem', color: '#F5F5F0', letterSpacing: '0.04em' }}>128</div>
            <div style={{ width: '100%', height: '2px', backgroundColor: '#2A2A2A', marginTop: '6px' }}>
              <div style={{ width: '58%', height: '100%', backgroundColor: '#E8192C' }} />
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', color: '#6B6B6B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>Community Reach</div>
            <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '2rem', color: '#F5F5F0', letterSpacing: '0.04em' }}>12K+</div>
            <div style={{ width: '100%', height: '2px', backgroundColor: '#2A2A2A', marginTop: '6px' }}>
              <div style={{ width: '88%', height: '100%', backgroundColor: '#E8192C' }} />
            </div>
          </div>
        </div>

        {/* Diagonal red rule */}
        <div
          style={{
            position: 'absolute',
            top: '38%',
            left: '-5%',
            width: '60%',
            height: '2px',
            backgroundColor: '#E8192C',
            transform: 'rotate(8deg)',
            opacity: 0.35,
            zIndex: 5,
          }}
        />

        {/* Headline */}
        <div className="relative" style={{ zIndex: 10, maxWidth: '820px' }}>
          <div
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(72px, 13vw, 180px)',
              lineHeight: 0.92,
              letterSpacing: '0.02em',
              color: '#F5F5F0',
            }}
          >
            <div>BUILD</div>
            <div style={{ color: '#E8192C' }}>THE</div>
            <div>PIPELINE</div>
            <div style={{ color: '#F5F5F0', fontSize: 'clamp(52px, 9vw, 130px)' }}>THAT BUILDS ITSELF</div>
          </div>
        </div>

        {/* Red horizontal cut line */}
        <div
          style={{
            width: '100vw',
            marginLeft: 'calc(-1 * (6vw))',
            height: '2px',
            backgroundColor: '#E8192C',
            marginTop: '32px',
            marginBottom: '40px',
          }}
        />

        {/* Subhead + CTA */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16 pb-20" style={{ maxWidth: '900px' }}>
          <p style={{ fontFamily: 'var(--font-manrope)', fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)', color: '#6B6B6B', lineHeight: 1.7, maxWidth: '480px', flex: 1 }}>
            muhibwaqar works with B2B SaaS communities to turn relationships into repeatable revenue — strategy, systems, and execution in one place.
          </p>
          <div className="flex-shrink-0">
            <a
              href="https://muhibwaqar.copm"
              style={{
                backgroundColor: '#E8192C',
                color: '#F5F5F0',
                fontFamily: 'var(--font-manrope)',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '16px 40px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Get Started
            </a>
            <div style={{ marginTop: '12px', fontSize: '0.72rem', color: '#6B6B6B', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Pipeline. Community. Growth.</div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ backgroundColor: '#161616', position: 'relative', zIndex: 10 }} className="px-6 md:px-12 py-16 md:py-24">
        <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.75rem', letterSpacing: '0.22em', color: '#E8192C', marginBottom: '48px' }}>— WHAT WE DO</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {[
            {
              num: '01',
              title: 'Community-Led Pipeline',
              body: 'Strategies that compound over time — turning your community into a self-sustaining engine of qualified pipeline.',
            },
            {
              num: '02',
              title: 'Positioning & Outreach',
              body: 'B2B SaaS positioning and outreach built for real conversion — not vanity metrics, but deals that close.',
            },
            {
              num: '03',
              title: 'Hands-On Partnership',
              body: 'From first touchpoint to closed deal, we execute alongside you — strategy and implementation, never just advice.',
            },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                borderTop: '1px solid #2A2A2A',
                borderRight: i < 2 ? '1px solid #2A2A2A' : 'none',
                padding: '40px 36px',
                position: 'relative',
                transition: 'background 0.3s',
              }}
              className="group hover:bg-[#1a1a1a]"
            >
              <div
                style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: '3.5rem',
                  color: '#2A2A2A',
                  lineHeight: 1,
                  marginBottom: '24px',
                  letterSpacing: '0.04em',
                  transition: 'color 0.3s',
                }}
                className="group-hover:text-[#E8192C]"
              >
                {card.num}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: '1.6rem',
                  letterSpacing: '0.06em',
                  color: '#F5F5F0',
                  marginBottom: '16px',
                }}
              >
                {card.title}
              </div>
              <p style={{ fontFamily: 'var(--font-manrope)', fontSize: '0.9rem', color: '#6B6B6B', lineHeight: 1.75 }}>
                {card.body}
              </p>
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '0%',
                  height: '2px',
                  backgroundColor: '#E8192C',
                  transition: 'width 0.4s ease',
                }}
                className="group-hover:w-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="relative z-10 px-6 md:px-12 py-16 md:py-28" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.75rem', letterSpacing: '0.22em', color: '#E8192C', marginBottom: '24px' }}>— THE APPROACH</div>
            <div
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                lineHeight: 1.0,
                letterSpacing: '0.04em',
                color: '#F5F5F0',
                marginBottom: '28px',
              }}
            >
              RELATIONSHIPS<br />
              <span style={{ color: '#E8192C' }}>BECOME</span><br />
              REVENUE
            </div>
            <p style={{ fontFamily: 'var(--font-manrope)', fontSize: '0.95rem', color: '#6B6B6B', lineHeight: 1.8, maxWidth: '420px' }}>
              Most B2B SaaS growth stalls because it relies on cold outreach and paid acquisition. We build systems where your community does the heavy lifting — creating compounding pipeline that grows without proportional spend.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <div
              style={{
                backgroundColor: '#161616',
                border: '1px solid #2A2A2A',
                padding: '36px',
                position: 'relative',
              }}
            >
              <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.7rem', letterSpacing: '0.2em', color: '#6B6B6B', marginBottom: '28px' }}>EXECUTION FRAMEWORK</div>
              {[
                { phase: 'Phase 01', label: 'Community Audit & Positioning', status: 'COMPLETE' },
                { phase: 'Phase 02', label: 'Pipeline Architecture', status: 'ACTIVE' },
                { phase: 'Phase 03', label: 'Outreach & Activation', status: 'QUEUED' },
                { phase: 'Phase 04', label: 'Close & Compound', status: 'QUEUED' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 0',
                    borderBottom: i < 3 ? '1px solid #2A2A2A' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: item.status === 'COMPLETE' ? '#E8192C' : item.status === 'ACTIVE' ? '#E8192C' : '#2A2A2A',
                        opacity: item.status === 'ACTIVE' ? 1 : item.status === 'COMPLETE' ? 0.6 : 1,
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.65rem', letterSpacing: '0.15em', color: '#6B6B6B' }}>{item.phase}</div>
                      <div style={{ fontFamily: 'var(--font-manrope)', fontSize: '0.85rem', color: item.status === 'QUEUED' ? '#6B6B6B' : '#F5F5F0', fontWeight: 500 }}>{item.label}</div>
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-bebas)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      color: item.status === 'ACTIVE' ? '#E8192C' : '#6B6B6B',
                      border: `1px solid ${item.status === 'ACTIVE' ? '#E8192C' : '#2A2A2A'}`,
                      padding: '3px 8px',
                    }}
                  >
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
            {/* Decorative corner accent */}
            <div style={{ position: 'absolute', top: '-8px', right: '-8px', width: '32px', height: '32px', borderTop: '2px solid #E8192C', borderRight: '2px solid #E8192C' }} />
            <div style={{ position: 'absolute', bottom: '-8px', left: '-8px', width: '32px', height: '32px', borderBottom: '2px solid #E8192C', borderLeft: '2px solid #E8192C' }} />
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        style={{
          backgroundColor: '#E8192C',
          position: 'relative',
          zIndex: 10,
          overflow: 'hidden',
        }}
        className="px-6 md:px-12 py-16 md:py-20"
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            opacity: 0.06,
            pointerEvents: 'none',
          }}
        />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                lineHeight: 1.0,
                letterSpacing: '0.04em',
                color: '#F5F5F0',
              }}
            >
              READY TO BUILD<br />YOUR PIPELINE?
            </div>
            <p style={{ fontFamily: 'var(--font-manrope)', fontSize: '0.9rem', color: 'rgba(245,245,240,0.7)', marginTop: '12px', maxWidth: '400px', lineHeight: 1.7 }}>
              Let's turn your community into your most powerful growth channel.
            </p>
          </div>
          <a
            href="https://muhibwaqar.copm"
            style={{
              backgroundColor: '#0D0D0D',
              color: '#F5F5F0',
              fontFamily: 'var(--font-manrope)',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '18px 48px',
              textDecoration: 'none',
              display: 'inline-block',
              flexShrink: 0,
              whiteSpace: 'nowrap',
            }}
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#0D0D0D', borderTop: '1px solid #2A2A2A', position: 'relative', zIndex: 10 }} className="px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.4rem', letterSpacing: '0.12em', color: '#F5F5F0', marginBottom: '4px' }}>muhibwaqar</div>
            <div style={{ fontFamily: 'var(--font-manrope)', fontSize: '0.75rem', color: '#6B6B6B', letterSpacing: '0.06em' }}>Pipeline. Community. Growth.</div>
          </div>
          <div style={{ fontFamily: 'var(--font-manrope)', fontSize: '0.75rem', color: '#6B6B6B', textAlign: 'right' }}>
            <div>© 2025 muhibwaqar. All rights reserved.</div>
            <div style={{ marginTop: '4px' }}>Working with communities to build and pipeline B2B SaaS growth.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}