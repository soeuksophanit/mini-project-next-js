import React from "react";

export default function CardTodo({ workspaceId, todo }) {
  let classes = "p-3 rounded-md grid grid-cols-[100px_1fr_auto] gap-4 ";
  classes +=
    todo.status == 1
      ? "bg-todo"
      : todo.status == 2
      ? "bg-workingOn"
      : todo.status == 3
      ? "bg-checking"
      : "bg-completed";
  return (
    <div className={classes}>
      <div className="bg-white rounded-md flex flex-col items-center justify-center py-3 px-6">
        <p className="text-[#FF0000]">
          {new Date(todo.dueDate).toDateString().split(" ")[2]}
        </p>
        <p className="text-[40px] font-semibold">
          {new Date(todo.dueDate).toDateString().split(" ")[0]}
        </p>
      </div>
      <div>
        <p className="font-semibold">{todo.taskTitle}</p>
        <p className="text-sm">{todo.description}</p>
      </div>
      <div className="flex items-end">
        <p className="capitalize bg-white px-4 py-1 rounded-sm">
          {todo.status == 1
            ? "Todo"
            : todo.status == 2
            ? "working on"
            : todo.status == 3
            ? "checking"
            : "completed"}
        </p>
      </div>
    </div>
  );
}
