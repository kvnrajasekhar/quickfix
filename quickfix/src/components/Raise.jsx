import React, { useState, useEffect, useContext } from "react"; // Import useContext
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import { Phone, MapPin, ClipboardList, CheckCircle } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import { LanguageContext } from '../index'; // Import LanguageContext

function Raise() {
    const [submissionMessage, setSubmissionMessage] = useState("");
    const [userLocation, setUserLocation] = useState("");
    const [locationLoading, setLocationLoading] = useState(true); // Track location loading state
    const [locationError, setLocationError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const initialPhoneNumber = location.state?.phoneNumber || "";
    const { t } = useContext(LanguageContext); // Access the translation function

    // Validation schema using Yup
    const validationSchema = Yup.object().shape({
        phoneNumber: Yup.string()
            .required(t('Raise', 'phoneNumberRequired')) // Translated
            .matches(/^[0-9]{10}$/, t('Raise', 'phoneNumberInvalid')), // Translated
        complaint: Yup.string(),
        address: Yup.string().required(t('Raise', 'addressRequired')), // Translated
        emergency: Yup.boolean(),
    });

    // Reusable Input Field Component
    const FormInputField = ({ label, name, placeholder, type = "text", ...props }) => {
      const { setFieldValue, values } = useFormikContext();
        return (
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
                {type === "text" && name === "address" && (
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-500" aria-hidden="true" />
                    </div>
                )}
                <Field
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${type === 'tel' ? 'pl-10' : (type === 'text' && name === 'address' ? 'pl-10' : 'pl-3')} py-2.5`} // Increased padding
                    {...props}
                    onChange={(e) => {
                        setFieldValue(name, e.target.value);
                    }}

                    value={values[name]}
                />
            </div>
            <ErrorMessage name={name} component="p" className="mt-2 text-sm text-red-600" />
        </div>
    );
    };

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

    const fetchLocation = () => {
        setLocationLoading(true);
        setLocationError(null);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    // Use a geocoding service (like OpenStreetMap's Nominatim) to get the address
                    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
                        .then(response => response.json())
                        .then(data => {
                            if (data.error) {
                                setLocationError(t('Raise', 'locationFetchError')); // Translated
                            } else {
                                const formattedAddress = data.display_name;
                                setUserLocation(formattedAddress);
                            }
                        })
                        .catch(error => {
                            console.error("Error fetching address:", error);
                            setLocationError(t('Raise', 'locationFetchErrorManual')); // Translated
                        })
                        .finally(() => setLocationLoading(false));
                },
                (error) => {
                    console.error("Error getting location:", error);
                    setLocationError(t('Raise', 'locationPermissionDenied')); // Translated
                    setLocationLoading(false);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 5000,
                }
            );
        } else {
            setLocationError(t('Raise', 'geolocationNotSupported')); // Translated
            setLocationLoading(false);
        }
    };

    useEffect(() => {
        fetchLocation();
    }, []);

    const handleSubmitForm = (values, { resetForm }) => {
        console.log(values);
        setSubmissionMessage(t('Raise', 'complaintSubmittedSuccess')); // Translated

        const api = "https://quickfix-server.vercel.app";
        console.log(api);
        const complaintData = {
            phoneNumber: values.phoneNumber,
            complaint: values.complaint,
            address: values.address,
            emergency: values.emergency,
        };
        axios.post(`${api}/complaint`, complaintData)
            .then((response) => {
                console.log("Complaint submitted successfully:", response.data);
                navigate('/status', { state: { complaint: response.data } });
            })
            .catch((error) => {
                console.error("Error submitting complaint:", error);
                setSubmissionMessage(t('Raise', 'complaintSubmittedFailed')); // Translated
            });
        resetForm();
    };

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
                    <div>
                        <h2 className="text-center text-3xl font-extrabold text-gray-900">
                            {t('Raise', 'raiseComplaintTitle')}
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            {t('Raise', 'raiseComplaintPrompt')}
                        </p>
                    </div>
                    {submissionMessage ? (
                        <div className="rounded-md bg-green-50 px-4 py-3 text-green-800 sm:px-6 lg:px-8">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <CheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium">
                                        {submissionMessage}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Formik
                            initialValues={{
                                phoneNumber: initialPhoneNumber,
                                complaint: "",
                                address:  locationLoading ? t('Raise', 'fetchingLocation') : userLocation, // Translated
                                emergency: false,
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmitForm}
                            enableReinitialize={!locationLoading}
                        >
                            {({ isSubmitting, setFieldValue, values }) => (
                                <Form className="mt-8 space-y-6">
                                    <div className="rounded-md shadow-sm -space-y-px">
                                        <FormInputField
                                            label={t('Raise', 'phoneNumberLabel')}
                                            name="phoneNumber"
                                            type="tel"
                                            placeholder={t('Raise', 'phoneNumberPlaceholder')}
                                        />
                                        <FormTextareaField
                                            label={t('Raise', 'complaintLabel')}
                                            name="complaint"
                                            placeholder={t('Raise', 'complaintPlaceholder')}
                                        />

                                        <FormInputField
                                            label={t('Raise', 'addressLabel')}
                                            name="address"
                                            type="text"
                                            placeholder={t('Raise', 'addressPlaceholder')}
                                            disabled={locationLoading}
                                        />
                                        {locationError && (
                                            <p className="mt-2 text-sm text-red-600">{locationError}</p>
                                        )}
                                        <FormSelectField
                                            label={t('Raise', 'emergencyLabel')}
                                            name="emergency"
                                            options={[
                                                { label: t('Raise', 'emergencyNo'), value: false },
                                                { label: t('Raise', 'emergencyYes'), value: true },
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
                                            disabled={isSubmitting || locationLoading}
                                        >
                                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                                <ClipboardList className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                            </span>
                                            {locationLoading ? t('Raise', 'fetchingLocationButton') : t('Raise', 'submitComplaintButton')}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Raise;
