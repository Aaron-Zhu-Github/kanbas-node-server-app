import mongoose from "mongoose";

const quizAttemptSchema = new mongoose.Schema({
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "quizzes",
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    answers: {
        type: Map,
        of: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
}, { collection: "quiz_attempts" });

export default quizAttemptSchema; 