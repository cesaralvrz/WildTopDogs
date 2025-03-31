import { Button } from "@/components/ui/button"
import { Glow } from "@/components/ui/glow"
import { cn } from "@/utils"

interface CTAProps {
  title: string
  action: {
    text: string
    href: string
    variant?: "default" | "glow"
  }
  className?: string
}

export function CTASection({ title, action, className }: CTAProps) {
  return (
    <section className={cn("group relative overflow-hidden py-24 sm:py-32", className)}>
      <div className="relative z-10 mx-auto flex max-w-container flex-col items-center gap-6 text-center sm:gap-8">
        <h2 className="text-2xl font-semibold sm:text-4xl animate-appear">
          {title}
        </h2>
        <p className="text-3xl font-bold text-orange-600 mb-4 animate-pulse">
          Se uno de ellos
        </p>
        <Button 
          size="xl" 
          className="animate-appear shadow-lg delay-100 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600"
          asChild
        >
          <a href={action.href} className="text-xl">{action.text}</a>
        </Button>
      </div>
      <div className="absolute left-0 top-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" className="animate-appear-zoom delay-300" />
      </div>
    </section>
  )
}