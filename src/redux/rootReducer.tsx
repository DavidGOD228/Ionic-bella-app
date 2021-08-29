import {combineReducers} from 'redux';
import {affiliatesInfoReducer} from "./affiliates/reducer";
import {IAffiliates, ISpecialist} from "../interfaces/interfaces";
import {specialistsInfoReducer} from "./specialists/reducer";


interface IAffiliatesState {
    loading: boolean,
    affiliates: Array<IAffiliates>
}

export interface IRootReducer {
    affiliatesList: IAffiliatesState,
}

interface ISpecialistsState {
    loading: boolean,
    specialists: Array<ISpecialist>
}

export interface IRootReducer {
    specialistsList: ISpecialistsState,
}

export const rootReducer = combineReducers({
    affiliatesList: affiliatesInfoReducer,
    specialistsList: specialistsInfoReducer,
});

