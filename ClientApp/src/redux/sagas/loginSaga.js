import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* loginUser(action){
    try {
        //yield put({type: 'CLEAR_LOGIN_ERROR' }) // or something like that
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };
          yield axios.post('/users/authenticate', action.payload, config).then(response => {
                  localStorage.setItem('user', JSON.stringify(response.data));
                  console.log('check local store for a user');
              })

          //yield put({type: 'FETCH_USER'});
    } catch (error) {
        console.log('HEY MITCH - ERROR LOGGING IN', error);
        if (error.response.status === 401){
            //yield put({ type: 'LOGIN_FAILED' });
        }else{
            //yield put({ type: 'LOGIN_FAILED_NO_CODE' });
        }

    }
}

function* logoutUser(action){
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        yield axios.post('/users/logout', action.payload, config);
        //yield put({type: 'UNSET_USER'});
    } catch (error) {
        console.log('HEY MITCH - COULD NOT LOG OUT USER', error);
    }
}

function* loginSaga(){
    yield takeLatest('LOGIN', loginUser);
    yield takeLatest('LOGOUT', logoutUser);
}

export default loginSaga;