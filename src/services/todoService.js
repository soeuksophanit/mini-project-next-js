import { reqHeader } from "@/lib/configHeder";
import { revalidateTag } from "next/cache";

export const getAllTodoLists = async (workspaceId) => {
  const headers = await reqHeader();
  const results = await fetch(
    `${process.env.NEXTAUTH_URL}/v1/tasks?workspaceId=${workspaceId}`,
    {
      next: {
        revalidate: 2,
      },
      method: "GET",
      headers,
    }
  );
  const todos = await results.json();
  revalidateTag("task");
  return todos.data;
};

export const addNewTask = async (task, workspaceId) => {
  const headers = await reqHeader();

  const request = await fetch(
    `${process.env.NEXTAUTH_URL}/v1/tasks`,
    {
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
    },
    { next: { tag: ["task"] } }
  );
};
