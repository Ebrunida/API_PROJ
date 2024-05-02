const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/students');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/students', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});   

app.use('/students', studentRoutes);

//
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});