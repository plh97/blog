import React from "react";
import routes from "@/routes";

import SideItem from "./SideItem";

export default function Side() {
  return (
    <div className="flex flex-col text-sm w-full">
      <div className="flex flex-col pt-5">
        {routes
          .filter((route) => route.content)
          .map((route) => (
            <SideItem
              className="cursor-pointer relative flex flex-row items-center h-11 gap-x-5 px-5 mb-2.5 hover:bg-gray-800 active:bg-gray-800 text-gray-100"
              key={route.path}
              path={route.path}
              icon={route.icon}
            >
              {route.content}
            </SideItem>
          ))}
      </div>
    </div>
  );
}
