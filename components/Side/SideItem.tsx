import React from "react";
import Link from "next/link";
import cs from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Active from "./Active";


interface IProps {
  className: string;
  children: React.ReactNode;
  path: string;
  icon: IconDefinition;
}

export default function SideItem({ path, className, children, icon }: IProps) {
  return (
    <Link href={path} className={cs(className)}>
      <Active path={path} />
      <FontAwesomeIcon className={cs("icon")} icon={icon} />
      <span>{children}</span>
    </Link>
  );
}
