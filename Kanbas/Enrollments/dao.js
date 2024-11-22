import Database from "../Database/index.js"

export function findUserEnrollments(userId) {
  const { enrollments } = Database
  const userEnrollments = enrollments.filter(
    (enrollment) => enrollment.user === userId
  )
  return userEnrollments
}

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database
  enrollments.push({ _id: Date.now(), user: userId, course: courseId })
}

export function unenrollUserInCourse(userId, courseId) {
  const { enrollments } = Database
  Database.enrollments = enrollments.filter(enrollment => !(enrollment.course === courseId && enrollment.user === userId))
}