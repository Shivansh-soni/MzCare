import React from "react";
import "./Dashboard.css";
import DbLeft from "./DbLeft";
import DbRight from "./DbRight";

const Dashboard = () => {
  return (
    <div className="">
      <div className="flex gap-16 w-full flex-col md:flex-row p-10  ">
        <DbLeft />
        <DbRight />
      </div>
    </div>
  );
};

export default Dashboard;
