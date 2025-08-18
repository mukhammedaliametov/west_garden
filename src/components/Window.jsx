import React, { useState } from "react";
import Image from "../assets/window_img.png";
import { FaArrowRight } from "react-icons/fa6";
import FemaleImage from "../assets/female.png";

const Window = () => {
  return (
    <div className="container pt-[80px] px-[16px]" data-aos="fade-up">
      <h2 className="section-title mx-auto">
        Наслаждайтесь видами из окон своей квартиры
      </h2>
      <div className="py-[50px]">
        <img
          src={Image}
          alt="slider"
          className="w-full h-[500px] object-cover rounded-[10px]"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-[15px] w-[100%] md:w-[950px] mx-auto bg-white rounded-[10px]">
        <div className="font-montserrat py-[20px] px-[15px] md:px-[30px] w-[100%] md:w-[60%]">
          <p className="text-[#773844] font-semibold mb-[13px] text-[14px]">
            СПЕЦИАЛЬНО ДЛЯ ВАС
          </p>
          <h3 className="text-[26px]/[32px] md:text-[32px]/[42px] font-semibold">
            Персональная <br /> презентация West Garden
          </h3>
          <div className="my-[20px] font-opensans">
            <div className="flex items-center gap-[5px]">
              <FaArrowRight className="text-[#773844]" />
              <span>Подробно расскажем про жилой комплекс</span>
            </div>
            <div className="flex items-center gap-[5px] my-[10px]">
              <FaArrowRight className="text-[#773844]" />
              <span>Ознакомитесь со всеми планировками и ценами</span>
            </div>
            <div className="flex items-center gap-[5px] border-b-2 border-[#EAE3D9] pb-[20px]">
              <FaArrowRight className="text-[#773844]" />
              <span>Прогуляетесь по благоустроенной набережной</span>
            </div>
          </div>
          <p className="font-opensans font-medium mb-[6px]">
            Закрепить за номером
          </p>
          <div className="flex flex-col md:flex-row gap-[10px] items-center mt-[0px] mb-[15px]">
            <input
              type="tel"
              value={"+7"}
              className="bg-[#F5F3F0] py-[12px] px-[16px] rounded-[12px] outline-none w-full md:w-auto"
            />
            <button className="bg-[#773844] text-[14px] text-white py-[12px] px-[16px] rounded-[12px] w-full md:w-auto cursor-pointer">
              Записаться на презентацию
            </button>
          </div>
          <p className="text-[12px] text-[#646562]">
            Нажимая на кнопку, вы даёте согласие на обработку персональных
            данных и соглашаетесь c политикой конфиденциальности
          </p>
        </div>
        <div className="hidden md:block w-[40%] mb-[-20px] ">
          <img src={FemaleImage} alt="" className="h-[120%] scale-110" />
        </div>
      </div>
    </div>
  );
};

export default Window;
