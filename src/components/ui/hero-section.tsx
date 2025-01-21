import React from 'react'




const HeroSection = () => {
    return (
        <div className='flex w-full h-[50vh] gap-4 p-4'>
            <div className='flex flex-col min-h-screen items-center mt-[2.5rem] p-3 w-full'>
                <h1 className="scroll-m-20 max-w-[500px] text-5xl font-bold tracking-tight leading-[70px] text-center">
                    Design Simplified For <span className="p-2 bg-purple-100 rounded-[8px]">Developers</span>
                </h1>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-lg text-center mt-2 dark:text-gray-400">
                    Seamless UI components for developers who want speed and flexibility.
                </p>

                <div className='flex gap-2 mt-2'>
                    <div className="relative cursor-pointer inline-flex items-center gap-2 px-6 py-3  bg-zinc-900 dark:bg-zinc-100  text-white dark:text-zinc-900  hover:bg-zinc-800 dark:hover:bg-zinc-200  rounded-xl overflow-hidden shadow-lg shadow-zinc-900/20 dark:shadow-zinc-100/20 mt-4">
                        <div className="relative z-10 flex items-center gap-2">Explore Components</div>
                    </div>
                   
                </div>
            </div>

        </div>
    )
}

export default HeroSection