import Department, { find, findById } from '../models/Department'; // Replace with your Department model

// Get all departments
const getAllDepartments = async (req, res) => {
  try {
    const departments = await find();
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new department
const addDepartment = async (req, res) => {
  const department = new Department({
    // initialize with data from req.body
  });
  try {
    const newDepartment = await department.save();
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single department by ID
const getDepartmentById = async (req, res) => {
  try {
    const department = await findById(req.params.id);
    if (!department) return res.status(404).json({ message: 'Department not found' });
    res.json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a department
const updateDepartment = async (req, res) => {
  try {
    const department = await findById(req.params.id);
    if (!department) return res.status(404).json({ message: 'Department not found' });

    // Update department properties here

    const updatedDepartment = await department.save();
    res.json(updatedDepartment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a department
const deleteDepartment = async (req, res) => {
  try {
    const department = await findById(req.params.id);
    if (!department) return res.status(404).json({ message: 'Department not found' });

    await department.remove();
    res.json({ message: 'Department deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getAllDepartments,
  addDepartment,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
};
