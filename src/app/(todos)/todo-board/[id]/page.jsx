import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import TodoCardComponent from "@/components/TodoCardComponent";
import { getAllTodoLists } from "@/services/todoService";
import { filterData } from "@/utils/util";
import Image from "next/image";
import React from "react";

const page = async ({ searchParams: { sidebar }, params: { id } }) => {
  const allTasks = await getAllTodoLists(id);
  let classes = "uppercase font-semibold py-2 ";
  return (
    <div className="pr-10 flex flex-col gap-6">
      <div>
        <ListBoardComponentHeader
          sidebarTab={sidebar}
          id={parseInt(id)}
          page={"Board"}
        />
      </div>
      <div className="grid grid-cols-4 gap-6">
        {allTasks.length >= 1 ? (
          taskTitles.map((title, idx) => (
            <div key={idx}>
              <p
                className={
                  idx == 0
                    ? classes + "border-b-todo border-b-[3px]"
                    : idx == 1
                    ? classes + "border-b-workingOn border-b-[3px]"
                    : idx == 2
                    ? classes + "border-b-checking border-b-[3px]"
                    : classes + "border-b-completed border-b-[3px]"
                }
              >
                {title}
              </p>
              <div>
                {allTasks.length >= 1 &&
                  filterData(allTasks, title).map((data) => (
                    <TodoCardComponent
                      wsId={id}
                      key={idx}
                      task={data}
                      title={title}
                      idx={idx + 1}
                    />
                  ))}
              </div>
            </div>
          ))
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
      <div className="fixed bottom-4 right-4">
        <AddNewTaskComponent id={parseInt(id)} />
      </div>
    </div>
  );
};

export default page;

export const taskTitles = ["todo", "working on", "checking", "completed"];
