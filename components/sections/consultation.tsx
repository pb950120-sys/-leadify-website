import { ArrowRight } from 'lucide-react'
import { WhatsAppButton } from '@/components/whatsapp-button'

export function Consultation() {
  return (
    <section className="relative bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card to-background p-10 text-center md:p-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-primary/30 blur-[100px]" />
          <div className="relative">
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s Grow Your Business Together
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Every business is unique. We create customized lead generation
              strategies based on your goals, industry, and budget — so you get
              a plan built to actually perform.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_36px_-6px_var(--color-primary)]"
              >
                Book Free Consultation
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
