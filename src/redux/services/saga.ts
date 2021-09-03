import {put, takeLatest} from 'redux-saga/effects'
import * as action from '../interface'
import axios from 'axios'

import {
    getServicesFail,
    getServicesSuccess
} from './actions'
import {ResponseGenerator} from "../interface";

function* getService() {
    try {
        console.log('1')
        // const res: ResponseGenerator = yield axios.get('')
        yield put(getServicesFail())
    } catch (error) {
        console.warn('error: ', error)
        yield put(getServicesFail())
    }
}


export function* getServiceSaga() {
    yield takeLatest(action.actionTypes.GET_SERVICES_REQUEST, getService)

}
