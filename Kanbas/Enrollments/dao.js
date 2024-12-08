import model from "./model.js"

export async function findUserEnrollments(userId) {
  try {
    return await model.find({user: userId});
  } catch (error) {
    console.error('Error finding user enrollments:', error);
    return [];
  }
}
export async function deleteEnrollmentsByCourseId(courseId) {
  try {
    const result = await model.deleteMany({ course: courseId });
    console.log(`Deleted ${result.deletedCount} enrollments for course with ID${courseId}`);
    return result;
  } catch (error) {
    console.error('Error deleting enrollments:', error);
    throw error;
  }
}

// export async function findUsersForCourse(courseId) {
//   const enrollments = await model.find({ course: courseId }).populate("user");
//   return enrollments.map((enrollment) => enrollment.user);
// }
export async function enrollUserInCourse(user, course) {
  return model.create({ user, course });
}
export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
}

export async function findCoursesForUser(userId) {
  console.log(userId);
  const enrollments = await model.find({ user: userId }).populate("course");
  console.log(enrollments);
  return enrollments.map((enrollment) => enrollment.course);
}

export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}

