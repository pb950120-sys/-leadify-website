import { Target, TrendingUp, Users } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: 'Qualified Leads',
    label: 'We focus on people ready to buy — not vanity metrics.',
  },
  {
    icon: TrendingUp,
    value: 'Real Growth',
    label: 'Strategies engineered to increase revenue, not just clicks.',
  },
  {
    icon: Target,
    value: 'Data-Driven',
    label: 'Every decision is backed by performance data and testing.',
  },
]

export function About() {
  return (
    <section id="about" className="relative bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About Leadify
            </p>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A modern agency built to turn marketing spend into measurable
              growth
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Leadify is a modern lead generation agency helping businesses
              generate qualified leads through Facebook Ads, Instagram Ads,
              WhatsApp Marketing, Landing Pages, and Conversion Funnels. Our
              mission is simple: connect great businesses with the customers who
              need them.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              We combine sharp creative, precise targeting, and relentless
              optimization to build predictable pipelines of high-intent leads.
              From your first campaign to scaling profitably, we&apos;re
              committed to being the growth partner that actually moves the
              numbers that matter.
            </p>
          </div>

          <div className="grid gap-4">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card"
              >
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
                  <stat.icon className="size-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {stat.value}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
