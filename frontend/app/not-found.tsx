import React from "react";
import NotFoundSvg from "@/assets/404_img.svg";
import Image from "next/image";
import styles from "./not-found.module.scss";
import Link from "next/link";

const PageNotFound = () => (
  <div className={styles["page"]}>
    <Image className={styles["img"]} alt="not_found" src={NotFoundSvg} />
    <p>Could not find requested resource</p>
    <Link href="/">Return Home</Link>
  </div>
);

export default PageNotFound;
