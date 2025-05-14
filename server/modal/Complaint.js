const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/ // Validation: 10-digit number
    },
    complaint: {
        type: String,
        required: false, 
        default: "" 
    },
    address: {
        type: String,
        required: true
    },
    emergency: {
        type: Boolean,
        default: false
    },
    // status: { 
    //     type: String,
    //     enum: ['Pending', 'In Progress', 'Resolved', 'Cancelled'],
    //     default: 'Pending' 
    // },
    createdAt: { 
        type: Date,
        default: Date.now
    },
    // updatedAt: {
    //     type: Date,
    //     default: Date.now
    // }
});

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;
