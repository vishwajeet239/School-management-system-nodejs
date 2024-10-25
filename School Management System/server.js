import express from "express";
import session from "express-session";
import passport from "./Middleware/Passport.js";
import authRoutes from "./Routes/authRoutes.js";
import studentRoutes from "./Routes/studentRoutes.js";
import adminRoutes from "./Routes/adminRoutes.js";
import teacherRoutes from "./Routes/teacherRoutes.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(  
  session({
    secret: "123",
    resave: false,
    saveUninitialized: false,
  })
);

mongoose
  .connect("mongodb://localhost:27017/schoolManagement")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);
app.use("/student", studentRoutes);
app.use("/teacher", teacherRoutes);
app.use("/admin", adminRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
