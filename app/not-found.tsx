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
        className="w-4/5"
        alt="not_found"
        src={"/404_img.svg"}
      />
      <p className="mt-8">Could not find requested resource</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href="/">
          Return Home
        </Link>
      </button>
    </div>
  );
}
