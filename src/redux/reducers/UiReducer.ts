import { UPDATE_SEARCH_KEYWORD, UiReducerState, UiActions } from "../../types";

const initState:UiReducerState = {
  searchKeyword: '',
};

export default function uiReducer(state: UiReducerState = initState, action: UiActions): UiReducerState {
    switch (action.type) {
        case UPDATE_SEARCH_KEYWORD:{
            return {
                ...state,
                searchKeyword: action.payload
            };
        }
        default:
            return state;
        }
}