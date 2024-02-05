import React from "react";
import poker from "../assets/img/poker.png";
import aviator from "../assets/img/Aviator.png";

const NuestraVisión = () => {
    return (
        <div className=" max-w-[1140px] px-3 mx-auto mt-[30px] sm:mt-[74px]">
            <div className=" grid lg:grid-cols-2 gap-[40px] sm:gap-16 px-3">
                <div className=" col-span-1 flex  justify-center flex-col lg:items-start items-center ">
                    <div>
                        <img src={poker} alt="poker" />
                    </div>
                    <h2 className=" text-[30px] sm:text-[48px] font-semibold sm:font-normal font-Anton text-white leading-[57px] pt-5 sm:pt-14">
                        Nuestra Visión
                    </h2>
                    <p className="text-[12px] sm:text-base font-Inter font-medium leading-[25px] max-w-[444px] text-[#CCD0D1]">
                        Nuestra visión es ser líderes indiscutibles en la industria de los
                        juegos de azar y llevar nuestra pasión por el entretenimiento más
                        allá de las fronteras. Imagina un mundo donde la emoción y la
                        diversión no tengan límites, y ese es el mundo que queremos crear
                        contigo.
                    </p>
                    <p className=" pt-2 sm:pt-6 text-base leading-[25px] font-bold font-Inter text-[#7AF57A]">
                        Aprende más {"-->"}
                    </p>
                </div>
                <div className=" col-span-1  flex  justify-center flex-col lg:items-start items-center">
                    <h2 className=" text-[30px] sm:text-[48px] font-normal font-Anton text-white leading-[57px]">
                        Nuestra Misión
                    </h2>
                    <p className=" text-[12px] sm:text-base font-Inter font-medium leading-[25px] max-w-[444px] text-[#CCD0D1]">
                        Nuestra misión es simple pero poderosa: proporcionarte la más amplia
                        gama de soluciones de entretenimiento de alta calidad y
                        rentabilidad. Estamos comprometidos a elevar tus expectativas y
                        brindarte experiencias inigualables.
                    </p>
                    <p className=" pt-2 sm:pt-6 text-base leading-[25px] font-bold font-Inter text-[#7AF57A]">
                        Aprende más {"-->"}
                    </p>
                    <div className=" pt-[40px] max-sm:mb-12 sm:pt-14"><img src={aviator} alt="aviator" /></div>
                </div>
            </div>
        </div>
    );
};

export default NuestraVisión;
