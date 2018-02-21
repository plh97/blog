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
			myBlog
		} = store;
		return (
			<div className="home">
				{myBlog == '' ? <Loading/> : <ReactMarkdown className="markdown-body" source={store.myBlog} />}
			</div>
		);
	}
}
