import React from 'react';
import { motion } from 'framer-motion';
import {
    Briefcase, // For About Us
    Zap,       // For Electricity/Services
    Users,     // For Team or Customers
    CheckCircle, // For Values or Quality
    Phone,      // For Contact
    MapPin,
} from 'lucide-react';

const Aboutus = () => {
    // Animation variants
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
            className="min-h-screen  flex flex-col items-center justify-start py-16" 
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
                        About Us
                    </h2>
                    <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
                        Welcome to Quickfix, your reliable partner for all your electrical needs.
                        With a foundation built on decades of experience and a commitment to
                        quality service, we are here to provide you with the solutions you
                        deserve.
                    </p>
                </div>

                {/* Our Story Section */}
                <div className="bg-white  shadow-md p-6 sm:p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
                                Our Story
                            </h3>
                            <p className="text-gray-700 text-base sm:text-lg">
                                With the benefit of guidance from a highly experienced electrician
                                boasting over four decades in the field, Quickfix offers dependable
                                electrical services. Our team of skilled, modern technicians is
                                ready to assist you 24/7 throughout the city and, where possible, in
                                surrounding areas.
                            </p>
                            <p className="text-gray-700 text-base sm:text-lg mt-4">
                                For us at Quickfix, performing quality work is paramount, a
                                principle we hold with sincerity. We approach every task with
                                integrity and a genuine commitment to your needs. Ensuring your
                                peace of mind through reliable and honest service is our humble
                                aim.
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
                                Our Services
                            </h3>
                            <ul className="list-none space-y-3">
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    24/7 Emergency Electrical Services
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    Residential and Commercial Electrical Work
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    Installations, Repairs, and Maintenance
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    Wiring and Rewiring
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    Lighting Solutions
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
                                Our Values
                            </h3>
                            <ul className="list-none space-y-3">
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    Quality Workmanship: We take pride in delivering the highest standards of electrical service.
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    Reliability: You can count on us to be there when you need us, 24/7.
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    Integrity: We operate with honesty and transparency in all our dealings.
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    Customer Focus: Your satisfaction and peace of mind are our top priorities.
                                </li>
                            </ul>
                        </div>
                        <div className="hidden md:flex items-center justify-center">
                            <Users className="w-44 h-44 text-emerald-400 opacity-50" />
                        </div>
                    </div>
                </div>

                {/* Contact Us Section */}
                <div className="bg-white  shadow-md p-6 sm:p-8">
                    <div className="text-center">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
                            Contact Us
                        </h3>
                        <p className="text-gray-600 text-lg sm:text-xl">
                            We are here to help with all your electrical needs. Contact us today!
                        </p>
                        <div className="mt-6 space-y-4">
                            <p className="text-gray-700 flex items-center justify-center">
                                <Phone className="w-5 h-5 mr-2 text-blue-500" />
                                Phone: +91 7793932038
                            </p>
                            <p className="text-gray-700 flex items-center justify-center">
                                <MapPin className="w-5 h-5 mr-2 text-green-500" />
                                Location: Guntur, Andhra Pradesh, India
                            </p>
                            {/* <button
                            
                                className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 hover:text-blue-300
                                            px-6 py-3 rounded-full transition-colors duration-300
                                            border-2 border-blue-500/50"
                            >
                                Get a Quote
                            </button> */}
                        </div>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    );
};

export default Aboutus;
