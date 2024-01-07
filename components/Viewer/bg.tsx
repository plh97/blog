import classNames from "classnames";
import BG from "@/public/bg.svg";
// import { useMemo } from "react";
import Image from "next/image";

export default function CssBackground(props: {
  children: JSX.Element | JSX.Element[];
  className?: string;
}) {
  return (
    <div className={classNames("", props.className)}>
      <Image
        priority
        alt=""
        src={BG}
        quality={100}
        fill
        className="object-cover"
      />
      {props.children}
    </div>
  );
}
