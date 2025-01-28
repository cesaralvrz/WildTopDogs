import HeroSection from "@/components/ui/hero-section";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"

export function HeroSectionDemo() {
    return (
        <div>
            <HeroSection />
            <div className="relative">
                <HeroVideoDialog
                    animationStyle="from-center"
                    videoSrc="https://fast.wistia.com/embed/wazb9o313z"
                    thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                    thumbnailAlt="Hero Video"
                />
            </div>
        </div>
    )
}