"use client";
import { deleleWS } from "@/utils/util";
import { useRouter } from "next/navigation";
import React from "react";

export default function DeleteButton({ id }) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        deleleWS(id);
        router.push("/todo-list");
      }}
    >
      Delete Workspace
    </div>
  );
}
