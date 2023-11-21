import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import { IViewer } from "@/apis/user";
import classNames from "classnames";
import CssBackground from "./bg";

interface IProps {
  data: IViewer;
  title: string;
}

export default function Viewer({ data, title = "" }: IProps) {
	return (
		<div className={styles["Viewer"]}>
			<CssBackground className={styles["container"]}>
				<h1 className="max-md:text-2xl md:text-4xl z-10">{title}</h1>
				<div className={classNames(styles["detail"], 'z-10')}>
					{data?.avatarUrl && (
						<Image
							className={styles["image"]}
							alt="avatar"
							width={64}
							height={64}
							src={data?.avatarUrl}
						/>
					)}
					<span className={styles["detail-list"]}>
						<span className='max-md:text-3xl md:text-4xl'>{data.name}</span>
						<span className="max-md:text-md md:text-md">{data.bio}</span>
					</span>
				</div>
			</CssBackground>
		</div>
	);
}
