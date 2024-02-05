import React, { useState } from 'react'
import logo from '../assets/img/logo.webp'
import Comanbtn from './Comanbtn'


const Navbar = () => {

    const [nav, setNav] = useState(false)
    function show() {
        setNav(!nav)
        if (nav === false) {
            document.body.classList.add("max-lg:overflow-hidden")
        }
        else {
            document.body.classList.remove("max-lg:overflow-hidden")
        }
    };
    return (
        <>
            <nav className='bg-[#FFFFFF1A] py-[12px] sm:py-[20px]'>
                <div className='max-w-[1140px] mx-auto px-3 flex items-center justify-between'>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className={`${nav ? "left-0" : "left-[-100%]"
                        } flex items-center gap-[28px] mobileView duration-300`}>
                        <li><a onClick={show} className='text-[16px] font-[Inter] font-medium text-[#D2D8DA] hover:text-[#FFFFFF] duration-300' href="#">Hogar</a></li>
                        <li><a onClick={show} className='text-[16px] font-[Inter] font-medium text-[#D2D8DA] hover:text-[#FFFFFF] duration-300' href="#">Misión</a></li>
                        <li><a onClick={show} className='text-[16px] font-[Inter] font-medium text-[#D2D8DA] hover:text-[#FFFFFF] duration-300' href="#">Tragamonedas</a></li>
                        <li><a onClick={show} className='text-[16px] font-[Inter] font-medium text-[#D2D8DA] hover:text-[#FFFFFF] duration-300' href="#">Por qué elegirnos</a></li>
                        <li><a onClick={show} className='text-[16px] font-[Inter] font-medium text-[#D2D8DA] hover:text-[#FFFFFF] duration-300' href="#">Ofertas</a></li>
                        <li className='relative'>
                            <a className='sm:hidden' onClick={show} href="#">
                                <Comanbtn text='Acceso' />
                            </a>
                        </li>
                    </ul>
                    <div className='relative items-center lg:gap-5'>
                        <div className='hidden sm:flex '>
                            <Comanbtn text='Acceso' />
                        </div>
                    </div>
                    <label className='lg:hidden' onClick={show}>
                        {nav ? (
                            <div className='relative z-40'>
                                <span className=' flex w-6 h-1 bg-white duration-300 rounded-2xl rotate-45 mb-1'></span>
                                <span className=' flex w-6 h-1 bg-white duration-300 rounded-2xl absolute top-0 -rotate-45 mb-1'></span>
                            </div>
                        ) : (
                            <div className='relative z-40'>
                                <span className=' flex w-6 h-1 bg-white duration-300 rounded-2xl mb-1'></span>
                                <span className=' flex w-6 h-1 bg-white duration-300 rounded-2xl mb-1'></span>
                                <span className=' flex w-6 h-1 bg-white duration-300 rounded-2xl'></span>
                            </div>
                        )}
                    </label>
                </div>
            </nav>
        </>
    )
}
export default Navbar