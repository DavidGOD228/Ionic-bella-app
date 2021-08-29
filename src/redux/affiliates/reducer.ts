import {actionTypes} from "../interface";
import {affiliatesMockList} from "../../mock/affiliates";


export const initialState = {
    loading: false,
    affiliates: [],
};

export const affiliatesInfoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.GET_AFFILIATES_REQUEST:
            return {
                ...state,
                loading: true
            }

        case actionTypes.GET_AFFILIATES_SUCCESS:
            return {
                ...state,
                loading: false,
                affiliates: affiliatesMockList
            }
        case actionTypes.GET_AFFILIATES_FAIL:
            return {
                ...state,
                loading: false,
                affiliates: affiliatesMockList
            }

        default:
            return state;
    }
};
