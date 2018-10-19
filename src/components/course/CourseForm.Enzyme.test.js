import expect from 'expect';
import { mount, shallow } from 'enzyme';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setUp(saving) {
    const props = {
        course: {}, saving, errors: {},
        onSave: () => { },
        onChange: () => { }
    };

    return shallow(<CourseForm {...props} />);
}

describe("test using enzymes", () => {
    it('render form and h1', () => {
        const wrapper = setUp(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('Manage Form');
    });

    it('save button is labeled "Save" initailly', () => {
        const wrapper = setUp(false);
        expect(wrapper.find('input').props().value).toBe('Save');
    });
    it('save button is labeled "Saving...." When Saving', () => {
        const wrapper = setUp(true);
        expect(wrapper.find('input').props().value).toBe('Saving....');
    });
});