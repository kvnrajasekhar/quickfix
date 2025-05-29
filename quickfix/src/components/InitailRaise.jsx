import React, { useContext } from "react"; 
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Phone, ClipboardList } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { LanguageContext } from '../index'; 

function InitialRaise() {
    const navigate = useNavigate();
    const { t } = useContext(LanguageContext); 

    // Validation schema using Yup
    const validationSchema = Yup.object().shape({
        phoneNumber: Yup.string()
            .required(t('InitialRaise', 'phoneNumberRequired')) 
            .matches(/^[0-9]{10}$/, t('InitialRaise', 'phoneNumberInvalid')),
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
                    className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${type === 'tel' ? 'pl-10' : 'pl-3'} py-2.5`}
                    {...props}
                />
            </div>
            <ErrorMessage name={name} component="p" className="mt-2 text-sm text-red-600" />
        </div>
    );

    const handleSubmitForm = (values, { resetForm }) => {
        console.log(values);
        resetForm();
        navigate("/complaint", { state: { phoneNumber: values.phoneNumber } });
    };

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
                    <div>
                        <h2 className="text-center text-3xl font-extrabold text-gray-900">
                            {t('InitialRaise', 'toProceedTitle')}
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            {t('InitialRaise', 'phoneNumberPrompt')}
                        </p>
                    </div>
                    <Formik
                        initialValues={{
                            phoneNumber: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmitForm}
                    >
                        <Form className="mt-8 space-y-6">
                            <div className="rounded-md shadow-sm -space-y-px">
                                <FormInputField
                                    label={t('InitialRaise', 'phoneNumberLabel')}
                                    name="phoneNumber"
                                    type="tel"
                                    placeholder={t('InitialRaise', 'phoneNumberPlaceholder')}
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
                                    {t('InitialRaise', 'nextButton')}
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default InitialRaise;