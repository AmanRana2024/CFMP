import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/feedbackDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.get('/', (req, res) => res.send('Server is running'));

// Feedback routes
// Add more routes as needed (e.g., POST feedback, GET analytics)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
