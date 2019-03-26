import React, { Component, } from 'react'
import ReactMarkdown from 'react-markdown'
import {bindActionCreators,} from 'redux'
import { connect, } from 'react-redux'
import NProgress from 'nprogress'

// local
import './index.scss'
import Viewer from '@/components/Viewer'
import { fetchHome, } from '@/redux-relate/actions/fetchHome'
// import Loading from '../../components/Loading';
// code

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
	fetchHome: bindActionCreators(fetchHome, dispatch),
})

@connect(
	mapStateToProps,
	mapDispatchToProps
)
export default class HomePage extends Component {
	constructor() {
		super()
		this.state = {
			viewer: {
				avatarUrl: '',
			},
			home: '',
		}
	}
	componentDidMount() {
		NProgress.start()
		this.props.fetchHome()
		NProgress.done()
		console.log(NProgress)
		
		// NProgress.done();

			// this.setState({
			// 	viewer: res.data.data.viewer,
			// 	home: res.data.data.repositoryOwner.repository.object.text
			// })
	}
	render() {
		const { viewer, } = this.state
		const home = false
		return (
			<div className="HomePage">
				<Viewer title="主页" data={viewer} />
				{/* <Loading isShow={home==='' ? true : false}/> */}
				{home ? (
					<ReactMarkdown
						className="markdown-body HomePage-markdown__body"
						source={home}
					/>
				) : (
					''
				)}
			</div>
		)
	}
}
