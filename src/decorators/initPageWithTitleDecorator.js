import React from 'react'

const initPageWithTitleDecorator = (title) => (WrappedComponent) => {
	return class extends WrappedComponent {
		componentDidMount() {
			document.title = title
		}
		render() {
			return <WrappedComponent />
		}
	}
}

export default initPageWithTitleDecorator
