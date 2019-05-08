import state from '../state';

const initialState = state.last_updated;

export default (state=initialState, action) => {
    switch(action.type) {
        case 'RENEW_LAST_UPDATED':
            return action.last_updated;
        default:
            return state;
    }
}