import React from 'react'
import btnbottom2 from '../assets/img/btnbottom2.webp'

const Comanbtntwo = (props) => {
    return (
        <div className=' relative'>
            <button onClick={props.fun} className={`${props.padding}  text-[16px] border-none rounded-[50px] font-bold font-inter leading-[25.6px] hover:bg-[linear-gradient(306.99deg,#7AF57A_-13.72%,#51C8EF_102.02%)] transition-all duration-500 hover:text-white bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)] p-[13px_46px] text-black`}>
                {props.text}
            </button>
            <span className=' absolute left-[-5px] bottom-[-6px]'>
                <img src={btnbottom2} alt="btnbottom2" className='w-[104px]' />
            </span>
        </div>
    )
}
export default Comanbtntwo