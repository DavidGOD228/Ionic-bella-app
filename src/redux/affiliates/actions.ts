import * as action from '../interface'

export function getAffiliatesRequest(): action.IGetAffiliatesRequest{
    return{type: action.actionTypes.GET_AFFILIATES_REQUEST}
}
export function getAffiliatesSuccess(data: Array<any>): action.IGetAffiliatesSuccess{
    return{type: action.actionTypes.GET_AFFILIATES_SUCCESS, data}
}
export function getAffiliatesFail(): action.IGetAffiliatesFail{
    return{type: action.actionTypes.GET_AFFILIATES_FAIL}
}

