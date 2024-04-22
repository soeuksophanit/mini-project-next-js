import next from "next";
import { revalidatePath } from "next/cache";

export const getAllWorkspace = async () => {
  const request = await fetch(`${process.env.NEXTAUTH_URL}/v1/workspaces`, {
    next: {
      revalidate: 2,
    },
    method: "GET",
    headers: {
      Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzb3BoYW5pdEBnbWFpbC5jb20iLCJpYXQiOjE3MTM3OTA2OTMsImV4cCI6MTcxMzgwODY5M30.08xaGyXe9R08NcCDsENzMjbWaDyTcBQPOp6vrZPJtI8"}`,
    },
  });
  const workspaces = await request.json();
  return workspaces.data;
};

export const addNewWorkspace = async (newWorkSpace) => {
  const request = await fetch(
    `${process.env.NEXTAUTH_URL}/v1/workspaces`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzb3BoYW5pdEBnbWFpbC5jb20iLCJpYXQiOjE3MTM3OTA2OTMsImV4cCI6MTcxMzgwODY5M30.08xaGyXe9R08NcCDsENzMjbWaDyTcBQPOp6vrZPJtI8"}`,
      },
      body: JSON.stringify({ workspaceName: newWorkSpace }),
    },
    { next: { revalidatePath: 2 } }
  );
  const workspace = await request.json();
  console.log("new workspace : ", workspace);
};
