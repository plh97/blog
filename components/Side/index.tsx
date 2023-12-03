"use client";
import React, { useState } from "react";
import routes from "@/routes";

import SideItem from "./SideItem";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Side({ className }: { className?: string }) {
  return (
    <div className={classNames("flex flex-col text-sm w-full", className)}>
      <div className="flex flex-col pt-5">
        {routes
          .filter((route) => route.content)
          .map((route) => (
            <SideItem
              className="cursor-pointer relative flex flex-row items-center h-11 gap-x-5 px-5 mb-2.5 text-gray-100"
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

export default function SideContainer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={classNames(
          "w-64",
          "h-[calc(100vh-30px)]",
          "sticky top-0",
          "md:flex max-md:hidden",
          "bg-gray-900"
        )}
      >
        <Side />
      </div>
      <FontAwesomeIcon
        onClick={() => {
          setOpen(!open);
        }}
        className={classNames("fixed icon text-2xl z-30 p-3", {
          "text-white": open,
        })}
        icon={open ? faXmark : faBars}
      />
      <div
        className={classNames(
          "hidden w-48 h-[100vh] fixed top-0 z-20",
          {
            "!flex": open,
          }
        )}
      >
        <Side className="z-20 bg-gray-900 pt-6" />
        <div className="w-[100vw] h-[100vh] fixed top-0 bg-black/80" onClick={() => setOpen(false)} />
      </div>
    </>
  );
}
