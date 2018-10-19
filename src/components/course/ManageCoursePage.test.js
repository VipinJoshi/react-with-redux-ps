import expect from 'expect';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { ManageCoursePage } from './ManageCoursePage';
// to get the upper export so that we need not to wrote test case for map state to props



describe('Manage Course Page', () => {
    const props = {
        authors: [],
        course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' },
        actions: { saveCourse: () => { return Promise.resolve(); } }
    };
    it('set error message when try to set an empty file', () => {
        const wrapper = mount(<ManageCoursePage {...props} />);
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title Must be atleast 2 character.');
    });
});
