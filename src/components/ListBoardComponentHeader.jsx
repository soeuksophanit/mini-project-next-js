import { getAllWorkspace } from "@/services/workSpaceService";
import Image from "next/image";
import React from "react";
import AddFavorite from "./AddFavorite";

export default async function ListBoardComponentHeader({
  sidebarTab,
  id,
  page,
}) {
  const workspaces = await getAllWorkspace();
  const current = workspaces.find((w) => w.workSpaceId == id);

  return (
    <>
      <div className="text-gray flex text-lg gap-3 mb-5">
        <p className="capitalize">{sidebarTab}</p> /{" "}
        <p className="capitalize">{current?.workspaceName}</p> /<p>{page}</p>
      </div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold capitalize">
          {current?.workspaceName}
        </h2>
        <span className="border border-gray rounded-lg p-2">
          <AddFavorite id={current?.workSpaceId} isFav={current?.isFavorite}>
            <Image
              src={
                current?.isFavorite
                  ? "/assets/icons/favorite.svg"
                  : "/assets/icons/star.svg"
              }
              width={20}
              height={20}
              alt="black star"
              priority
            />
          </AddFavorite>
        </span>
      </div>
    </>
  );
}
