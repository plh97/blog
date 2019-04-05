import React from 'react'
import './index.scss'

// import Header from '../Header';
import Side from '@/components/Side'
import Footer from '@/components/Footer'

export default ({ children }) => (
	<div className="Layout__container">
		{/* <Header /> */}
		<div className="Layout__content">
			<Side />
			{children}
		</div>
		<Footer />
	</div>
)
