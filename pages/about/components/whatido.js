import { whatIDoChips } from '@/pages/constants';
import { useState } from 'react';
import WhatIDoChip from './whatidochip';

const WhatIdo = () => {
    const [chips, setChips] = useState(whatIDoChips);

    const handleChipOpen = (id) => {
        setChips(prevValues => prevValues.map(item => item.id === id ? { ...item, isOpen: !item.isOpen } : { ...item }))
    }

    return (
        <div className='w-full h-fit flex items-start justify-between lg:flex-row flex-col gap-5'>
            <h1 className='text-5xl font-bold'>What I Do ?</h1>
            <div className='lg:w-1/2 w-full h-fit min-h-[60vh] flex items-start justify-start flex-col gap-3 origin-top'>

                {
                    chips.map((item) => <WhatIDoChip key={item.id} {...item} handleChipOpen={handleChipOpen} />)
                }

            </div>
        </div>
    )
}

export default WhatIdo