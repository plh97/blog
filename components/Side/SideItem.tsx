import Link from "next/link";
import cs from "classnames";
import React from "react";
import Active from "./Active";

interface IProps {
  className: string;
  children: React.ReactNode;
  path: string;
  icon?: string;
}

export default function SideItem({ path, className, children, icon }: IProps) {
  return (
    <Link href={path} className={cs(className)}>
      <Active path={path} />
      <i className={cs("icon", icon)} />
      <span>{children}</span>
    </Link>
  );
}
