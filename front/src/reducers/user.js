import jwtDecode from 'jwt-decode'
import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGOUT_SUCCESS,
	LOGIN_FAIL

} from '../constants/User'


const initialState = {
	token: null,
	userName: null,
	isAuthenticated: false,
	isAuthenticating: false,
	statusText: null  

}


export default function user(state=initialState, action){
	switch (action.type) {

		case LOGIN_REQUEST:
			return{ ...state, isAuthenticating:true, statusText: null}

		case LOGIN_SUCCESS:
			return {
				...state,
				isAuthenticating: false,
				isAuthenticated: true,
				token: action.payload.token,
				userdata: jwtDecode(action.payload.token),
				statusText: 'You have been successfully logged in'
			}

		case LOGIN_FAIL:
			return {
				...state,
				isAuthenticating: false,
				isAuthenticated: false,
				token: null,
				userName: null,
				statusText: `Authentication error:
				${action.payload.status} ${action.payload.statusText}`
			}

		case LOGOUT_SUCCESS:
			return{
				...state,
				isAuthenticated: false,
				isAuthenticating: false,
				token: null,
				userName: null,
				userdata: null,
				statusText: 'You have been successfully logged out'
			}

		default:
			return state;
	}
}