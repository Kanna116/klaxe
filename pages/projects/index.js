import React from 'react'
import Navbar from '../components/navbar'
import Connect from './components/connect'
import Footer from '../components/footer'

const index = () => {
    return (
        <div className='px-[24px] md:px-[64px] lg:px-[96px] min-h-screen w-full'>
            <Navbar />
            <Connect />
            <Footer />
        </div>
    )
}

export default index