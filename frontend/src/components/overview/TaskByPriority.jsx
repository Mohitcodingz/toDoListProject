import React from 'react'
import CommonBox from '../shared/commonBox'

export default function TaskByPriority() {
    const format = "Task By Priority";
    const chartContent = (
        <div className="w-full h-full">
            {/* Your Recharts BarChart goes here */}
        </div>
    )
    return (
        <div>
            <CommonBox Heading={format.heading} customComponent={chartContent} />
        </div>
    )
}
