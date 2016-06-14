import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UserActions from 'actions/UserActions'


export default class App extends Component {

  logout(e){
    e.preventDefault()
    this.props.actions.authLogountAndRedirect()
  }

	render() {		
		return (
	<div>		
	<nav className='navbar z-depth-2 info-color' role='navigation'>
    <div className='container '>
     <div className='navbar-header'>
    
      </div>
    <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
         <ul className='nav navbar-nav'>
          <li>
              <Link to='/'>Main Page</Link>
          </li>
         </ul>
          <ul className='nav navbar-nav'>
            <li>
				<Link to='/addpost/'>Add Post</Link>
            </li>
              <li>
            <Link to='/'>{ this.props.user_id }</Link>
            </li>
          </ul>
              <form className='navbar-form navbar-right'>
          <div className='form-group'>
          {
                    this.props.isAuthenticated
                     ?
                <a onClick={ ::this.logout }>
                  <i className='fa fa-sign-out nav-icon' aria-hidden='true'></i>
                </a>
                    :
                <Link to='/login/'>
                  <i className='fa fa-sign-in nav-icon' aria-hidden='true'></i>
                </Link>
          }      
          </div>
        </form>
     </div>
    </div>
  </nav>
<div className='container'>
				{ this.props.children } 
			</div>
</div>
		) 
	}
}


function mapStateToProps(state){
  return{
    isAuthenticated: state.user.isAuthenticated,
    userdata: state.user.userdata
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(UserActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)