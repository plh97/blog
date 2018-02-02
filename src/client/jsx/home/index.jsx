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
	constructor(props){
		super(props);
		this.state = {
			myBlog:""
		}
	}

	componentWillMount(){
		axios({
			url: `/graphql`,
			method: 'post',
			data: {
				query: 
				`{
					repositoryOwner(login:"pengliheng"){
						repository(name:"pengliheng.github.io"){
							description
							object(expression: "master:README.md") {
								... on Blob {
									text
								}
							}
						}
					}
				}`
			}
		}).then(res => {
			let myBlog =res.data.data.repositoryOwner.repository.object.text 
			this.setState({
				myBlog
			})
			
		})
	}

	render() {
		const { match } = this.props
		return (
			<div>
				<ReactMarkdown source={this.state.myBlog} />
			</div>
		);
	}
}
