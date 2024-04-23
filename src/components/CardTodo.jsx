import React from "react";

export default function CardTodo({ workspaceId, todo }) {
  return (
    <div className="bg-[#FFEE93] p-3 rounded-md grid grid-cols-[auto_1fr_auto] gap-4">
      <div className="bg-white rounded-md flex flex-col items-center justify-center p-3">
        <p>{new Date(todo.dueDate).getDay()}</p>
        <p>{new Date(todo.dueDate).getDate()}</p>
      </div>
      <div>
        <p className="font-semibold">{todo.taskTitle}</p>
        <p className="text-sm">{todo.description}</p>
      </div>
      <div className="flex items-end">
        <p className="capitalize bg-white px-3 rounded-sm">
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
