import axios from "axios";
import Prismjs from "prismjs";
import "prismjs/components/prism-jsx.js"
import "prismjs/components/prism-bash.js"
import "prismjs/themes/prism-okaidia.css"
import { action, useStrict, computed, observable } from "mobx";

// useStrict(true)
class Store {
	//我的用户信息
	@observable viewer = "";
	@observable home = "";
	@observable article = "";
    //通用函数。。。
    @action allHold = (left, right) => {
        if (left.split('.').length == 1) {
            this[left] = right
        } else if (left.split('.').length == 2) {
            this[
                left.split('.')[0]
            ][
                left.split('.')[1]
            ] = right
        } else if (left.split('.').length == 3) {
            this[left.split('.')[0]][
                left.split('.')[1]
            ][
                left.split('.')[2]
            ] = right
        }
    }
    constructor() {
        axios({
            url: `/graphql`,
            method: 'post',
            data: {
                query: `{
                    viewer {
                      name
                      avatarUrl
                    }
                    repositoryOwner(login: "pengliheng") {
                      repository(name: "pengliheng.github.io") {
                        issues(first: 10) {
                          edges {
                            node {
                              author {
                                avatarUrl
                                login
                              }
                              updatedAt
                              createdAt
                              body
                              title
                              labels(first: 5) {
                                nodes {
                                  name
                                  color
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
                }`
            }
        }).then(res => {
            console.log(
                res.data.data.repositoryOwner.repository
            );
            this.viewer = res.data.data.viewer
            this.home = res.data.data.repositoryOwner.repository.object.text
            this.article = res.data.data.repositoryOwner.repository.issues.edges

			Prism.highlightAll()
        })
    }
}
const store = window.store = new Store;

export default store
