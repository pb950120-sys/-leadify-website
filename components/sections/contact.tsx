'use client'

import { useState } from 'react'
import { Mail, Phone, CheckCircle2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { site } from '@/lib/site'

const services = [
  'Facebook Ads Lead Generation',
  'Instagram Ads Management',
  'WhatsApp Marketing',
  'Landing Page Design',
  'Funnel Optimization',
  'Lead Nurturing',
  'Not sure yet',
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [service, setService] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Contact Us
            </p>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get your free strategy and quotation
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Tell us a little about your business and what you&apos;re looking
              for. We&apos;ll get back to you with a customized lead generation
              plan — no obligation.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`https://wa.me/${site.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/50"
              >
                <div className="grid size-11 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Phone className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">WhatsApp</div>
                  <div className="font-medium text-foreground">
                    {site.whatsappNumber}
                  </div>
                </div>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/50"
              >
                <div className="grid size-11 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Mail className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium text-foreground">
                    {site.email}
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-6">
              <WhatsAppButton />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-7 md:p-8">
            {submitted ? (
              <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
                <CheckCircle2 className="size-14 text-primary" />
                <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                  Thank you!
                </h3>
                <p className="mt-2 max-w-sm text-pretty text-muted-foreground">
                  Your details have been received. Our team will reach out
                  shortly with your customized strategy. For a faster response,
                  message us on WhatsApp.
                </p>
                <div className="mt-6">
                  <WhatsAppButton />
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="business">Business Name</Label>
                  <Input
                    id="business"
                    name="business"
                    placeholder="Your business / brand"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Required</Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger id="service" className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_30px_-6px_var(--color-primary)]"
                >
                  Get My Free Strategy
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
