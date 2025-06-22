import { ADD_TO_CART, REMOVE_FROM_CART, CartActions, CartReducerState } from "../../types";

const initState:CartReducerState = {
  cart: [],
};

export default function cartReducer(state: CartReducerState = initState, action: CartActions): CartReducerState {
    switch (action.type) {
        case ADD_TO_CART:{
            const country = action.payload;
            return {
                ...state,
                cart: [...state.cart, country],
            };
        }
        case REMOVE_FROM_CART: {
            const payloadCountry = action.payload;
            const tempCart = state.cart.filter(country => country !== payloadCountry);
            return {
                ...state,
                cart: [...tempCart],
            };
        }
        default:
            return state;
        }
}