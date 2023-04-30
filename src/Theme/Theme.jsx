import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#7b1fa2',
            light: '#f3e5f5',
            green: '#1b5e20',
            yellow: '#ffea00',
            red: '#d50000',
            blue: '1565c0',
        },

    },

    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: 'lg'
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    // fontSize: '1rem',
                    // padding: '0.6rem 2.5rem'
                    
                }
            },
            defaultProps: {
                variant: 'contained',
                color: 'primary',
                borderRadius: 40
            }
        }
    }
})