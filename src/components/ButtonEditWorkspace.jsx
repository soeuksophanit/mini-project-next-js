import { editWorkspace, getAllWorkspace } from "@/services/workSpaceService";
import { revalidateTag } from "next/cache";
import React from "react";

export default async function ButtonEditWorkspace({ workspaceId }) {
  const getAllWorkspaces = await getAllWorkspace();
  const oldWorkspace = getAllWorkspaces.find(
    (ws) => ws.workSpaceId == workspaceId
  );
  return (
    <>
      <div className="relative">
        <input
          type="checkbox"
          id={"my_modal_102" + workspaceId}
          className="modal-toggle"
        />
        <div className="modal" role="dialog">
          <form
            className="modal-box"
            action={async (form) => {
              "use server";
              const newWorkspaceName = form.get("editWorkspace");
              editWorkspace(workspaceId, newWorkspaceName);
              revalidateTag("workspace");
            }}
          >
            <h3 className="font-bold text-lg">Attention!</h3>
            <p className="py-4">Do you want to delete this task?</p>
            <input
              name="editWorkspace"
              type="text"
              placeholder="Type here"
              defaultValue={oldWorkspace.workspaceName}
              className="input input-bordered w-full "
            />
            <div className="modal-action">
              <button type="submit" className="btn btn-neutral">
                <label htmlFor={"my_modal_102" + workspaceId}>
                  Edit Workspace
                </label>
              </button>
              <label htmlFor={"my_modal_102" + workspaceId} className="btn">
                Close!
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
