export const ADD_TO_CART = 'ADD_TO_CART'; 
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'; 

export type CartCountry ={}

export type CartReducerState = {
    cart: CartCountry [],
};

export type AddCountryToCartAction = {
    type: typeof ADD_TO_CART,
    payload: CartCountry,
};
export type RemoveCountryFromCartAction = {
    type: typeof REMOVE_FROM_CART,
    payload: CartCountry,
};

export type CartActions = 
    | AddCountryToCartAction
    | RemoveCountryFromCartAction;