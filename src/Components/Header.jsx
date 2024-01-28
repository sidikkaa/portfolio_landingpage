import React, { useState } from 'react';
import { HiBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import MenuOverlay from './MenuOverlay'; 
import indianflag from "./indianflag.jpg";
import "./index.css";

function Header() {
    const [toggle, setToggle] = useState(false);

    const menuList = [
        {
            id: 1,
            title: 'Home'
        },
        {
            id: 2,
            title: 'About'
        },
        {
            id: 3,
            title: 'Skills'
        },
        {
            id: 4,
            title: 'Portfolio'
        },
    ];

    return (
        
      
        <div className="flex items-center justify-between">
           
            <div>
                <h2 className='text-[24px] font-bold text-white'>Sidikkaa <span className='text-red-500'>Mohamed saleem</span></h2>
            </div>
            <div className="hidden md:flex gap-4">
                {menuList.map((item) => (
                    <h2 key={item.id} className="text-pink-700 hover:border-[1px] border-red-500 rounded-full text-[15px] px-3 py-1 cursor-pointer hover:bg-gradient-to-r from-gray-500 to-red-200">{item.title}</h2>
                ))}
                <h2 className="text-pink-700 hover:border-[1px] border-red-500 rounded-full text-[15px] px-3 py-1 cursor-pointer hover:bg-gradient-to-r from-gray-500 to-red-200">Hire me</h2>
            </div>
            <div className='md:hidden'>
                {!toggle ? <HiBars3BottomRight onClick={() => setToggle(!toggle)} className='text-white text-[22px] cursor-pointer'/>
                : <RxCross2 onClick={() => setToggle(!toggle)} className='text-white text-[22px] cursor-pointer' />}
                {toggle ? <MenuOverlay menuList={menuList}/> : null}
            </div>
        
            
        </div>
    );
}

export default Header;


