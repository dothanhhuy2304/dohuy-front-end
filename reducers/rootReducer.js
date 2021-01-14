import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import studentReducers from '../reducers/studentReducer';
export default combineReducers({
    errors:errorReducer,
    student:studentReducers
});