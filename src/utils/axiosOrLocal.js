import axios from 'axios'

export default class AxiosOrLocal {
	constructor({ data, url, method, key, type = 'localStorage' }) {
		this.key = key
		this.type = type
		this.url = url
		this.method = method
		this.data = data
		return this.get()
	}
	set({ data }) {
		if (this.type === 'localStorage') {
			return localStorage.setItem(this.key, data)
		} else {
			return sessionStorage.setItem(this.key, data)
		}
	}
	isExist() {
		if (this.type === 'localStorage') {
			return localStorage.getItem(this.key)
		} else {
			return sessionStorage.getItem(this.key)
		}
	}
	async get() {
		const res = this.isExist()
		if (res) {
			return new Promise((resolve, rej) => {
				setTimeout(() => {
					resolve(JSON.parse(res))
				}, 0)
			})
		} else {
			// 为了避免副作用,应该让他们都是异步的
			return await axios({
				url: this.url,
				method: this.method,
				data: this.data
			}).then(
				(res) => {
					this.set({
						data: JSON.stringify(res.data)
					})
					return res.data
				},
				(err) => err
			)
		}
	}
}
