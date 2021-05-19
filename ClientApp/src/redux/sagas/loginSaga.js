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
              });
              yield put({type: 'LOGIN_SUCCESS', payload: user});
    } catch (error) {
        console.log('HEY MITCH - ERROR LOGGING IN', error);
        if (error.response.status === 401){
            yield put({ type: 'LOGIN_FAILURE' });
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
        //TODO - setup this endpoint on the server
        yield axios.post('/users/logout', action.payload, config);
        yield put({type: 'LOGOUT'});
    } catch (error) {
        console.log('HEY MITCH - COULD NOT LOG OUT USER', error);
    }
}

//not set up
/* function* fetchUser() {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
      const response = yield axios.get('/api/user', config);
      yield put({ type: 'SET_USER', payload: response.data });
    } catch (error) {
      console.log('User get request failed', error);
    }
  } */

function* loginSaga(){
    yield takeLatest('LOGIN', loginUser);
    yield takeLatest('LOGOUT', logoutUser);
    //yield takeLatest('FETCH_USER', fetchUser);
}

export default loginSaga;