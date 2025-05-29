import React, { useContext } from 'react'; 
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '../index'; 

// Status Card Component
const StatusCard = ({ complaint }) => {
    const { t } = useContext(LanguageContext); 

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
        return <div className="text-gray-700">{t('ComplaintStatusPage', 'noComplaintAvailable')}</div>;
    }

    const statusColor = getStatusColor(complaint.status);

    return (
        <div className={`${statusColor} rounded-xl shadow-lg p-6 space-y-4 border`}>
            <h2 className="text-2xl font-semibold text-gray-900">{t('ComplaintStatusPage', 'complaintStatusTitle')}</h2>
            <div className="border rounded-md p-4 space-y-2">
                <p className="text-gray-700">
                    <span className="font-semibold">{t('ComplaintStatusPage', 'complaintId')}</span> {complaint._id}
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold">{t('ComplaintStatusPage', 'phoneNumber')}</span> {complaint.phoneNumber}
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold">{t('ComplaintStatusPage', 'address')}</span> {complaint.address}
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold">{t('ComplaintStatusPage', 'complaint')}</span> {complaint.complaint || "N/A"}
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold">{t('ComplaintStatusPage', 'emergency')}</span> {complaint.emergency ? t('ComplaintStatusPage', 'yes') : t('ComplaintStatusPage', 'no')}
                </p>
                <p className={`${"font-semibold px-2 py-1 rounded-full inline-block"} ${statusColor}`}>
                    {t('ComplaintStatusPage', 'status')} {complaint.status}
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold">{t('ComplaintStatusPage', 'createdAt')}</span> {new Date(complaint.createdAt).toLocaleString()}
                </p>
            </div>
        </div>
    );
};

const ComplaintStatusPage = () => {
    const { state } = useLocation();
    const complaint = state?.complaint;
    const { t } = useContext(LanguageContext); // Access the translation function

    if (!complaint) {
        return (
            <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
                        <h2 className="text-2xl font-semibold text-gray-900">{t('ComplaintStatusPage', 'noComplaintFoundTitle')}</h2>
                        <p className="text-gray-700">
                            {t('ComplaintStatusPage', 'noComplaintFoundPrompt')}
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
