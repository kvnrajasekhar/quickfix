import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
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

    const [formData, setFormData] = useState({
        subject: '',
        email: '',
        message: '',
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=info.quickfix@gmail.com&su=${formData.subject}&body=${formData.message}`;
        window.open(mailtoLink, '_blank');
        setFormData({ subject: '', email: '', message: '' });
    };


    return (
        <motion.div
            className="bg-white min-h-screen flex flex-col items-center justify-start py-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.section
                className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
                variants={itemVariants}
            >
                {/* Contact Us Heading */}
                <div className="text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">
                        Contact Us
                    </h2>
                    <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
                        We are here to assist you with your electrical needs.  Please
                        reach out to us using the information below or by filling out the
                        contact form.
                    </p>
                </div>

                {/* Contact Information Card */}
                <div className="bg-white shadow-md p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Details */}
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
                                Get in Touch
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <MapPin className="w-6 h-6 text-red-500 mr-4" />
                                    <p className="text-gray-700 text-lg">
                                        Location: Guntur, Andhra Pradesh, India
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="w-6 h-6 text-blue-500 mr-4" />
                                    <p className="text-gray-700 text-lg">
                                        Phone: +91 7793932038
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-6 h-6 text-yellow-500 mr-4" />
                                    <p className="text-gray-700 text-lg">
                                        Email: info.quickfix@gmail.com
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-6 h-6 text-green-500 mr-4" />
                                    <p className="text-gray-700 text-lg">
                                        Hours: 24/7
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form  */}
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
                                Send us a Message
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Please fill out the form below and you will be redirected to your email client.
                            </p>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full bg-[#020197] hover:bg-green-400 text-white py-3 rounded-full hover:bg-blue-700 transition-colors"

                                >
                                    Send Message
                                </button>
                            </form>

                        </div>
                    </div>
                </div>

                {/* Additional Contact Information */}
                <div className="text-center">
                    <p className="text-gray-600 text-lg sm:text-xl">
                        We look forward to hearing from you!
                    </p>
                </div>
            </motion.section>
        </motion.div>
    );
};

export default Contact;
