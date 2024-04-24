"use client";
import { deleleWS } from "@/utils/util";
import { useRouter } from "next/router";
import React from "react";

export default function DeleteButton({ id }) {
  // const route
  return (
    <div
      onClick={() => {
        deleleWS(id);
      }}
    >
      Delete Workspace
    </div>
  );
}
