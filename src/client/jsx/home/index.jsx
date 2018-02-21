import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
} from "react-router-dom";
import axios from 'axios';
import {Provider,observer,inject} from "mobx-react"
import showdown from "showdown";
import ReactMarkdown from "react-markdown";
var converter = new showdown.Converter()


@inject("store")
@observer
export default class Home extends React.Component {

	render() {
		const { match } = this.props
		return (
			<div className="home">
				<ReactMarkdown source={this.props.store.myBlog} />
			</div>
		);
	}
}
