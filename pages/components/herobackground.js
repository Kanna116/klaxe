
const HeroBackground = ({ interactiveValues }) => {

    return (
        <div
            className="hero-background absolute top-0 left-1/2 -translate-x-1/2 h-screen w-screen -z-[1] overflow-hidden flex items-center justify-center bg-[#000]">
            <div className="w-[75vmin] aspect-square rounded-full border-[1px] relative flex items-center justify-center">
                <div className="interactive-mover absolute top-1/2 left-1/2 w-full aspect-[3/1] origin-center rounded-[50%] duration-300 ease-linear bg-[#ffffff10] border-[1px]"
                    style={{
                        transform: `translate(-50%,-50%) rotate(${interactiveValues.rotateValue}deg) scaleY(${interactiveValues.scaleYValue})`
                    }}
                ></div>
            </div>

        </div>
    )
}

export default HeroBackground