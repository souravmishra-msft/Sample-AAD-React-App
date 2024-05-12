import React, { useEffect, useState } from 'react';
import './App.css';
import { Box, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import theme from './Theme/theme';
import { useActive } from './Hooks/useActiveHook';
import AppRoutes from './router/AppRoutes';
import { useIsAuthenticated } from '@azure/msal-react';
import IsActivePopupModal from './Components/IsActivePopupModal';

function App() {
  const isAuthenticated = useIsAuthenticated();
  const [modalOpen, setModalOpen] = useState(false);
  const [isContinued, setIsContinued] = useState(false);
  const isActive = useActive(1800000);

  useEffect(() => {
    console.log(`IsActive: ${isActive}`);

    if (!isAuthenticated) {
      // Reset state when user logs out
      setIsContinued(false);
      setModalOpen(false);
    } else {
      // Open modal only if not continued, not active, and not already open
      if (!isContinued && !isActive && !modalOpen && !localStorage.getItem('isUserLoggedIn')) {
        // Delay opening modal by 5 seconds
        const timeoutId = setTimeout(() => {
          setModalOpen(true);
        }, 5000);
        return () => clearTimeout(timeoutId); // Clear timeout on cleanup
      }
    }

    if (!isActive && isContinued) {
      setIsContinued(false); // Reset isContinued if inactivity timer expires
    }

  }, [isActive, isContinued, isAuthenticated]);

  const handleContinueSession = () => {
    setIsContinued(true); // Set isContinued to true when the user clicks "Stay signed in"
    setModalOpen(false); // Close the modal.
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <BrowserRouter>
            <Header />
            {isAuthenticated ?
              <Box sx={styles.container}>
                <AppRoutes />
              </Box>
              :
              <Box sx={styles.container}>
                <Typography variant='h2' my={2}>Please Login!</Typography>
              </Box>
            }
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
      {/* Render IsActivePopupModal conditionally based on modalOpen state */}
      <IsActivePopupModal open={modalOpen} onContinue={handleContinueSession} />
    </React.Fragment>
  );
}

export default App;

/** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
    display: 'flex',
    bgcolor: 'neutral.light',
    height: 'calc(100% - 64px)',
    justifyContent: 'center',
  },
}