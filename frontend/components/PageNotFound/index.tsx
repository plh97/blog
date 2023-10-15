import React from "react";
import NotFoundSvg from "@/assets/404_img.svg";
import Image from "next/image";
import "./index.scss";

const PageNotFound = () => (
  <div className="PageNotFound">
    <Image alt="not_found" src={NotFoundSvg} />
  </div>
);

export default PageNotFound;
