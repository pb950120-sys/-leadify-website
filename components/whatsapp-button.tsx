import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { site } from '@/lib/site'

export function WhatsAppButton({
  className,
  label = 'Chat on WhatsApp',
}: {
  className?: string
  label?: string
}) {
  return (
    <Link
      href={site.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_30px_-6px_#25D366]',
        className,
      )}
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      {label}
    </Link>
  )
}
