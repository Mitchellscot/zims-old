import { combineReducers } from 'redux';
import weather from './weatherForcastReducer';

const rootReducer = combineReducers({
    weather
});

export default rootReducer;