import mongoose from "mongoose";
const schema = new mongoose.Schema({
  title: String,
  description: String,
  editedAt:Date,
  userId: String
});
export const noteModel = new mongoose.model("noteModel", schema);
