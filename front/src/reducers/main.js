import { 
    GET_ALL_POSTS_REQUEST,
    GET_ALL_POSTS_SUCCESS,
    } from 'constants/Main'

const initialState = {
    fetching: false,
    posts:{
        results: []
    }
    
}

export default function main(state=initialState, action){
    
    switch(action.type){

        case GET_ALL_POSTS_REQUEST:
            return { ...state, fetching: true }

        case GET_ALL_POSTS_SUCCESS:
            return { ...state, posts: action.payload, fetching:false }
        
        default:
            return state; 
    }
}