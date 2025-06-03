export * from './CountryTypes';

import { CountryReducerState } from './CountryTypes';

export type AppState ={
    countryReducer: CountryReducerState,
}