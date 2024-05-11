import React, { useEffect, useState } from 'react';
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { Login, Logout } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { loginRequest_user } from '../authConfig';

const Header = () => {
    const { instance, accounts } = useMsal();

    const [username, setUsername] = useState(null);
    const isAuthenticated = useIsAuthenticated();

    useEffect(() => {
        if (accounts.length > 0) {
            const account = accounts[0];
            console.log(account);
            console.log(`\nID-Token: ${account.idTokenClaims}`);
            if (account) {
                setUsername(account.username);
            }
        }
    }, [accounts]);

    const handleLogin = (instance) => {
        instance.loginRedirect(loginRequest_user)
            .catch(e => console.log(e));
    }

    const handleLogout = (instance) => {
        const currentAccount = instance.getAccountByHomeId(accounts[0].homeAccountId);
        instance.logoutRedirect({ account: currentAccount })
            .catch(e => console.log(e));
    }
    return (
        <AppBar position='sticky' sx={styles.appBar}>
            <Container maxWidth='xl'>
                <Toolbar>
                    <Box component='img' sx={styles.appLogo} src='/logo192.png'></Box>
                    <Typography variant='h5' sx={styles.appName} component={Link} to={'/'}>Sample React App</Typography>
                    <Box sx={{ flexGrow: 1 }} />

                    {isAuthenticated ?
                        <>
                            <Box sx={styles.usernameContainer}>
                                <Typography variant='h6' sx={styles.userName}>{username}</Typography>
                            </Box>
                            <IconButton title='Logout' sx={{ color: '#fff' }} onClick={() => handleLogout(instance)}><Logout /></IconButton>
                        </>
                        :
                        <>
                            <IconButton title='Login' sx={{ color: '#fff' }} onClick={() => handleLogin(instance)}><Login /></IconButton>
                        </>}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;

/** @type {import("@mui/material").SxProps} */
const styles = {
    appBar: {
        bgcolor: 'primary.main',
    },
    appLogo: {
        width: { xs: 30, md: 60 },
        borderRadius: 2,
        m: 2,
        cursor: 'pointer'
    },
    appName: {
        display: { xs: 'none', md: 'inline' },
        color: '#fff',
        textDecoration: 'none',
        cursor: 'pointer'
    },
    usernameContainer: {
        display: { xs: 'none', md: 'inline' },
        backgroundColor: 'primary.normal',
        borderRadius: 2.5,
        p: 1,
        mr: 2,
    },
    userName: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    }
}