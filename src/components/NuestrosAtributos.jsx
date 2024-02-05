import JetX from '../assets/img/JetX.png'
import joker from '../assets/img/joker.png'
import jarvis from '../assets/img/jarvis.png'
import lucky from '../assets/img/lucky.png'
import summer from '../assets/img/summer.png'
import CasinoRIP from '../assets/img/CasinoRIP.png'
import { Arrow, Arrow2, Bulb, ButtonBottom, Innovación, Proactividad } from './Svg'
import Comanbtntwo from './ComanbtnSec'

const NuestrosAtributos = () => {
    const slotsData = [
        { id: 1, svg: (<Bulb />), title: "Inteligencia", para: "Comprendemos a la perfección los gustos de las personas y el mundo del gaming." },
        { id: 2, svg: (<Proactividad />), title: "Proactividad", para: "Somos creadores de cambios que exploran nuevas formas de entretenimiento." },
        { id: 3, svg: (<Innovación />), title: "Innovación", para: "Pensamos fuera de la caja para estar siempre un paso adelante." },
    ]
    const slotsDataSecond = [
        { id: 1, img: JetX, title: "Inteligencia", },
        { id: 2, img: joker, title: "Proactividad", },
        { id: 3, img: jarvis, title: "Innovación", },
        { id: 4, img: lucky, title: "Innovación", },
        { id: 5, img: summer, title: "Innovación", },
        { id: 6, img: CasinoRIP, title: "Innovación", },
    ]
    return (
        <div className="bg-no-repeat bg-[url(../src/assets/img/bg-white.png)] w-full bg-cover pt-[60px] sm:pt-[243px] pb-[200px]  sm:pb-[400px] overflow-hidden">
            <div className=" px-3 mx-auto flex flex-col max-w-[1140px] lg:justify-between">
                <h2 className='text-[30px] md:text-4xl sm:text-5xl font-semibold max-md:mt-[50px] sm:font-normal font-Anton sm:leading-[57px] text-[#00141B] text-center'>Nuestros Atributos de Marca</h2>
                <div className="max-lg:grid lg:grid-cols-3 mt-[20px] sm:my-[60px] justify-center gap-[17px] lg:justify-between inline-flex items-center relative">
                    {
                        slotsData.map((items, index) => (
                            <div key={index} className="flex flex-col items-center justify-center w-full max-w-[245px]">
                                <span className='w-[100px] h-[100px] rounded-[73px] bg-[#F5FFF5] flex justify-center items-center '>{items.svg}</span>
                                <h2 className="text-[#00141B] font-anton font-normal text-xl sm:leading-[26px] text-center mt-2 sm:mt-4">{items.title}</h2>
                                <p className="text-[#334349] font-Inter font-medium text-base  sm:leading-[26px] text-center mt-2 sm:mt-4">{items.para}</p>
                            </div>
                        ))
                    }
                    <span className="absolute lg:top-[18px] max-[374px]:hidden top-[22%] left-[50%] max-lg:rotate-90 lg:left-[19%]"><Arrow /></span>
                    <span className="absolute lg:top-[76px] max-[374px]:hidden max-lg:rotate-90 right-[50%] top-[67%] lg:right-[18%]"><Arrow2 /></span>
                </div>
            </div>
            <div className="px-3 mx-auto flex flex-col max-w-[1140px] mt-8 sm:mt-[90px]">
                <h2 className='text-4xl sm:text-5xl font-normal font-anton leading-[57px] text-[#00141B] text-center'>Slots </h2>
                <p className="text-[#334349] font-inter font-medium text-base sm:leading-[26px] text-center sm:mt-4 max-w-[904px] mx-auto">En Exclusive Games, ofrecemos una selección de más de 600 juegos de los principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja incansablemente para innovar y ampliar nuestra oferta de experiencias, garantizando la máxima seguridad con operaciones protegidas por cifrado SSL de 256 bits.</p>
                <div className="grid grid-cols-3  mt-[30px] sm:mt-[60px] relative gap-2  sm:gap-6">
                    {
                        slotsDataSecond.map((listing, index) => (
                            <div key={index} className="relative flex flex-col items-center w-full duration-300 group ">
                                <img className="w-full rounded-lg" src={listing.img} alt={listing.title} />
                                <div className="absolute  flex items-center justify-center w-full h-full duration-300 bg-black rounded-lg opacity-0 group-hover:opacity-100 bg-opacity-70">
                                    <div className="relative">
                                        <button className={` text-[16px] max-sm:!p-[3px_15px] group border border-solid bordre-white rounded-[50px]  transition-all duration-500 hover:text-black hover:bg-[linear-gradient(306.99deg,#51C8EF_-13.72%,#7AF57A_102.02%)] font-bold font-inter leading-[25.6px] bg-transparent  p-[13px_46px] text-white`}>
                                            Jugar
                                        </button>
                                        <span className='max-sm:hidden group-hover:stroke-[black] absolute left-[-6px] bottom-[-6px]'>
                                            <ButtonBottom />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="mx-auto mt-4 mb-2 sm:mt-7 md:mt-10"><Comanbtntwo text="Mostrar más" padding='max-sm:!p-[5px_12px]' />
                </div>
            </div>
        </div>
    )
}
export default NuestrosAtributos