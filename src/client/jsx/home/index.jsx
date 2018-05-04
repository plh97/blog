import React from "react";
import { Row, Col, Menu, Icon, Layout } from 'antd';
const { Header } = Layout
const { Item } = Menu;
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
			<Layout>
				<Row type='flex'>
				{'this.props.store'}
				</Row>
			</Layout>
		);
	}
}
