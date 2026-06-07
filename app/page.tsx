import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Founder } from '@/components/sections/founder'
import { Services } from '@/components/sections/services'
import { WhyChoose } from '@/components/sections/why-choose'
import { Process } from '@/components/sections/process'
import { Testimonials } from '@/components/sections/testimonials'
import { Consultation } from '@/components/sections/consultation'
import { FAQ } from '@/components/sections/faq'
import { Contact } from '@/components/sections/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Founder />
        <Services />
        <WhyChoose />
        <Process />
        <Testimonials />
        <Consultation />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  )
}
