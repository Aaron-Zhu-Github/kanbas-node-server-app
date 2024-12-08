import model from "./model.js";

export const createQuizAttempt = (attempt) => model.create(attempt);
export const findQuizAttempts = (quizId) => model.find({ quiz: quizId }).sort({ submittedAt: -1 });
export const findQuizAttemptsByUser = (userId) => model.find({ user: userId }).sort({ submittedAt: -1 });
export const findQuizAttemptById = (attemptId) => model.findById(attemptId);
export const updateQuizAttempt = (attemptId, attempt) => model.findByIdAndUpdate(attemptId, attempt, { new: true });
export const deleteQuizAttempt = (attemptId) => model.findByIdAndDelete(attemptId); 