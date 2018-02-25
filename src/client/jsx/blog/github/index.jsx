// package
import React, { Component } from "react";
import calendar from "github-calendar";

// local
import "./index.less";

class Github extends Component {
    constructor(props){
        super(props)
        this.calendar = calendar;
    }
    componentDidMount(){
        calendar(this.refs.container, "pengliheng");
    }
    render() {
        return (
            <div className="github">
                <h2 className="github-title">活跃度</h2>
                <div ref="container"></div>
            </div>
        );
    }
}
export default Github;
