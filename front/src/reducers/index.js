import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import userReducer from './user'
import mainReducer from './main'
import detpostReducer from './post-detail'


export const rootReducer = combineReducers({
	user: userReducer,
    main: mainReducer,
    detpost: detpostReducer,
    routing: routerReducer
})