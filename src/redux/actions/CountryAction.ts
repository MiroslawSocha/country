import axios from "axios";
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
    return (dispatch: Dispatch) => {
        axios.get('https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,flags,population,currencies,languages')
        .then((res) => {
            const countries = res.data;
            dispatch(fetchAllCountriesSucces(countries));
        }).catch((err) => {
            dispatch(fetchAllCountriesFailure(err));
        });
    }
}