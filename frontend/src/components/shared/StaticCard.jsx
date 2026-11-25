import { GoChecklist } from "react-icons/go";
import { FaCheckCircle, FaRegClock } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import { useMemo } from "react";
import { taskStats } from "../../utils/taskStats";

export default function StaticCard({ task = [] }) {
    const { total, completed, inProgress, overdue } = useMemo(
        () => taskStats(task),
        [task]
    );
    // const today = new Date().toISOString().split("T")[0]; // 2026-11-24T12:00:00.000Z 
    // const { totalTask, DoneCount, overdueCount, inProgressCount } = useMemo(() => {
    //     const total = task.length;
    //     const Done = task.filter((e) => {
    //         const status = e.status.toLowerCase();
    //         if (status === "completed" || status === "done") {
    //             return status === "completed" || status === "done";
    //         }
    //     }).length
    //     const overdue = task.filter((e) => {
    //         const status = e.status.toLowerCase();
    //         if (status === "overdue" || status === "due" || status === "pending") {
    //             return (status === "overdue" || status === "due" || status === "pending")
    //         }
    //     }).length
    //     const inProgress = task.filter((e) => {
    //         const status = e.status.toLowerCase();

    //         return (status === "in-progress" ||
    //             status === "in_progress" ||
    //             status === "inprogress" ||
    //             status === "progress"
    //         )
    //     }).length
    //     return {
    //         DoneCount: Done,
    //         inProgressCount: inProgress,
    //         overdueCount: overdue,
    //         totalTask: total
    //     }
    // }, [task, today])


    const stats = [
        {
            icons: <GoChecklist />,
            value: total,
            label: "Total Tasks",
            bg: "#F3F3FE"
        },
        {
            icons: <FaCheckCircle className='te`xt-green-500' />,
            value: completed,
            label: "completed",
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