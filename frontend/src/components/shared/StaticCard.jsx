import { GoChecklist } from "react-icons/go";
import { FaCheckCircle, FaRegClock } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";

export default function StaticCard({ task = [] }) {
    const completed = task.filter((item) => {
        const status = item.status?.toLowerCase();
        return status === "completed" || status === "done";
    }).length;
    const inProgress = task.filter((item) => {
        const status = item.status?.toLowerCase();
        return status === "in-progress" || status === "in_progress" || status === "progress";
    }).length;
    const overdue = task.filter((item) => {
        const status = item.status?.toLowerCase();
        return status !== "completed" && status !== "done"
            && item.dueDate && new Date(`${item.dueDate}T23:59:59`) < new Date();
    }).length;
    const stats = [
        {
            icons: <GoChecklist />,
            value: task.length,
            label: "Total Tasks",
            bg: "#F3F3FE"
        },
        {
            icons: <FaCheckCircle className='text-green-500' />,
            value: completed,
            label: "Completed",
            bg: "#F0FDF5"
        }, {
            icons: <FaRegClock className='text-orange-500' />,
            value: inProgress,
            label: "In Progress",
            bg: "#FFFAF2"
        }, {
            icons: <IoWarningOutline className='text-red-500' />,
            value: overdue,
            label: "Overdue",
            bg: "#FEF4F4"
        }
    ]


    // example

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