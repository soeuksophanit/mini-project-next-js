import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import TodoCardComponent from "@/components/TodoCardComponent";
import React from "react";

const page = ({ searchParams: { sidebar }, params: { id } }) => {
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
                  ? classes + "border-b-[#FFEE93] border-b-[3px]"
                  : idx == 1
                  ? classes + "border-b-[#306BFF] border-b-[3px]"
                  : idx == 2
                  ? classes + "border-b-[#FFB57F] border-b-[3px]"
                  : classes + "border-b-[#78C552] border-b-[3px]"
              }
            >
              {title}
            </p>
            <div>
              <TodoCardComponent />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

const taskTitles = ["todo", "working on", "checking", "completed"];
