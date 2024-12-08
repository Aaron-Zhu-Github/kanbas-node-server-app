import * as dao from "./dao.js";
import * as attemptsDao from "./attempts/dao.js";

function QuizRoutes(app) {
    const createQuiz = async (req, res) => {
        const quiz = await dao.createQuiz(req.body);
        res.json(quiz);
    };

    const findQuizzesForCourse = async (req, res) => {
        const quizzes = await dao.findQuizzesForCourse(req.params.courseId);
        res.json(quizzes);
    };

    const findQuizById = async (req, res) => {
        const quiz = await dao.findQuizById(req.params.quizId);
        res.json(quiz);
    };

    const updateQuiz = async (req, res) => {
        const { quizId } = req.params;
        const status = await dao.updateQuiz(quizId, req.body);
        res.json(status);
    };

    const deleteQuiz = async (req, res) => {
        const status = await dao.deleteQuiz(req.params.quizId);
        res.json(status);
    };

    const addQuestionToQuiz = async (req, res) => {
        const status = await dao.addQuestionToQuiz(
            req.params.quizId,
            req.body
        );
        res.json(status);
    };

    const updateQuizQuestion = async (req, res) => {
        const status = await dao.updateQuizQuestion(
            req.params.quizId,
            req.params.questionId,
            req.body
        );
        res.json(status);
    };

    const deleteQuizQuestion = async (req, res) => {
        const status = await dao.deleteQuizQuestion(
            req.params.quizId,
            req.params.questionId
        );
        res.json(status);
    };

    const createQuizAttempt = async (req, res) => {
        try {
            const attempt = await attemptsDao.createQuizAttempt(req.body);
            res.json(attempt);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    const findQuizAttempts = async (req, res) => {
        try {
            const attempts = await attemptsDao.findQuizAttempts(req.params.quizId);
            res.json(attempts);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    const findQuizAttemptsByUser = async (req, res) => {
        try {
            const attempts = await attemptsDao.findQuizAttemptsByUser(req.params.userId);
            res.json(attempts);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    const findQuizAttemptById = async (req, res) => {
        try {
            const attempt = await attemptsDao.findQuizAttemptById(req.params.attemptId);
            res.json(attempt);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    app.post("/api/courses/:courseId/quizzes", createQuiz);
    app.get("/api/courses/:courseId/quizzes", findQuizzesForCourse);
    app.get("/api/quizzes/:quizId", findQuizById);
    app.put("/api/quizzes/:quizId", updateQuiz);
    app.delete("/api/quizzes/:quizId", deleteQuiz);
    app.post("/api/quizzes/:quizId/questions", addQuestionToQuiz);
    app.put("/api/quizzes/:quizId/questions/:questionId", updateQuizQuestion);
    app.delete("/api/quizzes/:quizId/questions/:questionId", deleteQuizQuestion);
    app.post("/api/quiz-attempts", createQuizAttempt);
    app.get("/api/quizzes/:quizId/attempts", findQuizAttempts);
    app.get("/api/users/:userId/quiz-attempts", findQuizAttemptsByUser);
    app.get("/api/quiz-attempts/:attemptId", findQuizAttemptById);
}

export default QuizRoutes; 