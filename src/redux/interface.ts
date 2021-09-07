import { IAffiliates, IService, ISpecialist } from '../interfaces/interfaces';


export enum actionTypes {
  GET_AFFILIATES_REQUEST = 'GET_AFFILIATES_REQUEST',
  GET_AFFILIATES_SUCCESS = 'GET_AFFILIATES_SUCCESS',
  GET_AFFILIATES_FAIL = 'GET_AFFILIATES_FAIL',

  GET_SPECIALISTS_REQUEST = 'GET_SPECIALISTS_REQUEST',
  GET_SPECIALISTS_SUCCESS = 'GET_SPECIALISTS_SUCCESS',
  GET_SPECIALISTS_FAIL = 'GET_SPECIALISTS_FAIL',

  SAVE_SPECIALISTS = 'SAVE_SPECIALISTS',
  DELETE_SPECIALISTS = 'DELETE_SPECIALISTS',


  GET_SERVICES_REQUEST = 'GET_SERVICES_REQUEST',
  GET_SERVICES_SUCCESS = 'GET_SERVICES_SUCCESS',
  GET_SERVICES_FAIL = 'GET_SERVICES_FAIL',

  SET_SPECIALIST = 'SET_SPECIALIST',

  SET_SERVICE = 'SET_SERVICE',

  SAVE_TIME = 'SAVE_TIME',

  DELETE_SERVICE = 'DELETE_SERVICE',
  DELETE_DATE = 'DELETE_DATE'
}

export interface IGetAffiliatesRequest {
  type: actionTypes.GET_AFFILIATES_REQUEST;
}

export interface IGetAffiliatesFail {
  type: actionTypes.GET_AFFILIATES_FAIL;
}

export interface IGetAffiliatesSuccess {
  type: actionTypes.GET_AFFILIATES_SUCCESS;
  data: Array<IAffiliates>;
}

export interface ISaveService{
  type: actionTypes.SET_SERVICE;
  services: Array<IService>;
}

export interface ISaveTime{
  type: actionTypes.SAVE_TIME;
  date: string;
}

export interface IGetServicesRequest {
  type: actionTypes.GET_SERVICES_REQUEST;
}

export interface IGetServicesFail {
  type: actionTypes.GET_SERVICES_FAIL;
}

export interface IGetServicesSuccess {
  type: actionTypes.GET_SERVICES_SUCCESS;
  data: Array<IAffiliates>;
}

export interface IDeleteService{
  type: actionTypes.DELETE_SERVICE;
}

export interface IDeleteDate{
  type: actionTypes.DELETE_DATE;
}

export interface ISaveSpecialists{
  type: actionTypes.SAVE_SPECIALISTS;
  specialists: ISpecialist;
}
export interface IDeleteSpecialists{
  type: actionTypes.DELETE_SPECIALISTS;
}
export interface IGetSpecialistsRequest {
  type: actionTypes.GET_SPECIALISTS_REQUEST;
}

export interface IGetSpecialistsFail {
  type: actionTypes.GET_SPECIALISTS_FAIL;
}

export interface IGetSpecialistsSuccess {
  type: actionTypes.GET_SPECIALISTS_SUCCESS;
  data: Array<IAffiliates>;
}


export interface ISetSpecialist {
  type: actionTypes.SET_SPECIALIST;
}


export interface ResponseGenerator{
  config?:any;
  data?:any;
  headers?:any;
  request?:any;
  status?:number;
  statusText?:string;
  arrayBuffer(): Promise<ArrayBuffer>;
  blob(): Promise<Blob>;
  formData(): Promise<FormData>;
  json(): Promise<any>;
  text(): Promise<string>;
}
