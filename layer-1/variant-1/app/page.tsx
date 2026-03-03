import { Bebas_Neue, Manrope } from 'next/font/google';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export default function MuhibDarkCinematic() {
  return (
    <div className={`${bebas.variable} ${manrope.variable} min-h-screen bg-[#0A0A0B] text-[#F2EFE9] relative overflow-x-hidden`}>
      {/* Grain overlay via SVG filter */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none z-50 opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* NAV */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 lg:px-20 py-6">
        <div className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-bebas)] text-3xl tracking-widest text-[#F2EFE9]">MUHIB</span>
        </div>
        <a
          href="https://pending"
          className="font-[family-name:var(--font-manrope)] text-sm font-semibold px-6 py-2.5 rounded-full bg-[#E8341A] text-white hover:bg-[#c9290f] transition-all duration-300 shadow-[0_0_20px_#E8341A44] hover:shadow-[0_0_32px_#E8341A66] tracking-wide"
        >
          Get started
        </a>
      </nav>

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-16 pb-24 md:pt-20 md:pb-32">
        {/* Radial spotlight glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 0%, #E8341A22 0%, transparent 70%)',
          }}
        />
        {/* Secondary deep glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 50% 40% at 50% 0%, #E8341A14 0%, transparent 80%)',
          }}
        />

        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-8 bg-[#E8341A]" />
          <span className="font-[family-name:var(--font-manrope)] text-xs font-semibold tracking-[0.25em] text-[#E8341A] uppercase">Community Architecture</span>
          <div className="h-px w-8 bg-[#E8341A]" />
        </div>

        {/* Headline */}
        <h1
          className="font-[family-name:var(--font-bebas)] leading-none tracking-wider text-[#F2EFE9] mb-6"
          style={{ fontSize: 'clamp(72px, 12vw, 140px)' }}
        >
          Communities<br />That Scale
        </h1>

        {/* Subhead */}
        <p className="font-[family-name:var(--font-manrope)] text-[#7A7875] text-base md:text-lg max-w-xl leading-relaxed mb-10">
          Muhib builds, grows, and monetizes engaged communities — so you can focus on leading, not managing.
        </p>

        {/* CTA */}
        <a
          href="https://pending"
          className="font-[family-name:var(--font-manrope)] font-bold text-base px-10 py-4 rounded-full bg-[#E8341A] text-white hover:bg-[#c9290f] transition-all duration-300 shadow-[0_0_40px_#E8341A55] hover:shadow-[0_0_60px_#E8341A88] tracking-wide uppercase"
        >
          Get started
        </a>

        {/* Decorative line */}
        <div className="mt-20 w-px h-16 bg-gradient-to-b from-[#E8341A44] to-transparent mx-auto" />
      </section>

      {/* FEATURES */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 pb-28">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-[#1E1E22]" />
            <span className="font-[family-name:var(--font-manrope)] text-xs tracking-[0.2em] text-[#7A7875] uppercase">What We Do</span>
            <div className="h-px flex-1 bg-[#1E1E22]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div
              className="relative rounded-2xl p-8 bg-[#131316] border border-[#1E1E22] hover:border-[#E8341A33] transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #E8341A0A 0%, transparent 70%)' }} />
              <div className="mb-5">
                <span className="font-[family-name:var(--font-bebas)] text-5xl text-[#E8341A] tracking-wider">01</span>
              </div>
              <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-[#F2EFE9] mb-3">Architect & Attract</h3>
              <p className="font-[family-name:var(--font-manrope)] text-sm text-[#7A7875] leading-relaxed">
                Architect community structures that attract the right people and keep them engaged long-term.
              </p>
              <div className="mt-6 h-px bg-gradient-to-r from-[#E8341A33] to-transparent" />
            </div>

            {/* Card 2 */}
            <div
              className="relative rounded-2xl p-8 bg-[#131316] border border-[#1E1E22] hover:border-[#E8341A33] transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #E8341A0A 0%, transparent 70%)' }} />
              <div className="mb-5">
                <span className="font-[family-name:var(--font-bebas)] text-5xl text-[#E8341A] tracking-wider">02</span>
              </div>
              <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-[#F2EFE9] mb-3">Grow & Monetize</h3>
              <p className="font-[family-name:var(--font-manrope)] text-sm text-[#7A7875] leading-relaxed">
                Proven systems to turn members into advocates and advocates into revenue.
              </p>
              <div className="mt-6 h-px bg-gradient-to-r from-[#E8341A33] to-transparent" />
            </div>

            {/* Card 3 */}
            <div
              className="relative rounded-2xl p-8 bg-[#131316] border border-[#1E1E22] hover:border-[#E8341A33] transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #E8341A0A 0%, transparent 70%)' }} />
              <div className="mb-5">
                <span className="font-[family-name:var(--font-bebas)] text-5xl text-[#E8341A] tracking-wider">03</span>
              </div>
              <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-[#F2EFE9] mb-3">End-to-End Build</h3>
              <p className="font-[family-name:var(--font-manrope)] text-sm text-[#7A7875] leading-relaxed">
                From zero to thriving — end-to-end community building tailored to your vision.
              </p>
              <div className="mt-6 h-px bg-gradient-to-r from-[#E8341A33] to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* SELLING COMMUNITIES SECTION */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[#131316] border border-[#1E1E22] p-10 md:p-16">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 30% 50%, #E8341A08 0%, transparent 70%)' }} />

            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-6 bg-[#E8341A]" />
                  <span className="font-[family-name:var(--font-manrope)] text-xs tracking-[0.2em] text-[#E8341A] uppercase font-semibold">The Muhib Way</span>
                </div>
                <h2
                  className="font-[family-name:var(--font-bebas)] leading-none tracking-wide text-[#F2EFE9] mb-5"
                  style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}
                >
                  Selling Communities<br />That Scale.
                </h2>
                <p className="font-[family-name:var(--font-manrope)] text-[#7A7875] text-sm md:text-base leading-relaxed max-w-lg">
                  We don't just build communities — we engineer growth engines. Every structure, every system, every touchpoint is designed to compound over time.
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-col gap-6 min-w-[180px]">
                <div>
                  <div className="font-[family-name:var(--font-bebas)] text-5xl text-[#E8341A] tracking-wider">10×</div>
                  <div className="font-[family-name:var(--font-manrope)] text-xs text-[#7A7875] tracking-wide uppercase mt-1">Member Growth</div>
                </div>
                <div className="h-px bg-[#1E1E22]" />
                <div>
                  <div className="font-[family-name:var(--font-bebas)] text-5xl text-[#E8341A] tracking-wider">3×</div>
                  <div className="font-[family-name:var(--font-manrope)] text-xs text-[#7A7875] tracking-wide uppercase mt-1">Revenue Per Member</div>
                </div>
                <div className="h-px bg-[#1E1E22]" />
                <div>
                  <div className="font-[family-name:var(--font-bebas)] text-5xl text-[#E8341A] tracking-wider">90%</div>
                  <div className="font-[family-name:var(--font-manrope)] text-xs text-[#7A7875] tracking-wide uppercase mt-1">Retention Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 pb-28">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, #E8341A0D 0%, transparent 70%)' }} />
            <h2
              className="font-[family-name:var(--font-bebas)] leading-none tracking-wide text-[#F2EFE9] mb-6"
              style={{ fontSize: 'clamp(56px, 9vw, 110px)' }}
            >
              Ready to Lead,<br />Not Manage?
            </h2>
            <p className="font-[family-name:var(--font-manrope)] text-[#7A7875] text-base md:text-lg max-w-md mx-auto mb-10">
              Let Muhib handle the architecture. You handle the vision.
            </p>
            <a
              href="https://pending"
              className="inline-block font-[family-name:var(--font-manrope)] font-bold text-base px-12 py-4 rounded-full bg-[#E8341A] text-white hover:bg-[#c9290f] transition-all duration-300 shadow-[0_0_50px_#E8341A55] hover:shadow-[0_0_80px_#E8341A88] tracking-wide uppercase"
            >
              Get started
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-[#1E1E22] px-6 md:px-12 lg:px-20 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-[family-name:var(--font-bebas)] text-2xl tracking-widest text-[#F2EFE9]">MUHIB</span>
          <p className="font-[family-name:var(--font-manrope)] text-xs text-[#7A7875]">
            © 2025 Muhib. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}