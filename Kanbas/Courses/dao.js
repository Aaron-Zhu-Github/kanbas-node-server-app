import Database from "../Database/index.js"

export function findAllCourses() {
  return Database.courses
}

export function findCoursesForEnrolledUser(userId) {
  const { courses, enrollments } = Database
  const enrolledCourses = courses.filter((course) =>
    enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id))
  return enrolledCourses
}

export function createCourse(course) {
  const newCourse = { ...course, _id: Date.now().toString() }
  Database.courses = [...Database.courses, newCourse]
  return newCourse
}

export function deleteCourse(courseId) {
  const { courses, enrollments } = Database
  Database.courses = courses.filter((course) => course._id !== courseId)
  Database.enrollments = enrollments.filter(
    (enrollment) => enrollment.course !== courseId
  )
}

export function updateCourse(courseId, courseUpdates) {
  const { courses } = Database
  const course = courses.find((course) => course._id === courseId)
  Object.assign(course, courseUpdates)
  return course
}

// Assignment
export function updateAssignment(assignmentId, assignmentUpdates) {
  const { assignments } = Database
  const assignment = assignments.find((assignment) => assignment._id === assignmentId)
  Object.assign(assignment, assignmentUpdates)
  return assignment
}

export function deleteAssignment(assignmentId) {
  const { assignments } = Database
  Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId)
}

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: Date.now().toString() }
  Database.assignments = [...Database.assignments, newAssignment]
  return newAssignment
}

export function findAllAssignment(courseId) {
  const { assignments } = Database
  return assignments.filter((assignment) => assignment.course === courseId)
}

export function fetchAssignment(assignmentId) {
  const { assignments } = Database
  return assignments.filter((assignment) => assignment._id === assignmentId)
}