import { 
    GET_ALL_POSTS_REQUEST,
    GET_ALL_POSTS_SUCCESS,
} from 'constants/Main'
import { GET_REQUEST_FAIL } from 'constants/Default'

import fetch from 'isomorphic-fetch'


export function requestPosts(pageKey){
    const page = pageKey > 0 ? pageKey : 1
    return (dispatch) => {
        dispatch({
            type: GET_ALL_POSTS_REQUEST
        })
        return fetch(`/api/posts/?page=${page}`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)))
            .catch(error => {
                dispatch({type: GET_REQUEST_FAIL})
            })
            
    }
}

function receivePosts(json){
    return {
        type: GET_ALL_POSTS_SUCCESS,
        payload: json
    }
}
