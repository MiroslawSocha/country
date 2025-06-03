import { CountryReducerState, FETCH_COUNTRIES_REQUEST, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_FAILURE } from '../../types';
const initState:CountryReducerState = {
    countries: [],
    isLoading: false,
    error: '',
};

export default function countryReducer(state: CountryReducerState = initState, action: any) {
    switch (action.type) {
        case FETCH_COUNTRIES_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: '',
            };
        case FETCH_COUNTRIES_SUCCESS:
            return {
                ...state,
                countries: action.payload,
                isLoading: false,
                error: '',
            };
        case FETCH_COUNTRIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}