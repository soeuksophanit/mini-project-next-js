"use server";
import { reqHeader } from "@/lib/configHeder";
import { revalidatePath, revalidateTag } from "next/cache";

export const getAllWorkspace = async () => {
  const headers = await reqHeader();
  const request = await fetch(
    `${process.env.NEXTAUTH_URL}/v1/workspaces`,
    {
      next: {
        revalidate: 2,
      },
      method: "GET",
      headers: headers,
    },
    {
      next: {
        tag: ["workspace"],
      },
    }
  );
  const workspaces = await request.json();
  return workspaces.data;
};

export const deleteWorkspace = async (workspaceId) => {
  const headers = await reqHeader();
  const request = await fetch(
    `${process.env.NEXTAUTH_URL}/v1/workspaces/${workspaceId}`,
    {
      method: "DELETE",
      headers,
    }
  );
  revalidateTag("workspace");
  revalidatePath("/todo-list");
};

export const addNewWorkspace = async (newWorkSpace) => {
  const headers = await reqHeader();

  const request = await fetch(`${process.env.NEXTAUTH_URL}/v1/workspaces`, {
    method: "POST",
    headers,
    body: JSON.stringify({ workspaceName: newWorkSpace }),
  });
  const workspace = await request.json();
  revalidateTag("workspace");
};
