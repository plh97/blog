import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import { IViewer } from "@/apis/user";
import classNames from "classnames";
import CssBackground from "./bg";
// import { useMedia } from "@/hooks/mediaQuery";

interface IProps {
	data: IViewer;
	title: string;
}

export default function Viewer({ data, title = "" }: IProps) {
	// const { isSm } = useMedia();
	// console.log(isSm);
	return (
		<div className={styles["Viewer"]}>
			<CssBackground className={classNames(styles["container"], 'h-72 max-md:h-40')}>
				<h1 className="max-md:text-2xl md:text-4xl z-10">{title}</h1>
				<div className={classNames(styles["detail"], 'z-10 p-4 max-md:p-2 gap-x-4 max-md:gap-x-2')}>
					{data?.avatarUrl && (
						<Image
							className={classNames(styles["image"], 'max-md:!h-12 max-md:!w-12')}
							alt="avatar"
							width={64}
							height={64}
							src={data?.avatarUrl}
						/>
					)}
					<span className={styles["detail-list"]}>
						<span className='max-md:text-2xl md:text-4xl'>{data.name}</span>
						<span className="max-md:text-xs md:text-md">{data.bio}</span>
					</span>
				</div>
			</CssBackground>
		</div>
	);
}
