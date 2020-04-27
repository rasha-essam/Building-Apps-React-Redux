// Here we'll add our action creators (action creator functions)
import * as types from './actionTypes';

// object shorthand syntax , we omitted course: course and used it once because the
// left handside is the same name as the right handside
export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}
