import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from './../../redux/actions/courseActions';
import PropTypes from 'prop-types';

class CoursesPage extends React.Component {
  // this is called class field as well
  state = {
    course: {
      title: ''
    }
  };

  // using the arrow here in that way is called a "class field" ,
  // this will bind to the right "this" of the class
  // Arrow functions inherit the binding context of their enclosing scope
  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // to avoid the page of reposting
    this.props.dispatch(courseActions.createCourse(this.state.course));
    alert(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(CoursesPage);
