const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    const student = req.query.student;
    console.log(student);
    res.send(student + "!")
});

const GetStudentDetails = [];

router.post("/create_account", (req, res) => {
    const { student } = req.body;

    GetStudentDetails.push({ StudentID: student.StudentID, Pin: student.Pin, Course: student.Course, Residence: student.Residence });

    console.log(GetStudentDetails) ;

    res.json({Registration: "Signed up" , status: "You have been registered successfully!" })
})

router.get("/GetStudentDetails", (req, res) => {
    const { StudentID, Pin} = req.query;
    const student = GetStudentDetails.find(s => s.StudentID === StudentID && s.Pin === Pin);
    
    if (!student) {
        return res.status(404).json({error: "Student not found"})
    }
    const studentDetails = {
        StudentID: student.StudentID,
        Course: student.Course,
        Residence: student.Residence
    };
    return res.json(studentDetails);
}) 

router.delete("/delete", (req, res) => {
    const {StudentID, Pin} = req.body;

    const existinguser = GetStudentDetails.find(u =>u.StudentID === StudentID && u.Pin === Pin);
    console.log(existinguser);

    if (!existinguser) {res.json({errorStatus: "Credentials did not match"});
}

GetStudentDetails.splice(GetStudentDetails.indexOf(existinguser), 1)
res.json(GetStudentDetails)
});
module.exports = router;
