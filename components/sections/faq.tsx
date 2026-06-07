import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'What exactly is lead generation?',
    a: 'Lead generation is the process of attracting and capturing people who are genuinely interested in your products or services, then turning them into potential customers your sales team can follow up with and close.',
  },
  {
    q: 'How quickly will I start seeing leads?',
    a: 'Most clients begin receiving leads within the first 1–2 weeks of launching campaigns. The first few weeks focus on testing and optimization, after which we scale the best-performing campaigns for consistent results.',
  },
  {
    q: 'How much should I budget for ads?',
    a: 'It depends on your industry, goals, and target market. During your free consultation we recommend a realistic ad budget and a strategy designed to maximize return at every spend level.',
  },
  {
    q: 'Which platforms do you run ads on?',
    a: 'We specialize in Facebook Ads, Instagram Ads, and WhatsApp marketing, supported by high-converting landing pages and funnels. We recommend the platforms that best fit your audience and goals.',
  },
  {
    q: 'Do you guarantee a certain number of leads?',
    a: 'We focus on delivering qualified, high-intent leads and continuously optimize for the best possible cost per lead. While no ethical agency can guarantee exact numbers, our data-driven process is built to maximize your results.',
  },
  {
    q: 'How do I get started with Leadify?',
    a: 'Simply book a free consultation or message us on WhatsApp. We&apos;ll analyze your business, discuss your goals, and create a customized lead generation strategy and quotation for you.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            FAQ
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <Accordion className="mt-12 w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card/50 px-5 mb-3 data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="text-left font-heading text-base font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-pretty leading-relaxed text-muted-foreground">
                {faq.a.replace('&apos;', "'")}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
