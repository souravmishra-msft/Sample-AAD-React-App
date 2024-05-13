import { Box, Typography } from '@mui/material'
import React from 'react'

const UserProfileOrganization = ({ profileData }) => {
    return (
        <Box sx={styles.organizationTab}>
            <Typography variant='h6'>Organization</Typography>
        </Box>
    )
}

export default UserProfileOrganization

/** @type {import("@mui/material").SxProps} */
const styles = {
    organizationTab: {
        width: '80%',
        p: 2,
    }
}