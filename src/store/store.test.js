import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as actions from '../actions/courseActions';

describe('store', () => {
    it('should handle create course', () => {
        const store = createStore(rootReducer, initialState);
        const course = {
            title: 'My Course'
        };

        const action= actions.createCourseSuccess(course);
        store.dispatch(action);

        const actual = store.getState().courses[0];

        const expected= {
            title: 'My Course'   
        };

        expect(actual).toEqual(expected);
    });
});