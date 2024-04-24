"use client";
import { addToFav } from "@/services/workSpaceService";
import React from "react";

export default function AddFavorite({ children, id, isFav }) {
  return (
    <span className="cursor-pointer" onClick={() => addToFav(id, isFav)}>
      {children}
    </span>
  );
}
