import Link from "next/link";
import { LeadCapture } from "@/components/lead-capture";

const highlights = [
  {
    metric: "7.2x",
    label: "average ROAS lift across core accounts",
  },
  {
    metric: "38%",
    label: "reduction in wasted ad spend within 60 days",
  },
  {
    metric: "91%",
    label: "of clients hit or exceed revenue targets in Q1",
  },
];

const painPoints = [
  "You’re scaling spend but CAC keeps creeping up.",
  "Attribution is a mess—reporting never matches finance.",
  "You’re stuck in creative testing purgatory with no winners.",
];

const frameworks = [
  {
    title: "Profit-first targeting",
    description:
      "We rebuild campaigns around profitability tiers, not vanity demographics—so every dollar drives tracked margin.",
  },
  {
    title: "Creative sprints that compound",
    description:
      "Our structured, weekly creative testing pipeline turns insights into winning ads fast, then scales them safely.",
  },
  {
    title: "Revenue accountability",
    description:
      "Granular dashboards map spend to sales daily. If performance slips, your fees pause until we beat baseline.",
  },
];

const caseStudy = {
  title: "DTC wellness brand reclaimed $52k/mo in wasted spend",
  bulletPoints: [
    "Cut non-converting audiences and consolidated 19 SKUs into four margin tiers.",
    "Introduced TikTok + UGC hybrid funnel that dropped blended CAC from $72 to $41.",
    "Scaled profitable spend 46% in 90 days with creative refresh cycles every 12 days.",
  ],
};

const testimonials = [
  {
    quote:
      "They rebuilt our paid strategy around contribution margin. Within six weeks we finally understood where profit was leaking—and plugged it.",
    name: "Lena Harris",
    role: "COO, BrightCart",
  },
  {
    quote:
      "Adcraze treats every test like an experiment. Our reporting is cleaner than it’s ever been and we actually trust the numbers now.",
    name: "Imran Malik",
    role: "Head of Growth, SupplyShift",
  },
  {
    quote:
      "We were ready to slash paid. Instead, they found us $80k in incremental revenue per month without increasing budget.",
    name: "Sasha Nguyen",
    role: "Founder, Loop & Loom",
  },
];

const faqs = [
  {
    question: "What kind of brands do you work with?",
    answer:
      "We partner with funded startups and established scale-ups investing $8k–$150k per month across Meta, Google, TikTok, and programmatic. E-commerce, SaaS, and lead-gen funnels welcome—as long as performance is the priority.",
  },
  {
    question: "How do performance-based fees work?",
    answer:
      "If we fail to beat the baseline KPIs we align on (ROAS, CAC, MER, or revenue targets), management fees pause until we’re back above target. You’re never paying full freight for under-performance.",
  },
  {
    question: "Can you work with our in-house team?",
    answer:
      "Absolutely. We plug into internal teams to fill strategic gaps, run high-velocity testing, and eliminate guesswork in reporting. Think of us as your performance lab and accountability partner.",
  },
  {
    question: "How fast can we launch?",
    answer:
      "Audit and strategy alignment take 10 business days. Implementation follows immediately—most clients see measurable lift inside the first 30-day sprint.",
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-navy to-deep-slate text-white">
      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(42,127,255,0.18),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(160deg,_rgba(10,26,53,0.8),_rgba(21,35,70,0.95))]" />
          <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-electric/20 blur-3xl" />
        </div>
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-electric text-lg font-bold uppercase text-white shadow-lg shadow-electric/40">
              A
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                Adcraze
              </p>
              <p className="text-base font-semibold text-white">
                Performance Advertising
              </p>
            </div>
          </Link>
          <div className="hidden items-center gap-6 text-sm font-semibold uppercase tracking-wide sm:flex">
            <a href="#case-study" className="text-white/70 transition hover:text-white">
              Proof
            </a>
            <a href="#process" className="text-white/70 transition hover:text-white">
              Process
            </a>
            <a href="#faq" className="text-white/70 transition hover:text-white">
              FAQ
            </a>
            <a
              href="#consultation"
              className="rounded-full bg-orange px-5 py-2 text-navy transition hover:bg-orange/90"
            >
              Book Consultation
            </a>
          </div>
        </nav>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-10 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pb-24">
          <div className="space-y-8">
            <p className="inline-flex rounded-full border border-electric/40 bg-electric/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-electric">
              We only win when you win
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Performance-based advertising that scales your revenue—not your
              costs.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate">
              We partner with frustrated founders, marketing leaders, and teams
              ready to stop bleeding cash on guesswork. Every campaign, creative
              test, and budget decision is tied to one thing—profitable growth
              you can prove.
            </p>
            <div className="flex flex-col gap-4 text-sm font-semibold sm:flex-row">
              <a
                href="#consultation"
                className="flex items-center justify-center gap-2 rounded-full bg-electric px-8 py-3 uppercase tracking-wide text-white shadow-lg shadow-electric/30 transition hover:-translate-y-0.5 hover:bg-electric/90"
              >
                Book a consultation
              </a>
              <a
                href="#lead-form"
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3 uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
              >
                Get my free audit
              </a>
            </div>
            <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.metric} className="space-y-2">
                  <p className="text-3xl font-bold text-electric">{item.metric}</p>
                  <p className="text-sm text-slate/70">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
            <div className="absolute -top-12 right-12 h-28 w-28 rounded-full bg-orange/20 blur-3xl" />
            <div className="space-y-5">
              <h2 className="text-lg font-semibold uppercase tracking-wide text-white/80">
                Where we eliminate waste
              </h2>
              <ul className="space-y-5 text-sm leading-relaxed text-slate/80">
                {painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange" />
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-electric/40 bg-electric/10 p-5 text-sm text-electric">
                We plug profit leaks, rebuild tracking, and throttle spend toward
                the creative, audiences, and channels actually driving revenue.
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="space-y-24 pb-24 pt-16 md:space-y-32 md:pb-32">
        <section className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <h2 className="text-3xl font-semibold text-white">
                The Adcraze performance framework
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-slate/80">
                Built to cut waste fast, then scale profitably. No retainer bloat,
                no black-box dashboards. Just accountable revenue impact.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {frameworks.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-deep-slate/70 p-6 transition hover:border-electric/60 hover:bg-deep-slate/90"
                >
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate/80">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="case-study"
          className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:px-10 lg:flex-row"
        >
          <div className="lg:w-1/2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange">
              Case study
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              {caseStudy.title}
            </h2>
            <ul className="mt-6 space-y-4 text-base leading-relaxed text-slate/80">
              {caseStudy.bulletPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 inline-flex h-2 w-8 rounded-full bg-electric" />
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2">
            <div className="h-full rounded-3xl border border-electric/30 bg-white/5 p-6">
              <h3 className="text-lg font-semibold uppercase tracking-wide text-white/80">
                Predictable pipeline
              </h3>
              <div className="mt-6 grid gap-5 text-sm leading-relaxed text-slate/80">
                <div className="rounded-2xl border border-white/10 bg-deep-slate/80 p-6">
                  <p className="text-4xl font-bold text-electric">+46%</p>
                  <p className="mt-2 text-sm text-slate/70">
                    Net new revenue in 90 days without increasing total spend.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-deep-slate/80 p-6">
                  <p className="text-4xl font-bold text-electric">-31%</p>
                  <p className="mt-2 text-sm text-slate/70">
                    Drop in blended CAC after retooling tracking & bidding.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-deep-slate/80 p-6">
                  <p className="text-4xl font-bold text-electric">12 days</p>
                  <p className="mt-2 text-sm text-slate/70">
                    Average creative refresh cycle to keep ads converting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange">
                Who we’re built for
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Small-to-midsize teams who need accountable growth
              </h2>
              <p className="text-base leading-relaxed text-slate/80">
                Whether you’re an e-commerce founder staring down rising CAC, a
                marketing manager juggling stakeholders, or a lean growth team
                scaling a SaaS funnel—Adcraze slots in as the revenue partner you
                can finally trust.
              </p>
              <div className="grid gap-4 text-sm text-slate/80 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-deep-slate/70 p-4">
                  <p className="text-sm font-semibold text-white">
                    E-commerce & DTC
                  </p>
                  <p className="mt-2 text-xs">
                    Profit-tiered catalog structures, high-velocity creative sprints,
                    and lifecycle-focused measurement.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-deep-slate/70 p-4">
                  <p className="text-sm font-semibold text-white">SaaS & B2B</p>
                  <p className="mt-2 text-xs">
                    Full-funnel attribution, demand capture + creation balance, and
                    pipeline accountability.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-deep-slate/70 p-4">
                  <p className="text-sm font-semibold text-white">
                    Local & service-based
                  </p>
                  <p className="mt-2 text-xs">
                    Lead-to-close tracking, call scoring insights, and budget
                    reallocation to profitable zip codes.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-white/10 bg-deep-slate/80 p-6">
              <h3 className="text-lg font-semibold text-white">
                What you get with every engagement
              </h3>
              <ul className="space-y-4 text-sm leading-relaxed text-slate/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-electric" />
                  Dedicated strategist + channel specialists that plug into your
                  workflows.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-electric" />
                  Live dashboards that reconcile with finance and merch daily.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-electric" />
                  Rapid creative pipeline with real-time insight reporting.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-electric" />
                  Fees aligned to performance—if we don’t win, you don’t pay.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="lead-form" className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange">
                Take the next step
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Ready to stop wasting ad spend?
              </h2>
              <p className="text-base leading-relaxed text-slate/80">
                Tell us where you’re stuck. We’ll respond within a day with a
                custom teardown, quick wins we can implement immediately, and a
                roadmap for sustainable growth.
              </p>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-electric">
                  What happens next
                </p>
                <ol className="mt-4 space-y-3 text-sm leading-relaxed text-slate/80">
                  <li>
                    1. We review your accounts and surface the biggest wasted spend
                    pockets.
                  </li>
                  <li>
                    2. You get a performance plan with projections, creative angle
                    ideas, and quick wins.
                  </li>
                  <li>3. We align on KPIs, launch sprint zero, and start scaling.</li>
                </ol>
              </div>
            </div>
            <LeadCapture />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-slate/80"
              >
                <p className="text-white/90">“{testimonial.quote}”</p>
                <figcaption className="mt-4 text-sm font-semibold text-white">
                  {testimonial.name} ·{" "}
                  <span className="text-white/70">{testimonial.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section
          id="process"
          className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 px-6 py-12 sm:px-10"
        >
          <h2 className="text-3xl font-semibold text-white">Our first 45 days</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              {
                step: "Days 1-5",
                title: "Deep-dive audit",
                description:
                  "Channel, creative, funnel, and tracking review. We benchmark your true baseline.",
              },
              {
                step: "Days 6-15",
                title: "Launch sprint zero",
                description:
                  "Rebuild campaigns, fix tracking, and stand up dashboards that align with finance.",
              },
              {
                step: "Days 16-30",
                title: "Creative + testing engine",
                description:
                  "Weekly creative sprints paired with structured experiments for rapid wins.",
              },
              {
                step: "Days 31-45",
                title: "Scale with accountability",
                description:
                  "Dial spend into profitable segments and trigger fee protections unless KPIs are met.",
              },
            ].map((stage) => (
              <div
                key={stage.step}
                className="rounded-2xl border border-white/10 bg-deep-slate/70 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange">
                  {stage.step}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate/80">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 px-6 py-12 sm:px-10"
        >
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange">
                FAQs
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Straight answers before we get started
              </h2>
            </div>
            <div className="space-y-6 text-sm leading-relaxed text-slate/80">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-deep-slate/70 p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-3">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-deep-slate/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate/70 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div>
            <p className="text-white font-semibold">Adcraze</p>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Performance advertising
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#consultation"
              className="rounded-full bg-electric px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-electric/90"
            >
              Start the audit
            </a>
            <p className="text-xs text-slate/60">
              © {new Date().getFullYear()} Adcraze. We scale with you.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
