import * as action from '../interface';
import { IVisits } from '../../interfaces/interfaces';

export function getVisitsRequest(): action.IGetVisitsRequest {
  return { type: action.actionTypes.GET_VISITS_REQUEST };
}
export function getVisitsSuccess(visits: Array<IVisits>): action.IGetVisitsSuccess {
  return { type: action.actionTypes.GET_VISITS_SUCCESS, visits };
}
export function getVisitsFail(): action.IGetVisitsFail {
  return { type: action.actionTypes.GET_VISITS_FAIL };
}
