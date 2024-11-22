import * as enrolledDao from "./dao.js"


export default function EnrollmentsRoutes(app) {
  app.get('/api/enrollments/:userId', (req, res) => {

    const { userId } = req.params
    const userEnrollments = enrolledDao.findUserEnrollments(userId)
    res.send(userEnrollments)
  })
  app.post('/api/enrollments/:userId/:courseId', (req, res) => {
    const { userId, courseId } = req.params
    enrolledDao.enrollUserInCourse(userId, courseId)
    res.sendStatus(204)
  })
  app.delete('/api/enrollments/:userId/:courseId', (req, res) => {
    const { userId, courseId } = req.params
    enrolledDao.unenrollUserInCourse(userId, courseId)
    res.sendStatus(204)
  })


}