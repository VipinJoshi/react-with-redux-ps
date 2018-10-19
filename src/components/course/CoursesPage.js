import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from './../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';
class CoursesPage extends Component {

    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render() {
        const { courses } = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit" value="Add Course"
                    className="btn btn-primary" onClick={this.redirectToAddCoursePage} />
                <CourseList courses={courses} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    // createCourse: PropTypes.func.isRequired
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) { // {courses}
    return {
        courses: state.courses
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
        // one way is also like createCourse: course => dispatch(courseActions.createCourse(course))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);