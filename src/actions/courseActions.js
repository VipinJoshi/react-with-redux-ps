import * as types from './../constants/actionTypes';
import CourseApi from './../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function createCourse(course) {
    return { type: types.CREATE_COURSE, course };
}

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}
export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course };
}
export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course };
}
export function loadCourses() {
    return function (dispatch) {
        return CourseApi.getAllCourses().then(courses => {
            dispatch(beginAjaxCall());
            dispatch(loadCoursesSuccess(courses));
        }).catch(err => {
            throw (err);
        });
    };
}

export function saveCourse(course) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return CourseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) :
                dispatch(createCourseSuccess(savedCourse));
        }).catch(err => {
            dispatch(ajaxCallError(err));
            throw (err);
        });
    };
}