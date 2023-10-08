import React from 'react'
import Image from 'next/image'
import './index.scss'
import { IViewer } from '@/apis/user'

interface IProps {
	data: IViewer
	title: string
}

export default function Viewer({ data, title = '' }: IProps) {
	return (
		<div className="Viewer">
			<div className="Viewer__container">
				<h1 className="Viewer__title">{title}</h1>
				<div className="Viewer__detail">
					{data?.avatarUrl && (
						<Image className="Viewer__image" alt="avatar" width={64} height={64} src={data?.avatarUrl} />
					)}
					<span className="Viewer__detail-list">
						<span className="Viewer__detail-name">{data.name}</span>
						<span className="Viewer__detail-bio">{data.bio}</span>
					</span>
				</div>
			</div>
		</div>
	)
}
