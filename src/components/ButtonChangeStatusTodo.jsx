"use client";

import { changeStatusTask } from "@/services/todoService";
import React from "react";

export function ButtonChangeStatusTodo({ taskId, idx, children }) {
  return (
    <button onClick={() => changeStatusTask(taskId, idx)}>{children}</button>
  );
}
