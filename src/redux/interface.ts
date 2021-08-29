import {IAffiliates} from "../interfaces/interfaces";

export enum actionTypes {
    GET_AFFILIATES_REQUEST = 'GET_AFFILIATES_REQUEST',
    GET_AFFILIATES_SUCCESS = 'GET_AFFILIATES_SUCCESS',
    GET_AFFILIATES_FAIL = 'GET_AFFILIATES_FAIL',

    GET_SPECIALISTS_REQUEST = 'GET_SPECIALISTS_REQUEST',
    GET_SPECIALISTS_SUCCESS = 'GET_SPECIALISTS_SUCCESS',
    GET_SPECIALISTS_FAIL = 'GET_SPECIALISTS_FAIL',

    SET_SPECIALIST = 'SET_SPECIALIST'
}

export interface IGetAffiliatesRequest {
    type: actionTypes.GET_AFFILIATES_REQUEST,
}

export interface IGetAffiliatesFail {
    type: actionTypes.GET_AFFILIATES_FAIL,
}

export interface IGetAffiliatesSuccess {
    type: actionTypes.GET_AFFILIATES_SUCCESS,
    data: Array<IAffiliates>
}


export interface IGetSpecialistsRequest {
    type: actionTypes.GET_SPECIALISTS_REQUEST,
}

export interface IGetSpecialistsFail {
    type: actionTypes.GET_SPECIALISTS_FAIL,
}

export interface IGetSpecialistsSuccess {
    type: actionTypes.GET_SPECIALISTS_SUCCESS,
    data: Array<IAffiliates>
}


export interface ISetSpecialist {
    type: actionTypes.SET_SPECIALIST,
}


export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string,
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
}
