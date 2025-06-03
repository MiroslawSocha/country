export const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES_REQUEST'; 
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS'; 
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE'; 

export type CountryReducerState = {
    countries: any,
    isLoading: boolean,
    error: string,
};

export type FetchAllCountriesAction = {
    type: typeof FETCH_COUNTRIES_REQUEST,
    payload?: string,
};
export type fetchAllCountriesSucces = {
    type: typeof FETCH_COUNTRIES_SUCCESS,
    payload: [],
};
export type fetchAllCountriesFailure = {
    type: typeof FETCH_COUNTRIES_FAILURE,
    payload: string,
};

export type CountryActions = 
    | FetchAllCountriesAction
    | fetchAllCountriesSucces
    | fetchAllCountriesFailure;