/*eslint-disable no-unused-vars*/
import fetch from 'isomorphic-fetch'
import jwtDecode from 'jwt-decode'
import { push } from 'react-router-redux'

import {
	LOGIN_REQUEST,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT_SUCCESS
} from '../constants/User'
import { checkHttpStatus, parseJSON } from 'utils'


export function authLoginUserRequest(){
	return {
			type:LOGIN_REQUEST
	}
}


export function authLoginUserSuccess(token){
	sessionStorage.setItem('token', token)
	return {
		type: LOGIN_SUCCESS,
		payload: {
			token
		}
	}
}


export function authLoginUserFailure(error){
	sessionStorage.removeItem('token')
	return {
		type:LOGIN_FAIL,
		payload: {
			status: error.response.status,
			statusText: error.response.statusText
		}
	}
}


export function authLogout(){
	sessionStorage.removeItem('token')
	return{
		type: LOGOUT_SUCCESS
	}
}

export function authLogountAndRedirect(){
	return (dispatch, state) => {
		dispatch(authLogout())
		dispatch(push('/'))
		return Promise.resolve()
	}
}

export function authLoginUser(username, password, redirect = '/'){
	return (dispatch) => {		
		dispatch(authLoginUserRequest())
		return fetch(`/api/login/`,{
			method: 'post',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username, password
			}) 
		})
			.then(checkHttpStatus)
			.then(parseJSON)
			.then(response => {
				try{
					jwtDecode(response.token)
					dispatch(authLoginUserSuccess(response.token))
					dispatch(push(redirect))
				}catch (e) {
					dispatch(authLoginUserFailure({
						response: {
							status: 403,
							statusText: 'Invalid token'
						}
					}))
				}
			})
			.catch(error => {
				dispatch(authLoginUserFailure(error))
			})
	
	}
}

export function logout(){
	return {
		type:LOGOUT_SUCCESS
	}
}

/*eslint-disable no-unused-vars*/

