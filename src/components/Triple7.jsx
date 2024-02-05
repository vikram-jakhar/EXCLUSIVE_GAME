import React from 'react'
import Triple7 from '../assets/img/trple7im.webp'
import { Bulb, ClientesSvg, DivisasSvg } from './SvgFileOnly.jsx'

const Triplesaven = () => {
    return (
        <>
            <div className='bg-[#00141B]'>
                <div className='max-w-[1140px] mx-auto px-3 '>
                    <div className='grid lg:grid-cols-2 pt-1 sm:pt-[100px] gap-3 sm:gap-12'>
                        <div className=' px-3 flex justify-center items-center'>
                            <img src={Triple7} alt="Triplesaven" className='w-full' />
                        </div>
                        <div className=' flex items-center flex-col lg:items-start justify-center'>
                            <h2 className=' text-[26px] sm:text-[38px] md:text-[42px] lg:text-[48px] text-white leading-[57.6px] font-normal  max-w-[537px] text-wrap lg:text-nowrap font-anton'>Más razones para elegirnos</h2>
                            <div className='flex mt-3 sm:mt-[30px] justify-center items-center sm:w-[374px] w-[300px] gap-4 sm:gap-[37px] px-[10px] py-4 sm:px-[24px] sm:py-[24px] bg-transparent border border-[linear-gradient(306.99deg,rgba(81,200,239,0.5)_-13.72%,rgba(122,245,122,0.5)_102.02%)] border-solid rounded-[16px]'>
                                <span className='flex justify-center items-center bg-[#0F2F28] h-[68px] w-[68px] rounded-[73px]'>
                                    <Bulb />
                                </span>
                                <p className='text-[16px] text-white leading-[25.6px] font-medium font-inter max-w-[157px]'><span className='text-[32px] text-white leading-[41.6px] font-medium font-anton'>200</span> <br />Páginas creadas</p>
                            </div>
                            <div className='flex mt-4 sm:mt-[24px] mb-4 md:mb-[24px] justify-center items-center sm:w-[374px] w-[300px] gap-4 sm:gap-[37px] px-[10px] py-4 sm:px-[24px] sm:py-[24px] bg-transparent border border-[#39825F] border-solid rounded-[16px]'>
                                <span className='flex justify-center items-center bg-[#0F2F28] h-[68px] w-[68px] rounded-[73px]'>
                                    <ClientesSvg />
                                </span>
                                <p className='text-[16px] text-white leading-[25.6px] font-medium font-inter max-w-[157px]'><span className='text-[32px] text-white leading-[41.6px] font-medium font-anton'>98%</span> <br /> Clientes Satisfechas</p>
                            </div>
                            <div className='flex justify-center items-center sm:w-[374px] w-[300px] gap-4 sm:gap-[37px] px-[10px] py-4 sm:px-[24px] sm:py-[24px] bg-transparent border border-[#39825F] border-solid rounded-[16px]'>
                                <span className='flex justify-center items-center bg-[#0F2F28] h-[68px] w-[68px] rounded-[73px]'>
                                    <DivisasSvg />
                                </span>
                                <p className='text-[16px] text-white leading-[25.6px] font-medium font-inter max-w-[157px]'><span className='text-[32px] text-white leading-[41.6px] font-medium font-anton'>200</span> <br />Divisas Disponibles</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div></>
    )




}
export default Triplesaven
