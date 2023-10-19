"use client";
import Link from "next/link";
import cs from "classnames";
import { usePathname } from "next/navigation";
import React from "react";

interface IProps {
  className: string;
  children: React.ReactNode;
  path: string;
  icon?: string;
}

export default function SideItem({ path, className, children, icon }: IProps) {
  const pathname = usePathname();
  let active = pathname.includes(path);
  if (path==='/') {
    active = pathname === path;
  }
  return (
    <Link href={path} className={cs(className, { active })}>
      <i className={cs("icon", icon)} />
      {children}
    </Link>
  );
}
