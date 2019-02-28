// package
import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
// local
import './index.scss';
import AxiosOrLocal from "../../utils/axiosOrLocal"
import Viewer from '../../components/Viewer';
import Loading from '../../components/Loading';
// code
export default class HomePage extends Component {
  constructor(){
    super()
    this.state={
      viewer: {
        avatarUrl:''
      },
      home:'',
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
      if (res.data.code === '401') {
        return;
      }
      this.setState({
        viewer: res.data.data.viewer,
        home: res.data.data.repositoryOwner.repository.object.text,
      })
    });
  }
  render() {
    const {viewer} = this.state;
    const home= false
    return (
      <div className="HomePage">
        <Viewer title="主页" data={viewer}/>
        <Loading isShow={home==='' ? true : false}/>
        {home?<ReactMarkdown className="markdown-body HomePage-markdown__body" source={home} />:''}
      </div>
    );
  }
};
