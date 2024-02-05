import React from 'react'
import PageLogo from "../assets/img/logo.webp"
import { Facebook, Instagram, Linkedin, Mail, Phone } from './SvgFileOnly'
const Footer = () => {
    return (
        <>
            <div className=' bg-[#000000] pt-[20px] pb-[10px] sm:py-[20px] relative overflow-hidden' >
                <div className=' max-w-[1160px] container mx-auto px-3 '>
                    <div className='grid md:grid-cols-2 lg:grid-cols-5 '>
                        <div className='col-span-1 lg:col-span-2 px-3'>
                            <img src={PageLogo} alt="Footerlogo" />
                            <p className='font-inter font-medium text-[16px]  leading-6  max-w-[369px] text-[#CCCCCC] pt-[8px] sm:pt-[16px]'>En Exclusive Games somos un equipo apasionado de personas dedicadas al desarrollo de multiplataformas para juegos de azar</p>
                            <div className=" flex gap-5 pt-3 sm:pt-6">
                                <a href="https://www.instagram.com/" target="_blank">
                                    <span className='w-[32px] h-[32px] rounded-[16px] bg-[#292B2B] flex justify-center items-center'>
                                        <Instagram />
                                    </span>
                                </a>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <span className='w-[32px] h-[32px] rounded-[16px] bg-[#292B2B] flex justify-center items-center'>
                                        <Facebook />
                                    </span>
                                </a>
                                <a href="https://www.linkedin.com/home?originalSubdomain=in" target="_blank">
                                    <span className='w-[32px] h-[32px] rounded-[16px] bg-[#292B2B] flex justify-center items-center'>
                                        <Linkedin />
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className='col-span-1 px-3'>
                            <ul>
                                <li className=' font-inter font-bold text-[16px]  leading-6  text-[#FFFFFF] pt-[10px]'>Menú principal</li>
                                <li className='pt-1 sm:pt-4'><a href="#" className=' font-inter font-medium text-[16px] text-[#CCCCCC]  leading-6'>Hogar</a></li>
                                <li className='pt-2 sm:pt-4'><a href="#" className=' font-inter font-medium text-[16px] text-[#CCCCCC]  leading-6'>Misión</a></li>
                                <li className='pt-1 sm:pt-3'><a href="#" className=' font-inter font-medium text-[16px] text-[#CCCCCC]  leading-6'>Tragamonedas</a></li>
                                <li className='pt-1 sm:pt-3'><a href="#" className=' font-inter font-medium text-[16px] text-[#CCCCCC]  leading-6'>Por qué elegirnos</a></li>
                                <li className='pt-1 sm:pt-3'><a href="#" className=' font-inter font-medium text-[16px] text-[#CCCCCC]  leading-6'>Ofertas</a></li>
                            </ul>
                        </div>
                        <div className='col-span-1 px-3 max-sm:pt-2 sm:pt-0'>
                            <ul>
                                <li className=' font-inter font-bold text-[16px]  leading-6  text-[#FFFFFF] pt-[10px]'>Atención al cliente</li>
                                <li className='pt-1 sm:pt-4'><a href="#" className=' font-inter font-medium text-[16px] text-[#CCCCCC]  leading-6'>¿Necesitas ayuda?</a></li>
                                <li className='pt-1 sm:pt-4'><a href="#" className=' font-inter font-medium text-[16px] text-[#CCCCCC]  leading-6'>política de privacidad</a></li>
                                <li className='pt-1 sm:pt-3'><a href="#" className=' font-inter font-medium text-[16px] text-[#CCCCCC]  leading-6'>Términos de servicios</a></li>
                            </ul>
                        </div>
                        <div className='col-span-1 px-3 max-sm:pt-2 pt-4 lg:pt-0'>
                            <ul>
                                <li className=' font-inter font-bold text-[16px]  leading-6  text-[#FFFFFF] pt-[10px]'>Ponerse en contacto</li>
                                <li className=' '><a href="mailto:juegosexclusivos@gmail.com"><span className=' flex flex-nowrap items-center gap-2 font-inter font-bold text-[16px]  leading-6  text-[#CCCCCC]  pt-[10px]'><span><Mail /></span>juegosexclusivos@gmail.com</span></a></li>
                                <li className=''><a href="tel:(101)342-7873"><span className=' flex flex-nowrap items-center gap-2 font-inter font-bold text-[16px]  leading-6  text-[#CCCCCC]  pt-[10px]'><span><Phone /></span>(101)342-7873</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className=' w-full h-[1px] bg-[#FFFF] mt-[20px] sm:mt-[40px]' />
                <p className='font-inter font-medium text-sm sm:text-[16px] leading-4  sm:leading-6  text-[#808080] pt-[10px] sm:pt-[20px] mx-auto text-center'> © Juegos exclusivos - Todos los derechos reservados 2024</p>
            </div>
        </>
    )
}
export default Footer