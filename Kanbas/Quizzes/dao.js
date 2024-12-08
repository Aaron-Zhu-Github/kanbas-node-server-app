import model from "./model.js";

export const createQuiz = (quiz) => {
    return model.create(quiz);
};

export const findQuizzesForCourse = (courseId) => {
    return model.find({ course: courseId });
};

export const findQuizById = (quizId) => {
    return model.findById(quizId);
};

export const updateQuiz = (quizId, quiz) => {
    return model.updateOne({ _id: quizId }, { $set: quiz });
};

export const deleteQuiz = (quizId) => {
    return model.deleteOne({ _id: quizId });
};

export const addQuestionToQuiz = (quizId, question) => {
    return model.updateOne(
        { _id: quizId },
        { $push: { questions: question } }
    );
};

export const updateQuizQuestion = (quizId, questionId, question) => {
    return model.updateOne(
        { _id: quizId, "questions._id": questionId },
        { $set: { "questions.$": question } }
    );
};

export const deleteQuizQuestion = (quizId, questionId) => {
    return model.updateOne(
        { _id: quizId },
        { $pull: { questions: { _id: questionId } } }
    );
}; 