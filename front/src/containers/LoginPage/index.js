import React, { Component, PropTypes } from 'react'
import { bindActionCreators }  from 'redux'
import { connect } from 'react-redux'
import * as UserActions from '../../actions/UserActions'

export default class LoginPage extends Component{


	handleSubmit(e){
		e.preventDefault();
		this.props.actions.login({name: e.target.elements[0].value})
	}
	render(){
		let { fetching, name } = this.props.user
		
		return(
			<div className='row'>
				<div className='col-md-12'>Пожалуйста ведите логин:</div>
				<form className='col-md-4' onSubmit={::this.handleSubmit}>
					<input type='text' placeholder='/login' />
					<button type='submit'>Войти</button>
				</form>
				{
					fetching ? 
					<p>Вход.....</p>
					:
					<p>Привет {name} </p>
				}

			</div>
				
		)
	}
}

function mapStateToProps(state){
	return {
		user: state.user
	}
}

function mapDispatchToProps(dispatch){
	return{
		actions: bindActionCreators(UserActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

LoginPage.contextTypes = { 
  router: PropTypes.object.isRequired
}