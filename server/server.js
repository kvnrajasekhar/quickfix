const express = require('express');
const app = express();
const port = 3000; 
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());

// mongoose.connect(mongodb+srv://rajasekhar:vnrs@quickfix.kzsyopz.mongodb.net/, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log('MongoDB connected');
// }).catch(err => {
//     console.error('MongoDB connection error:', err);
// });

app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST'], 
    // allowedHeaders: ['Content-Type'], // Allow only specific headers
}));

const Complaint = require('./modal/Complaint');

app.post('/complaint', async (req,res) => {
    try{
        const complaintData = {
            phoneNumber: req.body.phoneNumber,
            complaint: req.body.complaint,
            address: req.body.address,
            emergency: req.body.emergency,
        };
        const newComplaint = new Complaint(complaintData);
        const savedComplaint = await newComplaint.save();

        res.status(201).json(savedComplaint);
    } catch(error) {
        console.error('Error saving complaint:', error);
        res.status(500).json({ message: 'Failed to save complaint' });
    }
})

app.get('/complaints', async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.status(200).json(complaints);
    } catch (error) {
        console.error("Error fetching all complaints:", error);
        res.status(500).json({ error: 'Failed to fetch complaints.' });
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

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
