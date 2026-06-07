import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { site } from '@/lib/site'

export function FloatingWhatsApp() {
  return (
    <Link
      href={site.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Leadify on WhatsApp"
      className="animate-pulse-ring fixed bottom-6 right-6 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-black shadow-lg transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </Link>
  )
}
