"use client";
import React from "react";

export default function AddFavorite({ children, id }) {
  return <div onClick={() => console.log("hello world" + id)}>{children}</div>;
}
