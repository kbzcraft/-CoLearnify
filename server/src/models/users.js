import mongoose from "mongoose";
const schema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  dob: String,
  password: { type: String, require: true },
  notes: Array,
});
export const userModel = new mongoose.model("userModel", schema);
