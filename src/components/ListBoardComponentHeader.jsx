import { getAllWorkspace } from "@/services/workSpaceService";
import Image from "next/image";
import React from "react";
import AddFavorite from "./AddFavorite";

export default async function ListBoardComponentHeader({ sidebarTab, id }) {
  const workspaces = await getAllWorkspace();
  const current = workspaces.filter((w) => w.workSpaceId == id);
  console.log("Workspace : ", current);

  return (
    <>
      <div className="text-gray flex text-lg gap-3 mb-5">
        <p className="capitalize">{sidebarTab}</p> /{" "}
        <p className="capitalize">{current[0]?.workspaceName}</p> /<p>List</p>
      </div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{current[0]?.workspaceName}</h2>
        <span className="border border-gray rounded-lg p-2">
          <Image
            src={
              current[0]?.isFavorite
                ? "/assets/icons/favorite.svg"
                : "/assets/icons/star.svg"
            }
            width={20}
            height={20}
            alt="black star"
          />
        </span>
      </div>
    </>
  );
}
