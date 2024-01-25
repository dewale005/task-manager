"use client";

import { Button } from "@/components/ui/button";
import { Badge, Chip, Input } from "@nextui-org/react";
import {
  AlignLeft,
  GanttChartSquare,
  Gem,
  MessageSquareDot,
  Moon,
  SearchIcon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

type INavbar = React.FC<{}>;

const Navbar: INavbar = () => {
  const { setTheme, theme } = useTheme();
  return (
    <nav className="flex flex-row justify-between items-center sticky p-4 m-auto">
      <Button
        variant="secondary"
        onClick={() => null}
        className="text-primary-background transition-opacity sm:hidden p-2 mr-5"
        size="icon"
      >
        <AlignLeft strokeWidth="1.5" className="h-[2.8rem] w-[2.8rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <div className="flex flex-row w-full transition-transform sm:w-3/5 items-center justify-between">
        <p className="font-medium">{"Dewale's Tasks Dashboard"}</p>
        <Input
          className="max-w-md hidden transition-opacity sm:block"
          startContent={<SearchIcon className="opacity-50" />}
          labelPlacement="outside"
          placeholder="Find the task wht you're looking for..."
        />
      </div>
      <div className="hidden transition-opacity sm:flex flex-row items-center space-x-2">
        <Button
          variant="link"
          onClick={() =>
            theme === "light" ? setTheme("dark") : setTheme("light")
          }
          className="text-primary-background rounded-full"
          size="icon"
        >
          <Sun
            strokeWidth="1.5"
            className="h-[1.8rem] w-[1.8rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Moon
            strokeWidth="1.5"
            className="absolute h-[1.8rem] w-[1.8rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button
          variant="link"
          onClick={() => null}
          className="text-primary-background rounded-full"
          size="icon"
        >
          <MessageSquareDot
            strokeWidth="1.5"
            className="h-[1.8rem] w-[1.8rem]"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button
          variant="link"
          onClick={() => null}
          className="text-primary-background rounded-full"
          size="icon"
        >
          <Badge content="5" size="lg" color="danger" shape="circle">
            <GanttChartSquare
              strokeWidth="1.5"
              className="h-[1.8rem] w-[1.8rem]"
            />
          </Badge>
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Chip
          color="primary"
          startContent={<Gem size={14} strokeWidth="1.3" />}
          radius="sm"
        >
          Premium
        </Chip>
      </div>
    </nav>
  );
};

export default Navbar;
