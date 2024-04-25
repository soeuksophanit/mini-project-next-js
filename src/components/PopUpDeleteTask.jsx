import React from "react";
import ButtonDeleteTask from "./ButtonDeleteTask";

export default async function PopUpDeleteTask({ taskId, wsId }) {
  return (
    <div className="relative">
      {/* The button to open modal */}

      <label
        htmlFor="my_modal_100"
        className="btn btn-sm btn-circle btn-ghost absolute right-1 bg-slate-200 top-2"
      >
        ✕
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_100" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Attention!</h3>
          <p className="py-4">Do you want to delete this task?</p>
          <div className="modal-action">
            <ButtonDeleteTask taskId={taskId} wsId={wsId}>
              <label
                htmlFor="my_modal_100"
                className="btn btn-error text-white"
              >
                Delete
              </label>
            </ButtonDeleteTask>
            <label htmlFor="my_modal_100" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
