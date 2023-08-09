"use client";

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import DMItems from "./DMItems";
import { User } from "@prisma/client";
import Avatar from "../Avatar";

interface DMSideBarProps {
  currentUser: User;
}

const DMSideBar: React.FC<DMSideBarProps> = ({ currentUser }) => {
  const routes = useRoutes();

  const [isOpen, setIsOpen] = useState(false);
  // console.log({currentUser})

  return (
    <div className="bg-white p-5 shadow-md border border-gray-200 flex flex-col justify-between">
      <nav className="mt-4 flex flex-col">
        <ul role="list" className=" flex flex-col items-center space-y-3">
          {routes.map((item) => (
            <DMItems
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item.active}
              onClick={item.onClick}
            />
          ))}
        </ul>
      </nav>
      <nav className="mt-4 flex flex-col justify-between items-center">
        <div
          onClick={() => setIsOpen(true)}
          className=" cursor-pointer hover:opacity-75 transition "
        >
          <Avatar user={currentUser} />
        </div>
      </nav>
    </div>
  );
};

export default DMSideBar;
