import React from 'react'
import Navbar from '../components/landingComponents/Navbar'
import Hero from '../components/landingComponents/Hero'
import Features from '../components/landingComponents/features'
import Contact from '../components/landingComponents/Contact'
import Reviews from '../components/landingComponents/Reviews'
import Footer from '../components/landingComponents/Footer'


const LandingPage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Features/>
        <Reviews />
        <Contact/>
        
        <Footer/>
        
    </>
  )
}

export default LandingPage
