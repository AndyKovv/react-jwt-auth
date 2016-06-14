import {
   GET_POST_REQUEST,
   GET_POST_SUCCESS,
} from 'constants/PostDetail'
import { GET_REQUEST_FAIL } from 'constants/Default'

import fetch from 'isomorphic-fetch'


export function requestPostDetail(slug){
    return (dispatch) => {
        dispatch({
            type: GET_POST_REQUEST
        })

        return fetch(`/api/posts/${slug}/`)
            .then(response => response.json())
            .then(json => dispatch(receivePost(json)))
            .catch(error => {
                dispatch({type: GET_REQUEST_FAIL})
            })
        
    }
}


function receivePost(json){
    return{
        type: GET_POST_SUCCESS,
        payload: json
    }
}