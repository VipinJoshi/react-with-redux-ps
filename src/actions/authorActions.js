import * as types from './../constants/actionTypes';
import AuthorApi from './../api/mockAuthorApi';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadAuthorSuccess(authors) {
    return { type: types.LOAD_AUTHOR_SUCCESS, authors };
}

export function loadAuthors() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorSuccess(authors));
        }).catch(err => {
            throw (err);
        });
    };
} 