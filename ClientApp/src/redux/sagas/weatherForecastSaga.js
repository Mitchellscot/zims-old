import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchWeatherForecast() {
    try {
        const weatherForecast = yield axios.get('weatherforecast');
        yield put({ type: 'SET_WEATHER', payload: weatherForecast.data })
    } catch (error) {
        console.log(`HEY MITCH - COULDN"T GET THE WEATHER ${error}`);
    }
}

function* weatherForecastSaga() {
    yield takeLatest('FETCH_WEATHER', fetchWeatherForecast);
}

export default weatherForecastSaga;