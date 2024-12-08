// import Database from "../Database/index.js"
import model from "./model.js";

export async function findAllCourses() {
  // return Database.courses
  return model.find();
}

export function findCoursesForEnrolledUser(userId) {
  // const { courses, enrollments } = Database
  const enrolledCourses = courses.filter((course) =>
    enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id))
  return enrolledCourses
}

export async function createCourse(course) {
  delete course._id;
  return model.create(course);
// const newCourse = { ...cour
}

export async function deleteCourse(courseId) {

  return model.deleteOne({ _id: courseId });

  // const {courses, enrollments} = Database
  // Database.courses = courses.filter((course) => course._id !== courseId)
  // Database.enrollments = enrollments.filter(
  //     (enrollment) => enrollment.course !== courseId
  // )
}

export async function updateCourse(courseId, courseUpdates) {
  try {
    const updatedCourse = await model.findByIdAndUpdate(
        courseId,
        courseUpdates,
        { new: true }
    );

    if (!updatedCourse) {
      throw new Error('Course not found');
    }

    return updatedCourse;
  } catch (error) {
    console.error('Error updating course:', error);
    throw error;
  }
}
