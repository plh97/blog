import React from "react";
import Image from "next/image";

import "./index.scss";

interface IProps {
  text: string;
}

export default function Loading({ text }: IProps) {
  return (
    <div className="Loading">
      <Image width="200" height="200" alt="loading" src={"/loading.svg"} />
      {text}
    </div>
  );
}
