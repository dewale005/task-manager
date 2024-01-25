"use client";

import React from "react";
import Navbar from "./Navbar";
import { SideBar } from "./Sidebar";

export type ILayout = React.FC<{
    children: JSX.Element | Array<JSX.Element>;
}>

const Layout: ILayout = ({ children }) => {
  
  return (
    <div>
      <SideBar />
      <div className="sm:ml-72">
        <Navbar />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
