import expect from 'expect';
import { authorsFormatedForDropDown } from './selectors';

describe('Author selector ', () => {
    describe('Author formated for dropdown', () => {
        it('should return data with as a full name', () => {
            const authors = [
                { id: 'vipin-joshi', firstName: 'Vipin', lastName: 'Joshi' },
                { id: 'yamini-mishra', firstName: 'Yamini', lastName: 'Mishra' }
            ];
            const expected = [
                { value: 'vipin-joshi', text: 'Vipin Joshi' },
                { value: 'yamini-mishra', text: 'Yamini Mishra' }
            ];
            expect(authorsFormatedForDropDown(authors)).toEqual(expected);
        });
    });
});