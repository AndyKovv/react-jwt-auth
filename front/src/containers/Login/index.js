import React from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UserActions from 'actions/UserActions'


export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    login(e){
        e.preventDefault()
        let username = ReactDOM.findDOMNode(this.refs.username).value,
            password = ReactDOM.findDOMNode(this.refs.password).value
    
        this.props.actions.authLoginUser(username, password)
    }

    render (){
        return(

<div className='login-section z-depth-2'>
    <div className='text-center'>
        <h2 className='h2-responsive'>Login Page</h2>
    </div>
        <hr/>
    <form  novalidate>
    <h1>{this.props.userName}</h1>
    <div className='md-form form-group'>
        <i className='fa fa-user prefix'></i>
            <input type='text'
                name='username'
                className='form-control validate'
                placeholder='Username'
                ref = 'username'                 
            />
    </div>
    <div className='md-form form-group'>
        <i className='fa fa-lock prefix'></i>
        <input type='password'
            name='password'
            className='form-control validate'
            placeholder='Password'
            ref = 'password'
        />
    </div>
    <div className='md-form form-group text-center'>
       <input type='submit'
       className='btn btn-primary default-width-6'
       value='Login'
       onClick={::this.login}
       disabled={this.props.isAuthenticated}
       />
    </div>
    <div className='alert alert-danger text-center'>
    
    </div>
    </form>
</div>
        )
    }
}


function mapStateToProps(state){
    return{
        isAuthenticated: state.user.isAuthenticated,
        statusText: state.user.statusText,
        userName: state.user.userName

    }
}


function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(UserActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
