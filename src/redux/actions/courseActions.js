// Here we'll add our action creators (action creator functions)

// object shorthand syntax , we omitted course: course and used it once because the
// left handside is the same name as the right handside
export function createCourse(course) {
  return { type: 'CREATE_COURSE', course };
}
