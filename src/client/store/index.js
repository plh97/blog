import axios from "axios";
import Prismjs from "prismjs";
import "prismjs/components/prism-jsx.js"
import "prismjs/themes/prism-okaidia.css"
import { action, useStrict, computed, observable } from "mobx";
import config from '../../../config/project.js'

// useStrict(true)
class Store {
	//我的用户信息
	@observable myBlog = "";
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
                    repositoryOwner(login:"pengliheng"){
                        repository(name:"pengliheng.github.io"){
                            description
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
            this.myBlog = res.data.data.repositoryOwner.repository.object.text
			Prism.highlightAll()
        })
    }
}
const store = window.store = new Store;

export default store
