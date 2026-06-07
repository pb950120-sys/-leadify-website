const steps = [
  {
    number: '01',
    title: 'Business Analysis',
    description:
      'We dig into your business, audience, offers, and goals to understand exactly what success looks like.',
  },
  {
    number: '02',
    title: 'Strategy Planning',
    description:
      'We build a custom lead generation strategy with the right channels, messaging, and budget allocation.',
  },
  {
    number: '03',
    title: 'Campaign Launch',
    description:
      'We design the creative, set up tracking, and launch high-performance campaigns across the right platforms.',
  },
  {
    number: '04',
    title: 'Lead Generation',
    description:
      'Qualified leads start flowing in — delivered straight to you with clear, transparent reporting.',
  },
  {
    number: '05',
    title: 'Optimization & Scaling',
    description:
      'We double down on what works, cut what doesn&apos;t, and scale your winning campaigns profitably.',
  },
]

export function Process() {
  return (
    <section id="process" className="relative bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Process
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A clear, proven path to predictable leads
          </h2>
        </div>

        <div className="relative mt-16">
          <div
            className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:block"
            aria-hidden="true"
          />
          <ol className="space-y-6">
            {steps.map((step) => (
              <li
                key={step.number}
                className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/50 md:flex-row md:items-center md:gap-8 md:pl-20"
              >
                <span className="absolute left-6 top-6 hidden size-5 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:block" />
                <span className="font-heading text-3xl font-extrabold text-primary md:w-16 md:shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-pretty leading-relaxed text-muted-foreground">
                    {step.description.replace('&apos;', "'")}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
