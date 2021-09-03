import {combineReducers} from 'redux';
import {affiliatesInfoReducer} from "./affiliates/reducer";
import {IAffiliates, ISpecialist, IService, IServiceCategory, IDates} from "../interfaces/interfaces";
import {specialistsInfoReducer} from "./specialists/reducer";
import {serviceReducer} from "./services/reducer";

export interface IServiceState{
    loading: boolean,
    servicesCategory: Array<IServiceCategory>
    services: Array<IService>
    dates: Array<IDates>
    savedService: Array<IService>
    savedTime: string
}

interface IAffiliatesState {
    loading: boolean,
    affiliates: Array<IAffiliates>
}

export interface IRootReducer {
    affiliatesList: IAffiliatesState,
    specialistsList: ISpecialistsState,
    service: IServiceState
}

export interface ISpecialistsState {
    loading: boolean,
    specialists: Array<ISpecialist>
    savedSpecialist: null | ISpecialist
}

export const rootReducer = combineReducers({
    affiliatesList: affiliatesInfoReducer,
    specialistsList: specialistsInfoReducer,
    service: serviceReducer
});

