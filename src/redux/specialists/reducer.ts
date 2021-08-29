import {actionTypes} from "../interface";
import {specialistsMockList} from "../../mock/specialists";


export const initialState = {
    loading: false,
    specialists: [],
};

export const specialistsInfoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.GET_SPECIALISTS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case actionTypes.GET_SPECIALISTS_SUCCESS:
            return {
                ...state,
                loading: false,
                specialists: specialistsMockList
            }
        case actionTypes.GET_SPECIALISTS_FAIL:
            return {
                ...state,
                loading: false,
                specialists: specialistsMockList
            }

        default:
            return state;
    }
};
