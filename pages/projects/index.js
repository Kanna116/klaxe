import React from 'react'
import Navbar from '../components/navbar'
import Connect from './components/connect'
import Footer from '../components/footer'
import ProjectListType from './components/projectlisttype'

const index = () => {
    return (
        <div className='px-[24px] md:px-[64px] lg:px-[96px] min-h-screen w-full'>
            <Navbar />
            <div className='w-full h-fit py-10 flex flex-col items-center justify-center gap-5 mt-[60px]'>
                <h1 className='text-5xl capitalize font-semibold'>Our Projects</h1>
                <p className='text-2xl'>A place where you will find wonders.</p>
            </div>

            <ProjectListType />


            {/* <Connect />
            <Footer /> */}
        </div>
    )
}

export default index