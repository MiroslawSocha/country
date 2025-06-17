export * from './CountryTypes';
export * from './CartTypes';

import { CountryReducerState } from './CountryTypes';
import { CartReducerState } from './CartTypes';

export type AppState ={
    countryReducer: CountryReducerState,
    cartReducer: CartReducerState,
}