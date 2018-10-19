import expect from 'expect';
import courseReducers from './courseReducers';
import * as actions from '../actions/courseActions';

describe('Course reducers', () => {
    it('should add new course when pass CREATE_COURSE_SUCCESS action', () => {
        //arrange
        const initialState = [
            { title: 'I' },
            { title: 'am' }
        ];

        const newCourse = { title: 'Vipin' };
        //act
        const action = actions.createCourseSuccess(newCourse);

        const newState = courseReducers(initialState, action);
        //asert
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('I');
        expect(newState[1].title).toEqual('am');
        expect(newState[2].title).toEqual('Vipin');


    });

    it('should update course when pass UPDATE_COURSE_SUCCESS action', () => {
        //arrange
        const initialState = [
            { id:'I', title: 'I' },
            {id: 'am', title: 'am' },
            {id: 'Vipin', title: 'Vipin' },
        ];

        const course = {id: 'Vipin', title: 'Vipin Joshi' };
        //act
        const action = actions.updateCourseSuccess(course);

        const newState = courseReducers(initialState, action);

        const updatedCourse = newState.find(a=>a.id===course.id);
        //const untouchedCourse= newState.find(a=>a.id='am') 
        //asert
        expect(updatedCourse.title).toEqual('Vipin Joshi');
    });
});