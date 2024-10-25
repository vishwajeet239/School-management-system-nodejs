import Teacher from "../Models/Teacher.js";
import Student from "../Models/Student.js";
import Admin from "../Models/Admin.js";

const addStudentByAdmin = (req, res) => {
  Student.create(req.body)
    .then(() => {
      res.json("Student is created");
    })
    .catch((err) => {
      res.status(500).json({ message: "servor error", error: err });
    });
};

const updateStudent = (req, res) => {
  Student.findByIdAndUpdate(req.user.id, req.body, { new: true })
    .then((Student) => {
      res.json(Student);
    })
    .catch((err) =>
      res.status(500).json({ message: "servor error", error: err })
    );
};

const deleteStudent = (req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then(() => res.json("Student is deleted"))
    .catch((err) => {
      res.status(500).json({ message: "servor error", error: err });
    });
};

const getAllStudents = (req, res) => {
  Student.find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      res.status(500).json({ message: "servor error", error: err });
    });
};

const updateTeacher = (req, res) => {
  Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((Teacher) => {
      res.json(Teacher);
    })
    .catch((err) => {
      res.status(500).json({ message: "servor error", error: err });
    });
};

const getAllTeacher = (req, res) => {
  Teacher.find()
    .then((Teachers) => res.json(Teachers))
    .catch((err) => {
      res.status(500).json({ message: "servor error", error: err });
    });
};

const addTeacher = (req, res) => {
  Teacher.create(req.body)
    .then(() => res.json("Teacher created Successfully"))
    .catch((err) => {
      res.status(500).json({ message: "servor error", error: err });
    });
};

const updateAdmin = (req, res) => {
  Admin.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((admin) => res.json(admin))
    .catch((err) => {
      res.status(500).json({ message: "servor error", error: err });
    });
};

const addAdmin = (req, res) => {
  Admin.create(req.body)
    .then(() => res.json("admin is created"))
    .catch((err) => {
      res.status(500).json({ message: "servor error", error: err });
    });
};

export default {
  addStudentByAdmin,
  updateStudent,
  deleteStudent,
  getAllStudents,
  updateTeacher,
  getAllTeacher,
  addTeacher,
  updateAdmin,
  addAdmin
};
