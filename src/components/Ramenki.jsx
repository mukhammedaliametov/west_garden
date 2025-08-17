import React from "react";
import Map from "../assets/map.png";
import Panorama from "../assets/panorama.svg";

const Ramenki = () => {
  return (
    <div className="container">
      <div className="w-[100%] md:w-[70%] mx-auto mt-[80px] md:mt-[140px] text-center">
        <div>
          <span className="block border-b border-[#EAE3D9] mb-[-13px]"></span>
          <p className="inline-block text-[16px] font-montserrat bg-[#faf8f5] px-[3px]">
            Престижное расположение
          </p>
        </div>
        <h2 className="section-title my-[20px]">
          Один из самых зелёных районов столицы — Раменки
        </h2>
        <img src={Map} alt="map" className="mt-[30px] md:mt-[50px]" />
        <p className="mt-[30px] text-[20px] md:text-[18px] font-opensans">ЖК West Garden окружен Матвеевским лесом, набережной реки <br className="hidden md:block" /> Раменки и природным заказником «Долина реки Сетунь»</p>
        <div className="inline-block mx-auto my-[25px]">
          <div className="flex items-center gap-[10px] border border-[#EAE3D9] rounded-[12px] py-[5px] px-[16px] cursor-pointer">
            <img src={Panorama} alt="panorama_icon" />
            <p className="font-semibold font-opensans text-[#773844]">
              Панорама района 360˚
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ramenki;
