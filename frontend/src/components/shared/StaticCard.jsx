import React from 'react'
import { GoChecklist } from "react-icons/go";
import { FaCheckCircle, FaRegClock } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
export default function StaticCard() {
    const stats = [
        {
            icons: <GoChecklist />,
            value: "24",
            label: "Total Tasks",
            bg: "#F3F3FE"
        },
        {
            icons: <FaCheckCircle className='text-green-500' />,
            value: "12",
            label: "Completed",
            bg: "#F0FDF5"
        }, {
            icons: <FaRegClock className='text-orange-500' />,
            value: "8",
            label: "In Progress",
            bg: "#FFFAF2"
        }, {
            icons: <IoWarningOutline className='text-red-500' />,
            value: "4",
            label: "Overdue",
            bg: "#FEF4F4"
        }
    ]
    return (
        <div className="grid grid-cols-4 gap-5 mt-2">
            {stats.map((item) => (
                <div key={item.label} style={{ backgroundColor: item.bg }} className='w-[300px] h-[110px] grid grid-cols-[30%_70%] p-5 items-center justify-center rounded-[15px] mt-12 '>
                    <div className=' text-blue-600 flex items-center justify-center'><span className='text-[33px]'>
                        {item.icons}</span></div>
                    <div className='flex flex-col ml-10 items-start justify-center'>
                        <h2 className='text-[30px] font-bold'>{item.value}</h2>
                        <h3 className='text-[var(--darkBlue)]'>{item.label}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}
