import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from './../../actions/courseActions';
import CourseForm from './CourseForm';
import { METHODS } from 'http';
import toastr from 'toastr';
import { authorsFormatedForDropDown } from '../../selectors/selectors';

export class ManageCoursePage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: Object.assign({}, props.course),
            errors: {},
            saving: false
        };
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id != nextProps.course.id) {
            this.setState({ course: Object.assign({}, nextProps.course) });
        }
    }
    updateCourseState(event) {
        const field = event.target.name;
        let course = Object.assign({}, this.state.course); // this.state.course;
        course[field] = event.target.value;
        return this.setState({ course });
    }
    courseFormIsValid() {
        let returnValue = true;
        let errors = {};
        if (this.state.course.title.length < 2) {
            errors.title = "Title Must be atleast 2 character.";
            returnValue = false;
        }
        this.setState({ errors });
        return returnValue;
    }
    saveCourse(event) {
        event.preventDefault();
        if (!this.courseFormIsValid()) {
            return;
        }

        this.setState({ saving: true });
        this.props.actions.saveCourse(this.state.course)
            .then(() => this.redirect()).catch(error => {
                toastr.error(error);
                this.setState({ saving: false });
            });
    }
    redirect() {
        this.setState({ saving: false });
        toastr.success("Course Saved");
        this.context.router.push('/courses');
    }
    render() {
        const { errors, course, saving } = this.state;
        const { authors } = this.props;
        return (<div>
            <h1>Manage Course</h1>
            <CourseForm
                course={course}
                errors={errors}
                allAuthors={authors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                saving={saving}
            />
        </div>);
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(courseActions, dispatch) };
}

function getCourseById(courses, courseId) {
    const course = courses.filter(course => course.id === courseId);
    if (course) return course[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
    const courseId = ownProps.params.id;
    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }
    
    return {
        course: course,
        authors: authorsFormatedForDropDown(state.authors)
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);