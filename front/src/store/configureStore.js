import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux';
import { rootReducer } from '../reducers'

import { redirect } from '../middlewares/redirectMiddleware'


export default function configureStore(initialState, history){
	const reduxRouterMiddleware = routerMiddleware(history)
	const store = compose(
		applyMiddleware(thunkMiddleware),
		applyMiddleware(createLogger()),
		applyMiddleware(redirect),
		applyMiddleware(reduxRouterMiddleware)
		)(createStore)(rootReducer)

	if(module.hot){
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').rootReducer
			store.replaceReducer(nextRootReducer) 
		});
	}
	return store;
}