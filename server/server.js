const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Define the employees array
const employees = [];

// Handle GET requests to /api route
app.get('/api', (req, res) => {
    res.json({ employee: employees });
  });

// Handle POST requests to /api/employees route
app.post('/api/employees', (req, res) => {
    console.log('Received employee:', req.body);
    const newEmployee = req.body;
    newEmployee.id = employees.length + 1;
    employees.push(newEmployee);
    console.log('Employees after add:', employees);
    res.status(201).json({ message: 'Employee added successfully', employee: newEmployee });
  });

  app.get('/api/employees', (req, res) => {
    res.status(200).json({ employees });
  });

app.listen(5000, () => console.log('Listening on 5000'));
