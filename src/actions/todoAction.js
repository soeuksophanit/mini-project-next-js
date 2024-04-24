"use server";

import { addNewTask } from "@/services/todoService";
import { revalidateTag } from "next/cache";

export const addTask = async (formData) => {
  const title = formData.get("title");
  const description = formData.get("description");
  const tag = formData.get("tag");
  const dueDate = formData.get("dueDate");
  const workspaceId = formData.get("workspaceId");
  addNewTask({ title, description, tag, dueDate }, workspaceId);
  revalidateTag("task");
};


