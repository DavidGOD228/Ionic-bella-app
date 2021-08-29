import * as action from '../interface'

export function getSpecialistsRequest(): action.IGetSpecialistsRequest{
    return{type: action.actionTypes.GET_SPECIALISTS_REQUEST}
}
export function getSpecialistsSuccess(data: Array<any>): action.IGetSpecialistsSuccess{
    return{type: action.actionTypes.GET_SPECIALISTS_SUCCESS, data}
}
export function getSpecialistsFail(): action.IGetSpecialistsFail{
    return{type: action.actionTypes.GET_SPECIALISTS_FAIL}
}

