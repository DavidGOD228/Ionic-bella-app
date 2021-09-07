import * as action from '../interface';
import { ISpecialist } from '../../interfaces/interfaces';

export function getSpecialistsRequest(): action.IGetSpecialistsRequest {
  return { type: action.actionTypes.GET_SPECIALISTS_REQUEST };
}
export function getSpecialistsSuccess(data: Array<any>): action.IGetSpecialistsSuccess {
  return { type: action.actionTypes.GET_SPECIALISTS_SUCCESS, data };
}
export function getSpecialistsFail(): action.IGetSpecialistsFail {
  return { type: action.actionTypes.GET_SPECIALISTS_FAIL };
}


export function saveSpecialists(specialists: ISpecialist): action.ISaveSpecialists {
  return { type: action.actionTypes.SAVE_SPECIALISTS, specialists };
}

export function deleteSpecialist(): action.IDeleteSpecialists {
  return { type: action.actionTypes.DELETE_SPECIALISTS };
}
