import React from 'react'
import casino from '../assets/img/casino.png'
import { DubleTick } from './SvgFileOnly'
import Comanbtn from './Comanbtn'
import CasnoSdwo from '../assets/img/Casniosdwo.png'

const Nuestras = () => {
    return (
        <div>
            <div className='bg-[#00141B]'>
                <div className='max-w-[1140px] mx-auto px-3'>
                    <h2 className='text-[48px] text-white leading-[57.6px] font-anton font-normal text-center  pt-9 sm:pt-[150px]'>Nuestras ofertas</h2>
                    <p className='text-[16px] font-medium font-inter text-white leading-[25.6px] text-center mb-[30px] sm:mb-[60px]'>Te ofrecemos las mejores experiencias de juegos para tus clientes.</p>


                    <div className='max-w-[1140px] bg-[#062024] border-[0.5px] border-solid border-[#FFFFFF80]'>
                        <div className='grid lg:grid-cols-2 px-3 mt-[30px] sm:mt-[57px]'>
                            <div className=' col-span-1 flex justify-center'>
                                <div>
                                    <div className='!relative'>
                                        <img src={casino} alt="" className='sm:mt-[30px] ' />
                                        <img src={CasnoSdwo} alt="CasnoSdwo" className=' mix-blend-multiply absolute -bottom-12' />
                                    </div>
                                </div>
                            </div>
                            <div className=' col-span-1 flex flex-col justify-center mt-2 sm:mt-6'>
                                <h2 className='text-[32px] text-white font-normal leading-[41.6px] font-anton'>Silver</h2>
                                <p className='text-[16px] text-[#CDD2D3] font-inter font-medium max-w-[401px] pb-[16px] sm:pb-[32px] pt-[8px] sm:pt-[16px]'>Diseño predeterminado, atractivo y fácil de navegar, tecnología HTLM5.</p>
                                <h2 className='text-[36px] md:text-[48px] text-white font-normal font-anton leading-[57.6px]'>$5000</h2>
                                <div>
                                    <span className='flex gap-[8px] pb-[12px] sm:items-start pt-2 sm:pt-[16px]'>
                                        <span><DubleTick /></span>
                                        <p className='text-[16px] text-[#CDD2D3] font-inter font-medium max-w-[401px]'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                                    </span>
                                    <span className='flex gap-[8px] py-2 sm:py-[12px] items-start '>
                                        <span><DubleTick /></span>
                                        <p className='text-[16px] text-[#CDD2D3] font-inter font-medium max-w-[401px]'>Control de RTP (controlás qué porcentaje pagar)</p>
                                    </span>
                                    <span className='flex gap-[8px] items-start py-2 sm:py-[12px]'>
                                        <span><DubleTick /></span>
                                        <p className='text-[16px] text-[#CDD2D3] font-inter font-medium max-w-[401px]'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                                    </span>
                                    <span className='flex gap-[8px] py-2 sm:py-[12px]'>
                                        <span><DubleTick /></span>
                                        <p className='text-[16px] text-[#CDD2D3] font-inter font-medium max-w-[401px] '>Aplicación para Android y Windows de regalo.</p>
                                    </span>
                                    <span className='flex gap-[8px] '>
                                        <span><DubleTick /></span>
                                        <p className='text-[16px] text-[#CDD2D3] font-inter font-medium max-w-[401px]'>Tiempo de creación 2 a 3 semanas</p>
                                    </span>
                                </div>
                                <div className='mt-[16px] sm:mt-[40px] mb-[28px]'>
                                    <Comanbtn text='Comprar ahora' />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default Nuestras