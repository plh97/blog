import React, { Component } from 'react'
import axios from 'axios'
import Loading from '@/components/Loading'
export default (WrappedComponent) => {
	return class extends Component {
		constructor(props) {
			super(props)
			this.state = {
				error: false,
				loading: false
			}
		}
		componentWillMount() {
			axios.interceptors.request.use(
				(config) => {
					this.setState({
						error: false,
						loading: true
					})
					return config
				},
				(error) => {
					this.setState({
						error: true,
						loading: false
					})
					return Promise.reject(error)
				}
			)
			axios.interceptors.response.use(
				(response) => {
					this.setState({
						error: false,
						loading: false
					})
					return response
				},
				(error) => {
					this.setState({
						error: true,
						loading: false
					})
					return Promise.reject(error)
				}
			)
		}
		render() {
			const { error, loading } = this.state
			if (error) {
				return <div> 请求出错了 \n {error} </div>
			} else if (loading) {
				return <Loading text="正在请求数据..." />
			} else {
				return <WrappedComponent {...this.props} />
			}
		}
	}
}
