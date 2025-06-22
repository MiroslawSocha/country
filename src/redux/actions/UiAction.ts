import {UPDATE_SEARCH_KEYWORD, setSearchKeywordAction} from "../../types";

export function setSearchKeyword(keyword: string): setSearchKeywordAction {
    return {
        type: UPDATE_SEARCH_KEYWORD,
        payload: keyword,
    }
}