import { Anton, Work_Sans } from 'next/font/google';

const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' });
const workSans = Work_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-work' });

export default function MuhibVariant2() {
  return (
    <div className={`${anton.variable} ${workSans.variable} min-h-screen bg-[#F7F5F0] relative overflow-x-hidden`}>
      {/* Left vertical rule */}
      <div className="fixed left-0 top-0 bottom-0 w-[6px] bg-[#0D0D0D] z-50" />

      {/* Nav */}
      <nav className="pl-10 pr-6 md:pr-12 py-6 flex items-center justify-between border-b-2 border-[#0D0D0D]">
        <span
          style={{ fontFamily: 'var(--font-anton)' }}
          className="text-[#0D0D0D] text-2xl md:text-3xl tracking-widest uppercase"
        >
          MUHIB
        </span>
        <a
          href="https://pending"
          className="bg-[#FF2D00] text-white px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-[#0D0D0D] transition-colors duration-200"
          style={{ fontFamily: 'var(--font-work)' }}
        >
          Get started
        </a>
      </nav>

      {/* Hero */}
      <section className="pl-10 pr-6 md:pr-16 pt-12 md:pt-20 pb-0">
        {/* Overline */}
        <p
          className="text-[#6B6B6B] text-xs md:text-sm uppercase tracking-[0.3em] mb-6"
          style={{ fontFamily: 'var(--font-work)' }}
        >
          Selling communities that scale
        </p>

        {/* Massive headline */}
        <div className="mb-0">
          <h1
            style={{ fontFamily: 'var(--font-anton)', lineHeight: 0.88, letterSpacing: '-0.01em' }}
            className="text-[clamp(72px,14vw,180px)] text-[#0D0D0D] uppercase leading-none"
          >
            COMMUNITIES
          </h1>
          {/* Thick horizontal rule between lines */}
          <div className="w-full h-[4px] bg-[#0D0D0D] my-3 md:my-4" />
          <h1
            style={{ fontFamily: 'var(--font-anton)', lineHeight: 0.88, letterSpacing: '-0.01em' }}
            className="text-[clamp(72px,14vw,180px)] text-[#FF2D00] uppercase leading-none"
          >
            THAT SCALE
          </h1>
        </div>

        {/* Subhead + CTA row */}
        <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end gap-8 md:gap-16 pb-12 md:pb-20 border-b-2 border-[#0D0D0D]">
          <p
            className="text-[#0D0D0D] text-base md:text-lg leading-relaxed max-w-md"
            style={{ fontFamily: 'var(--font-work)' }}
          >
            Muhib builds, grows, and monetizes engaged communities — so you can focus on leading, not managing.
          </p>
          <div className="flex-shrink-0">
            <a
              href="https://pending"
              className="block w-full md:w-auto bg-[#FF2D00] text-white text-center px-12 py-5 text-base font-bold uppercase tracking-[0.2em] hover:bg-[#0D0D0D] transition-colors duration-200"
              style={{ fontFamily: 'var(--font-work)' }}
            >
              Get started →
            </a>
          </div>
        </div>
      </section>

      {/* Features — numbered vertical list */}
      <section className="pl-10 pr-6 md:pr-16 py-0">
        <div className="border-b-2 border-[#0D0D0D] py-10 md:py-14 flex flex-col md:flex-row md:items-start gap-6 md:gap-0">
          <div className="md:w-24 flex-shrink-0">
            <span
              style={{ fontFamily: 'var(--font-anton)' }}
              className="text-[#FF2D00] text-5xl md:text-6xl leading-none"
            >
              01
            </span>
          </div>
          <div className="flex-1">
            <h3
              style={{ fontFamily: 'var(--font-anton)' }}
              className="text-[#0D0D0D] text-2xl md:text-4xl uppercase tracking-wide mb-3"
            >
              Architect & Attract
            </h3>
            <p
              className="text-[#6B6B6B] text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ fontFamily: 'var(--font-work)' }}
            >
              Architect community structures that attract the right people and keep them engaged long-term.
            </p>
          </div>
        </div>

        <div className="border-b-2 border-[#0D0D0D] py-10 md:py-14 flex flex-col md:flex-row md:items-start gap-6 md:gap-0">
          <div className="md:w-24 flex-shrink-0">
            <span
              style={{ fontFamily: 'var(--font-anton)' }}
              className="text-[#FF2D00] text-5xl md:text-6xl leading-none"
            >
              02
            </span>
          </div>
          <div className="flex-1">
            <h3
              style={{ fontFamily: 'var(--font-anton)' }}
              className="text-[#0D0D0D] text-2xl md:text-4xl uppercase tracking-wide mb-3"
            >
              Members to Revenue
            </h3>
            <p
              className="text-[#6B6B6B] text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ fontFamily: 'var(--font-work)' }}
            >
              Proven systems to turn members into advocates and advocates into revenue.
            </p>
          </div>
        </div>

        <div className="border-b-2 border-[#0D0D0D] py-10 md:py-14 flex flex-col md:flex-row md:items-start gap-6 md:gap-0">
          <div className="md:w-24 flex-shrink-0">
            <span
              style={{ fontFamily: 'var(--font-anton)' }}
              className="text-[#FF2D00] text-5xl md:text-6xl leading-none"
            >
              03
            </span>
          </div>
          <div className="flex-1">
            <h3
              style={{ fontFamily: 'var(--font-anton)' }}
              className="text-[#0D0D0D] text-2xl md:text-4xl uppercase tracking-wide mb-3"
            >
              Zero to Thriving
            </h3>
            <p
              className="text-[#6B6B6B] text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ fontFamily: 'var(--font-work)' }}
            >
              From zero to thriving — end-to-end community building tailored to your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA band */}
      <section className="pl-10 pr-6 md:pr-16 py-16 md:py-24 bg-[#0D0D0D]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p
              className="text-[#6B6B6B] text-xs uppercase tracking-[0.3em] mb-3"
              style={{ fontFamily: 'var(--font-work)' }}
            >
              Ready to scale?
            </p>
            <h2
              style={{ fontFamily: 'var(--font-anton)' }}
              className="text-white text-[clamp(36px,6vw,80px)] uppercase leading-none"
            >
              Start your community.
            </h2>
          </div>
          <a
            href="https://pending"
            className="flex-shrink-0 bg-[#FF2D00] text-white px-12 py-5 text-base font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#0D0D0D] transition-colors duration-200 text-center"
            style={{ fontFamily: 'var(--font-work)' }}
          >
            Get started →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="pl-10 pr-6 md:pr-16 py-6 border-t-2 border-[#0D0D0D] flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <span
          style={{ fontFamily: 'var(--font-anton)' }}
          className="text-[#0D0D0D] text-xl tracking-widest uppercase"
        >
          MUHIB
        </span>
        <p
          className="text-[#6B6B6B] text-sm"
          style={{ fontFamily: 'var(--font-work)' }}
        >
          © 2025 Muhib. All rights reserved.
        </p>
      </footer>
    </div>
  );
}