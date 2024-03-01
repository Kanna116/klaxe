import React from 'react'
import Navbar from '../components/navbar'
import HeroAbout from './components/heroabout'
import WhatIdo from './components/whatido'
import MyPics from './components/mypics'
import MyTech from './components/mytech'

const index = () => {
    return (
        <div className='px-[24px] md:px-[64px] lg:px-[96px] min-h-screen w-full'>
            <Navbar />
            <HeroAbout />
            <WhatIdo />
            <MyPics />
            <MyTech />
        </div>
    )
}

export default index