"use client";
import React from "react";
import cs from "classnames";
import { usePathname } from "next/navigation";
import styles from "./index.module.scss";

interface IProps {
  path: string;
}

export default function Active({ path }: IProps) {
  const pathname = usePathname();
  let active = pathname.includes(path);
  if (path === "/") {
    active = pathname === path;
  }
  return (
    <span
      className={cs(
        styles.bg,
        "border-blue-100",
        "border-l-0",
        "border-solid",
        {
          ["bg-gray-800 border-l-4"]: active,
        }
      )}
    />
  );
}
