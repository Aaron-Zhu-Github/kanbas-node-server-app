import * as enrolledDao from "./dao.js"


export default function EnrollmentsRoutes(app) {
  app.get('/api/enrollments/:userId', async (req, res) => {

    const {userId} = req.params
    if (userId === 'undefined') {
      return res.send([]);
    }
    const userEnrollments = await enrolledDao.findUserEnrollments(userId)
    res.json(userEnrollments)
  })
  app.post('/api/enrollments/:userId/:courseId', (req, res) => {
    const { userId, courseId } = req.params
    let promise = enrolledDao.enrollUserInCourse( userId,  courseId);
    res.sendStatus(204)
  })
  app.delete('/api/enrollments/:userId/:courseId', (req, res) => {
    const { userId, courseId } = req.params
    const status = enrolledDao.unenrollUserInCourse(userId, courseId)
    res.sendStatus(status)
  })


}