"use client";
import { deleteTaskTodo } from "@/services/todoService";
import React from "react";

export default function ButtonDeleteTask({ taskId, wsId, children }) {
  return (
    <button
      onClick={() => {
        deleteTaskTodo(taskId, wsId);
      }}
    >
      {children}
    </button>
  );
}
