import React from "react";
import RiverlineIcon from "../assets/riverline.svg";
import ParkIcon from '../assets/parkline.svg';
import ClutersImg1 from "../assets/river_line1.png";

const Clusters = () => {
  return (
    <div className="pt-[90px]" data-aos="fade-up">
      <h2 className="section-title mx-auto mb-[40px]">
        Жилой комплекс состоит <br /> из двух кластеров
      </h2>
      <div className="bg-[#1F2057] w-full h-full px-[16px]">
        <div className="w-full md:w-[900px] mx-auto flex flex-col md:flex-row md:justify-between items-start md:items-center">
          <div className="font-montserrat mt-[25px]">
            <h2 className="flex items-center gap-[20px] text-[46px] font-bold text-white">
              River Line <img src={RiverlineIcon} alt="riverline_icon" />
            </h2>
            <p className="text-white py-[8px] text-[18px] font-opensans">
              Восемь жилых корпусов по 12-14 этажей <br /> выстроенны вдоль реки
              Раменки
            </p>
          </div>
          <button className="bg-white py-[8px] px-[16px] rounded-[12px] font-opensans cursor-pointer mt-[5px] md:mt-[70px] font-medium">
            Посмотреть планировки
          </button>
        </div>
        <div className="py-[40px] md:mt-[-30px]">
          <img src={ClutersImg1} alt="" className="w-[900px] mx-auto rounded-[5px]" />
        </div>
      </div>
      <div className="bg-[#A0A747] w-full h-full px-[16px]">
        <div className="w-full md:w-[900px] mx-auto flex flex-col md:flex-row md:justify-between items-start md:items-center">
          <div className="font-montserrat mt-[15px]">
            <h2 className="flex items-center gap-[20px] text-[46px] font-bold text-white">
              Park Line <img src={ParkIcon} alt="riverline_icon" />
            </h2>
            <p className="text-white py-[8px] text-[18px] font-opensans">
              Семь 14-этажных жилых корпусов, <br /> расположенных вдоль Матвеевского леса
            </p>
          </div>
          <button className="bg-white py-[8px] px-[16px] rounded-[12px] font-opensans cursor-pointer mt-[5px] md:mt-[70px] font-medium">
            Посмотреть планировки
          </button>
        </div>
        <div className="py-[40px] md:mt-[-30px]">
          <img src={ClutersImg1} alt="" className="w-[900px] mx-auto rounded-[5px]" />
        </div>
      </div>
    </div>
  );
};

export default Clusters;
