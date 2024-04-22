import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import React from "react";

export default async function layout({ children }) {
  return (
    <main>
      <main className="layout grid grid-cols-[305px_1fr] gap-6">
        <SidebarComponent />
        <section className="right-side grid grid-rows-[auto_1fr]">
          <NavbarComponent />
          <main className="flex flex-col py-6 gap-6">{children}</main>
        </section>
      </main>
    </main>
  );
}
