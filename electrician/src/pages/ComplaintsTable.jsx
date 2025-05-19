import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from "lucide-react";
import axios from 'axios';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
};

const ComplaintsTable = () => {
    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                const api = "https://quickfix-server.vercel.app";
                const response = await axios.get(`${api}/complaints`);
                setComplaints(response.data);
                setLoading(false);
                console.log(response.data);
            } catch (err) {
                setError(err.message || 'Failed to fetch complaints.');
                setLoading(false);
            }
        };

        // Set initial date to today's date
        const today = new Date().toISOString().split('T')[0];
        setSelectedDate(today);
        fetchComplaints();
    }, []);

    const handleStatusChange = async (id, newStatus) => {
        try {
            const api = "https://quickfix-server.vercel.app";
            await axios.patch(`${api}/complaints/${id}`, { status: newStatus });

            setComplaints(prevComplaints =>
                prevComplaints.map(complaint =>
                    complaint._id === id ? { ...complaint, status: newStatus } : complaint
                )
            );
            console.log(`Complaint ${id} status updated to ${newStatus}`);
        } catch (err) {
            setError('Failed to update status.');
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    };

        const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setSelectedDate(selectedDate);
    };

    const filteredComplaints = complaints.filter(complaint => {
        if (!selectedDate) {
            return true;
        }
        const complaintDate = new Date(complaint.createdAt).toISOString().split('T')[0];
        return complaintDate === selectedDate;
    }).sort((a, b) => {
        // Move resolved complaints to the bottom
        if (a.status === 'Resolved' && b.status !== 'Resolved') {
            return 1;
        }
        if (a.status !== 'Resolved' && b.status === 'Resolved') {
            return -1;
        }
        return 0; // Maintain original order for other statuses
    });

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-gray-500 text-lg">Loading complaints...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <AlertCircle className="h-4 w-4 inline-block mr-2" />
                    <strong className="font-bold">Error! </strong>
                    <span className="block sm:inline">{error}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Complaints Dashboard
                </h1>

                <div className="mb-4 flex justify-end">
                    <label htmlFor="dateFilter" className="mr-2 text-gray-700">Filter by Date:</label>
                    <input
                        type="date"
                        id="dateFilter"
                        className="border border-gray-300 rounded-md py-2 px-3"
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                </div>

                <AnimatePresence>
                    {filteredComplaints.length === 0 ? (
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="text-center text-gray-500 py-8"
                        >
                            No complaints found for the selected criteria.
                        </motion.div>
                    ) : (
                        <div className="space-y-4">
                            {filteredComplaints.map((complaint) => (
                                <motion.div
                                    key={complaint._id}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <div className={`rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${complaint.status === 'Resolved' ? 'bg-green-100' : 'bg-white'}`}>
                                        <div className="px-6 py-4 border-b border-gray-200">
                                            <div className="flex justify-between items-start gap-4">
                                                <div>
                                                    <div className="text-lg font-semibold text-gray-900">Complaint ID: {complaint._id}</div>
                                                    <span className={`ml-2 text-xs font-medium px-2 py-1 rounded ${complaint.emergency ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                        {complaint.emergency ? 'Emergency' : 'Normal'}
                                                    </span>
                                                </div>
                                                <span className="text-sm text-gray-500">
                                                    {formatDate(complaint.createdAt)}
                                                </span>
                                            </div>
                                            <p className="text-gray-700 mt-2">
                                                Phone Number: <span className="font-medium text-gray-900">{complaint.phoneNumber}</span>
                                            </p>
                                        </div>
                                        <div className="p-6">
                                            <p className="text-gray-700 mb-3">
                                                <strong className="font-medium">Complaint:</strong> {complaint.complaint}
                                            </p>
                                            <p className="text-gray-700 mb-4">
                                                <strong className="font-medium">Address:</strong> {complaint.address}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <span className="text-sm font-medium text-gray-700">Status: </span>
                                                    <span className={`font-medium px-2 py-1 rounded text-white
                                                        ${complaint.status === 'Pending' ? 'bg-yellow-500' :
                                                            complaint.status === 'In Progress' ? 'bg-blue-500' :
                                                                complaint.status === 'Resolved' ? 'bg-green-500' :
                                                                    'bg-gray-400'}`}>
                                                        {complaint.status}
                                                    </span>
                                                </div>
                                                <select
                                                    value={complaint.status}
                                                    onChange={(e) => handleStatusChange(complaint._id, e.target.value)}
                                                    className="w-48 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="In Progress">In Progress</option>
                                                    <option value="Resolved">Resolved</option>
                                                    <option value="Cancelled">Cancelled</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ComplaintsTable;

