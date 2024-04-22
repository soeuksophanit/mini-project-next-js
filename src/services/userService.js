export const getAllTodoLists = async () => {
  const results = await fetch(`${process.env.NEXTAUTH_URL}`);
  const todos = await results.json();
  console.log(todos);
  return todos;
};
