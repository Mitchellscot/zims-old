import { combineReducers } from 'redux';
import weather from './weatherForcastReducer';
import login from './loginReducer';

const rootReducer = combineReducers({
    weather,
    login
});

export default rootReducer;