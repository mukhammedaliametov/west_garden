import React from "react";
import Logo from "../assets/hero_logo.svg";
import HeroImg from '../assets/hero_img.png';
import HeroCards from "./HeroCards";
import Award from '../assets/award.svg';

const Hero = () => {
  return (
    <div className="container text-center font-montserrat relative" data-aos="fade-up">
        <img src={Logo} alt="logo" className="w-[214px] mx-auto mt-[40px]" />
        <h1 className="text-[#1A1A1A] font-bold text-[30px]/[35px] md:text-[54px]/[60px] my-[15px] md:my-[20px]">Жизнь в зеленом оазисе <br className="hidden md:block" /> в статусном районе Москвы</h1>
        <p className="font-opensans px-[10px] md:px-[0px] mb-[30px] border-0 md:border-b-2 w-[90%] md:w-[35%] mx-auto border-[#A0A747]">Жилой комплекс бизнес-класса в 20 минутах от Кремля</p>
        <img src={HeroImg} alt="hero_img" data-aos="fade-up" />
        <div data-aos="fade-up" className="hidden md:block w-[193px] p-[10px] bg-white absolute top-[230px] right-[40px] rounded-[5px]">
          <img src={Award} alt="award_icon" className='mx-auto w-[30px]' />
          <p className="text-[14px]/[22px] font-montserrat">Победитель федеральной премии Urban Awards 2019</p>
        </div>
        <HeroCards />
    </div>
  );
};

export default Hero;
