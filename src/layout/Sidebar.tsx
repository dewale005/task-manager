import { Listbox, ListboxItem } from "@nextui-org/react";
import React from "react";

type ISideBar = React.FC<{}>;

interface INavbarList {
    key: string,
    Icon?: JSX.Element,
    name: string
    link?: string
    dropdown?: Array<{
        key: string,
        name: string,
        link?: string
        Icon?: JSX.Element,
    }>
}


const SideBar: ISideBar = () => {
  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div className="h-full px-3 py-4 overflow-y-auto border-r-2">
        <header>
          <nav>
            <p className="mb-2">side bar</p>
            <Listbox>
              <ListboxItem key="board" className="mb-1 bg-green-400 text-bold">Boards</ListboxItem>
              <ListboxItem key="ak">Companies</ListboxItem>
              <ListboxItem key="b">Reports</ListboxItem>
            </Listbox>
          </nav>
        </header>
      </div>
    </aside>
  );
};

export default SideBar;
