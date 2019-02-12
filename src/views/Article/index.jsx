// package
import React, { Component } from 'react';
import { Link } from "react-router-dom";
// local
import './index.scss';
import AxiosOrLocal from "../../utils/axiosOrLocal"
// code
export default class ArticlePage extends Component {
  constructor() {
    super()
    this.state = {
      viewer: {
        avatarUrl: ''
      },
      article: '',
      typeWord: '',
    }
  }
  componentDidMount() {
    new AxiosOrLocal({
      key: "_article_",
      url: 'https://api.pipk.top/graphql',
      method: 'post',
      data: {
        query: `{
            viewer {
              name avatarUrl login bio url createdAt isHireable
            }
            repositoryOwner(login: "pengliheng") {
              repository(name: "pengliheng.github.io") {
                issues(first: 100, states:OPEN) {
                  edges {
                    node {
                      updatedAt createdAt title id
                      author {
                        avatarUrl login
                      }
                      labels(first: 5) {
                        nodes {
                          name color
                        }
                      }
                    }
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
        article: res.data.data.repositoryOwner.repository.issues.edges,
      })
    });
  }
  render() {
    const { viewer, article,typeWord } = this.state;
    return (
      <div className="ArticlePage">
        <div className="ArticlePage__background">
          <div className="ArticlePage__container">
            <h1 className="ArticlePage__title">文章列表</h1>
            <div className="ArticlePage__detail">
              <img alt="avatar" src={viewer.avatarUrl} />
              <span className="ArticlePage__detail-list">
                <span className="ArticlePage__detail-name">{viewer.name}</span>
                <span className="ArticlePage__detail-bio">__{typeWord}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="ArticlePage__content">
          {Array.prototype.slice.call(article).reverse().map((e,i)=>(
            <Link to={{
              pathname: `/detail`,
              hash: `#${e.node.title}`,
            }} className="ArticlePage__item" key={i}>
              <img src={e.node.author.avatarUrl} alt="头像"/>
              <span className="ArticlePage__detail">
                <span className="ArticlePage__title">{e.node.title}</span>
                {e.node.labels.nodes.map((label, i) => (
                  <span className="ArticlePage__label" key={i} style={{ 'background': `#${label.color}` }}>
                    {label.name}
                  </span>
                ))}
                <br/>
                <span className="ArticlePage__name">{e.node.author.login}</span>
                {e.node.updatedAt}
              </span>
            </Link>
          ))}
        </div>
      </div>
    );
  }
};
