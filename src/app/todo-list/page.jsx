import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div>
        <ListBoardComponentHeader />
      </div>
      <div>
        <MonthlyStatisticsComponent />
      </div>
    </div>
  );
};

export default page;
