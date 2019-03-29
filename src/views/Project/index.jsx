import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.scss'
import { SetFilterMode, FetchNewsTitle, ToggleDialog, AddAgent } from '@/redux-relate/actions/index'

class HomePage extends Component {
	render() {
		return <div className="ProjectPage-container">项目列表</div>
	}
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		setFilterMode: (mode) => {
			dispatch(SetFilterMode(mode.toLowerCase()))
		},
		fetchNewsTitle: () => {
			dispatch(FetchNewsTitle())
		},
		toggleDialog: (arg) => {
			dispatch(ToggleDialog(arg))
		},
		addAgent: (arg) => {
			dispatch(AddAgent(arg))
		}
	}
}

const mapStateToProps = (state) => state

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePage)

export default VisibleTodoList
