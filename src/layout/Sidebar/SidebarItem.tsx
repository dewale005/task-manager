import { LayoutDashboard } from "lucide-react";
import React from "react";

export interface ISidebarList {
  id?: string;
  Icon?: JSX.Element;
  name: string;
  link?: string;
  dropdown?: Array<{
    id: string;
    name: string;
    link?: string;
    Icon?: JSX.Element;
  }>;
}

type ISidebarItem = React.FC<{
  data: Array<ISidebarList>;
}>;

type ISidebarListItem = React.FC<ISidebarList>;

const SideBarListItem: ISidebarListItem = ({ name, Icon, dropdown, link }) => {
  return (
    <div className="cursor-pointer">
      <div className="flex flex-row px-4 items-center py-3 group opacity-70 rounded-lg hover:bg-muted-foreground/25 backdrop-blur-md transition-all duration-700 ease-linear">
        {Icon}
        <p className="group-hover:font-semibold ml-2">{name}</p>
      </div>
      <div className="border-l-1 ml-7 px-2 hi">
        {dropdown?.map((value, index) => (
          <div key={index} className="flex flex-row px-2 items-center py-2 group opacity-70 rounded-lg hover:bg-muted-foreground/25 backdrop-blur-md transition-all duration-700 ease-linear">
            {value.Icon}
            <p className="group-hover:font-semibold ml-2 text-sm">{value.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SideBarItem: ISidebarItem = ({ data }) => {
  return (
    <div className="space-y-3">
      {data.map((value, index) => (
        <SideBarListItem key={value.id || index} {...value} />
      ))}
    </div>
  );
};
