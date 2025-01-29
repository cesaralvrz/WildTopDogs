import { CTASection } from "@/components/cta-with-glow"

export function CTADemo() {
  return (
    <CTASection
      title="¿A qué esperas?"
      action={{
        text: "Consíguelo Ya",
        href: "https://wildtopdogs.com/",
        variant: "default"
      }}
    />
  )
}