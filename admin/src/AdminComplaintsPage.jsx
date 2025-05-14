import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from "lucide-react";

// Animation variants
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
};

const ComplaintsTable = () => {
    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch complaints (replace with your actual API call)
    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                // Simulate API call delay
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Mock API response (replace with your actual API endpoint)
                const mockResponse = [
                    {
                        _id: '1',
                        phoneNumber: '9876543210',
                        complaint: 'Power outage in Sector 5.',
                        address: 'House No. 123, Sector 5, Guntur',
                        emergency: true,
                        status: 'Pending',
                        createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
                    },
                    {
                        _id: '2',
                        phoneNumber: '8765432109',
                        complaint: 'Faulty wiring in my home.',
                        address: 'Apartment 4B, ABC Apartments, Guntur',
                        emergency: false,
                        status: 'In Progress',
                        createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
                    },
                    {
                        _id: '3',
                        phoneNumber: '9988776655',
                        complaint: 'Street light not working.',
                        address: 'Near XYZ School, Guntur',
                        emergency: true,
                        status: 'Resolved',
                        createdAt: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
                    },
                    {
                        _id: '4',
                        phoneNumber: '7788996655',
                        complaint: 'Meter is sparking',
                        address: 'PQR Colony, Guntur',
                        emergency: true,
                        status: 'Pending',
                        createdAt: new Date().toISOString(),
                    },
                    {
                        _id: '5',
                        phoneNumber: '6677889900',
                        complaint: 'Need a new connection',
                        address: 'New Layout, Guntur',
                        emergency: false,
                        status: 'Cancelled',
                        createdAt: new Date().toISOString()
                    }
                ];

                setComplaints(mockResponse);
                setLoading(false);
            } catch (err) {
                setError(err.message || 'Failed to fetch complaints.');
                setLoading(false);
            }
        };

        fetchComplaints();
    }, []);

    // Function to update complaint status (replace with your actual API call)
    const handleStatusChange = async (id, newStatus) => {
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 500));

            // Update status in the local state
            setComplaints(prevComplaints =>
                prevComplaints.map(complaint =>
                    complaint._id === id ? { ...complaint, status: newStatus } : complaint
                )
            );

            // In a real application, you would send a request to your backend API here
            console.log(`Complaint ${id} status updated to ${newStatus}`);
        } catch (err) {
            setError('Failed to update status.');
        }
    };

    // Helper function to format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

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
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Complaints Dashboard
                </h1>
                <AnimatePresence>
                    {complaints.length === 0 ? (
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="text-center text-gray-500 py-8"
                        >
                            No complaints found.
                        </motion.div>
                    ) : (
                        <div className="space-y-4">
                            {complaints.map((complaint) => (
                                <motion.div
                                    key={complaint._id}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className=""
                                >
                                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                        <div className="p-4 border-b">
                                            <div className="flex justify-between items-start gap-4">
                                                <div>
                                                    <div className="text-lg font-semibold text-gray-900">Complaint ID: {complaint._id}</div>
                                                    <span className={
                                                        `ml-2 text-xs font-medium px-2 py-1 rounded ${complaint.emergency ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`
                                                    }>
                                                        {complaint.emergency ? 'Emergency' : 'Normal'}
                                                    </span>
                                                </div>
                                                <span className="text-sm text-gray-500">
                                                    {formatDate(complaint.createdAt)}
                                                </span>
                                            </div>
                                            <p className="text-gray-700">
                                                Phone Number: {complaint.phoneNumber}
                                            </p>

                                        </div>
                                        <div className="p-4">
                                            <p className="text-gray-700 mb-2">
                                                <strong className="font-medium">Complaint:</strong> {complaint.complaint}
                                            </p>
                                            <p className="text-gray-700 mb-4">
                                                <strong className="font-medium">Address:</strong> {complaint.address}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <span className="text-sm font-medium text-gray-700">Status: </span>
                                                    <span className={
                                                        `font-medium px-2 py-1 rounded
                                                        ${complaint.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                                            complaint.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                                                complaint.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                                                                    'bg-gray-100 text-gray-800'}`
                                                    }>
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
                            ))
                            }
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ComplaintsTable;
