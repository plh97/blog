import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'github-markdown-css'

// local
import App from '@/App'
import '@/common/index.scss'
import '@/assets/font-icons/fonts.scss'
import store from '@/redux-relate/store'

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
