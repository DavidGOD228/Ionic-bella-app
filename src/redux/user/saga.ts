import { put, takeLatest } from 'redux-saga/effects';
import * as action from '../interface';
import { visits } from '../../mock/visits';
// import axios from 'axios';

import {
  getVisitsFail,
  getVisitsSuccess,
} from './actions';

function* getVisits() {
  try {
    console.log('hello');

    // const res: ResponseGenerator = yield axios.get('');
    yield put(getVisitsSuccess(visits));
  } catch (error) {
    console.warn('error: ', error);
    yield put(getVisitsFail());
  }
}


export function* userSaga() {
  yield takeLatest(action.actionTypes.GET_VISITS_REQUEST, getVisits);

}
