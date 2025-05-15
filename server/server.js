const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const cors = require('cors');

    require('dotenv').config();

app.use(express.json());


const url = process.env.MONGO_URL;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    // allowedHeaders: ['Content-Type'], // Allow only specific headers
}));

const Complaint = require('./modal/Complaint');

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
        res.status(500).json({ message: 'Failed to save complaint' });
    }
});


app.get('/complaints', async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.status(200).json(complaints);
    } catch (error) {
        console.error("Error fetching all complaints:", error);
        res.status(500).json({ error: 'Failed to fetch complaints.' });
    }
});




async function updateComplaintStatus(req, res) {
    try {
        const complaintId = req.params.id;
        const newStatus = req.body.status;

        const updatedComplaint = await Complaint.findByIdAndUpdate(
            complaintId,
            { status: newStatus, updatedAt: Date.now() }, // Also update updatedAt
            { new: true } // Return the modified document
        );

        if (!updatedComplaint) {
            return res.status(404).json({ message: 'Complaint not found' });
        }

        res.status(200).json(updatedComplaint);
    } catch (error) {
        console.error('Error updating complaint status:', error);
        res.status(500).json({ message: 'Failed to update complaint status' });
    }
}

app.patch('/complaints/:id', updateComplaintStatus);

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

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
