import React, { Component } from 'react'
import './index.scss'
import logo from '@/assets/logo/logo.svg'
import avatar from '@/assets/os icons/centos.png'

export default class Header extends Component {
	render() {
		return (
			<div className="Header-container">
				<div className="Header-container--inner">
					<span className="Header-icon--left" />
					<img
						className="Header-icon--middle"
						src={logo}
						alt="logo"
					/>
					<div className="Header-icon--right">
						<img src={avatar} alt="头像" />
						<i className="icon icon-angle-down" />
						<div className="Header-drop-container">
							<div className="Header-drop">
								<p>
									<i className="Header-icon icon-id-card" />
									prifile
								</p>
								<p>
									<i className="Header-icon icon-sign-in" />
									Sign Out
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
