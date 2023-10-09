'use client';
import Link from "next/link";
import cs from "classnames";
import { usePathname } from "next/navigation";
import React from "react";

interface IProps {
  className: string;
  children: React.ReactNode;
  path: string;
}

export default function SideItem({path, className, children}: IProps) {
  const pathname = usePathname();
  return (
    <Link
      href={path ?? ""}
      className={cs(className, { active: pathname === path })}
    >
      <i className="icon icon-dashboard" />
      {children}
    </Link>
  );
}
