import React from 'react'
import Triplesaven from '../components/Triple7'
import Nuestras from '../components/Nuestras'
import LuxurySec from '../components/LuxurySec'
import PlatinumSec from '../components/PlatinumSec'
import HeroSection from '../components/Herosec'
import NuestraVisión from '../components/NuestraVisión'
import NuestrosAtributos from '../components/NuestrosAtributos'
import JuegosVivo from '../components/JuegosVivo'
import NightCasino from '../components/NightCasino'
import EllosEligieron from '../components/EllosEligieron'
import AccordionSec from '../components/Accrodion'
import Footer from '../components/Footer'
import Lodre from '../components/Loder'
import BackToTop from '../components/BackToTop'

const Homepage = () => {
    return (
        <div className='bg-[#00141B]'>
            <Lodre />
            <HeroSection />
            <NuestraVisión />
            <NuestrosAtributos />
            <JuegosVivo />
            <NightCasino />
            <Triplesaven />
            <Nuestras />
            <LuxurySec />
            <PlatinumSec />
            <EllosEligieron />
            <AccordionSec />
            <Footer />
            <BackToTop />
        </div>
    )
}

export default Homepage