import Image from 'next/image'
import { Quote } from 'lucide-react'

export function Founder() {
  return (
    <section id="founder" className="relative bg-background py-20 md:py-28">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md">
            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-primary/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card glow-blue">
              <Image
                src="/founder.jpeg"
                alt="Prith Pratim, Founder and CEO of Leadify Media"
                width={800}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="animate-float-up">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Founder &amp; CEO
            </p>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet <span className="text-primary">Prith Pratim</span>
            </h2>
            <p className="mt-3 text-pretty text-lg text-muted-foreground">
              Driven by results, obsessed with growth.
            </p>

            <div className="relative mt-6">
              <Quote
                className="absolute -left-1 -top-2 size-8 text-primary/30"
                aria-hidden="true"
              />
              <p className="pl-9 text-pretty text-lg leading-relaxed text-muted-foreground">
                &ldquo;I started Leadify Media with one belief — every business
                deserves a predictable flow of customers, not guesswork. We
                don&apos;t chase vanity metrics. We build marketing systems that
                turn ad spend into real revenue and clicks into loyal
                customers.&rdquo;
              </p>
            </div>

            <p className="mt-6 pl-9 leading-relaxed text-muted-foreground">
              With a hands-on approach to Facebook &amp; Instagram ads, WhatsApp
              marketing, and high-converting funnels, our team treats your
              growth as our own mission.
            </p>

            <div className="mt-8 flex items-center gap-4 pl-9">
              <div className="h-px w-12 bg-primary" />
              <div>
                <p className="font-heading text-lg font-bold text-primary">
                  Prith Pratim
                </p>
                <p className="text-sm text-muted-foreground">
                  Founder &amp; CEO, Leadify Media
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
