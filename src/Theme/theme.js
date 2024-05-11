import { createTheme } from '@mui/material';
import { grey, purple } from '@mui/material/colors';

let theme = createTheme({
    palette: {
        primary: {
            main: purple[900],
            normal: purple[800],
        },
        secondary: {
            main: purple[500]
        },
        neutral: {
            light: grey[50],
            lightMedium: grey[100],
            medium: grey[300],
            normal: grey[700],
            main: grey[900],
        }
    }
});

theme = createTheme(theme, {
    typography: {
        links: {
            fontSize: '0.8rem',
            [theme.breakpoints.up('md')]: {
                fontSize: '0.9rem'
            },
            fontWeight: 500,
            color: theme.palette.primary.normal,
            display: 'block',
            cursor: 'pointer'
        },
        cardTitle: {
            fontSize: '1.2rem',
            display: 'block',
            fontWeight: 500
        },
        h6: {
            fontSize: '1rem'
        },
        h7: {
            fontSize: '0.8rem'
        },
        h8: {
            fontSize: '0.7rem'
        }
    }
});

export default theme;