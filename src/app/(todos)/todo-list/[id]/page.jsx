import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import React from "react";

const page = ({ searchParams: { sidebar } }) => {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div>
        <ListBoardComponentHeader sidebarTab={sidebar} />
      </div>
      <div>
        <MonthlyStatisticsComponent />
      </div>
    </div>
  );
};

export default page;
