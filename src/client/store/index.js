import axios from 'axios';
import Prismjs from 'prismjs';
import { action, observable } from 'mobx';
import sortBy from 'lodash.sortby';

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
    if (!!sessionStorage._blog_) {
      const res = JSON.parse(sessionStorage._blog_)
      this.viewer = res.data.viewer;
      this.home = res.data.repositoryOwner.repository.object.text;
      this.article = res.data.repositoryOwner.repository.issues.edges;
      Prismjs.highlightAll();
    } else {
      axios({
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
        sessionStorage.setItem('_blog_', JSON.stringify(res.data));
        this.viewer = res.data.data.viewer;
        this.home = res.data.data.repositoryOwner.repository.object.text;
        this.article = res.data.data.repositoryOwner.repository.issues.edges;
        Prismjs.highlightAll();
      });
    }
  }
}

const store = new Store();
window.store = store;
export default store;
