import { ADD_TO_CART, REMOVE_FROM_CART, CartActions, CartReducerState } from "../../types";

const cartFromLocal = localStorage.getItem('cart');
let initialCart: [] = [];
if (cartFromLocal) {
    initialCart = JSON.parse(cartFromLocal);
}
const initState:CartReducerState = {
  cart: initialCart,
};

export default function cartReducer(state: CartReducerState = initState, action: CartActions): CartReducerState {
    switch (action.type) {
        case ADD_TO_CART:{
            const country = action.payload;
            const cartCountry = [...state.cart, country];
            localStorage.setItem('cart', JSON.stringify(cartCountry));
            return {
                ...state,
                cart: [...state.cart, country],
            };
        }
        case REMOVE_FROM_CART: {
            const payloadCountry = action.payload;
            const tempCart = state.cart.filter(country => country !== payloadCountry);
            const cartCountry = [...tempCart];
            localStorage.setItem('cart', JSON.stringify(cartCountry));
            return {
                ...state,
                cart: [...tempCart],
            };
        }
        default:
            return state;
        }
}