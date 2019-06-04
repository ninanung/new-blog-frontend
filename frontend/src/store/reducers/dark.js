import state from '../state';

const initialState = state.dark;

export default (state=initialState, action) => {
    switch(action.type) {
        case 'CHANGE_DARK_MODE':
            return action.dark;
        default: 
            return state;
    }
}