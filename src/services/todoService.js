"use server";
import { reqHeader } from "@/lib/configHeder";
import { revalidateTag } from "next/cache";

export const getAllTodoLists = async (workspaceId) => {
  const headers = await reqHeader();
  const results = await fetch(
    `${process.env.NEXTAUTH_URL}/v1/tasks?workspaceId=${workspaceId}`,
    {
      method: "GET",
      headers,
    },
    {
      next: {
        tag: ["allTask"],
      },
    }
  );
  const todos = await results.json();
  revalidateTag("task");
  return todos.data;
};

export const addNewTask = async (task, workspaceId) => {
  const headers = await reqHeader();

  const request = await fetch(`${process.env.NEXTAUTH_URL}/v1/tasks`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      taskTitle: task.title,
      description: task.description,
      startDate: Date.now(),
      dueDate: task.dueDate,
      tag: task.tag,
      status: 0,
      workspaceId,
    }),
  });
  revalidateTag("allTask");
};

export const changeStatusTask = async (taskId, statusNumber) => {
  const headers = await reqHeader();
  await fetch(`${process.env.NEXTAUTH_URL}/v1/tasks/change-status/${taskId}`, {
    method: "PUT",
    headers,
    body: JSON.stringify({
      status: statusNumber + 1 > 4 ? 4 : statusNumber + 1,
    }),
  });
  revalidateTag("allTask");
};

export const deleteTaskTodo = async (taskId, wsId) => {
  const headers = await reqHeader();
  console.log("hello : ", taskId, wsId);
  fetch(
    `${process.env.NEXTAUTH_URL}/v1/tasks/deleteTaskByWorkspaceIdAndTaskId/${wsId}/${taskId}`,
    {
      method: "DELETE",
      headers,
    }
  );
  revalidateTag("allTask");
};
