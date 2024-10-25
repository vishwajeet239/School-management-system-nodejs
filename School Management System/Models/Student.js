import mongoose from "mongoose";
import { type } from "os";
import hashPassword from "../Middleware/hash.js";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  grade: {
    type: String,
    required: true,
  },

  contact: {
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  password: { type: String, required: true },
  role: { type: String, default: 'student' }
});

studentSchema.pre('save',hashPassword);

const Student = mongoose.model("student", studentSchema);
export default Student;
