import HeroSection from "@/components/ui/hero-section";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"

export function HeroSectionDemo() {
    return (
        <div>
            <HeroSection />
            <div className="relative">
                <HeroVideoDialog
                    animationStyle="from-center"
                    videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                    thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                    thumbnailAlt="Hero Video"
                />
            </div>
        </div>
    )
}