import React from 'react'
import Comanbtntwo from './ComanbtnSec'
import Navbar from './Navsec'


const HeroSection = () => {
    return (
        <div className='bg-[url(../src/assets/img/Herobgimg.webp)] bg-cover bg-no-repeat lg:h-screen bg-center'>
            <Navbar />
            <div className='max-w-[1140px] mx-auto px-3 flex flex-col items-center py-[20px] sm:py-[50px] lg:pt-[140px] '>
                <h1 className='text-center max-w-[505px] uppercase font-[Anton] font-normal text-[72px] text-[#FFFFFF] leading-[86px] max-md:text-[54px] max-sm:text-[40px] max-sm:leading-normal max-md:leading-[65px]'>Exclusive Games. Pasión por ganar</h1>
                <p className='max-w-[727px] font-[Inter] font-medium text-[16px] text-[#D2D0D2] text-center pt-1 sm:pt-4'>En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</p>
                <div className=' pt-[20px] sm:pt-[40px]'>
                    <Comanbtntwo text="Empezar" />
                </div>

            </div>
        </div>
    )
}
export default HeroSection