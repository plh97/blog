import React from "react";
import Image from "next/image";
import styles from "./not-found.module.scss";
import Link from "next/link";

export default async function PageNotFound() {
  return (
    <div className={styles["page"]}>
      <Image
        width="522"
        height="237"
        className={styles["img"]}
        alt="not_found"
        src={"/404_img.svg"}
      />
      <p className="md-4">Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
