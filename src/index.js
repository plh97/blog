import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// local
import App from '@/App'
import '@/common/index.scss'
import '@/common/markdown.css'
import '@/assets/font-icons/fonts.css'
import store from '@/redux-relate/store'

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
