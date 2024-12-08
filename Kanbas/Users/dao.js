// import db from "../Database/index.js"
import model from "./model.js";

// let { users, enrollments } = db

export const createUser = (user) => {
  // const newUser = { ...user, _id: Date.now().toString() }
  // users = [...users, newUser]
  // return newUser
  delete user._id;
  return model.create(user);
}
export const findAllUsers = () => model.find(); // same as: select * from users

export const findUserById = (userId) => model.findById(userId); //users.find((user) => user._id === userId)

export const findUserByUsername = (username) => model.findOne({ username: username }); // users.find((user) => user.username === username)

export const findUserByCredentials = (username, password) => model.findOne({ username, password }); // users.find((user) => user.username === username && user.password === password)

export const updateUser = (userId, user) => model.updateOne({ _id: userId }, { $set: user }); // (users = users.map((u) => (u._id === userId ? user : u)))
                                            // model.findByIdAndUpdate(userId, user, { new: true}); // Another way
export const deleteUser = (userId) => model.deleteOne({ _id: userId }); // (users = users.filter((u) => u._id !== userId))

export const findUsersByRole = (role) => model.find({ role: role }); // or just model.find({ role })

export const findUsersByPartialName = (partialName) => {
  const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
  return model.find({
    $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
  });
};

// export const findCourseUsers = (courseId) => {
//   const enrollmentList = enrollments.filter(enrollment => enrollment.course === courseId)
//   const list = users.filter(user =>
//     enrollmentList.find(e => e.user === user._id
//     )
//   )
//   return list
// }
