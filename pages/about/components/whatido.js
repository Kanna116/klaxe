import { whatIDoChips } from '@/pages/constants';
import { useState } from 'react';
import WhatIDoChip from './whatidochip';

const WhatIdo = () => {
    const [chips, setChips] = useState(whatIDoChips);

    return (
        <div className='w-full h-fit flex items-start justify-between lg:flex-row flex-col'>
            <h1 className='text-5xl font-bold'>What I Do ?</h1>
            <div className='w-1/2 h-fit min-h-[60vh] flex items-start justify-start flex-col gap-3 origin-top'>
                {/* <WhatIDoChip />
                <WhatIDoChip />
                <WhatIDoChip /> */}
                {
                    chips.map((item, index)=> <WhatIDoChip key={index} {...item} />)
                }
            </div>
        </div>
    )
}

export default WhatIdo