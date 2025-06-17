import {ADD_TO_CART, REMOVE_FROM_CART, CartCountry, CartActions} from "../../types";

export function addCountryToCart(country: CartCountry): CartActions {
    return {
        type: ADD_TO_CART,
        payload: country,
    }
}

export function removeCountryFromCart(country: CartCountry): CartActions {
    return {
        type: REMOVE_FROM_CART,
        payload: country,
    }
}