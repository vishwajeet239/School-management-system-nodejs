import Student from "../Models/Student.js";

const updateStudent = (req, res) => {
  Student.findByIdAndUpdate(req.user.id, req.body, { new: true })
    .then((Student) => {
      res.json(Student);
    })
    .catch((err) =>
      res.status(500).json({ message: "servor error", error: err })
    );
};

const getStudent = (req, res) => {
  Student.findById(req.user.id)
    .then((Student) => res.json(Student))
    .catch((err) =>
      res.status(500).json({ message: "Server error", error: err })
    );
};

export default {updateStudent,getStudent};
