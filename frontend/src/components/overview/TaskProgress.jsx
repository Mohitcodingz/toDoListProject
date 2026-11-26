import React, { useMemo } from "react";
import { Pie, PieChart, Tooltip } from "recharts";
import { taskStats } from "../../utils/taskStats";


export default function TaskProgress({ task = [] }) {
  const { total, completed, inProgress, todo } = useMemo(
    () => taskStats(task),
    [task]
  );

  const pct = (count) =>
    total === 0 ? 0 : Math.round((count / total) * 100);

  const chartData = [
    { name: "Completed", value: completed, pct: pct(completed), fill: "#3B5BDB" },
    { name: "In Progress", value: inProgress, pct: pct(inProgress), fill: "#FCC419" },
    { name: "To Do", value: todo, pct: pct(todo), fill: "#9775FA" },
  ];

  const displayData =
    total === 0
      ? [{ name: "Empty", value: 1, pct: 0, color: "#E9ECEF" }]
      : chartData;

  return (
    <div className="w-full h-80 grid grid-rows-[20%_80%] p-3 rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.06)] bg-white">
      <div className="w-full h-full p-2 flex items-center">
        <h3 className="font-bold text-base text-[20px]">Task Progress</h3>
      </div>

      <div className="w-full grid grid-cols-2 items-center px-2">
        <div className="relative flex items-center justify-center">
          <PieChart width={170} height={170}>
            <Pie
              data={displayData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={85}
              stroke="none"
            >
            </Pie>
            {total > 0 && <Tooltip />}
          </PieChart>

          <div className="absolute flex flex-col items-center justify-center pointer-events-none">
            <span className="text-xl font-bold">{pct(completed)}%</span>
            <span className="text-[11px] text-gray-500">Completed</span>
          </div>
        </div>

        <div className="space-y-3 w-auto h-auto rounded-[10px] pr-2 shadow-[0_0_20px_rgba(0,0,0,0.06)]  p-8 mr-5">
          {chartData.map((item) => (
            <div key={item.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.fill }}
                />
                <span className="text-gray-700">{item.name}</span>
              </div>
              <span className="font-semibold pr-5">
                {item.value} ({item.pct}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}