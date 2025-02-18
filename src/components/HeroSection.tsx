import HeroSection from "@/components/ui/hero-section";

export function HeroSectionDemo() {
    return (
        <div>
            <HeroSection />
            <div className="relative mt-auto">
                <div className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                    <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                        <iframe 
                            src="https://fast.wistia.net/embed/iframe/wazb9o313z"
                            title="VSL Wildtopdogs"
                            allow="autoplay; fullscreen"
                            allowTransparency={true}
                            frameBorder="0"
                            scrolling="no"
                            className="wistia_embed"
                            name="wistia_embed"
                            width="100%"
                            height="100%"
                        ></iframe>
                    </div>
                </div>
                <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
            </div>
            <div className='flex justify-center mt-12 mb-12'>
                <div className="relative cursor-pointer inline-flex items-center gap-2 px-8 py-5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-xl overflow-hidden shadow-lg shadow-zinc-900/20 dark:shadow-zinc-100/20">
                    <a href="https://wildtopdogs.com/producto/arnes-bornwild-y-correa-2m/" className="relative z-10 flex items-center gap-2 text-xl">Consigue tu pack</a>
                </div>
            </div>
        </div>
    )
}