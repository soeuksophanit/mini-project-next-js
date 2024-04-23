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
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzb3BoYW5pdEBnbWFpbC5jb20iLCJpYXQiOjE3MTM4NTQ5NzQsImV4cCI6MTcxMzg3Mjk3NH0.yEqDmLNj8I_ymJ9rVlepn_PQk21b_JE1C7KC5f45GK0"}`,
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
      Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzb3BoYW5pdEBnbWFpbC5jb20iLCJpYXQiOjE3MTM4NTQ5NzQsImV4cCI6MTcxMzg3Mjk3NH0.yEqDmLNj8I_ymJ9rVlepn_PQk21b_JE1C7KC5f45GK0"}`,
    },
    body: JSON.stringify({ workspaceName: newWorkSpace }),
  });
  const workspace = await request.json();
  revalidateTag("workspace");
  console.log("new workspace : ", workspace);
};
