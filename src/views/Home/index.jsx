// package
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from "react-markdown";
// local
import './index.scss';
import AxiosOrLocal from "../../utils/axiosOrLocal"
// code
export default class HomePage extends Component {
  constructor(){
    super()
    this.state={
      viewer: {
        avatarUrl:''
      },
      home:'',
      typeWord:'',
    }
  }
  componentDidMount() {
    new AxiosOrLocal({
      // url: 'http://localhost:3002/graphql',
      key: "_blog_",
      url: 'https://api.pipk.top/graphql',
      method: 'post',
      data: {
        query: `{
            viewer {
              name avatarUrl login bio url createdAt isHireable
            }
            repositoryOwner(login: "pengliheng") {
              repository(name: "pengliheng.github.io") {
                object(expression: "master:README.md") {
                  ... on Blob {
                    text
                  }
                }
              }
            }
          }`,
      },
    }).then((res) => {
      if (res.data.code == '401') {
        return;
      }
      this.setState({
        viewer: res.data.data.viewer,
        home: res.data.data.repositoryOwner.repository.object.text,
      })
    });
  }
  render() {
    const {home,viewer,typeWord} = this.state;
    return (
      <div className="HomePage">
        <div className="HomePage-background">
          <div className="HomePage-container">
            <h1 className="HomePage-title">博客主页</h1>
            <div className="HomePage-detail">
              <img alt="avatar" src={viewer.avatarUrl} />
              <span className="HomePage-detail__list">
                <span className="HomePage-detail__name">{viewer.name}</span>
                <span className="HomePage-detail__bio">__{typeWord}</span>
              </span>
            </div>
          </div>
        </div>
        <ReactMarkdown className="markdown-body HomePage-markdown__body" source={home} />
      </div>
    );
  }
};
