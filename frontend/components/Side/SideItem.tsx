"use client";
import Link from "next/link";
import cs from "classnames";
import { usePathname } from "next/navigation";
import React, { useCallback } from "react";

interface IProps {
  className: string;
  children: React.ReactNode;
  path: string;
  icon?: string;
}

export default function SideItem({ path, className, children, icon }: IProps) {
  const pathname = usePathname();
  const isPathMatch = useCallback(() => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.includes(path);
  }, [pathname, path]);
  return (
    <Link
      href={path ?? ""}
      className={cs(className, { active: isPathMatch() })}
    >
      <i className={cs("icon", icon)} />
      {children}
    </Link>
  );
}
