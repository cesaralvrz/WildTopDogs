import HeroSection from "@/components/ui/hero-section";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"

export function HeroSectionDemo() {
    return (
        <div>
            <HeroSection />
            <div className="relative">
                <HeroVideoDialog
                    animationStyle="from-center"
                    videoSrc="https://cliimber.wistia.com/medias/wazb9o313z?wvideo=wazb9o313z"
                    thumbnailSrc="https://embed-ssl.wistia.com/deliveries/49fbfcad314cdd6f958bc16c7a5c64a07b5246c9.jpg?image_play_button_size=2x&image_crop_resized=960x540&image_play_button=1&image_play_button_color=000000e0"
                    thumbnailAlt="VSL Wildtopdogs"
                />
            </div>
        </div>
    )
}