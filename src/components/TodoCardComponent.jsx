import Image from "next/image";
import React from "react";
import { ButtonChangeStatusTodo } from "./ButtonChangeStatusTodo";
import PopUpDeleteTask from "./PopUpDeleteTask";

export default function TodoCardComponent({ task, title, idx, wsId }) {
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
            <PopUpDeleteTask taskId={task.taskId} wsId={wsId} />
          </div>
        </div>

        <p className="text-gray">{task?.description}</p>
        <div className="flex justify-between items-center mt-5">
          <div className="bg-bgTag uppercase text-colorTag py-1 px-5 rounded-lg font-bold">
            {title}
          </div>
          <div className={classes}></div>
        </div>
      </div>

      <hr className="text-gray" />
      <div className="flex gap-2 justify-around pr-3 py-2">
        <ButtonChangeStatusTodo taskId={task.taskId} idx={idx}>
          <Image
            src={getIcon(task.status)}
            width={20}
            height={20}
            alt="calendar icon"
          />
        </ButtonChangeStatusTodo>
        <p className="text-gray">{new Date(task.dueDate).toDateString()}</p>
      </div>
    </div>
  );
}

const getIcon = (status) => {
  return status == 1
    ? "/assets/icons/calendar.svg"
    : status == 2
    ? "/assets/icons/working.svg"
    : status == 3
    ? "/assets/icons/checking.svg"
    : "/assets/icons/completed.svg";
};
