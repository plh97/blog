import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import {
  SetFilterMode,
  FetchNewsTitle,
  ToggleDialog,
  AddAgent,
} from '../../actions/index';
// import { catchDom } from '../../utils';
import axios from 'axios'

class HomePage extends Component {
  constructor(){
    super()
    this.state={
      viewer: '',
    }
  }
  componentDidMount() {

    axios({
      // url: 'http://localhost:3002/graphql',
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
                      updatedAt createdAt body title
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
      if (String(res.data.code) === '401') {
        console.log(res.data.msg)
        return;
      }
      sessionStorage.setItem('_blog_', JSON.stringify(res.data));
      this.setState({
        viewer: res.data.data.viewer,
        home: res.data.data.repositoryOwner.repository.object.text,
        article: res.data.data.repositoryOwner.repository.issues.edges,
      })
      // this.viewer = res.data.data.viewer;
      // this.home = res.data.data.repositoryOwner.repository.object.text;
      // this.article = res.data.data.repositoryOwner.repository.issues.edges;
      // Prismjs.highlightAll();
    });
  }
  // uploadFile = e => {
  //   console.log(e.target.files);
  //   Array.prototype.slice.call(e.target.files).filter(file=>{
  //     if (!file.type.match(/image/)) {
  //       console.log(`${file.name}不是图片,无法上传`);
  //       return false
  //     } else if (file.size > 1024*1024*2) {
  //       console.log(`${file.name}大于2MB,请换一张小点的图片`);
  //       return false
  //     } else {
  //       const form = new FormData();

  //       form.append('file',file)
  //       axios({
  //         // url: 'http://localhost:3001/upload',
  //         url: 'https://api.pipk.top/upload',
  //         method: 'post',
  //         data: form,
  //       })
  //       return true;
  //     }
  //   }).forEach(file=>{
  //     console.log(file);

  //   })
  // }
  render() {
    return (
      <div className="HomePage-container">
        主页
        <input multiple onChange={this.uploadFile} type="file" name="" id=""/>
      </div>
    );
  }
};





function mapDispatchToProps(
  dispatch,
  ownProps
) {
  return {
    setFilterMode: (mode) => {
      dispatch(
        SetFilterMode(mode.toLowerCase())
      )
    },
    fetchNewsTitle: () => {
      dispatch(
        FetchNewsTitle()
      )
    },
    toggleDialog: (arg) => {
      dispatch(ToggleDialog(arg))
    },
    addAgent: (arg) => {
      dispatch(AddAgent(arg))
    },
  }
}

const mapStateToProps = state => state;

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default VisibleTodoList;
