import React, { useMemo } from "react";
import { Pie, PieChart, Cell, Tooltip } from "recharts";
import { taskStats } from "../../utils/taskStats";
 

export default function TaskProgress({ task = [] }) {
  const { total, completed, inProgress, todo } = useMemo(
    () => taskStats(task),
    [task]
  );

  const pct = (count) =>
    total === 0 ? 0 : Math.round((count / total) * 100);

  const chartData = [
    { name: "Completed", value: completed, pct: pct(completed), color: "#3B5BDB" },
    { name: "In Progress", value: inProgress, pct: pct(inProgress), color: "#FCC419" },
    { name: "To Do", value: todo, pct: pct(todo), color: "#9775FA" },
  ];

  const displayData =
    total === 0
      ? [{ name: "Empty", value: 1, pct: 0, color: "#E9ECEF" }]
      : chartData;

  return (
    <div className="w-full h-80 grid grid-rows-[20%_80%] p-3 rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.06)] bg-white">
      <div className="w-full h-full p-2 flex items-center">
        <h3 className="font-bold text-base">Task Progress</h3>
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
              innerRadius={52}
              outerRadius={72}
              stroke="none"
            >
              {displayData.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            {total > 0 && <Tooltip />}
          </PieChart>

          <div className="absolute flex flex-col items-center justify-center pointer-events-none">
            <span className="text-xl font-bold">{pct(completed)}%</span>
            <span className="text-[11px] text-gray-500">Completed</span>
          </div>
        </div>

        <div className="space-y-3 pr-2">
          {chartData.map((item) => (
            <div key={item.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-gray-700">{item.name}</span>
              </div>
              <span className="font-semibold">
                {item.value} ({item.pct}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}