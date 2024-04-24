import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";

export default function TodoCardComponent({ task }) {
  let classes = `rounded-full w-5 h-5 `;
  classes +=
    task.status == 1
      ? " bg-todo"
      : task.status == 2
      ? " bg-workingOn"
      : task.status == 3
      ? " bg-checking"
      : " bg-completed";
  return (
    <div className="border border-gray rounded-lg w-todoCardWidt mt-5 relative">
      <div className="p-5">
        <div className="flex justify-between">
          <p className="text-[20px] capitalize">{task?.taskTitle}</p>
          <div className="absolute top-2 right-3">
            <EditDeleteDropDownComponent />
          </div>
        </div>

        <p className="text-gray">{task?.description}</p>
        <div className="flex justify-between items-center mt-5">
          <div className="bg-bgTag text-colorTag py-1 px-5 rounded-lg font-bold">
            {task?.tag}
          </div>
          <div className={classes}></div>
        </div>
      </div>

      <hr className="text-gray" />
      <div className="flex gap-2 justify-end pr-3 py-2">
        <Image
          src={"/assets/icons/calendar.svg"}
          width={20}
          height={20}
          alt="calendar icon"
        />
        <p className="text-gray">{new Date(task.dueDate).toDateString()}</p>
      </div>
    </div>
  );
}
