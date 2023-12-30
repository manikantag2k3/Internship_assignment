import { Schema, model } from 'mongoose';

const departmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  hod: {  // Head of Department
    type: Schema.Types.ObjectId,
    ref: 'Employee'
  }
}, {
  timestamps: true
});

const Department = model('Department', departmentSchema);

export default Department;
