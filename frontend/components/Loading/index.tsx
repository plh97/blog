import React from "react";
import Image from "next/image";
import loadingSvg from "@/assets/loading.svg";

import "./index.scss";

interface IProps {
  text: string;
}

export default function Loading({ text }: IProps) {
  return (
    <div className="Loading">
      <Image alt="loading" src={loadingSvg} />
      {text}
    </div>
  );
}
