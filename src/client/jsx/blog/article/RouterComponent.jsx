// package
import React from "react";
import { observer, inject } from "mobx-react"
import ReactMarkdown from "react-markdown";

// local
import Loading from "../../feature/Loading/index.jsx";

@inject("store")
@observer
export default class RouterComponent extends React.Component {
    render() {
        const { 
            match,
            store
        } = this.props;
        const {
            article,
            viewer
        } = store;
        return article && <div className="content markdown-body">
            <div className="title">
                <h1> { article[this.props.index].node.title}
                    {article[this.props.index].node.labels.nodes.map((label,i)=>(
                        <span key={i} className="label" style={{
                            background: "#"+article[this.props.index].node.labels.nodes[i].color
                        }}>{article[this.props.index].node.labels.nodes[i].name}</span>
                    ))}
                </h1>
                <div className="detail">
                    <img src={viewer.avatarUrl}/>
                    <span className="detail-list">
                        <span className="name">本文作者：{viewer.name}</span>
                        <span className="create-time">创建时间：{(new Date(article[this.props.index].node.createdAt)).toLocaleString()}</span>
                        <span className="update-time">更新时间：{(new Date(article[this.props.index].node.updatedAt)).toLocaleString()}</span>
                    </span>
                </div>
            </div>
            <ReactMarkdown className="markdown-body" source={article[this.props.index].node.body} />
        </div>
    }
}
