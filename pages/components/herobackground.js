
const HeroBackground = ({ interactiveValues }) => {

    if (!interactiveValues) {
        return <div className='w-full h-full flex items-center justify-center bg-light-primary dark:bg-dark-primary text-light-primary dark:text-dark-primary'>Loading...</div>;
    }

    return (
        <div
            className="hero-background absolute top-0 left-1/2 -translate-x-1/2 h-screen w-screen -z-[1] overflow-hidden flex items-center justify-center">
            <div className="w-[75vmin] aspect-square rounded-full border-[1px] border-light-secondary dark:border-dark-secondary relative flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 w-full aspect-[3/1] origin-center rounded-[50%] duration-700 ease-linear bg-light-heroBackground dark:bg-dark-heroBackground border-[1px] border-light-secondary dark:border-dark-secondary md:block lg:block hidden"
                    style={{
                        transform: `translate(-50%,-50%) rotate(${interactiveValues.rotateValue}deg) scaleY(${interactiveValues.scaleYValue})`
                    }}
                ></div>

                <div className="interactive-mover md:hidden lg:hidden block absolute top-1/2 left-1/2 w-full aspect-[3/1] origin-center rounded-[50%] duration-700 ease-linear bg-light-heroBackground dark:bg-dark-heroBackground border-light-secondary dark:border-dark-secondary border-[1px] -translate-x-1/2 -translate-y-1/2 rotate-[20deg]"></div>
            </div>

        </div>
    )
}

export default HeroBackground