import * as dao from "./dao.js"
import * as modulesDao from "../Modules/dao.js";
import {findAllAssignment} from "./dao.js";
export default function AssignmentRoutes(app) {

  app.get("/api/courses/:courseId/assignments", async (req, res) => {
    const {courseId} = req.params
    const assignment = await dao.findAllAssignment(courseId)
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

  app.post("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params
    const assignment = {
      ...req.body,
      course: courseId,
    }
    const newModule = dao.createAssignment(assignment)
    res.send(newModule)
  })

}
