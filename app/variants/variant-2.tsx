"use client";

import { Bebas_Neue, Karla } from 'next/font/google';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' });
const karla = Karla({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-karla' });

export default function MuhibVariant2() {
  return (
    <div className={`${bebas.variable} ${karla.variable} min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden`}>
      <style>{`
        :root {
          --font-bebas: ${bebas.style.fontFamily};
          --font-karla: ${karla.style.fontFamily};
        }
        .font-bebas { font-family: var(--font-bebas), sans-serif; }
        .font-karla { font-family: var(--font-karla), sans-serif; }
        .stroke-red {
          -webkit-text-stroke: 3px #CC1111;
          color: transparent;
        }
        .stroke-red-sm {
          -webkit-text-stroke: 2px #CC1111;
          color: transparent;
        }
        @media (max-width: 768px) {
          .stroke-red {
            -webkit-text-stroke: 2px #CC1111;
          }
        }
        .clip-headline {
          overflow: hidden;
        }
        .red-rule {
          width: 3px;
          background: #CC1111;
          flex-shrink: 0;
        }
        .num-item:not(:last-child) {
          border-bottom: 1px solid #1E1E1E;
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .anim-left { animation: slideInLeft 0.8s ease forwards; }
        .anim-right { animation: slideInRight 0.8s ease 0.2s forwards; opacity: 0; }
        .anim-up-1 { animation: fadeUp 0.6s ease 0.4s forwards; opacity: 0; }
        .anim-up-2 { animation: fadeUp 0.6s ease 0.55s forwards; opacity: 0; }
        .anim-up-3 { animation: fadeUp 0.6s ease 0.7s forwards; opacity: 0; }
        .cta-btn {
          background: #CC1111;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .cta-btn:hover {
          background: #E01313;
          transform: translateY(-2px);
        }
        .cta-btn:active {
          transform: translateY(0);
        }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 border-b border-[#1A1A1A] bg-[#0D0D0D]">
        <span className="font-bebas text-2xl md:text-3xl tracking-widest text-white">MUHIB</span>
        <a
          href="https://win.co"
          className="cta-btn font-karla font-700 text-sm text-white px-6 py-2.5 uppercase tracking-widest"
        >
          Get started
        </a>
      </nav>

      {/* HERO */}
      <section className="pt-24 md:pt-20 min-h-screen flex flex-col md:flex-row">
        {/* LEFT: HEADLINE */}
        <div className="flex-1 flex flex-col justify-center px-6 md:pl-12 md:pr-0 pt-12 md:pt-0 clip-headline anim-left">
          <div className="font-bebas leading-none select-none">
            <div className="text-[clamp(80px,14vw,180px)] text-white whitespace-nowrap">WE BUILD</div>
            <div className="text-[clamp(80px,14vw,180px)] text-white whitespace-nowrap">PIPELINES</div>
            <div className="text-[clamp(80px,14vw,180px)] text-white whitespace-nowrap">THAT</div>
            <div className="text-[clamp(80px,14vw,180px)] stroke-red whitespace-nowrap">CONVERT</div>
          </div>
          {/* Red rule below headline on mobile */}
          <div className="mt-6 h-[3px] w-24 bg-[#CC1111] md:hidden"></div>
        </div>

        {/* VERTICAL RED RULE — desktop only */}
        <div className="hidden md:flex items-stretch mx-8 lg:mx-12">
          <div className="red-rule my-16"></div>
        </div>

        {/* RIGHT: BODY + CTA */}
        <div className="flex-shrink-0 md:w-[380px] lg:w-[440px] flex flex-col justify-center px-6 md:pr-12 pb-16 md:pb-0 anim-right">
          <div className="mb-8">
            <div className="h-[3px] w-12 bg-[#CC1111] mb-6"></div>
            <p className="font-karla text-base md:text-lg text-[#AAAAAA] leading-relaxed">
              Muhib engineers end-to-end sales systems — from cold outreach to closed deals — so your team stops guessing and starts winning.
            </p>
          </div>
          <a
            href="https://win.co"
            className="cta-btn font-karla font-bold text-white text-sm uppercase tracking-[0.2em] px-8 py-4 inline-block text-center w-full md:w-auto"
          >
            Get started
          </a>
          <p className="font-karla text-xs text-[#555555] mt-4 uppercase tracking-widest">Build your pipeline today</p>
        </div>
      </section>

      {/* RED DIVIDER */}
      <div className="w-full h-[3px] bg-[#CC1111]"></div>

      {/* FEATURES — Editorial numbered list */}
      <section className="bg-[#0D0D0D] px-6 md:px-12 py-0">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-4 py-10 border-b border-[#1E1E1E]">
            <div className="h-[2px] w-8 bg-[#CC1111]"></div>
            <span className="font-karla text-xs uppercase tracking-[0.3em] text-[#555555]">How we do it</span>
          </div>

          {/* Item 01 */}
          <div className="num-item flex flex-col md:flex-row md:items-start gap-4 md:gap-12 py-10 anim-up-1">
            <div className="flex-shrink-0">
              <span className="font-bebas text-[clamp(60px,8vw,100px)] text-[#CC1111] leading-none">01</span>
            </div>
            <div className="flex-1 flex flex-col justify-center md:pt-4">
              <h3 className="font-bebas text-2xl md:text-3xl text-white tracking-wide mb-2">NICHE-TARGETED PROSPECTING</h3>
              <p className="font-karla text-[#AAAAAA] text-base leading-relaxed max-w-xl">
                Puts you in front of buyers who are ready — not a spray-and-pray list. We identify your exact ICP and build outreach that lands.
              </p>
            </div>
          </div>

          {/* Item 02 */}
          <div className="num-item flex flex-col md:flex-row md:items-start gap-4 md:gap-12 py-10 anim-up-2">
            <div className="flex-shrink-0">
              <span className="font-bebas text-[clamp(60px,8vw,100px)] text-[#CC1111] leading-none">02</span>
            </div>
            <div className="flex-1 flex flex-col justify-center md:pt-4">
              <h3 className="font-bebas text-2xl md:text-3xl text-white tracking-wide mb-2">CONVERSION-ENGINEERED SEQUENCES</h3>
              <p className="font-karla text-[#AAAAAA] text-base leading-relaxed max-w-xl">
                Turn cold leads into booked calls. Every touchpoint is crafted to move prospects through the funnel — not just fill an inbox.
              </p>
            </div>
          </div>

          {/* Item 03 */}
          <div className="num-item flex flex-col md:flex-row md:items-start gap-4 md:gap-12 py-10 anim-up-3">
            <div className="flex-shrink-0">
              <span className="font-bebas text-[clamp(60px,8vw,100px)] text-[#CC1111] leading-none">03</span>
            </div>
            <div className="flex-1 flex flex-col justify-center md:pt-4">
              <h3 className="font-bebas text-2xl md:text-3xl text-white tracking-wide mb-2">PIPELINE INFRASTRUCTURE BUILT TO SCALE</h3>
              <p className="font-karla text-[#AAAAAA] text-base leading-relaxed max-w-xl">
                Revenue growth without adding headcount. We build the systems, automations, and processes that compound over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RED DIVIDER */}
      <div className="w-full h-[3px] bg-[#CC1111]"></div>

      {/* PIPELINE METRICS STRIP */}
      <section className="bg-[#0D0D0D] px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-[#1E1E1E]">
            <div className="flex flex-col items-start p-8 border-b sm:border-b-0 sm:border-r border-[#1E1E1E]">
              <span className="font-bebas text-[clamp(48px,6vw,80px)] text-[#CC1111] leading-none">47</span>
              <span className="font-karla text-xs uppercase tracking-[0.2em] text-[#555555] mt-2">Deals closed this month</span>
            </div>
            <div className="flex flex-col items-start p-8 border-b sm:border-b-0 sm:border-r border-[#1E1E1E]">
              <span className="font-bebas text-[clamp(48px,6vw,80px)] text-[#CC1111] leading-none">$2.3M</span>
              <span className="font-karla text-xs uppercase tracking-[0.2em] text-[#555555] mt-2">Active pipeline value</span>
            </div>
            <div className="flex flex-col items-start p-8">
              <span className="font-bebas text-[clamp(48px,6vw,80px)] text-[#CC1111] leading-none">3.8×</span>
              <span className="font-karla text-xs uppercase tracking-[0.2em] text-[#555555] mt-2">Average ROI for clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#CC1111] px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-bebas text-[clamp(40px,6vw,80px)] text-white leading-none">STOP GUESSING.</h2>
            <h2 className="font-bebas text-[clamp(40px,6vw,80px)] text-white leading-none">START WINNING.</h2>
          </div>
          <a
            href="https://win.co"
            className="font-karla font-bold text-[#CC1111] bg-white text-sm uppercase tracking-[0.2em] px-10 py-4 inline-block hover:bg-[#F5F5F5] transition-colors duration-200 whitespace-nowrap flex-shrink-0"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0D0D0D] border-t border-[#1E1E1E] px-6 md:px-12 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-bebas text-xl tracking-widest text-white">MUHIB</span>
          <span className="font-karla text-xs text-[#555555] uppercase tracking-widest">© {new Date().getFullYear()} Muhib. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}