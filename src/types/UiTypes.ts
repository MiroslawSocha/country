export const UPDATE_SEARCH_KEYWORD = 'UPDATE_SEARCH_KEYWORD';

export type UiReducerState = {
    searchKeyword: string
};

export type setSearchKeywordAction = {
    type: typeof UPDATE_SEARCH_KEYWORD,
    payload: string,
};

export type UiActions = setSearchKeywordAction;