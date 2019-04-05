import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

// local
import reducers from '@/redux-relate/reducers'
import rootSaga from '@/redux-relate/sagas'

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger()
export default createStore(
	reducers,
	composeWithDevTools(applyMiddleware(sagaMiddleware, thunk, logger))
)

sagaMiddleware.run(rootSaga)
