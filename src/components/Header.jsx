import React from 'react';
import Logo from '../assets/logo.svg';

const Header = () => {
    return (
        <div className='container flex items-center justify-between font-montserrat'>
            <div className='flex items-center gap-[10px]'>
                <img src={Logo} alt="logo" />
                <p className='hidden md:block text-[14px] text-[#646562] font-opensans'>Официальный партнер <br /> АО «ИНТЕКО»</p>
            </div>
            <div className='py-[16px] '>
                <a href="tel: +7 495 845 19 34">+7 495 845 19 34</a>
                <ul className='flex justify-end'>
                    <li className='list-disc text-[#A0A747]'><a href="javascript:void(0)">работаем</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;