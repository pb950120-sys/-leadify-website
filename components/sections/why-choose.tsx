import { BadgeCheck, LineChart, Rocket, Database, Headset } from 'lucide-react'

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Quality Leads',
    description:
      'We optimize for intent, not impressions — so your sales team talks to people ready to buy.',
  },
  {
    icon: LineChart,
    title: 'Better ROI',
    description:
      'Continuous testing and tight tracking mean more results from every rupee you invest.',
  },
  {
    icon: Rocket,
    title: 'Faster Growth',
    description:
      'Proven frameworks let us launch quickly and scale winning campaigns with confidence.',
  },
  {
    icon: Database,
    title: 'Data-Driven Strategy',
    description:
      'Every recommendation is backed by real performance data, not guesswork.',
  },
  {
    icon: Headset,
    title: 'Dedicated Support',
    description:
      'A responsive team that treats your growth like their own, with clear communication.',
  },
]

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="pointer-events-none absolute right-0 top-1/2 size-[500px] -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Why Choose Leadify
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The growth partner businesses actually rely on
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`group rounded-2xl border border-border bg-card/50 p-7 transition-all duration-300 hover:border-primary/50 hover:bg-card ${
                i === 0 ? 'lg:col-span-1' : ''
              }`}
            >
              <reason.icon
                className="size-7 text-primary transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
