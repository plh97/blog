"use client";
import React from "react";
import cs from "classnames";
import { usePathname } from "next/navigation";
import styles from "./active.module.scss";

interface IProps {
  path: string;
}

export default function Active({ path }: IProps) {
  const pathname = usePathname();
  let active = pathname.includes(path);
  if (path === "/") {
    active = pathname === path;
  }
  if (active) {
    return <span className={cs(styles.bg, { [styles.active]: active })} />;
  }
  return <span className={styles.bg} />;
}
