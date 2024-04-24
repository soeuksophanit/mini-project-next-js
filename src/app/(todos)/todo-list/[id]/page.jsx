import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import CardTodo from "@/components/CardTodo";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import { getAllTodoLists } from "@/services/todoService";
import Image from "next/image";
import React from "react";

const page = async ({ params: { id }, searchParams: { sidebar } }) => {
  const todos = await getAllTodoLists(parseInt(id));
  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-4">
        <ListBoardComponentHeader
          sidebarTab={sidebar}
          id={parseInt(id)}
          page={"List"}
        />
        {todos.length > 1 ? (
          <div className="flex flex-col gap-3">
            {todos.map((todo, idx) => (
              <React.Fragment key={idx}>
                <CardTodo key={idx} workspaceId={id} todo={todo} />
              </React.Fragment>
            ))}
          </div>
        ) : (
          <>
            <Image
              height={1000}
              width={1000}
              src={"/assets/icons/sad.svg"}
              className="size-[250px]"
            />
            <p>No Task</p>
          </>
        )}
      </div>
      {todos.length > 1 && (
        <div>
          <MonthlyStatisticsComponent todos={todos} />
        </div>
      )}
      <div className="fixed bottom-4 right-4">
        <AddNewTaskComponent id={parseInt(id)} />
      </div>
    </div>
  );
};

export default page;
