import React from "react";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const PatternedButton = styled(Button)(({ theme }) => ({
    display: 'block',
    width: '100%',
    textAlign: 'center',
    padding: theme.spacing(2, 4),
    borderRadius: '50px', 
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: theme.typography.fontWeightMedium,
    boxShadow: theme.shadows[2],
    transition: theme.transitions.create('background-color'),
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
    backgroundRepeat: 'repeat',
    backgroundSize: '20px 20px',
    fontFamily: "'Montserrat', sans-serif", 
}));

const RaiseServiceRequestButton = () => {
    return (
        <Link to="/raise" style={{ textDecoration: 'none', width: '100%', display: 'block' }}>
            <PatternedButton fullWidth>
                Raise a Service Request
            </PatternedButton>
        </Link>
    );
};

export default RaiseServiceRequestButton;
