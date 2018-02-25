import React, { Component } from "react";
import GithubCalendar from "github-calendar";



import CONFIG from "../../../../../config/project.js";
import "./index.less";

class Github extends Component {
    render() {
        return (
            <div className="toolbar-container">
                <h2 className="github-title">活跃度</h2>
                <GithubCalendar name={CONFIG.calendar.owner}/>
            </div>
        );
    }
}
export default Github;
