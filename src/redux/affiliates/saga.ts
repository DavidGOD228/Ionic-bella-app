import {put, takeLatest} from 'redux-saga/effects'
import * as action from '../interface'
import axios from 'axios'

import {
    getAffiliatesSuccess,
    getAffiliatesFail
} from './actions'
import {ResponseGenerator} from "../interface";

function* getAffiliates() {
    try {
        const res: ResponseGenerator = yield axios.get('')
        yield put(getAffiliatesSuccess(res.data))
    } catch (error) {
        console.warn('error: ', error)
        yield put(getAffiliatesFail())
    }
}


export function* getAffiliatesSaga() {
    yield takeLatest(action.actionTypes.GET_AFFILIATES_REQUEST, getAffiliates)

}
