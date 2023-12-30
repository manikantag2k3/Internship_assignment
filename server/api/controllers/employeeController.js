import Employee, { find, findById } from '../models/Employee'; // Replace with your Employee model

// Get all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new employee
const addEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Get a single employee by ID
const getEmployeeById = async (req, res) => {
  try {
    const employee = await findById(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an employee
const updateEmployee = async (req, res) => {
  try {
    const employee = await findById(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });

    // Update employee properties here

    const updatedEmployee = await employee.save();
    res.json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an employee
const deleteEmployee = async (req, res) => {
  try {
    const employee = await findById(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });

    await employee.remove();
    res.json({ message: 'Employee deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getAllEmployees,
  addEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
