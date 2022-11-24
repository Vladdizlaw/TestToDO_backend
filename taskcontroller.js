import TaskService from "./taskservice.js";

class TaskController {
  async createTask(req, res) {
    try {
      console.log("creteTask req:", req.body);
      const task = await TaskService.createTask(req.body);

      res.status(200).json(task);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }

  async getTasks(req, res) {
    try {
      const tasks = await TaskService.getTasks();

      return res.json(tasks);
    } catch (e) {
      res.status(500).json(e);
      console.log(e);
    }
  }
  async updateTask(req, res) {
    try {
      const updatedTask = await TaskService.updateTask(req.body);

      return res.json(updatedTask);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async deleteTask(req, res) {
    console.log(req.params.id)
    try {
      const deletedTask = await TaskService.deleteTask(req.params.id);
      res.json(deletedTask);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
export default new TaskController();
