import {
  Megaphone,
  Share2,
  MessageSquare,
  LayoutTemplate,
  Filter,
  Sprout,
} from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'Facebook Ads Lead Generation',
    description:
      'Laser-targeted Facebook ad campaigns engineered to capture high-intent leads at the lowest possible cost per acquisition.',
  },
  {
    icon: Share2,
    title: 'Instagram Ads Management',
    description:
      'Scroll-stopping creative and precise audience targeting that turns Instagram engagement into real, qualified inquiries.',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Marketing',
    description:
      'Direct, high-converting WhatsApp campaigns and automation that start conversations and close deals faster.',
  },
  {
    icon: LayoutTemplate,
    title: 'Landing Page Design',
    description:
      'Conversion-focused landing pages designed to load fast, build trust, and turn visitors into leads.',
  },
  {
    icon: Filter,
    title: 'Funnel Optimization',
    description:
      'We map and refine every step of your funnel to plug leaks and maximize conversions from click to customer.',
  },
  {
    icon: Sprout,
    title: 'Lead Nurturing',
    description:
      'Automated follow-up sequences that keep your brand top-of-mind and move leads steadily toward a sale.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Services
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to generate leads and grow sales
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A full-stack lead generation system, managed end to end by
            specialists.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_12px_40px_-12px_var(--color-primary)]"
            >
              <div className="grid size-12 place-items-center rounded-xl bg-primary/15 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
