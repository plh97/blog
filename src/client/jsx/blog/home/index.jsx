import React from "react";
import {Provider,observer,inject} from "mobx-react"
import ReactMarkdown from "react-markdown";
import styles from "./index.less";
import Loading from "../../feature/Loading/index.jsx";


@inject("store")
@observer
export default class Home extends React.Component {
	render() {
		const { 
			match,
			store
		} = this.props;
		const {
			home,
			viewer
		} = store;
		return home == '' ? <Loading/> : (
			<div className="home">
				<div className="title">
					<h1>博客主页</h1>
					<div className="detail">
						<img src={viewer.avatarUrl}/>
						<span className="detail-list">
							<span className="name">本人名字：{viewer.name}</span>
						</span>
					</div>
				</div>
				<ReactMarkdown className="markdown-body" source={home} />
			</div>
		)
	}
}
