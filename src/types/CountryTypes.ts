export const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES_REQUEST'; 
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS'; 
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE'; 

export type CountryReducerState = {
    countries: CountryState[],
    isLoading: boolean,
    error: string,
};

export type CountryState={
    name: {
        common: string,
        official: string
    }, 
    capital: string
    region: string,
    subregion: string
    flags: {
        png: string,
    },
    population: number
    currencies: string[]
    languages: string[]
}

export type FetchAllCountriesRequestAction = {
    type: typeof FETCH_COUNTRIES_REQUEST,
    payload?: string,
};
export type fetchAllCountriesSuccesAction = {
    type: typeof FETCH_COUNTRIES_SUCCESS,
    payload: [],
};
export type fetchAllCountriesFailureAction = {
    type: typeof FETCH_COUNTRIES_FAILURE,
    payload: string,
};

export type CountryActions = 
    | FetchAllCountriesRequestAction
    | fetchAllCountriesSuccesAction
    | fetchAllCountriesFailureAction;