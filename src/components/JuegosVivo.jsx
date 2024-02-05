import React from 'react'
import Jackpot from "../assets/img/Jackpot.webp"
import Zugi from '../assets/img/Zugi.webp'
import Roulette from '../assets/img/Roulette.webp'
import Betting from '../assets/img/Betting.webp'
import Comanbtn from './Comanbtn'
import { DubleTick } from './SvgFileOnly'
const JuegosVivo = () => {
    return (
        <>
            <div className='bg-[url(../src/assets/img/jacpotbgimg.webp)]  bg-no-repeat bg-cover bg-center overflow-hidden'>
                <div className=' max-w-[1140px] px-3 mx-auto sm:pt-[90px] '>
                    <div className=' grid lg:grid-cols-2 gap-2 sm:gap-7'>
                        <div className='col-span-1 '>
                            <img src={Jackpot} alt="Jackpot" />
                        </div>
                        <div className='col-span-1'>
                            <h2 className=' text-[36px] md:text-[48px] font-anton font-normal sm:leading-[57.6px] text-white pt-2 sm:pt-5'>Potenciando sus elecciones</h2>
                            <p className=' text-base font-medium font-inter leading-[25.6px] text-[#CDD0D1] pt-1 sm:pt-4'>Con Exclusive Game lo mejor está de tu lado.</p>
                            <span className=' flex sm:items-center gap-2 pt-2 sm:pt-6'>
                                <DubleTick />
                                <p className='text-base font-medium font-inter leading-[25.6px] text-[#CDD0D1]'>Tecnología HTML5</p>
                            </span>
                            <span className=' flex sm:items-center gap-2 tp-1 sm:pt-3'>
                                <DubleTick />
                                <p className='text-base font-medium font-inter leading-[25.6px] text-[#CDD0D1]'>Versión PC y móvil</p>
                            </span>
                            <span className=' flex sm:items-center gap-2 pt-1 sm:pt-3'>
                                <DubleTick />
                                <p className='text-base font-medium font-inter leading-none sm:leading-[25.6px] text-[#CDD0D1]'>Control de RTP (controlás qué porcentaje pagar)</p>
                            </span>
                            <span className=' flex sm:items-center gap-2 pt-1 sm:pt-3'>
                                <span>
                                    <DubleTick />
                                </span>
                                <p className='text-base font-medium font-inter sm:leading-[25.6px] text-[#CDD0D1]'>Bonos editables, happy hours, Jackpots, códigos  promocionales.</p>
                            </span>
                            <span className=' flex sm:items-center gap-2 pt-1 sm:pt-3'>
                                <DubleTick />
                                <p className='text-base font-medium font-inter leading-[25.6px] text-[#CDD0D1]'>Aplicación para android y windows de regalo.</p>
                            </span>
                            <p className='text-base font-medium font-inter leading-[25.6px] text-[#CDD0D1] pt-2 sm:pt-6'>Te reintegramos todo lo invertido en fichas en la moneda que elijas..</p>
                        </div>
                    </div>
                    <div className=' max-w-[1068px] mx-auto px-3 bg-[url(../src/assets/img/Semanasbgimg.webp)] bg-no-repeat bg-center bg-cover min-h-[308px] flex items-center justify-center my-[25px] sm:my-[50px] md:my-[100px] lg:my-[150px] border border-[#fff] rounded-[16px]'>
                        <h2 className='text-[48px] font-normal font-anton sm:leading-[57px] text-center text-white max-w-[520px] mx-auto'>lanza tu propia plataforma en sólo 2 semanas</h2>
                    </div>
                </div>
                <div className=' max-w-[1140px] px-3 mx-auto sm:pb-[100px]'>
                    <p className='text-[36px] md:text-[48px] font-normal font-anton leading-[57px] text-center text-white '>Juegos en vivo</p>
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4 sm:pt-[60px] gap-2 sm:gap-6'>
                        <div className=' col-span-1 relative w-full duration-300 group items-center'>
                            <img className='w-full rounded-lg' src={Zugi} alt="Zugi" />
                            <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full duration-300 bg-black rounded-lg opacity-0 group-hover:opacity-100 bg-opacity-70">
                                <div className="relative">
                                    <Comanbtn text="Reproducir ahora" />
                                </div>
                            </div>
                        </div>
                        <div className=' col-span-1 relative w-full duration-300 group items-center'>
                            <img className='w-full rounded-lg' src={Roulette} alt="Roulette" />
                            <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full duration-300 bg-black rounded-lg opacity-0 group-hover:opacity-100 bg-opacity-70">
                                <div className="relative">
                                    <Comanbtn text="Reproducir ahora" />
                                </div>
                            </div>
                        </div>
                        <div className=' md:col-span-2 lg:col-span-1 relative w-full duration-300 group items-center'>
                            <img className='w-full rounded-lg' src={Betting} alt="Betting" />
                            <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full duration-300 bg-black rounded-lg opacity-0 group-hover:opacity-100 bg-opacity-70">
                                <div className="relative">
                                    <Comanbtn text="Reproducir ahora" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default JuegosVivo