import state from '../state';

const initialState = state.manager;

export default (state=initialState, action) => {
    switch(action.type) {
        case 'MANAGER_LOGIN':
            return true;
        case 'MANAGER_LOGOUT':
            return false;
        default:
            return state;
    }
}