import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
  event: String,
  parentName: String,
  mobile: String,
  email: String,
  kidName: String,
  kidAge: Number
});

export default mongoose.model('Registration', registrationSchema);
