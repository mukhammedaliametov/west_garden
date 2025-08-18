import React from "react";
import Img1 from "../assets/formats1.png";
import Img2 from "../assets/formats2.png";
import Img3 from "../assets/formats3.png";
import Img4 from "../assets/formats4.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Formats = () => {
  const formatsItems = [
    {
      title: "Свободная планировка, возможность объединить квартиры до 500 м²",
      info: "Не ограничивайте себя при создании жилого пространства Вашей мечты, воспользуйтесь возможностью увеличения площади до комфортного Вам размера",
      img: Img1,
    },
    {
      title: "Настоящий дровяной камин ",
      info: "В пентхаусах предусмотрен дымоход с возможностью установки камина, чтобы Вы получали наслаждение от живого тепла в холодное время года",
      img: Img2,
    },
    {
      title: "Собственная терраса до 17 м²",
      info: "Современная террасса с необыкновенными видами на благоустроенную набережную, МГУ им. М.В. Ломоносова и Воробьевы горы",
      img: Img3,
    },
    {
      title: "Увеличенная высота потолка",
      info: "Почувствуйте простор помещений в полной мере с увеличенной высотой потолка 4,2 м",
      img: Img4,
    },
  ];
  return (
    <div className="w-full md:w-[900px] mx-auto px-[16px] mt-[150px] pb-[80px]">
      <h2 className="section-title mx-auto mb-[50px]">
        Более 100 свободных квартир <br className="hidden md:block" />
        <span>редких форматов</span>
      </h2>
      <div className="flex flex-col gap-[20px]">
        {formatsItems.map((item, index) => {
          return (
            <div key={index} data-aos="fade-up" className="flex flex-col-reverse md:flex-row items-center gap-[20px] bg-white p-[15px] md:pl-[30px] py-[30px] md:py-[15px] rounded-[10px]">
              <div className="">
                <h3 className="text-[20px] md:text-[30px]/[36px] font-bold font-montserrat">{item.title}</h3>
              <p className="text-[#1A1A1A] font-opensans text-[16px] py-[10px]">{item.info}</p>
              <div className="inline-block">
              <a href="#" className="flex items-center gap-[10px] text-blue-700 border-b">
                Узнать стоимость <FaArrowRightLong />
              </a>
              </div>
              </div>
              <img src={item.img} alt="img" className="w-[350px]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Formats;
