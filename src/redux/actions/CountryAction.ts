import { FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS, CountryActions, FETCH_COUNTRIES_FAILURE } from "../../types";

export function fetchAllCountries(): CountryActions {
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