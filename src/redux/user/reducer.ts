import { actionTypes } from '../interface';
import { specialistsMockList } from '../../mock/specialists';
import { IVisitsState } from '../rootReducer';


export const initialState: IVisitsState = {
  loading: false,
  visits: [],
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_VISITS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case actionTypes.GET_VISITS_SUCCESS:
      return {
        ...state,
        loading: false,
        visits: action.visits
      };
    case actionTypes.GET_VISITS_FAIL:
      return {
        ...state,
        loading: false,
        specialists: specialistsMockList
      };


    default:
      return state;
  }
};
