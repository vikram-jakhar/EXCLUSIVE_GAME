import React from 'react'
import { DubleTick } from './SvgFileOnly'
import Comanbtn from './Comanbtn'
import Group_img from '../assets/img/Group-card-img.png'

const PlatinumSec = () => {
    return (
        <div>
            <div className='bg-[#00141B] relative z-[1] '>
                <span className='w-[484px] absolute opacity-50 left-[-314px] top-[-100px] blur-[150px] z-[-1] h-[484px] bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)]'></span>
                <div className='max-w-[1140px] mx-auto px-3 pt-[14px] sm:pt-[100px] pb-[50px] sm:pb-[110px]'>
                    <div className='bg-[#062024] border-[0.5px] border-solid border-[#FFFFFF80] relative z-[1] overflow-hidden'>
                        <span className='w-[162px] absolute right-[110px] top-[110px] blur-[60px] z-[-1] h-[162px] bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)]'></span>
                        <div className='grid lg:grid-cols-2  sm:mt-[78px] mb-[35px] sm:mb-[78px] '>
                            <div className=' col-span-1 ps-[50px] px-3'>
                                <h2 className='text-[32px] mt-[12px] sm:mt-[43px]  text-white sm:leading-[41.6px] font-anton font-normal ' >Platinum</h2>
                                <p className='text-[16px] mt-2 sm:mt-[16px] text-[#CDD2D3] font-medium font-inter sm:leading-[25.6px] max-w-[364px] '>Diseño totalmente personalizado. Contáctanos para un presupuesto.</p>
                                <h2 className='text-[36px] sm:text-[48px] mt-[12px] sm:mt-[32px] text-white leading-[57.6px] font-normal font-anton'>Consultar precio</h2>
                                <span className='flex gap-[8px] mt-[12px] sm:mt-[16px] '>
                                    <DubleTick />
                                    <p className='text-[16px] text-[#CDD2D3] font-inter font-medium'>Personalizable</p>
                                </span>
                                <div className='mt-[12px] sm:mt-[40px] '>
                                    <Comanbtn text='Comprar ahora' />
                                </div>
                            </div>
                            <div className='col-span-1 px-3 lg:pe-[40px] flex justify-center'>
                                <img src={Group_img} alt="Group_img" className=' w-full lg:w-[602px] lg:h-[419px] mt-7 lg:mt-0' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PlatinumSec