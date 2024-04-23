"use server";

import { addNewTask } from "@/services/todoService";
import { revalidatePath } from "next/cache";

export const addTask = async (formData) => {
  const title = formData.get("title");
  const description = formData.get("description");
  const tag = formData.get("tag");
  const dueDate = formData.get("dueDate");
  const workspaceId = formData.get("workspaceId");

  console.log(title, description, tag, dueDate, workspaceId);
  addNewTask({ title, description, tag, dueDate }, workspaceId);
  revalidatePath("/todo-list");
};
