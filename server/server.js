const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

app.use(express.json());

const MONGO_URL = process.env.MONGO_URL;
console.log(MONGO_URL); 

// CORS configuration
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
}));


// Mongoose connection
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => {
        console.error('MongoDB initial connection error:', err);
    });

// Mongoose connection event listeners
// const db = mongoose.connection;

// db.on('error', (err) => {
//     console.error('MongoDB connection error:', err);
// });

// db.on('connected', () => {
//     console.log('MongoDB connected');
// });

// db.on('disconnected', () => {
//     console.log('MongoDB disconnected');
// });

// Define the Complaint schema and model (assuming this is in modal/Complaint.js)
const Complaint = require('./modal/Complaint');

// Route to handle creating a new complaint
app.post('/complaint', async (req, res) => {
    try {
        const complaintData = {
            phoneNumber: req.body.phoneNumber,
            complaint: req.body.complaint,
            address: req.body.address,
            emergency: req.body.emergency,
        };
        const newComplaint = new Complaint(complaintData);
        const savedComplaint = await newComplaint.save();
        res.status(201).json(savedComplaint);
    } catch (error) {
        console.error('Error saving complaint:', error);
        res.status(500).json({ message: 'Failed to save complaint', error: error.message });
    }
});

// Route to get all complaints
app.get('/complaints', async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.status(200).json(complaints);
    } catch (error) {
        console.error("Error fetching all complaints:", error);
        res.status(500).json({ error: 'Failed to fetch complaints.', error: error.message }); // Include the error message
    }
});

// Route to update a complaint's status
app.patch('/complaints/:id', async (req, res) => {
    try {
        const complaintId = req.params.id;
        const newStatus = req.body.status;

        const updatedComplaint = await Complaint.findByIdAndUpdate(
            complaintId,
            { status: newStatus, updatedAt: Date.now() },
            { new: true }
        );

        if (!updatedComplaint) {
            return res.status(404).json({ message: 'Complaint not found' });
        }

        res.status(200).json(updatedComplaint);
    } catch (error) {
        console.error('Error updating complaint status:', error);
        res.status(500).json({ message: 'Failed to update complaint status', error: error.message }); // Include error
    }
});

let userName = "";

app.post('/', (req, res) => {
    userName = req.body.name;
    console.log(userName);
    res.send(`Welcome ${userName}`);
});

app.get('/', (req, res) => {
    res.send(`${userName}`);
});

app.get('/hi', (req, res) => {
    res.send("Hello World");
});

// Global error handler for unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // You might want to take additional actions here, like logging to a file or restarting the server
});

// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });
