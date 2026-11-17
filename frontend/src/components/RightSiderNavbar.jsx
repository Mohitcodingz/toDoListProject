import React from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import data from '../data/data.json'
import { IoSearch } from "react-icons/io5";

export default function RightSiderNavbar() {
    const location = useLocation();
    const currentPage = data.Label.find((item) => {
        return item.slug === location.pathname
    });
    const user = { name: 'Alex Morgan' };
    return (
        <div className='flex justify-between items-center '>
            <div className='labelRoute h-[60px] w-[500px]'>
                <h1 className='text-[35px] font-bold'>{currentPage?.heading ? currentPage.heading : "Dashboard"}</h1>
                <p className='text-gray-500 w-[450px] pt-[5px]'>{currentPage.slug.toLocaleLowerCase() === '/overview' ? `Welcome Back, ${user.name || "user "}! ${currentPage.para}` : currentPage?.para || "Nothing"}</p>
            </div>
            <div className=' flex flex-row items-center justify-end h-[60px] gap-4'>
                <div className='border h-[40px] border-gray-300 flex flex-row w-[300px] rounded-[10px]  outline-nonehover:outline-none '>
                    <IoSearch className='w-[18px] h-full flex items-center justify-center mx-4' />
                    <input type="text" placeholder='Search tasks...' className=' outline-none  w-full hover:outline-none ' />
                </div>
                <IoIosNotificationsOutline className='p-1 w-[40px] h-[40px] border rounded-[25px] bg-[var(--leftSiderBg)] border-2 border-[var(--leftSiderBg)]' />
                <span className=' flex items-center justify-center w-[40px] h-[40px] border rounded-full border-black-500 bg-[var(--mediumPurple)] text-white-600'>{user.name.charAt(0).toUpperCase()}</span>
            </div>
        </div>
    )
}