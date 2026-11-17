import React from 'react'
import { GoChecklist } from "react-icons/go";
import { FaCheckCircle, FaRegClock } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
export default function StaticCard() {
    const stats = [
        {
            icons: <GoChecklist />,
            value: "24",
            label: "Total Tasks"
        },
        {
            icons: <FaCheckCircle />,
            value: "12",
            label: "Completed"
        }, {
            icons: <FaRegClock />,
            value: "8",
            label: "In Progress"
        }, {
            icons: <IoWarningOutline />,
            value: "4",
            label: "Overdue"
        }
    ]
    return (
        <div className="flex flex-wrap gap-6 mt-12">

            {stats.map((item, index) => (
                <div className='w-[250px] h-[110px] bg-[var(--lightPurple)] grid grid-cols-[30%_70%] p-5 items-center justify-center rounded-[15px] mt-12 gap-[10px] bg-[var(--veryLightBlue)]'>


                    <div className=' text-blue-600 flex items-center justify-center'><GoChecklist className='text-[40px] text-[var(--BgElement)]' />{item.icons}</div>
                    <div className='flex flex-col ml-6 items-start justify-center'>
                        <h2 className='text-[30px] font-bold'>{item.value}</h2>
                        <h3 className='text-[var(--darkBlue)]'>{item.label}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}
