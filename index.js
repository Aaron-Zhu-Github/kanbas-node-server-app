import "dotenv/config"
import express from "express"
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js"
import UserRoutes from "./Kanbas/Users/routes.js"
import CourseRoutes from "./Kanbas/Courses/routes.js"
import EnrollmentRoutes from "./Kanbas/Enrollments/routes.js"
import ModuleRoutes from "./Kanbas/Modules/routes.js"
import cors from "cors"
import session from "express-session"
import mongoose from "mongoose";
import AssignmentRoutes from "./Kanbas/Assignment/routes.js";
import QuizRoutes from "./Kanbas/Quizzes/routes.js";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas-cs5610-fa24";
mongoose.connect(CONNECTION_STRING);

const app = express()

app.use(
  cors({
    credentials: true,
    origin: process.env.REACT_APP_REMOTE_SERVER || "http://localhost:3000",
  })
)

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
}
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  }
}
app.use(session(sessionOptions))

app.use(express.json())

Hello(app)
Lab5(app)
UserRoutes(app)
CourseRoutes(app)
EnrollmentRoutes(app)
ModuleRoutes(app)
AssignmentRoutes(app)
QuizRoutes(app)

app.listen(process.env.PORT || 4000)