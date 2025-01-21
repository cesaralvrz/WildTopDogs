import { CTASection } from "@/components/cta-with-glow"

export function CTADemo() {
  return (
    <CTASection
      title="Start building today"
      action={{
        text: "Get Started",
        href: "/docs",
        variant: "default"
      }}
    />
  )
}