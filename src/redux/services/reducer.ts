import { actionTypes } from '../interface';
import { categoryService, services, } from '../../mock/services';
import { dateTime } from '../../mock/date';
import { IServiceState } from '../rootReducer';


export const initialState: IServiceState  = {
  loading: false,
  servicesCategory: [],
  services: [],
  dates: dateTime,
  savedService: [],
  savedTime: ''

};

export const serviceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_SERVICES_REQUEST:
      return {
        ...state,
        loading: true,
        servicesCategory: categoryService,
        services
      };

    case actionTypes.GET_SERVICES_SUCCESS:
      return {
        ...state,
        loading: false,
        servicesCategory: categoryService,
        services
      };
    case actionTypes.GET_SERVICES_FAIL:
      return {
        ...state,
        loading: false,
        servicesCategory: categoryService,
        services
      };

    case actionTypes.SET_SERVICE:
      return {
        ...state,
        savedService: action.services
      };


    case actionTypes.SAVE_TIME:
      return {
        ...state,
        savedTime: action.date
      };
    case actionTypes.DELETE_SERVICE:
      return {
        ...state,
        savedService: []
      };
    case actionTypes.DELETE_DATE:
      return {
        ...state,
        savedTime: ''
      };
    default:
      return state;
  }
};
