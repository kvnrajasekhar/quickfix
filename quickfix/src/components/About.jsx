import React from "react";
import { Box, Typography, styled } from "@mui/material";
import RaiseService from "./RaiseService";
import { motion } from 'framer-motion';

const ContentWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    fontFamily: "'Roboto', sans-serif",
    color: theme.palette.text.primary,
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    maxWidth: 800,
    margin: "0 auto",
}));

const FullHeightContainer = styled(motion.div)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'10\' height=\'10\' viewBox=\'0 0 10 10\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'5\' cy=\'5\' r=\'1\' fill=\'' +
        encodeURIComponent(theme.palette.primary.light) +
        '\'/%3E%3C/svg%3E")',
    backgroundRepeat: 'repeat',
    backgroundSize: '20px 20px',
    backgroundColor: theme.palette.background.default,
}));


function About() {

    return (
        <FullHeightContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <ContentWrapper>
                <Typography id="about" variant="h4" component="h1" gutterBottom sx={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
                    About Us
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
                    With the benefit of guidance from a highly experienced electrician
                    boasting over four decades in the field, Quickfix offers dependable
                    electrical services. Our team of skilled, modern technicians is ready
                    to assist you 24/7 throughout the city and, where possible, in
                    surrounding areas.
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
                    For us at Quickfix, performing quality work is paramount, a principle we
                    hold with sincerity. We approach every task with integrity and a genuine
                    commitment to your needs.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    Ensuring your peace of mind through reliable and honest service is our
                    humble aim.
                </Typography>
            </ContentWrapper>
            <Box mt={6}>
                <RaiseService />
            </Box>
        </FullHeightContainer>
    );
}

export default About;
