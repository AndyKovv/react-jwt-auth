import React from 'react'
import {Route, IndexRoute /*IndexRedirect*/} from 'react-router'

import App from './containers/App'
import Main from './components/Main'
import PostDetail from './components/PostDetail'
import AddPost from './containers/AddPost'
import Login from './containers/Login'
import SWW from './components/SWW'


export const routes = ( 
	<div>
		<Route path='/' component={ App }>
			<IndexRoute component={ Main } />
			<Route path='detail/:slug/' component={ PostDetail } />
			<Route path='addpost' component={ AddPost } />
			<Route path='login' component={ Login } />
			<Route path='sww' component={ SWW } />
		</Route>
	</div>
)
