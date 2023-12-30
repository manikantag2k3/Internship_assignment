const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


const connectDB = require('./config/db'); // Assuming you have a db.js in your config folder

const employeeRoutes = require('./api/routes/employeeRoutes');
const departmentRoutes = require('./api/routes/departmentRoutes');

// Add other routes imports here


const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Body parser



// Routes
app.use('/api/employees', employeeRoutes);
app.use('/api/departments', departmentRoutes);

// Error Handling Middlewares (Assuming you have these in your middleware folder)
const { notFound, errorHandler } = require('./api/middleware/errorMiddleware.js');
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
