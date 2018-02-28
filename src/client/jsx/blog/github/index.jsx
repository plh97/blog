// package
import React, { Component } from "react";
import calendar from "github-calendar";
import {Provider,observer,inject} from "mobx-react"
import sortBy from "lodash.sortby";
import Chart from "chart.js";
// local
import "./index.less";

@inject("store")
@observer
class Github extends Component {
    constructor(props){
        super(props)
        this.calendar = calendar;
    }
    componentDidMount(){
        calendar(this.refs.container, "pengliheng");
    }
    render() {
        const {
            viewer
        } = this.props.store;
        let oldestRepostort = viewer.repositories ? sortBy(viewer.repositories.nodes
            .filter(repo => !repo.isFork)
            .map(repo => {
                return {
                    time: new Date(repo.updatedAt) - new Date(repo.createdAt),
                    name: repo.name,
                    updatedAt: repo.updatedAt,
                    createdAt: repo.createdAt
                }
            }),e=>-e.time)[0] : {
                name: '某个库',
                updatedAt: '今天',
                createdAt: '公元前'
            }
            console.log(
                this.refs
            );
            
        // viewer.repositories && new Chart(this.refs['myRepo-persent'].getContext('2d'))
        return (
            <div className="github">
                <h2 className="title">活跃度</h2>
                <div ref="container" className="calendar"></div>
                <h2 className="title">基本信息</h2>
                <div className="basic">
                    <div className="detail">
                        <img src={viewer.avatarUrl} alt=""/>
                        <div className="detail-container">
                            <p className="name">{viewer.name}</p>
                            <p className="join-time">加入时间：{
                                (new Date(viewer.createdAt)).toLocaleDateString("ja-JP",{ year: "numeric", month: "short", day: "numeric" })
                            }</p>
                            <p className="career-time">编程经历：{((new Date() - new Date(viewer.createdAt)) / 1000 / 3600 / 24 / 365).toFixed(1)}</p>
                            <p className="bio">{viewer.bio}</p>
                        </div>
                    </div>
                    <div className="repositories">
                        <span className="num">
                            {viewer.repositories && viewer.repositories.totalCount}
                        </span>
                        Repositories
                    </div>
                    <div className="followers">
                        <span className="num">
                            {viewer.followers && viewer.followers.totalCount}
                        </span>
                        Followers
                    </div>
                    <div className="following">
                        <span className="num">
                            {viewer.following && viewer.following.totalCount}
                        </span>
                        Following
                    </div>
                </div>
                <h2 className="title">仓库信息</h2>
                <div className="repository">
                    <span className="repository-star">
                        <span className="show">
                            ⭐{viewer.repositories && viewer.repositories.nodes
                                .map(rep => rep.stargazers.totalCount)
                                .reduce((a,b)=>a+b)}
                        </span>
                        <span>收获的Star数</span>
                    </span>
                    <span className="repository-fork">
                        <span className="show">
                            🍴&nbsp;{viewer.repositories && viewer.repositories.nodes.map(rep => rep.forks.totalCount).reduce((a,b)=>a+b)}
                        </span>
                        <span>收获的Fork数</span>
                    </span>
                    <span className="repository-my">
                        <span className="show">
                            🏬{viewer.repositories && viewer.repositories.nodes.filter(repo => !repo.isFork).length}
                        </span>
                        <span>原创Repository数</span>
                    </span>
                    <span className="repository-popular">
                        <span className="show">
                            🎉{viewer.repositories && viewer.repositories.nodes[0].name}
                        </span>
                        <span>最受欢迎的库</span>
                    </span>
                    <span className="repository-oldest">
                        <span className="show">{oldestRepostort.name}</span>
                        🕘{(new Date(oldestRepostort.createdAt)).toLocaleDateString("ja-JP",{ year: "numeric", month: "short", day: "numeric" })} ~ {(new Date(oldestRepostort.updatedAt)).toLocaleDateString("ja-JP",{ year: "numeric", month: "short", day: "numeric" })}
                        <span>贡献最久的库</span>
                    </span>
                    <span className="repository-oldest">
                        <canvas ref="myRepo-persent" data={{
                            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                            datasets: [{
                                label: '# of Votes',
                                data: [12, 19, 3, 5, 2, 3],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        }} options={{
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero:true
                                    }
                                }]
                            }
                        }}/>
                        <canvas ref="star-persent"/>
                        <canvas ref="language-persent"/>
                    </span>
                </div>
            </div>
        );
    }
}
export default Github;
