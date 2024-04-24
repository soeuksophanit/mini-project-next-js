export const getAllTodoLists = async (workspaceId) => {
  const results = await fetch(
    `${process.env.NEXTAUTH_URL}/v1/tasks?workspaceId=${workspaceId}`,
    {
      next: {
        revalidate: 2,
      },
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
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
        Authorization: `Bearer ${process.env.TOKEN}`,
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
