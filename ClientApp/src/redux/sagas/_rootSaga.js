import { all } from 'redux-saga/effects';
import weatherForecastSaga from './weatherForecastSaga';
import loginSaga from './loginSaga';

export default function* rootSaga() {
    yield all([
        weatherForecastSaga(),
        loginSaga()
    ]);
}