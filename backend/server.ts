import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { z } from 'zod';
import Enquiry from './models/Enquiry';
import 'dotenv/config';


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (Replace with your actual MongoDB URI)
mongoose.connect(process.env.MONGODB_URI!)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Validation Schema
const enquiryValidation = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
});

// API Endpoint
app.post('/api/enquiry', async (req: Request, res: Response): Promise<void> => {
  try {
    // 1. Validate Request Body
    const validatedData = enquiryValidation.parse(req.body);

    // 2. Save to Database
    const newEnquiry = new Enquiry(validatedData);
    await newEnquiry.save();

    // 3. Return Success Response
    res.status(201).json({ 
        success: true, 
        message: 'Registration successful!' 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, errors: error.errors });
      return;
    }
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});