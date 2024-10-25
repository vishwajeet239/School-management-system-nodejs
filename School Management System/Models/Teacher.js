import mongoose, { model } from "mongoose";
import hashPassword from "../Middleware/hash.js";
const { Schema } = mongoose;
const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    subject: { type: String, required: true },
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }], // Array of student references
    contact: {
        email: { type: String, required: true },
        phone: { type: String, required: true }
    },
    password: { type: String, required: true },
    role: { type: String, default: 'Teacher' }
});

teacherSchema.pre('save',hashPassword)

const Teacher = mongoose.model("teacher",teacherSchema);
export default Teacher;