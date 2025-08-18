import React from "react";
import { BiSolidDoorOpen } from "react-icons/bi";
import { IoStar } from "react-icons/io5";
import Img1 from "../assets/lobby_card1.png";
import Img2 from "../assets/lobby_card2.png";
import Img3 from "../assets/lobby_card3.png";
import Img4 from "../assets/lobby_card4.png";
import ElevatorIcon from '../assets/elevator.svg';

const Lobby = () => {
  return (
    <div className="w-full md:w-[900px] mx-auto px-[16px]">
      <h2 className="section-title my-[40px]">Современная эстетика лобби</h2>
      <div className="bg-white py-[20px] px-[20px] md:px-[40px] rounded-[12px] font-montserrat">
        <div className="flex items-center gap-[5px] pb-[10px] md:pb-0">
          <BiSolidDoorOpen className="text-[28px] text-[#773844]" />
          <p className="text-[16px] md:text-[26px] font-medium">Центральные входные группы</p>
        </div>
        <div className="hidden md:flex items-center gap-[5px] my-[10px]">
          <div className="bg-[#F7F1E9] flex items-center gap-[5px] py-[4px] px-[10px] rounded-[5px]">
            <IoStar className="text-yellow-300" />
            <span className="text-[14px]">Зоны ожидания и встреч</span>
          </div>
          <div className="bg-[#F7F1E9] flex items-center gap-[5px] py-[4px] px-[10px] rounded-[5px]">
            <IoStar className="text-yellow-300" />
            <span className="text-[14px]">Пост охраны</span>
          </div>
          <div className="bg-[#F7F1E9] flex items-center gap-[5px] py-[4px] px-[10px] rounded-[5px]">
            <IoStar className="text-yellow-300" />
            <span className="text-[14px]">Переговорная комната</span>
          </div>
          <div className="bg-[#F7F1E9] flex items-center gap-[5px] py-[4px] px-[10px] rounded-[5px]">
            <IoStar className="text-yellow-300" />
            <span className="text-[14px]">Колясочная</span>
          </div>
        </div>
        <div className="flex items-left md:items-center flex-col md:flex-row gap-[10px] ">
          <img src={Img1} alt="img1" className="w-full md:w-[60%] h-[300px]" />
          <img src={Img2} alt="img1" className="w-full md:w-[40%] h-[300px]" />
        </div>
      </div>
      <div className="bg-white py-[20px] px-[20px] md:px-[40px] rounded-[12px] font-montserrat mt-[20px]">
        <div className="flex items-center gap-[5px] pb-[10px] md:pb-0">
          <img src={ElevatorIcon} alt="icon" className="w-[28px]" />
          <p className="text-[15px] md:text-[26px] font-medium">Центральные входные группы</p>
        </div>
        <div className="hidden md:flex items-center gap-[5px] my-[10px]">
          <div className="bg-[#F7F1E9] flex items-center gap-[5px] py-[4px] px-[10px] rounded-[5px]">
            <IoStar className="text-yellow-300" />
            <span className="text-[14px]">Зоны ожидания и встреч</span>
          </div>
          <div className="bg-[#F7F1E9] flex items-center gap-[5px] py-[4px] px-[10px] rounded-[5px]">
            <IoStar className="text-yellow-300" />
            <span className="text-[14px]">Пост охраны</span>
          </div>
          <div className="bg-[#F7F1E9] flex items-center gap-[5px] py-[4px] px-[10px] rounded-[5px]">
            <IoStar className="text-yellow-300" />
            <span className="text-[14px]">Переговорная комната</span>
          </div>
          <div className="bg-[#F7F1E9] flex items-center gap-[5px] py-[4px] px-[10px] rounded-[5px]">
            <IoStar className="text-yellow-300" />
            <span className="text-[14px]">Колясочная</span>
          </div>
        </div>
        <div className="flex items-left md:items-center flex-col md:flex-row gap-[10px] ">
          <img src={Img4} alt="img1" className="w-full md:w-[40%] h-[300px]" />
          <img src={Img3} alt="img1" className="w-full md:w-[60%] h-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default Lobby;
