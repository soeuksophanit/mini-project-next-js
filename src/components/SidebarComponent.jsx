import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import WorkspacePopupComponent from "./WorkspacePopupComponent";
import Link from "next/link";
import { getAllWorkspace } from "@/services/workSpaceService";

export default async function SidebarComponent() {
  const workspaces = await getAllWorkspace();
  const favorite = workspaces.filter((w) => w.isFavorite);
  console.log("Fave ", favorite);
  return (
    <div className="pl-10 mt-6 h-screen">
      <div className="flex justify-between">
        <Link href={"/todo-list"}>
          <Image
            src={"/assets/icons/logo.svg"}
            width={150}
            height={100}
            priority
            alt="something"
          />
        </Link>

        <Image
          src={"/assets/icons/arrow.svg"}
          width={25}
          height={30}
          priority
          alt="something"
        />
      </div>

      {/* workspace */}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">workspace</h1>
        <WorkspacePopupComponent />
      </div>

      {/* each workspace */}
      {workspaces.map((ws, idx) => (
        <div
          key={idx}
          className="flex items-center mt-5 w-full hover:bg-slate-200 duration-300 p-2 rounded-sm"
        >
          <div
            className={
              idx % 2 == 0
                ? "rounded-full w-4 h-4 bg-todo"
                : "rounded-full w-4 h-4 bg-indigo-500 "
            }
          ></div>
          <div className="flex justify-between w-full pl-3">
            <Link href={`/todo-list/${ws.workSpaceId}?sidebar=workspace`}>
              {ws.workspaceName}
            </Link>

            <EditDeleteDropDownComponent />
          </div>
        </div>
      ))}

      {/* favorite*/}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">favorite</h1>

        <Image
          src={"/assets/icons/favorite.svg"}
          width={22}
          height={22}
          priority
          alt="something"
        />
      </div>

      {/* each favorite workspace */}
      {favorite.map((fav, idx) => (
        <React.Fragment key={idx}>
          <div className="flex items-center mt-5 w-full">
            <div className="rounded-full w-4 h-4 bg-workingOn"></div>
            <div className="flex justify-between w-full pl-3">
              <Link href={`/todo-list/${fav.workSpaceId}?sidebar=favorite`}>
                {fav.workspaceName}
              </Link>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
