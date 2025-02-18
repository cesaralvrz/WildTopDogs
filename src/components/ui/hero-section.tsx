const HeroSection = () => {
    return (
        <div className='flex w-full h-[35vh] sm:h-[50vh] gap-4 p-4'>
            <div className='flex flex-col min-h-screen items-center mt-[2.5rem] p-3 w-full'>
                <h1 className="scroll-m-20 max-w-[500px] text-3xl md:text-5xl font-bold tracking-tight leading-[45px] md:leading-[70px] text-center">
                    Descubre 3 secretos infalibles para pasear a tu perro <span className="p-2 bg-purple-100 rounded-[8px]">sin estrés</span>
                </h1>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-lg text-center mt-2 dark:text-gray-400">
                    Te ofrecemos la mejor experiencia paseando a tu perro.
                </p>
            </div>
        </div>
    )
}

export default HeroSection