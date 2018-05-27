import 'babel-polyfill';
import React from "react";
import ReactMarkdown from "react-markdown";
import {Provider,observer,inject} from "mobx-react"
import { TypeWord } from "@pengliheng/utils";

import styles from "./index.less";
import Loading from "../../feature/Loading/index.jsx";

@inject("store")
@observer
export default class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		  typeword: '内容生成中...'
		};
	}
	componentDidUpdate(){
		if(store.home && this.state.typeword === '内容生成中...'){
			new TypeWord({
				text: store.viewer.bio.match(/[^\.]+\./g).map(content=>({
					content,
					typeTime:'60'
				})),
				pauseTime: 2000,
				cycle: true,
				typeFunc: (content)=> {
					this.setState({
						typeword: content
					})
				}
			})
		}
	}
	componentDidMount(){
		if(store.home && this.state.typeword === '内容生成中...'){
			new TypeWord({
				text: store.viewer.bio.match(/[^\.]+\./g).map(content=>({
					content,
					typeTime:'60'
				})),
				pauseTime: 2000,
				cycle: true,
				typeFunc: (content)=> {
					this.setState({
						typeword: content
					})
				}
			})
		}
	}

	render() {
		const { match } = this.props;
		const { viewer, home } = store;
		return home == '' ? <Loading/> : (
			<div className="home">

				<div className="title-contianer">
					<div className="title">
						<h1>博客主页</h1>
						<div className="detail">
							<img src={viewer.avatarUrl}/>
							<span className="detail-list">
								<span className="name">本人名字：{viewer.name}</span>
								<span className="bio">关于我：{this.state.typeword}</span>
							</span>
						</div>
					</div>
				</div>

				<ReactMarkdown className="markdown-body" source={home} />
			</div>
		)
	}
}
