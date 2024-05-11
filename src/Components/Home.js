import { Box, Typography } from '@mui/material';
import React from 'react';

const Home = () => {
    return (
        <Box sx={styles.homeContainer}>
            <Typography variant='h3' my={2}>This is the home page.</Typography>
        </Box>
    )
}

export default Home;

/** @type {import("@mui/material").SxProps} */
const styles = {
    homeContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}