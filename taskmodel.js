import mongoose from "mongoose";
const Task = new mongoose.Schema({
  type: "object",
  name: { type: String },
  id: { type: String },
  state: { type: String },
});

export default mongoose.model("Task", Task);
