import React from 'react'
import Navbar from '../components/navbar'
import HeroSection from '../components/herosection'
import SimpleAbout from '../components/simpleabout'
import TechStackbar from '../components/techstackbar'
import HandPickedProjects from '../components/handpickedprojects'
import Connect from '../components/connect'
import Footer from '../components/footer'

const HomePage = () => {
  return (
    <div className='px-[24px] md:px-[64px] lg:px-[96px] min-h-screen w-full '>
        <Navbar />
        <HeroSection />
        <SimpleAbout />
        <TechStackbar />
        <HandPickedProjects />
        <Connect />
        <Footer />
    </div>
  )
}

export default HomePage