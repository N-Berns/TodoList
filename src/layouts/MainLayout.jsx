import React from "react";
import Nav from "@/components/Nav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <Nav />
      <Outlet />
    </div>
  );
};

export default MainLayout;
