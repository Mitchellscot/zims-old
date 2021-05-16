import { all } from 'redux-saga/effects';
import weatherForecastSaga from './weatherForecastSaga';

export default function* rootSaga() {
    yield all([
        weatherForecastSaga()
    ]);
}