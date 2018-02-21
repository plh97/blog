import React from "react";
import {Provider,observer,inject} from "mobx-react"
import ReactMarkdown from "react-markdown";
import styles from "./index.less";

@inject("store")
@observer
export default class Home extends React.Component {
	render() {
		const { 
			match,
			store
		} = this.props
		console.log(
			styles
		);
		return (
			<ReactMarkdown className="home" source={store.myBlog} />
		);
	}
}
