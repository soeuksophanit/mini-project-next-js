import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import CardTodo from "@/components/CardTodo";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import { getAllTodoLists } from "@/services/todoService";
import React from "react";

const page = async ({ params: { id }, searchParams: { sidebar } }) => {
  const todos = await getAllTodoLists(parseInt(id));
  console.log(todos);
  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-4">
        <ListBoardComponentHeader sidebarTab={sidebar} id={parseInt(id)} />
        <div className="flex flex-col gap-3">
          {todos.map((todo, idx) => (
            <>
              <CardTodo key={idx} workspaceId={id} todo={todo} />
            </>
          ))}
        </div>
      </div>
      <div>
        <MonthlyStatisticsComponent />
      </div>
      <div className="fixed bottom-4 right-4">
        <AddNewTaskComponent id={parseInt(id)} />
      </div>
    </div>
  );
};

export default page;
