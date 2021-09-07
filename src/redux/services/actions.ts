import * as action from '../interface';
import { IService } from '../../interfaces/interfaces';

export function getServicesRequest(): action.IGetServicesRequest {
  return { type: action.actionTypes.GET_SERVICES_REQUEST };
}
export function getServicesSuccess(data: Array<any>): action.IGetServicesSuccess {
  return { type: action.actionTypes.GET_SERVICES_SUCCESS, data };
}
export function getServicesFail(): action.IGetServicesFail {
  return { type: action.actionTypes.GET_SERVICES_FAIL };
}


export function saveService(services: Array<IService>): action.ISaveService {
  return { type: action.actionTypes.SET_SERVICE, services };
}


export function saveDate(date: string): action.ISaveTime {
  return { type: action.actionTypes.SAVE_TIME, date };
}
export function deleteService(): action.IDeleteService {
  return { type: action.actionTypes.DELETE_SERVICE };
}
export function deleteDate(): action.IDeleteDate {
  return { type: action.actionTypes.DELETE_DATE };
}
