import React from "react";
import Logo from "../assets/hero_logo.svg";
import HeroImg from '../assets/hero_img.png';
import HeroCards from "./HeroCards";

const Hero = () => {
  return (
    <div className="container text-center font-montserrat">
        <img src={Logo} alt="logo" className="w-[214px] mx-auto mt-[40px]" />
        <h1 className="text-[#1A1A1A] font-bold text-[30px]/[35px] md:text-[54px]/[60px] my-[15px] md:my-[20px]">Жизнь в зеленом оазисе <br className="hidden md:block" /> в статусном районе Москвы</h1>
        <p className="font-opensans px-[10px] md:px-[0px] mb-[30px] border-0 md:border-b-2 w-[90%] md:w-[35%] mx-auto border-[#A0A747]">Жилой комплекс бизнес-класса в 20 минутах от Кремля</p>
        <img src={HeroImg} alt="hero_img" />
        <HeroCards />
    </div>
  );
};

export default Hero;
