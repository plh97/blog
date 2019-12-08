import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

export const { Provider } = React.createContext({})

export default ({ children }) => (
	<BrowserRouter>
		<Route>{(routeProps) => <Provider value={routeProps}>{children}</Provider>}</Route>
	</BrowserRouter>
)
