import * as dao from "./dao.js"
import * as modulesDao from "../Modules/dao.js"

export default function CourseRoutes(app) {
  app.get("/api/courses", (req, res) => {
    const courses = dao.findAllCourses()
    res.send(courses)
  })

  app.delete("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params
    const status = dao.deleteCourse(courseId)
    res.send(status)
  })

  app.put("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params
    const courseUpdates = req.body
    const status = dao.updateCourse(courseId, courseUpdates)
    res.send(status)
  })

  app.post("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params
    const module = {
      ...req.body,
      course: courseId,
    }
    const newModule = modulesDao.createModule(module)
    res.send(newModule)
  })

  app.get("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params
    const modules = modulesDao.findModulesForCourse(courseId)
    res.json(modules)
  })

  // Assignment
  app.post("/api/courses/:courseId/assignments", (req, res) => {
    const assignment = req.body
    const newAssignment = dao.createAssignment(assignment)
    res.send(newAssignment)
  })

  app.get("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params
    const assignments = dao.findAllAssignment(courseId)
    res.json(assignments)
  })

  app.get("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params
    const assignment = dao.fetchAssignment(assignmentId)
    res.json(assignment)
  })

  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params
    const assignmentUpdates = req.body
    dao.updateAssignment(assignmentId, assignmentUpdates)
    res.sendStatus(204)
  })

  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params
    dao.deleteAssignment(assignmentId)
    res.sendStatus(204)
  })


}
