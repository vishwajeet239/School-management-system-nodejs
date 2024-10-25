import Teacher from "../Models/Teacher.js";
import Student from "../Models/Student.js";

const addStudent = (req, res) => {
  Student.create(req.body)
    .then(() => {
      res.json("Student is created");
    })
    .catch((err) => {
      res.status(500).json({ message: "servor error", error: err });
    });
};

const updateStudent = (req, res) => {
  Student.findByIdAndUpdate(req.params.id, req.body, { new: true })
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
  Teacher.findByIdAndUpdate(req.user.id, req.body, { new: true })
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

export default {addStudent,updateStudent,deleteStudent,getAllStudents,updateTeacher,getAllTeacher};
