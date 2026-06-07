import { Mail, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'
import { site } from '@/lib/site'

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              {site.tagline}
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={`https://wa.me/${site.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="size-4 text-primary" aria-hidden="true" />
                {site.whatsappNumber}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4 text-primary" aria-hidden="true" />
                {site.email}
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Helping businesses grow with data-driven lead generation.</p>
        </div>
      </div>
    </footer>
  )
}
