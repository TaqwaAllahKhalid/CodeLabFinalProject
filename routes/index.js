var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://Taqwa0011:Taqwa0011@ds141028.mlab.com:41028/final-project-school').then(function () {
    console.log('Database Connected!');
}).catch(function (error) {
    console.log(error.message)
});

var Student = mongoose.model('Student', {
    id: String,
    fullName: String,
    status:String,
    gender: String,
    address: String,
    email:String,
    phoneNumber:String,
    birthDate: String,
    registrationDate: String,
    expectedGraduationYear: String,
    stage: Number,
    noOfNonAttendanceDays: Number,
    grades: {
        maths: Number,
        chemistry: Number,
        physics: Number,
        biology: Number,
        history: Number,
        geography: Number,
        sport: Number,
    },
    primaryStageAverage:Number,
    email:String
});

var app = express();
app.use(express.static(__dirname + '/public'));


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/brightness-school', function (req, res, next) {
    res.render('index');
});

router.get('/brightness-school/application-form', function(req, res) {
    res.render('applications')
});

router.get('/brightness-school/students-information-control-center', function (req,res) {
    res.render('students-information-control-center')
});

router.get('/api/brightness-school-students', function (req, res) {
    Student.find(function (error, Students) {
        res.json(Students);
    });
});

router.post('/api/brightness-school-students',function (req , res) {
    var applicant = new Student(req.param('applicant'));
    applicant.save().then(function () {
        res.json({
            isSuccess: true,
            message: "Applicant Added!"
        })
    }).catch(function (error) {
        res.json({
            isSuccess: false,
            message: error.message
        })
    })
});

router.put('/api/brightness-school-students',function (req,res) {
    var editingStudent = req.param('student');
    Student.findByIdAndUpdate(editingStudent._id,editingStudent).then(function () {
        res.json({
            isSuccess: true,
            message: "Student Information Updated!"
        });
    }).catch(function (error) {
        res.json({
            isSuccess: false,
            message: error.message
        });
    });
});

router.delete('/api/brightness-school-students',function (req,res) {
    Student.findByIdAndRemove(req.param('id')).then(function () {
        res.json({
            isSuccess: true,
            message: "Student Deleted!"
        });
    }).catch(function (error) {
        res.json({
            isSuccess: false,
            message: error.message
        });
    })
});

module.exports = router;
