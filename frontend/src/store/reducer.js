import { combineReducers } from 'redux';

import manager from './reducers/manager';
import posts from './reducers/posts';
import last_updated from './reducers/last_updated';
import dark from './reducers/dark';

const reducer = combineReducers({
    manager,
    posts,
    last_updated,
    dark,
})

export default reducer;