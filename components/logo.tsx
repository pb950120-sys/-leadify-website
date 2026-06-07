import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex flex-col leading-none font-heading font-extrabold tracking-tight',
        className,
      )}
    >
      <span className="text-xl">
        <span className="text-foreground">Lead</span>
        <span className="text-primary">ify</span>
      </span>
      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-muted-foreground">
        Media
      </span>
      <span className="sr-only">Leadify Media</span>
    </span>
  )
}
