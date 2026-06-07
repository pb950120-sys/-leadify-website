import Image from 'next/image'
import { ArrowRight, Star } from 'lucide-react'
import { WhatsAppButton } from '@/components/whatsapp-button'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-background pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="animate-float-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="flex size-2 rounded-full bg-primary" />
            Trusted lead generation partner for growing brands
          </div>

          <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Get More <span className="text-gradient">Qualified Leads</span> For
            Your Business
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            We help businesses generate high-quality leads and increase sales
            through powerful digital marketing strategies built around Facebook
            Ads, Instagram Ads, WhatsApp marketing, and conversion funnels.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_36px_-6px_var(--color-primary)]"
            >
              Get Free Consultation
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <WhatsAppButton />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-primary text-primary"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Rated 4.9/5 by clients
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">500+</span> campaigns
              launched
            </div>
          </div>
        </div>

        <div className="animate-float-up [animation-delay:150ms]">
          <div className="relative rounded-2xl border border-border bg-card/40 p-2 backdrop-blur glow-blue">
            <Image
              src="/leadify-logo.png"
              alt="Leadify Media — turning clicks into customers through lead generation, Facebook & Instagram ads, and WhatsApp marketing"
              width={900}
              height={506}
              priority
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
