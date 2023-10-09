import _ from 'lodash'
import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import './index.scss'
import Viewer from '@/components/Viewer'
import { IViewer } from '@/apis/user'

interface IProps {
	article: {
		title: string;
		body: string;
	};
	user: IViewer;
}

export default function ArticleDetail({ article, user }: IProps) {
	return (
		<div className="DetailPage">
			<Viewer title={article.title} data={user} />
			<div className="DetailPage__content">
				<ReactMarkdown className="markdown-body">
					{article.body}
				</ReactMarkdown>
			</div>
		</div>
	)
}
