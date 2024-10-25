import mongoose from "mongoose";
import hashPassword from "../Middleware/hash.js";

const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: {
        email: { type: String, required: true },
        phone: { type: String, required: true }
    },
    password: { type: String, required: true },
    role: { type: String, default: 'admin' }
});

adminSchema.pre('save',hashPassword);

const Admin = mongoose.model("Admin",adminSchema);
export default Admin;