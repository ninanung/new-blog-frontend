import state from '../state';

const initialState = state.posts;

export default (state=initialState, action) => {
    switch(action.type) {
        case 'RENEW_POSTS':
            return action.posts;
        default: 
            return state;
    }
}