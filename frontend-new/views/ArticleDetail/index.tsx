import _ from 'lodash'
import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import './index.scss'
import Viewer from '@/components/Viewer'

export default function ArticleDetail({ article, user }) {
	return (
		<div className="DetailPage">
			<Viewer title={article.title} data={user} />
			<div className="DetailPage__content">
				<ReactMarkdown className="markdown-body" source={article.body} />
			</div>
		</div>
	)
}
