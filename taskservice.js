import Task from "./taskmodel.js";

class TaskService {
  async createTask(task) {
    const createdTask = await Task.create(task);
    return createdTask;
  }

  async getTasks() {
    const tasks = await Task.find({});
    return tasks;
  }

  async updateTask(task) {
    const updatedTask = await Task.findOneAndUpdate({ _id: task._id }, task, {
      returnOriginal: false,
    });
    console.log(updatedTask)
    return updatedTask;
  }
  async deleteTask(id) {
    await Task.findOneAndDelete({ _id: id });
  }
}
export default new TaskService();
