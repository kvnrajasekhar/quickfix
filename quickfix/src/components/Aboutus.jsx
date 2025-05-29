import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import {
    Briefcase, 
    Zap,      
    Users,
    CheckCircle, 
    Phone,       
    MapPin,
} from 'lucide-react';
import { LanguageContext } from '../index'; 

const Aboutus = () => {
    const { t } = useContext(LanguageContext); 

    // Animation variants (no changes needed here)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-start py-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.section
                className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
                variants={itemVariants}
            >
                {/* Introduction Section */}
                <div className="text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">
                        {t('Aboutus', 'about_us_heading')} 
                    </h2>
                    <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
                        {t('Aboutus', 'about_us_intro')} 
                    </p>
                </div>

                {/* Our Story Section */}
                <div className="bg-white shadow-md p-6 sm:p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
                                {t('Aboutus', 'our_story_title')} 
                            </h3>
                            <p className="text-gray-700 text-base sm:text-lg">
                                {t('Aboutus', 'our_story_paragraph_1')}
                            </p>
                            <p className="text-gray-700 text-base sm:text-lg mt-4">
                                {t('Aboutus', 'our_story_combined_paragraph_2_3')}
                            </p>
                        </div>
                        <div className="hidden md:flex items-center justify-center">
                            <Briefcase className="w-48 h-48 text-blue-400 opacity-50" />
                        </div>
                    </div>
                </div>

                {/* Our Services Section */}
                <div className="bg-white shadow-md p-6 sm:p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="md:order-2">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
                                {t('Aboutus', 'our_services_title')}
                            </h3>
                            <ul className="list-none space-y-3">
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    {t('Aboutus', 'service_emergency')}
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    {t('Aboutus', 'service_residential_commercial')} 
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    {t('Aboutus', 'service_installations_repairs')}
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    {t('Aboutus', 'service_wiring')}
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    {t('Aboutus', 'service_lighting')}
                                </li>
                            </ul>
                        </div>
                        <div className="md:order-1 hidden md:flex items-center justify-center">
                            <Zap className="w-48 h-48 text-yellow-400 opacity-50" />
                        </div>
                    </div>
                </div>

                {/* Our Team/Values Section */}
                <div className="bg-white shadow-md p-6 sm:p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
                                {t('Aboutus', 'our_values_title')} 
                            </h3>
                            <ul className="list-none space-y-3">
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    {t('Aboutus', 'value_quality_workmanship')} 
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    {t('Aboutus', 'value_reliability')} 
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    {t('Aboutus', 'value_integrity')} 
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    {t('Aboutus', 'value_customer_focus')} 
                                </li>
                            </ul>
                        </div>
                        <div className="hidden md:flex items-center justify-center">
                            <Users className="w-44 h-44 text-emerald-400 opacity-50" />
                        </div>
                    </div>
                </div>

                {/* Contact Us Section */}
                <div className="bg-white shadow-md p-6 sm:p-8">
                    <div className="text-center">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
                            {t('Aboutus', 'contact_us_heading')} 
                        </h3>
                        <p className="text-gray-600 text-lg sm:text-xl">
                            {t('Aboutus', 'contact_us_description')} 
                        </p>
                        <div className="mt-6 space-y-4">
                            <p className="text-gray-700 flex items-center justify-center">
                                <Phone className="w-5 h-5 mr-2 text-blue-500" />
                                {t('Aboutus', 'phone_label')}: {t('Aboutus', 'phone_number')} 
                            </p>
                            <p className="text-gray-700 flex items-center justify-center">
                                <MapPin className="w-5 h-5 mr-2 text-green-500" />
                                {t('Aboutus', 'address_label')}: {t('Aboutus', 'address_line_1')} 
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    );
};

export default Aboutus;