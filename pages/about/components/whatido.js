import WhatIDoChip from './whatidochip';

const WhatIdo = () => {

    return (
        <div className='w-full h-fit flex items-start justify-between lg:flex-row flex-col'>
            <h1 className='text-5xl font-bold'>What I Do ?</h1>
            <div className='w-1/2 h-fit min-h-[60vh] flex items-start justify-start flex-col gap-3 origin-top'>
                <WhatIDoChip />
                <WhatIDoChip />
                <WhatIDoChip />
            </div>
        </div>
    )
}

export default WhatIdo