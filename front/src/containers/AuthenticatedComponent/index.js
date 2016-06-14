import React  from 'react'
import { connect } from 'react-redux'
import { ROUTING } from '../../constants/Routing'

export default function requireAuthentication(Component){ //Принемаем на ход компонет для оборачивания

	class AuthenticatedComponent extends React.Component{
		componentWillMount(){
			this.checkAuth(this.props.user) //Инициализируем при загрузке копонента
		}

		componentWillReceiveProps(nextProps){
			this.checkAuth(nextProps.user) //При повторной инициализации компонента
		}

		checkAuth(user){
			if(!user.isAuthenticated){
				this.props.dispatch({
					type:ROUTING,
					payload:{
						method: 'replace',
						nextUrl: '/login'
					}
				})
			}
		}
		render(){
			return(
				<div>
				{this.props.user.isAuthenticated === true 
					? <Component {...this.props} /> //Пришедший компонет плюс все свойства
					: null
				}
				</div>
			)
		}
	}
	function mapStateToProps(state){
		return{
			user: state.user 
		}
	}

	return connect(mapStateToProps)(AuthenticatedComponent)
}