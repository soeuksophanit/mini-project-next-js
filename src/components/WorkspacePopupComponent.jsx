import { addNewWorkspace } from "@/services/workSpaceService";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import React from "react";

export default async function WorkspacePopupComponent() {
  const addWorkspace = async (form) => {
    "use server";
    const workspace = form.get("workspaceName");
    console.log("New workspace : ", workspace);
    addNewWorkspace(workspace);
    revalidatePath("/todo-list");
  };

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my_modal_6" className="cursor-pointer">
        <Image
          src={"/assets/icons/plus.svg"}
          width={22}
          height={22}
          alt="something"
          priority
        />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <form className="modal" role="dialog" action={addWorkspace}>
        <div className="modal-box">
          <h3 className="font-bold text-lg capitalize">create new workspace</h3>
          <input
            type="text"
            name="workspaceName"
            placeholder="workspace name"
            className="mt-3 block border border-gray rounded-lg w-full py-2 px-5 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
          />
          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              className="bg-blue-600 rounded-lg text-white mr-3 h-12 px-5 flex items-center"
            >
              Create
            </label>
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
