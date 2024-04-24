import { taskTitles } from "@/app/(todos)/todo-board/[id]/page";
import { filterData } from "@/utils/util";
import React from "react";

export default function MonthlyStatisticsComponent({ todos }) {
  return (
    <div>
      <h1 className="text-xl font-bold mb-5 mt-12 text-center">
        Statistics on July
      </h1>
      {taskTitles.map((title, idx) => (
        <div key={idx} className="flex gap-3 items-center">
          <div
            className={`${
              title == "todo"
                ? "bg-todo"
                : title == "working on"
                ? "bg-workingOn"
                : title == "checking"
                ? "bg-checking"
                : "bg-completed"
            } h-5 rounded-lg w-1`}
          ></div>
          <p className="capitalize">
            {title} : <span>{filterData(todos, title).length}</span> tasks
          </p>
        </div>
      ))}
    </div>
  );
}
