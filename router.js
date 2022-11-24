import Router  from "express";
const router= new Router()
import TaskController from "./taskcontroller.js"
router.post("/create_task", TaskController.createTask)
router.get("/get_tasks",TaskController.getTasks)     
router.put("/update_task",TaskController.updateTask)
router.delete("/delete_task:id",TaskController.deleteTask)
export default router