import React from "react";
import night from "../assets/img/nightCasino.webp";
import Comanbtntwo from "./ComanbtnSec";

const NightCasino = () => {
    return (
        <div className="  bg-[url(../src/assets/img/nightcasinobgimg.webp)] min-[1441px]:bg-white bg-no-repeat bg-center bg-cover py-[150px] sm:py-[340px]">
            <div className="max-w-[1140px] px-3 mx-auto ">
                <div className=" grid lg:grid-cols-2 grid-cols-1 gap-7 sm:gap-11">
                    <div className=" flex flex-col justify-center">
                        <h2 className="text-[36px] md:text-[48px] font-normal font-anton sm:leading-[57px] text-black">
                            Por qué elegirnos
                        </h2>
                        <p className="text-base font-medium leading-[25px] font-inter text-[#334349] pt-1 sm:pt-4">
                            Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos
                            todo lo invertido en fichas en la moneda que elijas. En Exclusive
                            Games siempre sumamos nuevos juegos. Juegos crash, los juegos
                            interactivos que más pide la gente. Con Exclusive Games empezás a
                            ganar ya! Creamos tu plataforma en solo 2 semanas.
                        </p>
                        <div className=" relative pt-2 sm:pt-6">
                            <Comanbtntwo text="Aprende más" />
                        </div>
                    </div>
                    <div className="max-sm:mb-12">
                        <img className=" w-full" src={night} alt="night" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NightCasino;