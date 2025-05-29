import React, { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import RaiseService from "./RaiseService";
import { motion } from 'framer-motion';
import { LanguageContext } from '../index';

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


function OurExpertise() {
    const { t } = useContext(LanguageContext);

    return (
        <FullHeightContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <ContentWrapper>
                <Typography id="our-expertise" variant="h4" component="h1" gutterBottom sx={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
                    {t('OurExpertise', 'expertise_heading')}
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
                    {t('OurExpertise', 'expertise_paragraph_1')} 
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
                    {t('OurExpertise', 'expertise_paragraph_2')} 
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    {t('OurExpertise', 'expertise_paragraph_3')} 
                </Typography>
            </ContentWrapper>
            <Box mt={6}>
                <RaiseService />
            </Box>
        </FullHeightContainer>
    );
}

export default OurExpertise;