import React from 'react'
import ludo from "../assets/img/ludo.png"
import paanA from "../assets/img/paanA.png"
import greebcoian from "../assets/img/greencoain.png"
import eatA from "../assets/img/eatA.png"
import { DubleTick } from './Svg'
import Comanbtntwo from './ComanbtnSec'

const LuxurySec = () => {
    return (
        <div>
            <div className='bg-[#00141B]'>
                <div className='max-w-[1140px] mx-auto px-3 pt-4 sm:pt-12'>
                    <div className={`  max-w-[1140px]  bg-[url(../src/assets/img/Luxurybgimg.png)] relative bg-no-repeat bg-cover bg-center border-[0.5px] border-solid border-[#FFFFFF80] bg-[#062023]`}>
                        <div className=' animate-pulse duration-500 absolute max-sm:hidden bottom-[50px] right-[28px] md:right-[10%] md:bottom-[16%]  lg:right-[15%] lg:bottom-[18%]'>
                            <img src={ludo} alt="ludo" />
                        </div>
                        <div className=' animate-pulse duration-500 absolute max-sm:hidden top-[100px] right-[28px] md:right-[10%] md:top-[16%]   lg:right-[12%] l:top-[16%]'>
                            <img src={paanA} alt="paanA" className='lg:w-[176px] lg:h-[186px] w-[100px]' />
                        </div>
                        <div className='animate-pulse duration-500 absolute max-sm:hidden top-[100px] left-[28px] md:left-[10%] md:top-[16%   lg:left-[12%] lg:top-[16%]'>
                            <img src={greebcoian} alt="greebcoian" className='w-[60px] lg:w-[78] lg-h-[79px] ' />
                        </div>
                        <div className='animate-pulse duration-500  absolute max-sm:hidden bottom-[50px] left-[34px] md:left-[10%] md:bottom-[16%] lg:left-[12%] lg:bottom-[16%]'>
                            <img src={eatA} alt="eatA" className='  lg:w-[176px] lg:h-[186px] w-[100px] ' />
                        </div>
                        <h2 className='text-[32px] mt-[16px] sm:mt-[46px] text-white font-normal leading-[41.6px]  font-anton text-center'>Luxury</h2>
                        <p className='text-[16px] pt-2 sm:pt-[16px] text-[#CDD4D5] sm:leading-[35.6px] font-medium max-w-[391px] text-center m-auto'>lleva tu experiencia de juego al siguiente nivel. Con todas las características de la versión Silver y la potencia adicional de la tecnología React .</p>
                        <h2 className=' text-[36px] md:text-[48px] pt-[12px] sm:pt-[32px] sm:mb-[16px] text-white leading-[57.6px] font-normal text-center font-anton'>$9000</h2>
                        <div className='flex flex-cnol justify-center items-center'>
                            <div className='mt-1'>
                                <span className='flex text-center gap-[8px] '>
                                    <span>
                                        <DubleTick />
                                    </span>
                                    <p className='text-[12px] sm:text-[16px] text-[#CDD2D3] leading-normal font-inter font-medium max-w-[387px]'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                                </span>
                                <span className='flex items-start gap-[8px]  mt-[12px]'>
                                    <span>
                                        <DubleTick />
                                    </span>
                                    <p className='text-[12px] sm:text-[16px] text-[#CDD2D3] font-inter text-center m-auto font-medium max-w-[387px]'>Control de RTP (controlás qué porcentaje pagar)</p>
                                </span>
                                <span className='flex text-center gap-[8px]  mt-[12px]'>
                                    <span>
                                        <DubleTick />
                                    </span>
                                    <p className='text-[12px] sm:text-[16px] text-[#CDD2D3]  font-inter font-medium text-center  m-auto max-w-[387px]'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                                </span>
                                <span className='flex text-center gap-[8px]  mt-[12px]'>
                                    <span>
                                        <DubleTick />
                                    </span>
                                    <p className='text-[12px] sm:text-[16px] text-[#CDD2D3] font-inter font-medium m-auto max-w-[387px]'>Aplicación para Android y Windows de regalo.</p>
                                </span>
                                <span className='flex  text-center gap-[8px]  mt-[12px] max-w-[419px]'>
                                    <span className=''>
                                        <span>
                                            <DubleTick />
                                        </span>
                                    </span>
                                    <p className='text-[12px] sm:text-[16px] text-[#CDD2D3] font-inter font-medium text-center m-auto leading-[25.6px]'>Tiempo de creación 2 a 3 semanas
                                    </p>
                                </span>
                                <div className=' flex justify-center mt-[36px] mb-[45px]  pb-5'>
                                    <Comanbtntwo text='Comprar ahora' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LuxurySec