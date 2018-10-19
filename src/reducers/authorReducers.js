import * as types from './../constants/actionTypes';
import initialState from './initialState';
export default function authorReducers(state = initialState.authors, action) {
    switch (action.type) {
        case types.LOAD_AUTHOR_SUCCESS:
            return action.authors;
        default:
            return state;
    }
}