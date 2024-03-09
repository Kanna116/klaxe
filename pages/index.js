import React from 'react'
import HomePage from './home'
import Head from 'next/head'
import LocomotiveScroll from 'locomotive-scroll';

const Home = () => {

const locomotiveScroll = new LocomotiveScroll();



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