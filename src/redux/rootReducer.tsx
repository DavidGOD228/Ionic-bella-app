import { combineReducers } from 'redux';
import { affiliatesInfoReducer } from './affiliates/reducer';
import { IAffiliates, ISpecialist, IService, IServiceCategory, IDates, IVisits } from '../interfaces/interfaces';
import { specialistsInfoReducer } from './specialists/reducer';
import { serviceReducer } from './services/reducer';
import { userReducer } from './user/reducer';

export interface IServiceState{
  loading: boolean;
  servicesCategory: Array<IServiceCategory>;
  services: Array<IService>;
  dates: Array<IDates>;
  savedService: Array<IService>;
  savedTime: string;
}

interface IAffiliatesState {
  loading: boolean;
  affiliates: Array<IAffiliates>;
}


export interface ISpecialistsState {
  loading: boolean;
  specialists: Array<ISpecialist>;
  savedSpecialist: null | ISpecialist;
}

export interface IVisitsState {
  loading: boolean;
  visits: Array<IVisits>;
}


export interface IRootReducer {
  affiliatesList: IAffiliatesState;
  specialistsList: ISpecialistsState;
  service: IServiceState;
  user: IVisitsState;
}
export const rootReducer = combineReducers({
  affiliatesList: affiliatesInfoReducer,
  specialistsList: specialistsInfoReducer,
  service: serviceReducer,
  user: userReducer
});

