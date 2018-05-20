import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
} from "react-router-dom";
import axios from 'axios';
import {Provider,observer,inject} from "mobx-react"

@inject("store")
@observer
export default class Home extends React.Component {
	render() {
		return (
			<footer>
				footer
			</footer>
		);
	}
}
