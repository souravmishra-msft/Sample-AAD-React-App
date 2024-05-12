import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import UserProfileCard from './UserProfileCard';

const Home = () => {
    const [showUserProfileCard, setShowUserProfileCard] = useState(false);
    const [showGetUserProfileBtn, setShowGetUserProfileBtn] = useState(true);
    const [showCloseUserProfileBtn, setShowCloseUserProfileBtn] = useState(false);

    const handleGetUserProfile = () => {
        setShowUserProfileCard(true);
        setShowGetUserProfileBtn(false);
        setShowCloseUserProfileBtn(true);
    };

    const handleCloseUserProfile = () => {
        setShowUserProfileCard(false);
        setShowGetUserProfileBtn(true);
        setShowCloseUserProfileBtn(false);
    }

    return (
        <Box sx={styles.homeContainer}>
            <Box sx={styles.homeHeader}>
                <Typography variant='h4' my={2} sx={{ textAlign: 'center' }}>Sample ReactJS Application.</Typography>
                <Typography variant='body2' sx={{ textAlign: 'center', color: 'neutral.normal' }}>This is a sample application developed using ReactJS and MSAL-React.</Typography>
                <Typography variant='body2' mt={2} sx={{ textAlign: 'center', color: 'neutral.normal' }}>This application demonstrates scenarios like:</Typography>
                <ul style={{ color: 'neutral.normal', fontSize: '0.8rem' }}>
                    <li>User login using MSAL-React</li>
                    <li>Idle Timeout</li>
                </ul>
            </Box>
            <Box sx={styles.userProfileCardContainer}>
                {showUserProfileCard && <UserProfileCard />}
                <Box>
                    {showGetUserProfileBtn && <Button variant='contained' sx={{ textTransform: 'none', my: 2, mx: 1 }} onClick={handleGetUserProfile}>Get User Profile</Button>}
                    {showCloseUserProfileBtn && <Button variant='contained' sx={{ textTransform: 'none', my: 2, mx: 1, bgcolor: 'neutral.medium', color: 'neutral.main', '&:hover': { color: '#fff' } }} onClick={handleCloseUserProfile}>Close User Profile</Button>}
                </Box>
            </Box>
        </Box>
    )
}

export default Home;

/** @type {import("@mui/material").SxProps} */
const styles = {
    homeContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    homeHeader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    userProfileCardContainer: {
        m: 5,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    }
}