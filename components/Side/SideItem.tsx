import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <Link href={path} className={className}>
      <FontAwesomeIcon className="icon text-lg w-5 text-white z-10" icon={icon} />
      <span className="z-10">{children}</span>
      <Active path={path} />
    </Link>
  );
}
