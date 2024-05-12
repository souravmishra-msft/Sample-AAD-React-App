import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { BadgeOutlined, CallOutlined, ChatOutlined, GroupsOutlined, LocationCityOutlined, LocationOnOutlined, MailOutline, PersonOutlined } from '@mui/icons-material';

const UserProfileContact = ({ profileData }) => {
    return (
        <Box sx={styles.overviewTab}>
            <Typography variant='h6'>Contact Information</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 0.5, sm: 5 }}>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: 'flex', my: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'neutral.normal' }}>
                                <MailOutline />
                            </Box>
                            <Box mx={2}>
                                <Typography sx={{ fontSize: '0.8rem' }}>Email</Typography>
                                <Typography sx={{ color: 'primary.normal', fontSize: '0.7rem' }}>{profileData?.mail}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: 'flex', my: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'neutral.normal' }}>
                                <ChatOutlined />
                            </Box>
                            <Box mx={2}>
                                <Typography sx={{ fontSize: '0.8rem' }}>Chat</Typography>
                                <Typography sx={{ color: 'primary.normal', fontSize: '0.7rem' }}>{profileData?.imAddresses}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: 'flex', my: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'neutral.normal' }}>
                                <CallOutlined />
                            </Box>
                            <Box mx={2}>
                                <Typography sx={{ fontSize: '0.8rem' }}>Work Phone</Typography>
                                <Typography sx={{ color: 'primary.normal', fontSize: '0.7rem' }}>{profileData?.businessPhones}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: 'flex', my: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'neutral.normal' }}>
                                <BadgeOutlined />
                            </Box>
                            <Box mx={2}>
                                <Typography sx={{ fontSize: '0.8rem' }}>Username [UserPrincipalName]</Typography>
                                <Typography sx={{ color: 'primary.normal', fontSize: '0.7rem' }}>{profileData?.userPrincipalName}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: 'flex', my: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'neutral.normal' }}>
                                <PersonOutlined />
                            </Box>
                            <Box mx={2}>
                                <Typography sx={{ fontSize: '0.8rem' }}>Job Title</Typography>
                                <Typography sx={{ color: 'primary.normal', fontSize: '0.7rem' }}>{profileData?.jobTitle}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: 'flex', my: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'neutral.normal' }}>
                                <GroupsOutlined />
                            </Box>
                            <Box mx={2}>
                                <Typography sx={{ fontSize: '0.8rem' }}>Department</Typography>
                                <Typography sx={{ color: 'primary.normal', fontSize: '0.7rem' }}>{profileData?.department}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: 'flex', my: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'neutral.normal' }}>
                                <LocationOnOutlined />
                            </Box>
                            <Box mx={2}>
                                <Typography sx={{ fontSize: '0.8rem' }}>Office Location</Typography>
                                <Typography sx={{ color: 'primary.normal', fontSize: '0.7rem' }}>{profileData?.officeLocation}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: 'flex', my: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'neutral.normal' }}>
                                <LocationCityOutlined />
                            </Box>
                            <Box mx={2}>
                                <Typography sx={{ fontSize: '0.8rem' }}>City</Typography>
                                <Typography sx={{ color: 'primary.normal', fontSize: '0.7rem' }}>{profileData?.city}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box sx={{ display: 'flex', my: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'neutral.normal' }}>

                            </Box>
                            <Box mx={2}>
                                <Typography sx={{ fontSize: '0.8rem' }}>Country</Typography>
                                <Typography sx={{ color: 'primary.normal', fontSize: '0.7rem' }}>{profileData?.usageLocation}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default UserProfileContact

/** @type {import("@mui/material").SxProps} */
const styles = {

}