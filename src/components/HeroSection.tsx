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
            <div className='flex flex-col items-center mt-20 mb-16'>
                <p className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                10% de descuento en los primeros 5 packs.<br/>
                </p>
                <p className="text-3xl font-bold text-red-600 mb-4 animate-pulse">
                ¡No te quedes sin él!
                </p>
                <div className="relative cursor-pointer inline-flex items-center gap-2 px-12 py-6 animate-appear delay-100 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 rounded-xl overflow-hidden shadow-lg shadow-zinc-900/20 dark:shadow-zinc-100/20">
                    <a href="https://wildtopdogs.com/producto/arnes-bornwild-y-correa-2m/" className="relative z-10 flex items-center gap-2 text-xl text-white">CONSIGUE TU PACK</a>
                </div>
            </div>
        </div>
    )
}