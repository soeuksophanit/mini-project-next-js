import { addTask } from "@/actions/todoAction";
import { getAllWorkspace } from "@/services/workSpaceService";
import Image from "next/image";
import React from "react";

export default async function AddNewTaskComponent({ id }) {
  const workspaces = await getAllWorkspace();
  if (!workspaces.length) return;
  const { workspaceName } = workspaces.find((w) => w.workSpaceId == id);
  return (
    <div>
      <label htmlFor="my_modal_7" className="cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="bg-workingOn rounded-3xl text-white p-1.5 flex gap-2 items-center w-32 h-10 justify-center">
            <Image
              src={"/assets/icons/plus-white.svg"}
              width={22}
              height={22}
              alt="add new task icon"
              priority
            />
            <p>New Task</p>
          </div>
          <div className="shadow-md rounded-full">
            <Image
              src={"/assets/icons/icons-add-task.svg"}
              width={35}
              height={35}
              alt="add new task icon"
              priority
            />
          </div>
        </div>
      </label>

      {/* popup form for create new task */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div>
            <h3 className="text-gray">
              Workspace &gt; <span>{workspaceName}</span>
            </h3>
            <label className="modal-backdrop text-black" htmlFor="my_modal_7">
              <p className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </p>
            </label>
          </div>

          <form className="space-y-1" action={addTask}>
            {/* title */}
            <h3 className="text-lg">Title</h3>
            <input
              placeholder="Insert your task title"
              type="text"
              name="title"
              className="block border border-gray rounded-lg w-full py-2 px-5 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
            />

            {/* description */}
            <h3 className="text-lg">Description</h3>
            <input
              placeholder="Insert your task description"
              type="text"
              name="description"
              className="block border border-gray rounded-lg w-full py-2 px-5 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
            />

            {/* tag */}
            <h3 className="text-lg">Tag</h3>
            <input
              placeholder="Insert your task tag"
              type="text"
              name="tag"
              className="block border border-gray rounded-lg w-full py-2 px-5 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
            />

            {/* due date */}
            <h3 className="text-lg">Due Date</h3>
            <input
              placeholder="Insert your task's end date"
              type="date"
              name="dueDate"
              className="block border border-gray rounded-lg w-full py-2 px-5 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
            />

            <h3 className="text-lg">Workspace ID</h3>
            <input
              placeholder="Insert your task's end date"
              type="text"
              name="workspaceId"
              // disabled
              // value={id}
              defaultValue={id}
              readOnly
              className="block border border-gray rounded-lg w-full py-2 px-5 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
            />

            <div className="pt-5">
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-xl py-2 w-full focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
              >
                <label htmlFor="my_modal_7">Create</label>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
