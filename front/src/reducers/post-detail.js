import {
    GET_POST_REQUEST,
    GET_POST_SUCCESS,
} from 'constants/PostDetail'

const initialState = {
    fetching: false,
    post: []
}

export default function postDetail(state=initialState, action) {
    
    switch(action.type){

        case GET_POST_REQUEST:
            return { ...state, fetching:true }
        
        case GET_POST_SUCCESS:
            return { ...state, post: action.payload, fetching:false }
        
        default:
            return state;
    }
}