export const getAllTodoLists = async (workspaceId) => {
  const results = await fetch(
    `${process.env.NEXTAUTH_URL}/v1/tasks?workspaceId=${workspaceId}`,
    {
      next: {
        revalidate: 2,
      },
      method: "GET",
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzb3BoYW5pdEBnbWFpbC5jb20iLCJpYXQiOjE3MTM4NTQ5NzQsImV4cCI6MTcxMzg3Mjk3NH0.yEqDmLNj8I_ymJ9rVlepn_PQk21b_JE1C7KC5f45GK0"}`,
      },
    }
  );
  const todos = await results.json();
  console.log(todos);
  return todos.data;
};

export const addNewTask = async (task, workspaceId) => {
  const request = await fetch(
    `${process.env.NEXTAUTH_URL}/v1/tasks`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzb3BoYW5pdEBnbWFpbC5jb20iLCJpYXQiOjE3MTM4NTQ5NzQsImV4cCI6MTcxMzg3Mjk3NH0.yEqDmLNj8I_ymJ9rVlepn_PQk21b_JE1C7KC5f45GK0"}`,
      },
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
    { next: { revalidatePath: 2 } }
  );
  const newTask = await request.json();
  console.log("new task : ", newTask);
};
