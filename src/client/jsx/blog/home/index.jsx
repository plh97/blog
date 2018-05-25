import React from "react";
import ReactMarkdown from "react-markdown";
import {Provider,observer,inject} from "mobx-react"
import styles from "./index.less";
import Loading from "../../feature/Loading/index.jsx";
import 'babel-polyfill';
import {
	mapLimit
} from "async";

const sleep = (ms) => new Promise(res => setTimeout(() => res, ms))



@inject("store")
@observer
export default class Home extends React.Component {

	componentDidMount(){
		console.log('componentDidMount')
		this.handleTextType({
			text: [
				{
					content:'新零售',
					typeTime:'130'
				}, {
					content:'儿童语言教育',
					typeTime:'100'
				},{
					content:'物联网锁',
					typeTime:'120'
				}
			],
			pauseTime: '3000',
			cycle:true
		})
	}




	handleTextType = async(e) => {
		const {
				text,
				pauseTime,
				cycle
		} = e;
		let cycleType = async args => {
				await mapLimit(text,1,async e => {
						await this.typeWord({
								word: e.content,
								typeTime: e.typeTime
						})
						await sleep(pauseTime)
				},async(err,data)=>{
						cycle && await cycleType();
				});
		}
		await cycleType();
	}

	typeWord = async e => {
			const {
					word,
					typeTime
			} = e;
			new Promise((resolve,reject)=>{
					mapLimit(word.split(''),1,async e => {
							await sleep(typeTime)
							await this.typeLetter({
									letter: e,
									typeTime
							})
							return e
					})
			})
	}

	typeLetter = async e => {
			const {
					letter,
					time
			} = e;
			console.log(letter)
	}






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
