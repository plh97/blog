import axios from 'axios';
import Prismjs from 'prismjs';
import { action, observable } from 'mobx';
import sortBy from 'lodash.sortby';
// import 'prismjs/components/prism-jsx';
// import 'prismjs/components/prism-bash';
// import 'prismjs/themes/prism-okaidia.css';

// useStrict(true)
class Store {
  // 我的用户信息
  @observable viewer = {
    name: 'pengliheng',
    avatarUrl: 'http?',
  };
  @observable home = '';
  @observable article = '';
  // 通用函数。。。
  @action allHold = (left, right) => {
    if (left.split('.').length === 1) {
      this[left] = right;
    } else if (left.split('.').length === 2) {
      this[
        left.split('.')[0]
      ][
        left.split('.')[1]
      ] = right;
    } else if (left.split('.').length === 3) {
      this[left.split('.')[0]][
        left.split('.')[1]
      ][
        left.split('.')[2]
      ] = right;
    }
  }
  constructor() {
    axios({
      url: '/graphql',
      method: 'post',
      data: {
        query: `{
          viewer {
            name avatarUrl login bio url createdAt isHireable
          }
          repositoryOwner(login: "pengliheng") {
            repository(name: "pengliheng.github.io") {
              issues(first: 10) {
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
      Prismjs.highlightAll();
      this.viewer = res.data.data.viewer;
      this.home = res.data.data.repositoryOwner.repository.object.text;
      this.article = res.data.data.repositoryOwner.repository.issues.edges;
    });
  }
}

const store = new Store();
window.store = store;

export default store;
