import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

export default function Dashboard() {
  return (
    <>
    <div className="main-container">
      <div className="leftsection ">
        <Sidebar />
      </div>
      <div className="rightsection ">
        <Header />
      </div>
      </div>
    </>
  );
}
