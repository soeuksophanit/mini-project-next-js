import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import TodoCardComponent from "@/components/TodoCardComponent";
import { getAllTodoLists } from "@/services/todoService";
import { filterData } from "@/utils/util";
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
        {taskTitles.map((title, idx) => (
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
              {filterData(allTasks, title).map((data, idx) => (
                <TodoCardComponent key={idx} task={data} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

export const taskTitles = ["todo", "working on", "checking", "completed"];
