import next from "next";
import { revalidatePath, revalidateTag } from "next/cache";

export const getAllWorkspace = async () => {
  const request = await fetch(
    `${process.env.NEXTAUTH_URL}/v1/workspaces`,
    {
      next: {
        revalidate: 2,
      },
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
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

export const addNewWorkspace = async (newWorkSpace) => {
  const request = await fetch(`${process.env.NEXTAUTH_URL}/v1/workspaces`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
    body: JSON.stringify({ workspaceName: newWorkSpace }),
  });
  const workspace = await request.json();
  revalidateTag("workspace");
  console.log("new workspace : ", workspace);
};
