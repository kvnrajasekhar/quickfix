import React from 'react';
import { useLocation } from 'react-router-dom';

const StatusCard = ({ complaint }) => { 
    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending': return 'bg-yellow-100 border-yellow-400';
            case 'In Progress': return 'bg-blue-100 border-blue-400';
            case 'Resolved': return 'bg-green-100 border-green-400';
            case 'Cancelled': return 'bg-gray-100 border-gray-400';
            default: return 'bg-gray-100 border-gray-400';
        }
    };

    if (!complaint) {
        return <div className="text-gray-700">No complaint available.</div>;
    }

    const statusColor = getStatusColor(complaint.status);

    return (
        <div className={`${statusColor} rounded-xl shadow-lg p-6 space-y-4 border`}>
            <h2 className="text-2xl font-semibold text-gray-900">Complaint Status</h2>
            <div className="border rounded-md p-4">
                <p className="text-gray-700">
                    <span className="font-semibold">Complaint ID:</span> {complaint._id}
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold">Phone Number:</span> {complaint.phoneNumber}
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold">Address:</span> {complaint.address}
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold">Complaint:</span> {complaint.complaint || "N/A"}
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold">Emergency:</span> {complaint.emergency ? 'Yes' : 'No'}
                </p>
                <p className={`${"font-semibold px-2 py-1 rounded-full inline-block"} ${statusColor}`}>
                    Status: {complaint.status}
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold">Created At:</span> {new Date(complaint.createdAt).toLocaleString()}
                </p>
            </div>
        </div>
    );
};

const ComplaintStatusPage = () => {
    const { state } = useLocation();
    const complaint = state?.complaint;

    if (!complaint) {
        return (
            <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
                        <h2 className="text-2xl font-semibold text-gray-900">No Complaint Found</h2>
                        <p className="text-gray-700">
                            Please submit a complaint to view its status.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                <StatusCard complaint={complaint} />
            </div>
        </div>
    );
};

export default ComplaintStatusPage;
