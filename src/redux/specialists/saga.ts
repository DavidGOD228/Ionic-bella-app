import { put, takeLatest } from 'redux-saga/effects';
import * as action from '../interface';
import axios from 'axios';

import {
  getSpecialistsSuccess,
  getSpecialistsFail
} from './actions';
import { ResponseGenerator } from '../interface';

function* getSpecialists() {
  try {
    const res: ResponseGenerator = yield axios.get('');
    yield put(getSpecialistsSuccess(res.data));
  } catch (error) {
    console.warn('error: ', error);
    yield put(getSpecialistsFail());
  }
}


export function* getSpecialistsSaga() {
  yield takeLatest(action.actionTypes.GET_SPECIALISTS_REQUEST, getSpecialists);

}
