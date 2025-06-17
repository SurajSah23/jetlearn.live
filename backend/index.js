import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Registration from './models/Registration.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('✅ MongoDB Connected');
});

// POST - Save form data
app.post('/api/register', async (req, res) => {
  try {
    console.log('📥 Incoming data:', req.body);
    const newEntry = new Registration(req.body);
    await newEntry.save();
    res.status(201).json({ message: 'Registered successfully' });
  } catch (error) {
    console.error('❌ Error saving data:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// GET - View all registrations (optional)
app.get('/api/register', async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.status(200).json(registrations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch registrations' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
