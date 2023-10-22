import React from "react";
import "./index.scss";
import routes from "@/routes";

import SideItem from "./SideItem";

export default function Side() {
  return (
    <div className="Side__container">
      <div className="Side__nav">
        {routes
          .filter((route) => route.content)
          .map((route) => (
            <SideItem
              icon={route.icon}
              key={route.path}
              className="Side__nav-item hover:bg-gray-800 active:bg-gray-800 text-gray-100"
              path={route.path ?? ""}
            >
              {route.content}
            </SideItem>
          ))}
      </div>
    </div>
  );
}
