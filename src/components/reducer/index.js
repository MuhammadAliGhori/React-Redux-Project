import {todoReducer} from './AddtodoReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todoReducer
})

export default rootReducer;