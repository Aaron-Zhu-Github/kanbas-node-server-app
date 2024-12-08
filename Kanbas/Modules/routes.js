import * as modulesDao from "./dao.js"

export default function ModuleRoutes(app) {

  app.post("/api/courses/:courseId/modules", async (req, res) => {
    const { courseId } = req.params;
    const modules = await modulesDao.findModulesForCourse(courseId);
    res.json(modules);
  });

  app.put("/api/modules/:moduleId", (req, res) => {
    const { moduleId } = req.params
    const moduleUpdates = req.body
    const status= modulesDao.updateModule(moduleId, moduleUpdates)
    res.sendStatus(204)
  })

  app.delete("/api/modules/:moduleId", (req, res) => {
    const { moduleId } = req.params
    const status = modulesDao.deleteModule(moduleId)
    res.sendStatus(204)
  })
}
