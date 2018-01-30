import Prismjs from "prismjs";
import axios from "axios";
import "prismjs/components/prism-jsx.js"
import "prismjs/themes/prism-okaidia.css"
import { action, useStrict, computed, observable } from "mobx";
import config from '../../../config/project.js'

// useStrict(true)
class TodoStore {
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
				query: 
				`{
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
			this.myBlog = res.data
		}).catch(err => {
			console.error('graphql error:', err);
		});
	}
}
window.store = new TodoStore
const store = window.store
export default store
