import React from 'react'
import { ButtonBottom } from './Svg'

const Comanbtn = (props) => {
    return (
        <div>
            <div className=' relative'>
                <button onClick={props.fun} className={`${props.padding} text-[16px] group border border-solid bordre-white rounded-[50px]  transition-all duration-500 hover:text-black hover:bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)] font-bold font-inter leading-[25.6px] bg-transparent  p-[13px_46px] text-white`}>
                    {props.text}
                </button>
                <span className='group-hover:stroke-[black] absolute left-[-6px] bottom-[-6px]'>
                    <ButtonBottom />
                </span>
            </div>

        </div>
    )
}
export default Comanbtn