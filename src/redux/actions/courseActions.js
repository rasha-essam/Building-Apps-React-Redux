// Here we'll add our action creators (action creator functions)
import * as types from './actionTypes';
import * as courseApi from './../../api/courseApi';

// object shorthand syntax , we omitted course: course and used it once because the
// left handside is the same name as the right handside
export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

// I like to put my thunks at the bottom of the actions file

// every thunk returns a function that takes dispatch as its argument
export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => dispatch(loadCoursesSuccess(courses)))
      .catch((error) => {
        throw error;
      });
  };
}
