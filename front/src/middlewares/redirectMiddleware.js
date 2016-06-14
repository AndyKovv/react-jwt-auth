import { browserHistory } from 'react-router'

import { GET_REQUEST_FAIL } from 'constants/Default'

export const redirect = store => next => action => { //eslint-disable-line no-unused-vars

	if(action.type === GET_REQUEST_FAIL){
		browserHistory['replace']('/sww')
	}
	return next(action)
}