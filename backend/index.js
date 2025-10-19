const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Schemas
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  filiere: String
});

const teacherSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  experience_years: Number,
  filiere: [String]
});

const Student = mongoose.model('Student', studentSchema);
const Teacher = mongoose.model('Teacher', teacherSchema);

// Routes
app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

app.get('/teachers', async (req, res) => {
  const teachers = await Teacher.find();
  res.json(teachers);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
