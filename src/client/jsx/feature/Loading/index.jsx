import React from "react";
import styles from "./index.less";
export default class Render extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: (new Date()).getSeconds()%3};
	}
	tick() {
		this.setState({
			date: (new Date()).getSeconds()%3
		});
	}
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	render() {
		const { date } = this.state;
		return (
			<h1 className="loading">
				Loading{'...'.substring(0,date+1)}
			</h1>
		)
	}
};