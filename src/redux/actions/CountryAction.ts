import { Dispatch } from "redux";

import { FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS, CountryActions, FETCH_COUNTRIES_FAILURE } from "../../types";

export function FetchAllCountriesRequest(): CountryActions {
    return {
        type: FETCH_COUNTRIES_REQUEST,
    }
}

export function fetchAllCountriesSucces(countries: []): CountryActions{
    return {
        type: FETCH_COUNTRIES_SUCCESS,
        payload: countries,
    }
}

export function fetchAllCountriesFailure(error: string): CountryActions {
    return {
        type: FETCH_COUNTRIES_FAILURE,
        payload: error,
    }
}

export function fetchAllCountries() {
    return async (dispatch: Dispatch<CountryActions>) => {
        dispatch(FetchAllCountriesRequest());
        try {
            const res = await fetch('./json/countries.json');
            if (!res.ok) {
                throw new Error('Failed to load countries.json file');
            }
            const countries = await res.json();
            dispatch(fetchAllCountriesSucces(countries));
        } catch (error) {
            dispatch(fetchAllCountriesFailure(error instanceof Error ? error.message : 'An unknown error occurred'));
        }
    }
}