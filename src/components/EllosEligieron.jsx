import React from 'react'
import BlackJack from "../assets/img/Black-Jack1.png"
import Europeanroulette from "../assets/img/European-roulette1.png"
import Livebetting from "../assets/img/Live-betting1.png"
import Comanbtn from './Comanbtn'

const EllosEligieron = () => {
    return (
        <div className=' max-w-[1140px] px-3 mx-auto'>
            <h2 className=' text-[36px] sm:text-[48px] text-center text-white sm:leading-[57.6px] font-normal font-anton'>Ellos eligieron apostar con nosotros</h2>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 sm:gap-6 pt-[20px] sm:pt-[60px]'>
                <div className=' relative w-full duration-300 group items-center'>
                    <img className='w-full rounded-lg' src={BlackJack} alt="BlackJack" />
                    <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full duration-300 bg-black rounded-lg opacity-0 group-hover:opacity-100 bg-opacity-70">
                        <div className="relative"><Comanbtn text="Rcasinovip" />
                        </div>
                    </div>
                </div>
                <div className=' relative w-full duration-300 group items-center'>
                    <img className='w-full rounded-lg' src={Europeanroulette} alt="Europeanroulette" />
                    <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full duration-300 bg-black rounded-lg opacity-0 group-hover:opacity-100 bg-opacity-70">
                        <div className="relative"><Comanbtn text="Rcasinovip" />
                        </div>
                    </div>
                </div>
                <div className=' relative w-full duration-300 group items-center'>
                    <img className='w-full rounded-lg' src={Livebetting} alt="Livebetting" />
                    <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full duration-300 bg-black rounded-lg opacity-0 group-hover:opacity-100 bg-opacity-70">
                        <div className="relative"><Comanbtn text="Rcasinovip" />
                        </div>
                    </div>
                </div>
            </div>
            <h2 className=' text-base font-semibold font-inter sm:leading-[25px] text-center max-w-[643px] pt-3 sm:pt-7 text-white mx-auto'>Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego.
                Ahora, la próxima apuesta está en tus manos.
                Elige ganar. Elige exclusive game.</h2>
        </div>
    )
}

export default EllosEligieron
