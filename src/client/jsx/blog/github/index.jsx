// package
import React, { Component } from "react";
import calendar from "github-calendar";
import {Provider,observer,inject} from "mobx-react"

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
        // console.log(
        //     chunkArr([1,2,3,4,5,6,7,8,9],4)
        // );
        // function chunkArr(arr,len) {
        //     const chunkedArr=[]
        //     let i=0;
        //     while (i<arr.length) {
        //         console.log(i, i + len);
                
        //         chunkedArr.push(arr.slice(i, i + len));
        //         i+=len;
        //     }
        //     return chunkedArr
        // }
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
                                (new Date(viewer.createdAt)).toLocaleString()
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
                    <span className="stars">
                        ⭐{viewer.repositories && viewer.repositories.nodes
                            .map(rep => rep.stargazers.totalCount)
                            .reduce((a,b)=>a+b)}
                        收获的Star数
                    </span>
                    <span className="fork">
                        🍴{viewer.repositories && viewer.repositories.nodes
                            .map(rep => rep.forks.totalCount)
                            .reduce((a,b)=>a+b)}
                        收获的Fork数
                    </span>
                    <span className="repository">
                        🏬{viewer.repositories && viewer.repositories.nodes
                            .filter(repo => !repo.isFork).length}
                        原创Repository数
                    </span>
                </div>
            </div>
        );
    }
}
export default Github;
