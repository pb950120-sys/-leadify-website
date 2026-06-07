'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks } from '@/lib/site'
import { Logo } from '@/components/logo'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="#top" aria-label="Leadify home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_24px_-6px_var(--color-primary)] md:inline-flex"
        >
          Get Free Consultation
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-lg border border-border text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Get Free Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
