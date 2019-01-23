import {createStore} from 'redux';
import {allReducer} from './reducers/allReducer'

export const Store = createStore(allReducer);
