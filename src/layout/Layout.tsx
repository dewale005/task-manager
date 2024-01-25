"use client";

import React from "react";
import SideBar from "./Sidebar";
import Navbar from "./Navbar";

export type ILayout = React.FC<{
    children: JSX.Element | Array<JSX.Element>;
}>

const Layout: ILayout = ({ children }) => {
  
  return (
    <div>
      <SideBar />
      <div className="sm:ml-64">
        <Navbar />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
