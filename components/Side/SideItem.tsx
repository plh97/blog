import React from "react";
import Link from "next/link";
import cs from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Active from "./Active";


interface IProps {
  className: string;
  children: React.ReactNode;
  path: string;
  icon: IconProp;
}

export default function SideItem({ path, className, children, icon }: IProps) {
  return (
    <Link href={path} className={cs(className)}>
      <Active path={path} />
      {/* <i className={cs("icon", icon)} /> */}
      <FontAwesomeIcon className={cs("icon")} icon={icon} />
      <span>{children}</span>
    </Link>
  );
}
