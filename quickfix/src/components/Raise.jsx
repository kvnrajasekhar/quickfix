import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Phone, MapPin, ClipboardList, CheckCircle } from 'lucide-react';
import { useLocation } from "react-router-dom";
import axios from "axios";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
    complaint: Yup.string(), // Description is now optional
    address: Yup.string().required("Address is required"),
    emergency: Yup.boolean(),
});

// Reusable Input Field Component
const FormInputField = ({ label, name, placeholder, type = "text", ...props }) => (
    <div className="mb-4">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
            {type === "tel" && (
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-500" aria-hidden="true" />
                </div>
            )}
            <Field
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2.5 ${type === 'tel' ? 'pl-10' : 'pl-3'}`} // Increased padding
                {...props}
            />
        </div>
        <ErrorMessage name={name} component="p" className="mt-2 text-sm text-red-600" />
    </div>
);

// Reusable Textarea Field
const FormTextareaField = ({ label, name, placeholder, ...props }) => (
    <div className="mb-4">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
            <Field
                as="textarea"
                id={name}
                name={name}
                placeholder={placeholder}
                rows={4}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2.5 px-3" // Increased padding
                {...props}
            />
        </div>
        <ErrorMessage name={name} component="p" className="mt-2 text-sm text-red-600" />
    </div>
);

// Reusable Select Field
const FormSelectField = ({ label, name, options, ...props }) => (
    <div className="mb-4">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <Field
            as="select"
            id={name}
            name={name}
            className="mt-1 block w-full pl-3 pr-10 py-2.5 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm" // Increased padding
            {...props}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </Field>
        <ErrorMessage name={name} component="p" className="mt-2 text-sm text-red-600" />
    </div>
);

// Status Card Component
const StatusCard = ({ complaint }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'pending': return 'text-yellow-500 bg-yellow-100 border-yellow-400';
            case 'in progress': return 'text-blue-500 bg-blue-100 border-blue-400';
            case 'resolved': return 'text-green-500 bg-green-100 border-green-400';
            case 'cancelled': return 'text-gray-500 bg-gray-100 border-gray-400';
            default: return 'text-gray-700 bg-gray-100 border-gray-400';
        }
    };

    const statusColor = getStatusColor(complaint.status);

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
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

function Raise() {
    const [submissionMessage, setSubmissionMessage] = useState("");
    const [complaintDetails, setComplaintDetails] = useState(null);
    const location = useLocation();
    const initialPhoneNumber = location.state?.phoneNumber || "";

    const handleSubmitForm = (values, { resetForm }) => {
        const api = "https://quickfix-server.vercel.app";
        const complaintData = {
            phoneNumber: values.phoneNumber,
            complaint: values.complaint,
            address: values.address,
            emergency: values.emergency,
        };

        axios.post(`${api}/complaint`, complaintData)
            .then((response) => {
                console.log("Complaint submitted successfully:", response.data);
                setSubmissionMessage("Complaint submitted successfully!");
                setComplaintDetails(response.data);
                resetForm();

            })
            .catch((error) => {
                console.error("Error submitting complaint:", error);
                setSubmissionMessage("Failed to submit complaint.");
                setComplaintDetails(null);
            });
    };

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
                    <div>
                        <h2 className="text-center text-3xl font-extrabold text-gray-900">
                            Raise a Complaint
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Please provide details of your electrical issue.
                        </p>
                    </div>
                    {!submissionMessage ? (
                        <Formik
                            initialValues={{
                                phoneNumber: initialPhoneNumber,
                                complaint: "",
                                address: "",
                                emergency: false,
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmitForm}
                        >
                            <Form className="mt-8 space-y-6">
                                <div className="rounded-md shadow-sm -space-y-px">
                                    <FormInputField
                                        label="Phone Number"
                                        name="phoneNumber"
                                        type="tel"
                                        placeholder="Enter your phone number"
                                    />
                                    <FormTextareaField
                                        label="Complaint"
                                        name="complaint"
                                        placeholder="Describe your complaint"
                                    />
                                    <FormInputField
                                        label="Address"
                                        name="address"
                                        placeholder="Enter the location"
                                        type="text"
                                    />
                                    <FormSelectField
                                        label="Emergency"
                                        name="emergency"
                                        options={[
                                            { label: "No", value: false },
                                            { label: "Yes", value: true },
                                        ]}
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="text-sm">
                                        {/* */}
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <ClipboardList className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                        </span>
                                        Submit Complaint
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    ) : (
                        <div className="mt-8">
                            <StatusCard complaint={complaintDetails} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Raise;
