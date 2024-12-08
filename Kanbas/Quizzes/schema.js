import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    type: { 
        type: String, 
        enum: ['MULTIPLE_CHOICE', 'TRUE_FALSE', 'FILL_IN_BLANK'],
        required: true 
    },
    points: { type: Number, default: 10 },
    question: { type: String, required: true },
    choices: [String],
    correctAnswer: { type: String, required: true },
}, { _id: true });

const quizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    points: { type: Number, default: 100 },
    quizType: { 
        type: String, 
        enum: ['GRADED_QUIZ', 'PRACTICE_QUIZ', 'GRADED_SURVEY', 'UNGRADED_SURVEY'],
        default: 'GRADED_QUIZ'
    },
    assignmentGroup: {
        type: String,
        enum: ['QUIZZES', 'EXAMS', 'ASSIGNMENTS', 'PROJECT'],
        default: 'QUIZZES'
    },
    shuffleAnswers: { type: Boolean, default: true },
    timeLimit: { type: Number, default: 20 }, // in minutes
    multipleAttempts: { type: Boolean, default: false },
    maxAttempts: { type: Number, default: 1 },
    showCorrectAnswers: { type: Boolean, default: true },
    accessCode: String,
    oneQuestionAtATime: { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: false },
    dueDate: Date,
    availableFromDate: Date,
    availableUntilDate: Date,
    published: { type: Boolean, default: false },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "courses",
        required: true
    },
    questions: [questionSchema]
}, { collection: "quizzes" });

export default quizSchema; 