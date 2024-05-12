import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Avatar, Box, Tabs, Tab, Divider, IconButton } from '@mui/material';
import { useMsal } from '@azure/msal-react';
import { loginRequest_user } from '../authConfig';
import { InteractionRequiredAuthError } from '@azure/msal-browser';
import { GetUserProfile, GetUserProfilePic } from '../Services/Graph';
import UserProfileOrganization from './UserProfileOrganization';
import UserProfileContact from './UserProfileContact';
import { KeyboardBackspaceOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';



const UserProfileCard = () => {
    const { instance, accounts } = useMsal();
    const [accessToken, setAccessToken] = useState();
    const [profileData, setProfileData] = useState();
    const [profileImg, setProfileImg] = useState();
    const [loading, setLoading] = useState(true);
    const [tabIndex, setTabIndex] = useState(0);

    const delay = 2000;

    useEffect(() => {
        if (accounts.length > 0) {
            const account = accounts[0];
            if (account) {
                instance.acquireTokenSilent({
                    ...loginRequest_user,
                    account: account
                }).then(response => {
                    setAccessToken(response.accessToken);
                }).catch(error => {
                    if (error instanceof InteractionRequiredAuthError) {
                        instance.acquireTokenRedirect({
                            ...loginRequest_user,
                            account: account
                        }).then(response => {
                            setAccessToken(response.accessToken);
                        }).catch(error => {
                            console.log(error);
                        });
                    }
                    console.log(error);
                });
            }
        }
    }, [accounts, instance]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await GetUserProfile(accessToken);
                const image = await GetUserProfilePic(accessToken);
                setProfileData(data);
                setProfileImg(image);
            } catch (error) {
                console.log('Error fetching data:', error);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, delay);
            }
        }

        fetchData();
    }, [accessToken]);

    const handleTabChange = (event, newIndexValue) => {
        setTabIndex(newIndexValue);
    };

    const handleBackToHome = () => {
        console.log(`Back button pressed`);
    }

    return (
        <Card>
            <CardContent sx={styles.profileCardContainer}>
                <Box sx={styles.profileCardHeader}>
                    {/* Profile Avatar */}
                    {profileImg ? (
                        <Avatar alt="User Avatar" src={profileImg} sx={{ width: 90, height: 90 }} />
                    ) : (
                        <Avatar alt="User Avatar" />
                    )}

                    {/* User Information */}
                    <Box>
                        <Typography variant="h5">{profileData?.givenName + " " + profileData?.surname}</Typography>
                        <Typography variant="body2" sx={{ color: 'neutral.normal' }}>{profileData?.mail}</Typography>
                    </Box>
                </Box>
                <Box sx={styles.profileCardBody}>
                    <Box sx={styles.selectTabsContainer}>
                        <Tabs value={tabIndex} onChange={handleTabChange} TabIndicatorProps={{ sx: { background: 'primary.normal', height: 3, bottom: 2 } }} textColor='none'>
                            <Tab label='Overview' sx={styles.tab} />
                            <Tab label='Contact' sx={styles.tab} />
                            <Tab label='Organization' sx={styles.tab} />
                            {/* <Tab label='Email' sx={styles.tab} /> */}
                        </Tabs>
                    </Box>
                    <Box role="tabpanel" sx={{ px: 1, py: 2 }}>
                        {tabIndex === 0 && (
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <UserProfileContact profileData={profileData} />
                                <Divider variant='middle' sx={{ my: 2 }} />
                                <UserProfileOrganization profileData={profileData} />
                                <Divider variant='middle' sx={{ my: 2 }} />
                            </Box>
                        )}
                        {tabIndex === 1 && (
                            <UserProfileContact profileData={profileData} />
                        )}
                        {tabIndex === 2 && (
                            <UserProfileOrganization profileData={profileData} />
                        )}
                        {/* {tabIndex === 3 && (
                            <Typography>Email</Typography>
                        )} */}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default UserProfileCard;

/** @type {import("@mui/material").SxProps} */
const styles = {
    profileCardContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    profileCardHeader: {
        width: '500px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
    },
    profileCardBody: {
        mt: 2
    },
    tab: {
        fontSize: '16px',
        color: 'neutral.normal',
        textTransform: 'none',
        '&:hover': {
            color: 'neutral.main',
            fontWeight: 'bolder'
        },
    }
}