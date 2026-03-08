"use client";

import { Bebas_Neue, Manrope } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref}>{count.toLocaleString()}{suffix}</div>;
}

function LineGraph() {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let p = 0;
          const timer = setInterval(() => {
            p += 2;
            setProgress(Math.min(p, 100));
            if (p >= 100) clearInterval(timer);
          }, 20);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const w = 320;
  const h = 140;
  const pad = 20;

  const beforePoints = Array.from({ length: 11 }, (_, i) => {
    const x = pad + (i / 10) * (w - pad * 2);
    const y = h - pad - (h - pad * 2) * 0.18 - Math.sin(i * 0.3) * 4;
    return `${x},${y}`;
  });

  const afterPoints = Array.from({ length: 11 }, (_, i) => {
    const t = i / 10;
    const x = pad + t * (w - pad * 2);
    const y = h - pad - (h - pad * 2) * (0.12 + t * 0.72 + Math.sin(t * 2) * 0.04);
    return `${x},${y}`;
  });

  const clipProgress = `${progress}%`;

  return (
    <div ref={ref} className="relative w-full" style={{ height: h }}>
      <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
        <defs>
          <clipPath id="progressClip">
            <rect x="0" y="0" width={`${progress * 3.2}`} height={h} />
          </clipPath>
          <linearGradient id="afterGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E8291C" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#E8291C" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Grid lines */}
        {[0.25, 0.5, 0.75].map((t, i) => (
          <line key={i} x1={pad} y1={pad + t * (h - pad * 2)} x2={w - pad} y2={pad + t * (h - pad * 2)}
            stroke="#1E1E24" strokeWidth="1" />
        ))}
        {/* Before line */}
        <polyline
          points={beforePoints.join(' ')}
          fill="none"
          stroke="#3A3A4A"
          strokeWidth="2"
          clipPath="url(#progressClip)"
        />
        {/* After fill */}
        <polygon
          points={`${pad},${h - pad} ${afterPoints.join(' ')} ${w - pad},${h - pad}`}
          fill="url(#afterGrad)"
          clipPath="url(#progressClip)"
        />
        {/* After line */}
        <polyline
          points={afterPoints.join(' ')}
          fill="none"
          stroke="#E8291C"
          strokeWidth="2.5"
          strokeLinecap="round"
          clipPath="url(#progressClip)"
        />
      </svg>
      <div className="absolute top-2 right-4 flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-0.5 bg-red-500"></div>
          <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 10, color: '#6B6B7A' }}>After</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-0.5" style={{ background: '#3A3A4A' }}></div>
          <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 10, color: '#6B6B7A' }}>Before</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div
      className={`${bebas.variable} ${manrope.variable} min-h-screen relative overflow-x-hidden`}
      style={{ background: '#0A0A0B', color: '#F5F5F7' }}
    >
      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.04,
        }}
      />

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 py-4"
        style={{ background: 'rgba(10,10,11,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #1A1A20' }}
      >
        <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 22, letterSpacing: '0.08em', color: '#F5F5F7' }}>
          muhib waaqar
        </div>
        <a
          href="https://muhibwaqar.com"
          style={{
            fontFamily: 'var(--font-manrope)',
            fontSize: 13,
            fontWeight: 600,
            background: '#E8291C',
            color: '#F5F5F7',
            padding: '8px 20px',
            borderRadius: 999,
            textDecoration: 'none',
            letterSpacing: '0.02em',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#C41F14')}
          onMouseLeave={e => (e.currentTarget.style.background = '#E8291C')}
        >
          Get started
        </a>
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 pt-36 pb-24 md:pt-44 md:pb-32">
        {/* Diagonal red accent line */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '18%',
            left: '-5%',
            width: '110%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent 0%, #E8291C 30%, #E8291C 70%, transparent 100%)',
            transform: 'rotate(8deg)',
            opacity: 0.18,
          }}
        />
        {/* Radial glow behind headline */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 600,
            height: 400,
            background: 'radial-gradient(ellipse at center, rgba(232,41,28,0.07) 0%, transparent 70%)',
          }}
        />

        <div
          className="mb-2 text-xs tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-manrope)', color: '#E8291C', letterSpacing: '0.25em' }}
        >
          Data-Driven Iteration
        </div>

        <h1
          className="mb-6 leading-none"
          style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(56px, 10vw, 108px)',
            letterSpacing: '0.02em',
            color: '#F5F5F7',
            maxWidth: 900,
          }}
        >
          Landing Pages That Learn From Every Click
        </h1>

        <p
          className="mb-10 max-w-xl mx-auto"
          style={{
            fontFamily: 'var(--font-manrope)',
            fontSize: 'clamp(15px, 2vw, 17px)',
            lineHeight: 1.7,
            color: '#C8C8D4',
          }}
        >
          Most landing pages are set-and-forget. Ours are living systems — continuously tested, refined by real data, and rebuilt to convert better every iteration.
        </p>

        <a
          href="https://muhibwaqar.com"
          style={{
            fontFamily: 'var(--font-manrope)',
            fontSize: 15,
            fontWeight: 700,
            background: '#E8291C',
            color: '#F5F5F7',
            padding: '14px 36px',
            borderRadius: 999,
            textDecoration: 'none',
            letterSpacing: '0.04em',
            display: 'inline-block',
            transition: 'transform 0.2s, background 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#C41F14'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#E8291C'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          Get started
        </a>

        {/* Floating dashboard card */}
        <div
          className="relative mt-16 w-full max-w-lg mx-auto rounded-2xl p-5"
          style={{
            background: 'rgba(17,17,20,0.95)',
            border: '1px solid #1E1E28',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 0 60px rgba(232,41,28,0.12), 0 40px 80px rgba(0,0,0,0.6)',
          }}
        >
          {/* Red glow on bottom edge */}
          <div
            className="absolute bottom-0 left-1/2 pointer-events-none"
            style={{
              transform: 'translateX(-50%)',
              width: '70%',
              height: 2,
              background: 'linear-gradient(90deg, transparent, #E8291C, transparent)',
              borderRadius: 999,
            }}
          />
          <div className="flex items-center justify-between mb-4">
            <div style={{ fontFamily: 'var(--font-manrope)', fontSize: 11, color: '#6B6B7A', letterSpacing: '0.15em', textTransform: 'uppercase' }}>A/B Test — Iteration 7</div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ background: '#E8291C', boxShadow: '0 0 6px #E8291C' }}></div>
              <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 11, color: '#E8291C' }}>Live</span>
            </div>
          </div>
          <LineGraph />
          <div className="flex justify-between mt-4">
            <div className="text-center">
              <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 28, color: '#3A3A4A', letterSpacing: '0.05em' }}>2.1%</div>
              <div style={{ fontFamily: 'var(--font-manrope)', fontSize: 10, color: '#6B6B7A' }}>Before CVR</div>
            </div>
            <div className="text-center">
              <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 28, color: '#E8291C', letterSpacing: '0.05em' }}>+68%</div>
              <div style={{ fontFamily: 'var(--font-manrope)', fontSize: 10, color: '#6B6B7A' }}>Lift</div>
            </div>
            <div className="text-center">
              <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 28, color: '#F5F5F7', letterSpacing: '0.05em' }}>3.5%</div>
              <div style={{ fontFamily: 'var(--font-manrope)', fontSize: 10, color: '#6B6B7A' }}>After CVR</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-4 py-16 md:py-20" style={{ borderTop: '1px solid #1A1A20', borderBottom: '1px solid #1A1A20' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {[
            { value: 2400, suffix: '+', label: 'Iterations Run' },
            { value: 68, suffix: '%', label: 'Avg. Conversion Lift' },
            { value: 140, suffix: '+', label: 'Pages Shipped' },
          ].map((stat, i) => (
            <div key={i}>
              <div
                style={{
                  fontFamily: 'var(--font-bebas)',
                  fontSize: 'clamp(52px, 7vw, 80px)',
                  letterSpacing: '0.03em',
                  color: i === 1 ? '#E8291C' : '#F5F5F7',
                  lineHeight: 1,
                }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-manrope)',
                  fontSize: 13,
                  color: '#6B6B7A',
                  marginTop: 6,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-4 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div
            className="mb-12 text-center text-xs tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-manrope)', color: '#6B6B7A', letterSpacing: '0.25em' }}
          >
            What we build
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '⟳',
                title: 'Data-Driven Iteration',
                body: 'Conversion cycles that improve automatically — every data point feeds the next version of your page.',
              },
              {
                icon: '◈',
                title: 'SaaS-Specialized Design',
                body: 'Built for signups, trials, and activation. Every layout decision is optimized for SaaS conversion flows.',
              },
              {
                icon: '▲',
                title: 'Production-Ready Next.js',
                body: 'Every page ships as a deployable Next.js app. Connect to Vercel and go live in minutes.',
              },
            ].map((feat, i) => (
              <div
                key={i}
                className="rounded-xl p-6 flex flex-col gap-4"
                style={{
                  background: '#111114',
                  border: '1px solid #1E1E28',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#E8291C40')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#1E1E28')}
              >
                <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 28, color: '#E8291C', letterSpacing: '0.05em' }}>
                  {feat.icon}
                </div>
                <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 22, letterSpacing: '0.05em', color: '#F5F5F7' }}>
                  {feat.title}
                </div>
                <div style={{ fontFamily: 'var(--font-manrope)', fontSize: 14, lineHeight: 1.7, color: '#6B6B7A' }}>
                  {feat.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="px-4 py-20 md:py-28 text-center relative overflow-hidden"
        style={{ background: '#111114', borderTop: '1px solid #1A1A20' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(232,41,28,0.08) 0%, transparent 60%)',
          }}
        />
        <div
          className="mb-4 text-xs tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-manrope)', color: '#E8291C', letterSpacing: '0.25em' }}
        >
          Ready to iterate?
        </div>
        <h2
          className="mb-6"
          style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(40px, 7vw, 80px)',
            letterSpacing: '0.03em',
            color: '#F5F5F7',
          }}
        >
          Pages that evolve. Results that compound.
        </h2>
        <p
          className="mb-10 max-w-md mx-auto"
          style={{ fontFamily: 'var(--font-manrope)', fontSize: 15, color: '#6B6B7A', lineHeight: 1.7 }}
        >
          Stop shipping static pages. Start building systems that get smarter with every visitor.
        </p>
        <a
          href="https://muhibwaqar.com"
          style={{
            fontFamily: 'var(--font-manrope)',
            fontSize: 15,
            fontWeight: 700,
            background: '#E8291C',
            color: '#F5F5F7',
            padding: '14px 40px',
            borderRadius: 999,
            textDecoration: 'none',
            letterSpacing: '0.04em',
            display: 'inline-block',
            transition: 'transform 0.2s, background 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#C41F14'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#E8291C'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          Get started
        </a>
      </section>

      {/* FOOTER */}
      <footer
        className="px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderTop: '1px solid #1A1A20' }}
      >
        <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 18, letterSpacing: '0.08em', color: '#3A3A4A' }}>
          muhib waaqar
        </div>
        <div style={{ fontFamily: 'var(--font-manrope)', fontSize: 12, color: '#3A3A4A' }}>
          Pages that evolve. Results that compound.
        </div>
        <div style={{ fontFamily: 'var(--font-manrope)', fontSize: 12, color: '#3A3A4A' }}>
          © {new Date().getFullYear()} muhib waaqar
        </div>
      </footer>
    </div>
  );
}