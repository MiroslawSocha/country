import { Dispatch } from "redux";
// Importujesz plik JSON bezpośrednio (dostosuj ścieżkę do swojego projektu)
import countriesData from "./countries.json"; 

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
        dispatch(FetchAllCountriesRequest());
        
        try {
            // Ponieważ dane są lokalne, przypisujemy je natychmiast bez axiosa
            const countries = countriesData;
            dispatch(fetchAllCountriesSucces(countries as []));
        } catch (err: any) {
            dispatch(fetchAllCountriesFailure(err.message || "Błąd ładowania danych"));
        }
    }
}