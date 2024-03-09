import React, { useEffect } from 'react'
import HomePage from './home'
import Head from 'next/head'

const Home = () => {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('locomotive-scroll').then(({ default: LocomotiveScroll }) => {
        const locomotiveScroll = new LocomotiveScroll();
      });
    }
  }, []); 

  return (
    <>
    <Head>
      <title>Klaxe</title>
    </Head>

    <HomePage />
    </>
  )
}

export default Home