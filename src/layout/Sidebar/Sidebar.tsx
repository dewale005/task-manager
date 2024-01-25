import React from "react";
import { ISidebarList, SideBarItem } from "./SidebarItem";
import { Divider } from "@nextui-org/react";
import {
  Activity,
  Atom,
  LayoutDashboard,
  LineChart,
  Settings,
  ShieldAlert,
  TargetIcon,
  UserCircle,
  Wrench,
} from "lucide-react";
import { User } from "@nextui-org/react";

type ISideBar = React.FC<{}>;

const data: Array<ISidebarList> = [
  {
    id: "1",
    name: "Boards",
    Icon: <LayoutDashboard size={20} />,
  },
  {
    id: "2",
    name: "Member",
    Icon: <UserCircle size={20} />,
  },
  {
    id: "3",
    name: "Road map",
    Icon: <Atom size={20} />,
  },
  {
    id: "4",
    name: "Report",
    Icon: <LineChart size={20} />,
    dropdown: [
      {
        id: "2",
        name: "work",
        Icon: <Settings size={20} />,
      },
    ],
  },
  {
    id: "5",
    name: "Issues",
    Icon: <Activity size={20} />,
  },
  {
    id: "6",
    name: "Workspace settings",
    Icon: <Settings size={20} />,
    dropdown: [
      {
        id: "2",
        name: "WorkSpace Settings",
        Icon: <Wrench size={20} />,
      },
      {
        id: "3",
        name: "Upgrade Workspace",
        Icon: <ShieldAlert size={20} />,
      },
    ],
  },
];

const SideBar: ISideBar = () => {
  return (
    <aside className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto border-r-2">
        <header>
          <nav>
            <div className="flex flex-row items-center mb-5 space-x-2 py-3">
              <TargetIcon fill="#2463eb" size={30} />
              <p className="font-bold text-xl">Task Manager</p>
            </div>
            <SideBarItem data={data} />
          </nav>
        </header>
        <div className="space-y-3">
          <Divider orientation="horizontal" />
          <User
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
