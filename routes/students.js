const express = require('express');
const Student = require('../models/student');
const calculateAverage = require('../utils/calculateAverage');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const { name, surname, stdNumber } = req.query;
        
        grades.forEach(grade => {
            grade.avgGrade = calculateAverage(grade.grades);
        });
    
        const newStudent = new Student({
            name,
            surname,
            stdNumber,
            grades
        });

        await newStudent.save();
        res.status(201).send(newStudent);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;