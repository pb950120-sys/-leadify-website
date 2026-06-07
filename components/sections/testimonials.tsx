import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Leadify completely changed our pipeline. Within the first month we were getting more qualified leads than our previous agency delivered in six. Our cost per lead dropped by nearly half.',
    name: 'Rahul Mehta',
    role: 'Founder, UrbanFit Studios',
  },
  {
    quote:
      'The team is sharp, responsive, and genuinely invested in our growth. Their WhatsApp campaigns and funnels gave us a steady flow of real buyers, not just clicks.',
    name: 'Priya Sharma',
    role: 'Marketing Head, Nova Interiors',
  },
  {
    quote:
      'What stood out was the data-driven approach. Every decision was backed by numbers, and the results showed it — our sales grew 3x in one quarter.',
    name: 'Arjun Nair',
    role: 'CEO, BrightEdge Solar',
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Testimonials
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Results our clients can&apos;t stop talking about
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card/50 p-7 transition-all duration-300 hover:border-primary/50 hover:bg-card"
            >
              <Quote className="size-8 text-primary/40" aria-hidden="true" />
              <div className="mt-4 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-primary text-primary"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <div className="font-heading font-semibold text-foreground">
                  {t.name}
                </div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
