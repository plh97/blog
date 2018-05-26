import React from "react";
import ReactMarkdown from "react-markdown";
import {Provider,observer,inject} from "mobx-react"
import styles from "./index.less";
import Loading from "../../feature/Loading/index.jsx";
import 'babel-polyfill';
import mapLimit from "async.maplimit";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const timer = ms  => setTimeout(()=>{}, ms);



@inject("store")
@observer
export default class Home extends React.Component {

	// componentDidMount(){
		// console.log('componentDidMount')
		// this.handleTextType({
		// 	text: [
		// 		{
		// 			content:'新零售',
		// 			typeTime:'130'
		// 		}, {
		// 			content:'儿童语言教育',
		// 			typeTime:'100'
		// 		},{
		// 			content:'物联网锁',
		// 			typeTime:'120'
		// 		}
		// 	],
		// 	pauseTime: '3000',
		// 	cycle:true
		// })
	// }


	// handleTextType = async(e) => {
	// 	const {
	// 			text,
	// 			pauseTime,
	// 			cycle
	// 	} = e;
	// 	mapLimit(text,1,async e => {
	// 		console.log(e)
	// 		await this.typeWord({
	// 			word: e.content,
	// 			typeTime: e.typeTime
	// 		})
	// 	});
	// }

	// typeWord = async e => {
	// 	const {
	// 		word,
	// 		typeTime
	// 	} = e;
	// 	const arrayWord =  word.split('');
	// 	for (let i = 0; i < arrayWord.length; i++) {
	// 		await this.typeLetter(i)
	// 	}
	// }

	// typeLetter = e => {
	// 	new Promise(resolve => {
	// 		timer(1000)
	// 		console.log('typeLetter',e)
	// 	})
	// }






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
							<span className="bio">关于我：{viewer.bio}</span>
						</span>
					</div>
				</div>
				<ReactMarkdown className="markdown-body" source={home} />
			</div>
		)
	}
}
