import { CTASection } from "@/components/cta-with-glow"

export function CTADemo() {
  return (
    <CTASection
      title="¡Oferta exclusiva en los primeros 5 packs!"
      action={{
        text: "¡CONSÍGUELO YA!",
        href: "https://wildtopdogs.com/producto/arnes-bornwild-y-correa-2m/",
        variant: "default"
      }}
    />
  )
}