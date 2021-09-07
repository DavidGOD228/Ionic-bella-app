import { actionTypes } from '../interface';
import { specialistsMockList } from '../../mock/specialists';
import { ISpecialistsState } from '../rootReducer';


export const initialState: ISpecialistsState = {
  loading: false,
  specialists: [],
  savedSpecialist: null
};

export const specialistsInfoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_SPECIALISTS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case actionTypes.GET_SPECIALISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        specialists: specialistsMockList
      };
    case actionTypes.GET_SPECIALISTS_FAIL:
      return {
        ...state,
        loading: false,
        specialists: specialistsMockList
      };
    case actionTypes.SAVE_SPECIALISTS:
      return {
        ...state,
        savedSpecialist: action.specialists
      };

    case actionTypes.DELETE_SPECIALISTS:
      return {
        ...state,
        savedSpecialist: null
      };


    default:
      return state;
  }
};
