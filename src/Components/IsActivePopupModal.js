import { useMsal } from '@azure/msal-react';
import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const IsActivePopupModal = ({ open, onContinue }) => {
    const [timeRemaining, setTimeRemaining] = useState(15); // Initialize time remaining.
    let intervalId;

    const { instance, accounts } = useMsal();


    useEffect(() => {
        if (open) {
            intervalId = setInterval(() => {
                setTimeRemaining(prevTime => {
                    if (prevTime === 0) {
                        clearInterval(intervalId); // Clear interval when timer reaches 0 second.
                        onTimeout(instance); // Call onTimeout() when timer reaches 0 second.
                        return 0;
                    } else {
                        return prevTime - 1; // Decrease time remaining by 1 second.
                    }
                }); // Decrease time remaining by 1 second.
            }, 1000);
        } else {
            clearInterval(intervalId); // Clear interval when modal is closed.
            setTimeRemaining(15); // Reset time remaining when modal is closed.
        }

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [open]);

    // Handle "Stay signed in button click"
    const handleContinue = () => {
        clearInterval(intervalId); // Clear interval when "Stay signed in" buttn is clicked.
        onContinue(); // Call the onContinue function provided by the parent component.
    }

    const onTimeout = (instance) => {
        // When timer reaches 0 seconds, then perform logout.
        handleLogout(instance);
    }


    const handleLogout = (instance) => {
        const currentAccount = instance.getAccountByHomeId(accounts[0].homeAccountId);
        instance.logoutRedirect({ account: currentAccount })
            .catch(e => console.log(e));
    }

    return (
        <div>
            <Modal open={open} sx={styles.isActiveModal}>
                <Box sx={styles.modalContainer}>
                    <Box sx={styles.modalHeader}>
                        <Typography variant='h5'>Your session is about to expire!</Typography>
                    </Box>
                    <Box sx={styles.modalBody}>
                        <Typography variant='body1' mt={2}>Your organization's policy enforces automatic sign out after a perform of inactivity on this application.</Typography>
                        <Typography variant='body1' my={1}>Time remaining: {timeRemaining} seconds</Typography>
                        <Typography variant='body2' my={2}>Do you want to stay signed in?</Typography>

                        <Box sx={styles.modalBodyBtnGroup}>
                            <Button variant='contained' sx={styles.logoutBtn} onClick={() => handleLogout(instance)}>Sign out now</Button>
                            <Button variant='contained' sx={styles.continueBtn} onClick={handleContinue}>Stay signed in</Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default IsActivePopupModal;

/** @type {import("@mui/material").SxProps} */
const styles = {
    modalContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
    },
    modalBodyBtnGroup: {
        my: 2,
        display: 'flex',
        gap: 1,
    },
    logoutBtn: {
        bgcolor: '#bdbdbd',
        color: '#212121',
        textTransform: 'none',
        '&:hover': {
            color: '#fff',
            bgcolor: '#6a1b9a' // Change background color on hover
        }
    },
    continueBtn: {
        bgcolor: '#4a148c',
        textTransform: 'none',
        '&:hover': {
            bgcolor: '#6a1b9a' // Change background color on hover
        }
    }
}