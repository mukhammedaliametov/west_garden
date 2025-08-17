import React from "react";
import Card1 from "../assets/hero_card1.png";
import Card2 from "../assets/hero_card2.png";
import Card3 from "../assets/hero_card3.png";
import Card4 from "../assets/hero_card4.png";

const HeroCards = () => {
  const cards = [
    {
      img: Card1,
      name: "20 гектаров",
      info: "территории ЖК — это как полтора Зарядья",
    },
    {
      img: Card2,
      name: "15 корпусов",
      info: "по 12-14 этажей, просторная застройка",
    },
    { img: Card3, name: "7 гектаров", info: "приватного парка для жителей ЖК" },
    {
      img: Card4,
      name: "2 километра",
      info: "набережной реки Раменка вдоль ЖК",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[20px] w-[100%] md:w-[70%] mx-auto my-[50px]">
      {cards.map((item, index) => {
        return (
          <div
            key={index}
            className="relative rounded-[5px] overflow-hidden group cursor-pointer"
          >
            <img
              src={item.img}
              alt="img"
              className="group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-0 left-2 text-left">
              <h3 className="inline-block font-montserrat font-semibold bg-[#00000099] backdrop-blur-[16px] py-[6px] px-[10px] text-[22px] rounded-[6px] text-white">
                {item.name}
              </h3>
              <p className="inline-block font-opensans bg-[#00000099] backdrop-blur-[16px] py-[6px] px-[10px] text-[16px] mb-[5px] mt-[2px] text-white rounded-[6px]">
                {item.info}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeroCards;
