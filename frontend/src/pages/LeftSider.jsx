import React from 'react'
import { Link } from 'react-router-dom'
import { IoHomeOutline, IoFolderOutline } from "react-icons/io5"
import { FaRegSquareCheck } from "react-icons/fa6"
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
export default function LeftSider() {
  return (
    <div className='flex flex-col gap-5 justify-center items-center  mt-[50px] font-bold'>
      <div className='mb-[30px] text-[22px] flex flex-row justify-center items-center gap-[8px]'>
        <img src="/logo/images.png" alt="LogoImage" className='w-[30px] h-[30px] rounded-[8px]' />
        <Link to='/Overview'>TaskFlow</Link>
      </div>
      {/* <hr className="col-span-2 w-full border-t-2 border-gray-300 self-end" /> */}
      <div className='flex flex-col gap-10  justify-center self-start ml-13 text-[18px]'>
        <Link to='/Overview' className='slidebar-btn'> <IoHomeOutline className='text-[20px]  flex items-start' /> Overview</Link>
        <Link to='/MyTasks' className='slidebar-btn'  ><FaRegSquareCheck className='text-[20px] flex items-start' />My Tasks</Link>
        <Link to='/Board' className='slidebar-btn'><MdOutlineDashboardCustomize className='text-[20px] flex items-start' />Board</Link>
        <Link to='/Projects' className='slidebar-btn'><IoFolderOutline className='text-[20px] flex items-start' />Projects</Link>
        <Link to='/Settings' className='slidebar-btn' ><CiSettings className='text-[20px] flex items-start' />Settings</Link>
      </div>
    </div>
  )
}
