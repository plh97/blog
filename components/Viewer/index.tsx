import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import { IViewer } from "@/apis/user";
import classNames from "classnames";

interface IProps {
  data: IViewer;
  title: string;
}

export default function Viewer({ data, title = "" }: IProps) {
  return (
    <div className={styles["Viewer"]}>
      <div className={styles["container"]}>
        <h1 className="mt-4 text-2xl font-extrabold text-gray-900">{title}</h1>
        <div className={classNames(styles["detail"], "z-10")}>
          {data?.avatarUrl && (
            <Image
              className={styles["image"]}
              alt="avatar"
              width={64}
              height={64}
              src={data?.avatarUrl}
            />
          )}
          <div className={styles["detail-list"]}>
            <h2 className={"text-4xl"}>
              {data.name}
            </h2>
            <p>{data.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
