import React from 'react'
import Image from 'next/image'
import styles from './index.module.scss'
import { IViewer } from '@/apis/user'

interface IProps {
	data: IViewer
	title: string
}

export default function Viewer({ data, title = '' }: IProps) {
	return (
		<div className={styles["Viewer"]}>
			<div className={styles["container"]}>
				<h1>{title}</h1>
				<div className={styles["detail"]}>
					{data?.avatarUrl && (
						<Image className={styles["image"]} alt="avatar" width={64} height={64} src={data?.avatarUrl} />
					)}
					<span className={styles["detail-list"]}>
						<span className={styles["detail-name"]}>{data.name}</span>
						<span className={styles["detail-bio"]}>{data.bio}</span>
					</span>
				</div>
			</div>
		</div>
	)
}
